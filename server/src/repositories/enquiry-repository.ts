import { desc, eq } from 'drizzle-orm';
import { db } from '../db/index.js';
import { enquiries } from '../db/schema.js';
import type { AdminEnquiry, EnquiryInput } from '../types/enquiry.js';

export async function insertEnquiry(data: EnquiryInput): Promise<number> {
  const [row] = await db.insert(enquiries).values(data).returning({ id: enquiries.id });
  if (!row) throw new Error('Enquiry insert returned no row.');
  return row.id;
}

export async function markEnquiryEmailed(id: number): Promise<void> {
  await db.update(enquiries).set({ emailed: true }).where(eq(enquiries.id, id));
}

export async function findLatestEnquiries(limit = 200): Promise<AdminEnquiry[]> {
  return db
    .select({
      id: enquiries.id,
      name: enquiries.name,
      email: enquiries.email,
      company: enquiries.company,
      location: enquiries.location,
      message: enquiries.message,
      createdAt: enquiries.createdAt,
    })
    .from(enquiries)
    .orderBy(desc(enquiries.createdAt))
    .limit(limit);
}
