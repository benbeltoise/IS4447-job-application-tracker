import { Stack } from 'expo-router';
import { useEffect } from 'react';
import { Platform } from 'react-native';

export default function RootLayout() {
  useEffect(() => {
    async function setupDatabase() {
      if (Platform.OS === 'web') {
        console.log('Skipping SQLite init on web');
        return;
      }

      const { initDatabase } = await import('../db/init');
      await initDatabase();
    }

    setupDatabase();
  }, []);

  return <Stack screenOptions={{ headerShown: false }} />;
}