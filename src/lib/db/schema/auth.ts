import { sqliteTable, text, integer,  } from "drizzle-orm/sqlite-core";
import { sql } from 'drizzle-orm';

export const users = sqliteTable('user', {
  id: text('id').primaryKey(),
  email: text('email').notNull().unique(),
  emailVerified: integer('email_verified', { mode: 'boolean' }).notNull().default(false),
  name: text('name'),
  image: text('image'),

});

export const sessions = sqliteTable("session", {
	id: text("id").notNull().primaryKey(),
	userId: text("user_id")
		.notNull()
		.references(() => users.id),
	expiresAt: integer("expires_at").notNull()
});

export const emailVerificationCodes = sqliteTable('email_verification_code', {
  id: integer('id').primaryKey(),
  userId: text('user_id')
    .notNull()
    .references(() => users.id),
  code: text('code').notNull(),
  expiresAt:  text('expiresAt')
  .notNull()
  .default(sql`(current_timestamp)`),
});

export const oauthAccounts = sqliteTable('oauth_account', {
  userId: text('user_id')
    .notNull()
    .references(() => users.id),
  providerId: text('provider_id').notNull(),
  providerUserId: text('provider_user_id').notNull(),
});

export const passwordHistory = sqliteTable('password_history', {
  id: integer('id').primaryKey(),
  userId: text('user_id')
    .notNull()
    .references(() => users.id),
  hashedPassword: text('hashed_password').notNull(),
  createdAt: text('createdAt')
  .notNull()
  .default(sql`(current_timestamp)`),
  expiresAt: text('expiresAt')
  .notNull()
  .default(sql`(current_timestamp)`),
});

export const passwordResetCode = sqliteTable('password_reset_code', {
  id: integer('id').primaryKey(),
  userId: text('user_id')
    .notNull()
    .references(() => users.id),
  code: text('code').notNull(),
  expiresAt: text('expiresAt')
  .notNull()
  .default(sql`(current_timestamp)`),
});

