import { db } from "@/db/client";
import { initDatabase } from "@/db/init";
import { applications } from "@/db/schema";
import { Stack } from "expo-router";
import { createContext, useEffect, useState } from "react";

export type Application = {
  id: number;
  company: string;
  roleTitle: string;
  status: string;
  applicationDate: string;
};

type ApplicationContextType = {
  applications: Application[];
  setApplications: React.Dispatch<React.SetStateAction<Application[]>>;
};

export const ApplicationContext = createContext<ApplicationContextType | null>(null);

export default function RootLayout() {
  const [applicationsList, setApplicationsList] = useState<Application[]>([]);

  useEffect(() => {
    async function setup() {
      initDatabase();
      const rows = await db.select().from(applications);
      setApplicationsList(rows as Application[]);
    }

    setup();
  }, []);

  return (
    <ApplicationContext.Provider
      value={{
        applications: applicationsList,
        setApplications: setApplicationsList,
      }}
    >
      <Stack screenOptions={{ headerShown: false }} />
    </ApplicationContext.Provider>
  );
}