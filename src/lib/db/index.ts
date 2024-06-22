// src/lib/db/index.ts

import { drizzle } from 'drizzle-orm/d1';
import * as schema from '@/lib/db/schema';  // Adjust the import to point to your schema

let db: ReturnType<typeof drizzle> | null = null;

export function initializeDb(D1: D1Database) {  // D1Database is from @cloudflare/workers-types
  if (!db) {
    db = drizzle(D1, { schema, logger: true });
  }
  return db;
}

export function getDb() {
  if (!db) {
    throw new Error("Database not initialized. Call initializeDb first.");
  }
  return db;
}
