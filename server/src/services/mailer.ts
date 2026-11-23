import nodemailer from 'nodemailer';
import { env } from '../config/env.js';
import type { EnquiryInput } from '../types/enquiry.js';

const transporter = env.SMTP_HOST
  ? nodemailer.createTransport({
      host: env.SMTP_HOST,
      port: env.SMTP_PORT,
      secure: env.SMTP_PORT === 465,
      auth: env.SMTP_USER ? { user: env.SMTP_USER, pass: env.SMTP_PASS } : undefined,
    })
  : null;

export async function verifySmtpConnection(): Promise<void> {
  if (!transporter) {
    console.warn('[mail] SMTP is not configured; enquiry emails are disabled.');
    return;
  }
  if (!env.ENQUIRY_TO) {
    console.warn('[mail] ENQUIRY_TO is not configured; enquiry emails are disabled.');
    return;
  }
  try {
    await transporter.verify();
    console.log('[mail] SMTP connection verified.');
  } catch (err) {
    console.error('[mail] SMTP startup check failed; enquiries will still be saved, but email may not be delivered.', err);
  }
}

/** Returns true if an email was sent. Never throws: the enquiry is already saved. */
export async function sendEnquiryEmail(e: EnquiryInput): Promise<boolean> {
  if (!transporter || !env.ENQUIRY_TO) {
    console.log('[mail] SMTP not configured; enquiry saved without email.');
    return false;
  }
  try {
    await transporter.sendMail({
      from: env.MAIL_FROM ?? env.ENQUIRY_TO,
      to: env.ENQUIRY_TO,
      replyTo: `${e.name} <${e.email}>`,
      subject: `Project enquiry from ${e.name}${e.company ? ` (${e.company})` : ''}`,
      text: [
        `Name: ${e.name}`,
        `Email: ${e.email}`,
        `Company: ${e.company || '-'}`,
        `Phone: ${e.phone || '-'}`,
        `Project location: ${e.location || '-'}`,
        `Marketing consent: ${e.marketing ? 'Yes' : 'No'}`,
        '',
        e.message,
      ].join('\n'),
    });
    return true;
  } catch (err) {
    console.error('[mail] failed to send enquiry email', err);
    return false;
  }
}
