"use server";

import { db } from "@/database";
import { banners, cartItems, carts, products, users } from "@/database/db/schema";
import { and, eq, sql } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { Infer } from "next/dist/compiled/superstruct";
import { deleteImage } from "./cloudinary";
import { auth } from "./auth";
import { headers } from "next/headers";
import { isRedirectError } from "next/dist/client/components/redirect-error";
import { APIError } from "better-auth/api";



type ProductType = {
	title: string;
	description: string;
	price: string;
	stock: number;
	category: string;
	slug: string;
	imageUrl: string;
};


export async function signupAction(formData: FormData) {
	const email = String(formData.get("email"))
	const password = String(formData.get("password"))
	

	if (!email) return { success: false, message: "Enter a valid email." }
	if (!password) return { success: false, message: "Enter a valid password." }

	try {
		await auth.api.signUpEmail({
			body: {
				name:"",
				email,
				password
			},
			headers: await headers()
		})
		return {success: true}
	} catch (err) {
		if (isRedirectError(err)) throw err;

		if (err instanceof APIError) {
			return {
				success	: false,
				message: err.message || "Authentication failed."
			}
		}
		console.error(err)
		return { success: false, message: "An unexpected error occured."}
	}
}

export async function signinAction(formData: FormData) {
	const email = String(formData.get("email"))
	const password = String(formData.get("password"))


	if (!email) return { error: "Enter a valid email." }
	if (!password) return { error: "Enter missing credentials." }



	try {
		const res = await auth.api.signInEmail({
			body: {
				
				email,
				password
			},
			headers: await headers() 
		})
		
		revalidatePath("/")
		return {
			success: true,
			role: res.user?.role || "USER"
		 } 
		
		 
	} catch (err) {
		if (isRedirectError(err)) throw err;

		if (err instanceof APIError) {
			return {
				success	: false,
				message: err.message || "Authentication failed."
			}
		}
		console.error(err)
		return { success: false, message: "An unexpected error occured." }
	}
}


//Product Actions
export async function createProduct(formData: FormData) {
	const title = formData.get("title");
	const description = formData.get("description");
	const category = formData.get("category");
	const slug = formData.get("slug");
	const price = formData.get("price");
	const stock = formData.get("stock");
	const imageUrl = formData.get("image_url");
	const imagePublicId = formData.get("image_id");

	if (
		!title ||
		!description ||
		!category ||
		!slug ||
		!price ||
		!stock ||
		!imageUrl ||
		!imagePublicId
	) {
		throw new Error("Missing required fields");
	}

	try {
		await db.insert(products).values({
			title,
			description,
			category,
			slug,
			price,
			stock,
			imageUrl,
			imagePublicId,
		} as Infer<typeof products>);

		revalidatePath("/admin/products", "page");
		revalidatePath("/");
		return { success: true };
	} catch (error) {
		console.error("Error creating product:", error);
		return { success: false };
	}
}

export async function updateProduct(formData: ProductType, id: string) {
	try {
		await db.update(products).set(formData).where(eq(products.id, id));
		revalidatePath("/admin/products", "page");
		return { success: true };
	} catch (error) {
		console.error("Error updating product:", error);
		return { success: false };
	}
}

export async function deleteProduct(formData: FormData) {
	// get value and narrow its type
	const idValue = formData.get("id");
	if (!idValue || typeof idValue !== "string") {
		throw new Error("Missing or invalid id");
	}
	const id = idValue; // now typed as string

	try {
		const product = await db.select().from(products).where(eq(products.id, id));
		if (!product) {
			throw new Error("Product not found");
		}
		await db.delete(products).where(eq(products.id, id));
		deleteImage(product[0].imagePublicId);

		revalidatePath("/admin/products", "page");
		return { success: true };
	} catch (error) {
		console.error("Error deleting product:", error);
		return { success: false };
	}
}

// Banner Actions
export async function uploadBanner(formData: FormData) {
	const title = formData.get("title") as string;
	const link = formData.get("link") as string;
	const imageUrl = formData.get("imageUrl") as string;
	const imagePublicId = formData.get("imagePublicId") as string;
	try {
		await db.insert(banners).values({
			title,
			link,
			imageUrl,
			imagePublicId,
			displayOrder: 0,
			isActive: true,
		});

		revalidatePath("/admin/banners");
		revalidatePath("/");

		return { success: true };
	} catch (error) {
		console.error(error);
		return { success: false, error: "Failed to save banner" };
	}
}

