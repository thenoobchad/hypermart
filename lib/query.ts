"use server"

import { db } from "@/database";
import { products } from "@/database/db/schema";
import { desc } from "drizzle-orm";


export async function fetchAllProducts() { 
    const allProducts = await db.select().from(products).orderBy(desc(products.createdAt));
    return allProducts ? allProducts : [];
}