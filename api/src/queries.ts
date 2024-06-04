import { asc, between, count, eq, getTableColumns, sql } from "drizzle-orm";
import { db } from "./db";
import { InsertUser, SelectUser, users } from "./schema";

export async function createUser(data: InsertUser) {
  await db.insert(users).values(data);
}

export async function updateUser(
  id: SelectUser["id"],
  data: Partial<Omit<SelectUser, "id">>
) {
  await db.update(users).set(data).where(eq(users.id, id));
}

export async function deleteUser(id: SelectUser["id"]) {
  await db.delete(users).where(eq(users.id, id));
}

export async function getUsers(): Promise<
  Array<{
    id: number;
    name: string;
    age: number;
    email: string;
  }>
> {
  return db.select().from(users);
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
