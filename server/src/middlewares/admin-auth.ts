import type { NextFunction, Request, Response } from 'express';
import { env, getAdminConfigError } from '../config/env.js';
import { adminCookieName, isValidAdminSession, readCookie } from '../utils/admin-session.js';

export function isAdminAuthenticated(req: Request) {
  const secret = env.ADMIN_SESSION_SECRET;
  return secret ? isValidAdminSession(readCookie(req.headers.cookie, adminCookieName), secret) : false;
}

export function requireAdmin(req: Request, res: Response, next: NextFunction): void {
  const configError = getAdminConfigError();
  if (configError) {
    res.status(503).json({ ok: false, error: configError });
    return;
  }
  if (!isAdminAuthenticated(req)) {
    res.status(401).json({ ok: false, error: 'Sign in required.' });
    return;
  }
  next();
}
