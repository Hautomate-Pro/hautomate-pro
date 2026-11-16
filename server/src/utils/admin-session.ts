import { createHmac, timingSafeEqual } from 'node:crypto';
import type { CookieOptions } from 'express';
import { env } from '../config/env.js';
import { z } from 'zod';

export const adminSessionDurationMs = 8 * 60 * 60 * 1000;
export const adminCookieName = env.NODE_ENV === 'production' ? '__Host-admin_session' : 'admin_session';
export const adminCookieOptions: CookieOptions = {
  httpOnly: true,
  secure: env.NODE_ENV === 'production',
  sameSite: 'strict',
  path: '/',
};

const sessionSchema = z.object({ expiresAt: z.number().int().positive() });

export function createAdminSession(secret: string) {
  const payload = Buffer.from(JSON.stringify({ expiresAt: Date.now() + adminSessionDurationMs })).toString('base64url');
  const signature = createHmac('sha256', secret).update(payload).digest('base64url');
  return `${payload}.${signature}`;
}

export function readCookie(cookieHeader: string | undefined, name: string) {
  const prefix = `${name}=`;
  return cookieHeader
    ?.split(';')
    .map((part) => part.trim())
    .find((part) => part.startsWith(prefix))
    ?.slice(prefix.length);
}

export function isValidAdminSession(token: string | undefined, secret: string) {
  if (!token) return false;
  const separator = token.lastIndexOf('.');
  if (separator <= 0 || separator === token.length - 1) return false;

  const payload = token.slice(0, separator);
  const signature = token.slice(separator + 1);
  if (payload.length > 512 || !/^[A-Za-z0-9_-]+$/.test(signature)) return false;

  const expected = createHmac('sha256', secret).update(payload).digest();
  const supplied = Buffer.from(signature, 'base64url');
  if (supplied.length !== expected.length || !timingSafeEqual(supplied, expected)) return false;

  try {
    const claims = sessionSchema.safeParse(JSON.parse(Buffer.from(payload, 'base64url').toString('utf8')));
    return claims.success && claims.data.expiresAt > Date.now();
  } catch {
    return false;
  }
}
