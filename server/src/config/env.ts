import path from 'node:path';
import dotenv from 'dotenv';
import { z } from 'zod';

dotenv.config({ path: path.resolve(process.cwd(), '..', '.env') });

// Treat empty strings in .env as "not set"
const optional = z
  .string()
  .optional()
  .transform((v) => (v && v.trim() !== '' ? v.trim() : undefined));
const optionalSecret =
  z.preprocess(
    (value) => (typeof value === 'string' && value.trim() === '' ? undefined : value),
    z.string().optional(),
  );

const schema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  PORT: z.coerce.number().default(3001),
  DATABASE_URL: z.string().min(1, 'DATABASE_URL is required'),
  CLIENT_ORIGIN: z.string().default('http://localhost:5173'),
  ADMIN_PASSWORD: optionalSecret,
  ADMIN_SESSION_SECRET: optionalSecret,
  SMTP_HOST: optional,
  SMTP_PORT: z.coerce.number().default(587),
  SMTP_USER: optional,
  SMTP_PASS: optional,
  MAIL_FROM: optional,
  ENQUIRY_TO: optional,
});

export const env = schema.parse(process.env);

export function getAdminConfigError() {
  if (!env.ADMIN_PASSWORD || !env.ADMIN_SESSION_SECRET) {
    return 'Set both ADMIN_PASSWORD and ADMIN_SESSION_SECRET to enable admin sign-in.';
  }
  if (Buffer.byteLength(env.ADMIN_PASSWORD, 'utf8') < 8) {
    return 'ADMIN_PASSWORD must be at least 8 UTF-8 bytes to enable admin sign-in.';
  }
  if (Buffer.byteLength(env.ADMIN_SESSION_SECRET, 'utf8') < 32) {
    return 'ADMIN_SESSION_SECRET must be at least 32 UTF-8 bytes to enable admin sign-in.';
  }
  return undefined;
}
