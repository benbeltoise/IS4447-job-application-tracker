import { sqlite } from './client';

export function initDatabase() {
  try {
    sqlite.execSync(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL,
        created_at TEXT NOT NULL
      );
    `);

    sqlite.execSync(`
      CREATE TABLE IF NOT EXISTS categories (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        user_id INTEGER NOT NULL
      );
    `);

    sqlite.execSync(`
      CREATE TABLE IF NOT EXISTS applications (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        company TEXT NOT NULL,
        role_title TEXT NOT NULL,
        application_date TEXT NOT NULL,
        metric_value INTEGER NOT NULL,
        status TEXT NOT NULL,
        notes TEXT,
        category_id INTEGER NOT NULL,
        user_id INTEGER NOT NULL,
        created_at TEXT NOT NULL,
        updated_at TEXT NOT NULL
      );
    `);

    console.log('Database initialized');
  } catch (error) {
    console.error('Database initialization failed:', error);
  }
}