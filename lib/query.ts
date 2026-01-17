"use server";

import { db } from "@/database";
import { banners, products } from "@/database/db/schema";
import { desc, eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function fetchAllProducts() {
	try {
		const allProducts = await db
			.select()
			.from(products)
			.orderBy(desc(products.createdAt));
		return allProducts ? allProducts : [];
	} catch (error) {
		console.error("Database unreachable:", error);
		return [];
	}
}

export async function fetchActiveBanners() {
	try {
		const activeBanners = await db
			.select()
			.from(banners)
			.where(eq(banners.isActive, true))
			.orderBy(desc(banners.displayOrder));
		
		

		return activeBanners ? activeBanners : [];

		

	} catch (error) {
		console.error("Database unreachable:", error);
		return [];
	}
}


