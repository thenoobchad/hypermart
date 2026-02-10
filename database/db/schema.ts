import { integer, pgTable, varchar, text, decimal, timestamp, uuid, boolean, index, pgEnum } from "drizzle-orm/pg-core";
import { InferInsertModel, InferSelectModel, relations, sql } from "drizzle-orm";

export const roleEnum = pgEnum("role", ["USER", "ADMIN"]);

export const users = pgTable("users", {
  id: text("id").primaryKey(),
  name: text("name"),
  email: text("email").notNull().unique(),
  emailVerified: boolean("email_verified").default(false).notNull(),
  image: text("image"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
	.defaultNow()
	.$onUpdate(() => new Date())
	.notNull(),
  username: text("username"),
  role: roleEnum("role").default("USER").notNull(),
});

export const sessions = pgTable(
  "sessions",
  {
	id: text("id").primaryKey(),
	expiresAt: timestamp("expires_at").notNull(),
	token: text("token").notNull().unique(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at")
	  .$onUpdate(() => new Date())
	  .notNull(),
	ipAddress: text("ip_address"),
	userAgent: text("user_agent"),
	userId: text("user_id")
	  .notNull()
	  .references(() => users.id, { onDelete: "cascade" }),
  },
  (table) => [index("sessions_userId_idx").on(table.userId)],
);

export const accounts = pgTable(
  "accounts",
  {
	  id: text("id").primaryKey(),
	accountId: text("account_id").notNull(),
	providerId: text("provider_id").notNull(),
	userId: text("user_id")
	  .notNull()
	  .references(() => users.id, { onDelete: "cascade" }),
	accessToken: text("access_token"),
	refreshToken: text("refresh_token"),
	idToken: text("id_token"),
	accessTokenExpiresAt: timestamp("access_token_expires_at"),
	refreshTokenExpiresAt: timestamp("refresh_token_expires_at"),
	scope: text("scope"),
	password: text("password"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at")
	  .$onUpdate(() =>  new Date())
	  .notNull(),
  },
  (table) => [index("accounts_userId_idx").on(table.userId)],
);

export const verifications = pgTable(
  "verifications",
  {
	  id: text("id").primaryKey(),
	identifier: text("identifier").notNull(),
	value: text("value").notNull(),
	expiresAt: timestamp("expires_at").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at")
	  .defaultNow()
	  .$onUpdate(() =>  new Date())
	  .notNull(),
  },
  (table) => [index("verifications_identifier_idx").on(table.identifier)],
);


export const banners = pgTable("banners", {
	id: uuid("id")
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
	id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
	title: varchar("title",{ length: 255 }).notNull(),
	description: text("description"),
	category: varchar("category",{ length: 255 }).notNull(),
	slug: varchar("slug",{length:255}).notNull(),
	price: decimal("price", {precision: 10, scale:2}).notNull().default("0.00"),
	actualPrice: decimal("actual_price", {precision: 10, scale:2}).notNull().default("0.00"),
	stock: integer("stock").notNull().default(0),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
	imageUrl: text("image_url"),
	imagePublicId: text("image_id"),
});


export const carts = pgTable("carts", {
	id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
	userId: text("user_id")
		.notNull()
		.references(() => users.id, { onDelete: "cascade" }),
	createdAt: timestamp("created_at").notNull().defaultNow(),
})

export const cartItems = pgTable("cart_items", {
	id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
	cartId: uuid("cart_id").notNull().references(() => carts.id, {onDelete: "cascade"}),
	productId: uuid("product_id").references(() => products.id).notNull(),
	quantity: integer("quantity").notNull().default(1),
})

export const orders = pgTable("orders", {
	id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
	userId: text("user_id")
		.notNull()
		.references(() => users.id, { onDelete: "cascade" }),
	status: varchar("status", { length: 50 }).notNull().default("pending"),
	totalAmount: decimal("total_amount", { precision: 10, scale: 2 }).notNull().default("0.00"),
	createdAt: timestamp("created_at").notNull().defaultNow(),
})

export const orderItems = pgTable("order_items", {
	id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
	orderId: uuid("order_id").notNull().references(() => orders.id, { onDelete: "cascade" }),
	productId: uuid("product_id").notNull().references(() => products.id),
	quantity: integer("quantity").notNull().default(1),
	price: decimal("price", { precision: 10, scale: 2 }).notNull().default("0.00"),
})


export const ordersRelations = relations(orders, ({ many }) => ({
  items: many(orderItems),
}));

export const usersRelations = relations(users, ({ many }) => ({
  sessions: many(sessions),
  accounts: many(accounts),
}));

export const sessionsRelations = relations(sessions, ({ one }) => ({
  users: one(users, {
	fields: [sessions.userId],
	references: [users.id],
  }),
}));

export const accountsRelations = relations(accounts, ({ one }) => ({
  users: one(users, {
	fields: [accounts.userId],
	references: [users.id],
  }),
}));



export type Product = InferInsertModel<typeof products>;

export type NewProduct = InferSelectModel<typeof products>;

