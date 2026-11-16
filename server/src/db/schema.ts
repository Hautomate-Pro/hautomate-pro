import { boolean, pgTable, serial, text, timestamp, varchar } from 'drizzle-orm/pg-core';

export const enquiries = pgTable('enquiries', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 120 }).notNull(),
  email: varchar('email', { length: 254 }).notNull(),
  company: varchar('company', { length: 160 }).notNull().default(''),
  phone: varchar('phone', { length: 40 }).notNull().default(''),
  location: varchar('location', { length: 160 }).notNull().default(''),
  message: text('message').notNull(),
  emailed: boolean('emailed').notNull().default(false),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
});

export type NewEnquiry = typeof enquiries.$inferInsert;
