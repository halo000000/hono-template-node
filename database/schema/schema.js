import { integer, pgTable, varchar, timestamp, boolean } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  password: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  createdAt: timestamp({ precision: 6, withTimezone: true,mode:"string" }).defaultNow().notNull(),
  updatedAt: timestamp({ mode: 'date', precision: 3 }).$onUpdate(() => new Date()).defaultNow(),
  isActive: boolean().default(true).notNull(),
  role: varchar({ length: 50 }).default("user").notNull(), // Example: 'user', 'admin', etc.
  // You might also consider fields like:
  // profilePicture: varchar({ length: 255 }),
  // lastLogin: timestamp(),
  // phoneNumber: varchar({ length: 20 }),
});
