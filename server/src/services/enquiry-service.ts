import { z } from 'zod';
import { findLatestEnquiries, insertEnquiry, markEnquiryEmailed } from '../repositories/enquiry-repository.js';
import type { EnquiryInput } from '../types/enquiry.js';
import { sendEnquiryEmail } from './mailer.js';

const optionalText = (max: number) => z.string().trim().max(max).default('');

export const enquirySubmissionSchema = z.object({
  name: z.string().trim().min(2, 'Enter your name').max(120),
  email: z.string().trim().email('Enter a valid email address').max(254),
  company: optionalText(160),
  phone: optionalText(40),
  location: optionalText(160),
  message: z.string().trim().min(10, 'Tell us a little about your project').max(5000),
  website: z.string().optional(),
});

export async function createEnquiry(data: EnquiryInput): Promise<void> {
  const id = await insertEnquiry(data);
  const sent = await sendEnquiryEmail(data);
  if (sent) {
    try {
      await markEnquiryEmailed(id);
    } catch (error) {
      console.error('[mail] failed to update enquiry email status', error);
    }
  }
}

export function listLatestEnquiries() {
  return findLatestEnquiries();
}
