import { db } from "./client";
import { applications, categories, users } from "./schema";

export async function seedDatabase() {
  try {
    await db.insert(users).values({
      email: "test@example.com",
      password: "password123",
      createdAt: new Date().toISOString(),
    });

    await db.insert(categories).values([
      { name: "Frontend", userId: 1 },
      { name: "Backend", userId: 1 },
      { name: "Graduate", userId: 1 },
      { name: "Internship", userId: 1 },
    ]);

    await db.insert(applications).values([
      {
        company: "Google",
        roleTitle: "Frontend Developer",
        applicationDate: "2026-02-01",
        metricValue: 4,
        status: "applied",
        notes: "Applied on UCC careers page",
        categoryId: 1,
        userId: 1,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        company: "Microsoft",
        roleTitle: "Backend Engineer",
        applicationDate: "2026-02-03",
        metricValue: 3,
        status: "interviewing",
        notes: "Recruiter out",
        categoryId: 2,
        userId: 1,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    ]);

    console.log("Seed completed successfully");
  } catch (error) {
    console.error("Seed failed:", error);
  }
}