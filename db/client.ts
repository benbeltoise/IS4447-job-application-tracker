import { drizzle } from 'drizzle-orm/expo-sqlite';
import { openDatabaseSync } from 'expo-sqlite';

const sqlite = openDatabaseSync('job-tracker.db');

export const db = drizzle(sqlite);
export { sqlite };
