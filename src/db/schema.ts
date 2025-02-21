import { varchar, integer, pgTable } from "drizzle-orm/pg-core";

export const users = pgTable("t_user", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).unique().notNull(),
  email: varchar({ length: 255 }).unique().notNull(),
  password: varchar({ length: 255 }).notNull(),
});
