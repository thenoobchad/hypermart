import { integer, pgTable, varchar, text, decimal, timestamp, uuid, boolean } from "drizzle-orm/pg-core";
import { InferInsertModel, InferSelectModel, sql } from "drizzle-orm";
import { link } from "fs";


export const users = pgTable("users", {
	id: uuid().primaryKey().default(sql`gen_random_uuid()`),
	name: varchar({ length: 255 }).notNull(),
	age: integer().notNull(),
	email: varchar({ length: 255 }).notNull().unique(),
});


export const banners = pgTable("banners", {
	id: uuid()
		.primaryKey()
		.default(sql`gen_random_uuid()`),
	title: varchar("title", { length: 255 }).notNull(),
	link: text("link"),
	imageUrl: text("image_url"),
	imagePublicId: text("image_id"),
	displayOrder: integer("display_order").default(0),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
	isActive: boolean("is_active").default(true)
});

export const products = pgTable("products", {
	id: uuid().primaryKey().default(sql`gen_random_uuid()`),
	title: varchar("title",{ length: 255 }).notNull(),
	description: text("description"),
	category: varchar("category",{ length: 255 }).notNull(),
	slug: varchar("slug",{length:255}).notNull(),
	price: decimal("price", {precision: 10, scale:2}).notNull().default("0.00"),
	stock: integer("stock").notNull().default(0),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
	imageUrl: text("image_url"),
	imagePublicId: text("image_id"),
});


export type Product = InferInsertModel<typeof products>;

export type NewProduct = InferSelectModel<typeof products>;

