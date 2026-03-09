import { db } from './client';
import { applications, categories, users } from './schema';

async function seed() {
  try {
    await db.insert(users).values({
      email: 'test@example.com',
      password: 'password123',
      createdAt: new Date().toISOString(),
    });

    await db.insert(categories).values([
      {
        name: 'Frontend',
        userId: 1,
      },
      {
        name: 'Backend',
        userId: 1
      },
      {
        name: 'Graduate',
        userId: 1,
      },
      {
        name: 'Internship',
        userId: 1,
      },
    ]);

    await db.insert(applications).values([
      {
        company: 'Google',
        roleTitle: 'Frontend Developer',
        applicationDate: '2026-02-01',
        metricValue: 4,
        status: 'applied',
        notes: 'Applied on UCC careers page',
        categoryId: 1,
        userId: 1,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        company: 'Microsoft',
        roleTitle: 'Backend Engineer',
        applicationDate: '2026-02-03',
        metricValue: 3,
        status: 'interviewing',
        notes: 'Recruiter out',
        categoryId: 2,
        userId: 1,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        company: 'Stripe',
        roleTitle: 'Graduate Software Engineer',
        applicationDate: '2026-02-05',
        metricValue: 5,
        status: 'applied',
        notes: 'Found on Linkedin',
        categoryId: 3,
        userId: 1,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        company: 'WorkVivo',
        roleTitle: 'Software Engineering Intern',
        applicationDate: '2026-02-06',
        metricValue: 2,
        status: 'rejected',
        notes: 'Havent heard back yet',
        categoryId: 4,
        userId: 1,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        company: 'Clearstream',
        roleTitle: 'Frontend Engineer',
        applicationDate: '2026-02-08',
        metricValue: 4,
        status: 'applied',
        notes: 'Prepare interview Qs',
        categoryId: 1,
        userId: 1,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        company: 'Stripe',
        roleTitle: 'Backend Developer',
        applicationDate: '2026-02-10',
        metricValue: 3,
        status: 'applied',
        notes: null,
        categoryId: 2,
        userId: 1,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        company: 'Google',
        roleTitle: 'Graduate Engineer',
        applicationDate: '2026-02-11',
        metricValue: 5,
        status: 'interviewing',
        notes: 'Phone screen booked',
        categoryId: 3,
        userId: 1,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        company: 'Red hat',
        roleTitle: 'Software Intern',
        applicationDate: '2026-02-12',
        metricValue: 2,
        status: 'applied',
        notes: 'Applied through university portal',
        categoryId: 4,
        userId: 1,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    ]);

    console.log('Seed completed successfully');
  } catch (error) {
    console.error('Seed failed:', error);
  }
}

seed();