ALTER TABLE "orders" ALTER COLUMN "status" SET DATA TYPE varchar;--> statement-breakpoint
ALTER TABLE "orders" ALTER COLUMN "status" SET DEFAULT 'PENDING';--> statement-breakpoint
ALTER TABLE "orders" ALTER COLUMN "status" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "orders" ADD COLUMN "shipping_address" jsonb NOT NULL;--> statement-breakpoint
ALTER TABLE "orders" ADD COLUMN "paystack_reference" text;--> statement-breakpoint
ALTER TABLE "orders" ADD CONSTRAINT "orders_paystack_reference_unique" UNIQUE("paystack_reference");