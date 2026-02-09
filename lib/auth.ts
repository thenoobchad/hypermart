import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/database/index"

import { nextCookies } from "better-auth/next-js";

import * as schema from "@/database/db/schema"
import { headers } from "next/headers";

export const auth = betterAuth({
    experimental: { joins: true },
    database: drizzleAdapter(db, {
        provider: "pg",
        schema: schema,
        usePlural: true,
    }),
   
    session: {
        expiresIn: 60 * 60 * 24 * 7, 
        freshAge: 0, 
    },
    
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
                defaultValue: "USER",
                input: false,
            }
        }
    },
    emailAndPassword: {
       enabled: true
       
    },
    plugins: [
        nextCookies() 
    ]
});


export const getSession = async () => auth.api.getSession({
    headers: await headers()
}) 