import { timingSafeEqual } from 'node:crypto';
import type { Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { env, getAdminConfigError } from '../config/env.js';
import { isAdminAuthenticated as hasAdminSession } from '../middlewares/admin-auth.js';
import { listLatestEnquiries } from '../services/enquiry-service.js';
import {
  adminCookieName,
  adminCookieOptions,
  adminSessionDurationMs,
  createAdminSession,
} from '../utils/admin-session.js';

const adminLoginSchema = z.object({ password: z.string().min(1).max(1024) });

export function loginAdmin(req: Request, res: Response): void {
  const adminPassword = env.ADMIN_PASSWORD;
  const sessionSecret = env.ADMIN_SESSION_SECRET;
  const configError = getAdminConfigError();
  if (configError || !adminPassword || !sessionSecret) {
    res.status(503).json({ ok: false, error: configError ?? 'Admin access is not configured.' });
    return;
  }

  const parsed = adminLoginSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ ok: false, error: 'Enter the admin password.' });
    return;
  }

  const expected = Buffer.from(adminPassword);
  const supplied = Buffer.from(parsed.data.password);
  if (supplied.length !== expected.length || !timingSafeEqual(supplied, expected)) {
    res.status(401).json({ ok: false, error: 'Incorrect admin password.' });
    return;
  }

  res.cookie(adminCookieName, createAdminSession(sessionSecret), {
    ...adminCookieOptions,
    maxAge: adminSessionDurationMs,
  });
  res.json({ ok: true });
}

export function getAdminSession(req: Request, res: Response): void {
  const configError = getAdminConfigError();
  if (configError) {
    res.status(503).json({ ok: false, error: configError });
    return;
  }
  res.json({ ok: true, authenticated: hasAdminSession(req) });
}

export function logoutAdmin(_req: Request, res: Response): void {
  res.clearCookie(adminCookieName, adminCookieOptions);
  res.json({ ok: true });
}

export async function getAdminEnquiries(_req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const rows = await listLatestEnquiries();
    res.json({ ok: true, enquiries: rows });
  } catch (error) {
    next(error);
  }
}
