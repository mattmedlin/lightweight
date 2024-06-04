import { asc, between, count, eq, getTableColumns, sql } from "drizzle-orm";
import { db } from "./db";
import { InsertUser, SelectUser, users } from "./schema";

export async function createUser(data: InsertUser) {
  await db.insert(users).values(data);
}

export async function getUserById(id: SelectUser["id"]): Promise<
  Array<{
    id: number;
    name: string;
    age: number;
    email: string;
  }>
> {
  return db.select().from(users).where(eq(users.id, id));
}
