"use server";

import { db } from "@/database";
import { banners, NewProduct, Product, products } from "@/database/db/schema";
import { eq, InferInsertModel } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { Infer } from "next/dist/compiled/superstruct";
import { deleteImage } from "./cloudinary";


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
		return { success: true };
	} catch (error) {
		console.error("Error creating product:", error);
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
	const imageUrl = formData.get("imageUrl") as string

	try {
		await db.insert(banners).values({
			title,
			link,
			imageUrl,
			displayOrder: 0,
			isActive: true
		})

		revalidatePath("/admin/banners")
		revalidatePath("/")

		return {success: true}
	} catch (error) {
		console.error(error)
		return {success: false, error: "Failed to save banner"}
	}
}

export async function toggleVisibility(id: string, status: boolean) {
	await db.update(banners).set({
		isActive: status
	}).where(eq(banners.id, id))

	revalidatePath("/")
	revalidatePath("/admin/banners")
}

export async function updateOrder(id: string, newOrder: number) {
	await db.update(banners).set({ displayOrder: newOrder }).where(eq(banners.id, id))
	
	revalidatePath("/")
}