export async function toggleVisibility(id: string, status: boolean) {
	await db
		.update(banners)
		.set({
			isActive: status,
		})
		.where(eq(banners.id, id));

	revalidatePath("/");
	revalidatePath("/admin/banners");
}

export async function updateOrder(id: string, newOrder: number) {
	await db
		.update(banners)
		.set({ displayOrder: newOrder })
		.where(eq(banners.id, id));

	revalidatePath("/");
}

export async function deleteBanner(id: string, publicId: string) {
	await db.delete(banners).where(eq(banners.id, id));

	await deleteImage(publicId);

	revalidatePath("/admin/banners");
}

export async function addProductToCart(id: string) { 

	const session = await auth.api.getSession({
		headers: await headers()
	})	


	try {
		const existingCart = await db.select().from(carts).where(eq(carts.userId, session?.user?.id))

		if (existingCart.length > 0) {
			const existingCartItem = await db.select().from(cartItems).where(
				eq(cartItems.productId, id))
			
			if (existingCartItem.length > 0) { 
				await db.update(cartItems).set({
					quantity: existingCartItem[0].quantity + 1
				}).where(eq(cartItems.id, existingCartItem[0].id))

				revalidatePath("/dashboard/cart")
				return {success: true}
			} else {
				await db.insert(cartItems).values({
					cartId: existingCart[0].id,
					productId: id,
					quantity: 1
				})
			}


		} else {

			const userCart = await db.insert(carts).values({
				userId: session?.user?.id
			}).returning({ id: carts.id })

			const insertedProduct = await db.insert(cartItems).values({
				cartId: userCart[0].id,
				productId: id,
				quantity: 1
			})
			
			Promise.all([userCart, insertedProduct]).then(() => {
				revalidatePath("/dashboard/cart")
			})
		}


		

	
	
		return { success: true }
	} catch (error) {
		console.error("Error adding product to cart:", error);
	}
}

export async function removeProductFromCart(id: string) {

	const session = await auth.api.getSession({
		headers: await headers()
	})

	try {
		const existingCart = await db.select().from(carts).where(eq(carts.userId, session?.user?.id))
		
		
		if (existingCart.length > 0) {
			const existingCartItem = await db.select().from(cartItems).where(
				eq(cartItems.productId, id)
			)

			if (existingCartItem[0].quantity > 1) {
				await db.update(cartItems).set({
					quantity: sql`${existingCartItem[0].quantity} - 1`
				})
				revalidatePath("/dashboard/cart")
				
			}

			if (existingCartItem[0].quantity <= 1) {
				await db.delete(cartItems).where(eq(cartItems.id, existingCartItem[0].id))
			}
		}


		revalidatePath("/dashboard/cart")

	} catch (error) {
		console.error("Error adding product to cart:", error);
	}
}

export async function clearCart() {

	const session = await auth.api.getSession({
		headers: await headers()
	})

	try {
		const existingCart = await db.select().from(carts).where(eq(carts.userId, session?.user?.id))

		if(existingCart.length > 0) {
			await db.delete(carts).where(eq(carts.id, existingCart[0].id))
		}

		revalidatePath("/dashboard/cart")

	} catch (error) {
		console.error("Error clearing cart:", error);
	}
}

export async function deleteFromCart(id: string) {

	const session = await auth.api.getSession({
		headers: await headers()
	})

	try {
		const existingCart = await db.select().from(carts).where(eq(carts.userId, session?.user?.id))
		
		
		if (existingCart.length > 0) {
			await db.delete(cartItems).where(
				and(
					eq(cartItems.productId, id),
					eq(cartItems.cartId, existingCart[0].id)
				)
			)

			revalidatePath("/dashboard/cart")
				
		}

	} catch (error) {
		console.error("Error deleting product from cart:", error);
	}
}

export async function getCartItems(userId:string) { 
	
	if (!userId) return []
	
	const existingCart = await db.select().from(carts).where(eq(carts.userId, userId))

	if (existingCart.length > 0) {
		const cartItemsData = await db.select().from(cartItems).where(eq(cartItems.cartId, existingCart[0].id))
		return cartItemsData
	}

	
	return []
}