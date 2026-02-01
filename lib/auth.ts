import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/database/index"
import bcrypt from "bcrypt";
import { nextCookies } from "better-auth/next-js";

export const auth = betterAuth({
    experimental: { joins: true },
    database: drizzleAdapter(db, {
        provider: "pg",
        usePlural: true,
    }),
    user: {
        fields: {
            name: undefined,
        },
        additionalFields: {
            username: {
                type: "string",
                required: false,
            },
            role: {
                type: "string",
                defaultValue: "user"
            }
        }
    },
    emailAndPassword: {
        enabled: true,
        requireEmailVerification: true,
    },
    plugins: [
        nextCookies() 
    ]
});