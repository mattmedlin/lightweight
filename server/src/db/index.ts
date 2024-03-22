import postgres from "postgres";
import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";
import * as schema from "./schema";

// Load environment variables
const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

// Initialize database connection
export const db = drizzle(client, { schema: schema });
