import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./db/schema";  
import * as dotenv from "dotenv";

dotenv.config({ path: '.env' });

if (!process.env.DATABASE_URL) {
	throw new Error("DATABASE_URL is not defined");
}

const globalForDb = global as unknown as {
	conn: postgres.Sql | undefined;
};

const connectionString = process.env.DATABASE_URL! ;


// const client = postgres(connectionString as string, { prepare: false });


// export const db = drizzle( client, { schema });

const conn = globalForDb.conn ?? postgres(connectionString, {
	max: process.env.NODE_ENV === 'development' ? 1 : undefined
});

if (process.env.NODE_ENV !== 'production') globalForDb.conn = conn;

export const db = drizzle(conn, {schema});