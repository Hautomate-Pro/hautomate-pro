import type { enquiries } from '../db/schema.js';

export type EnquiryRecord = typeof enquiries.$inferSelect;
export type EnquiryInput = Omit<EnquiryRecord, 'id' | 'emailed' | 'createdAt'>;
export type AdminEnquiry = Pick<
  EnquiryRecord,
  'id' | 'name' | 'email' | 'company' | 'location' | 'message' | 'createdAt'
>;
