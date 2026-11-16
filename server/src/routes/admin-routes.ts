import { Router } from 'express';
import {
  getAdminEnquiries,
  getAdminSession,
  loginAdmin,
  logoutAdmin,
} from '../controllers/admin-controller.js';
import { requireAdmin } from '../middlewares/admin-auth.js';
import { adminLoginRateLimit } from '../middlewares/rate-limit.js';

export const adminRouter = Router();

adminRouter.use((_req, res, next) => {
  res.setHeader('Cache-Control', 'no-store');
  next();
});

adminRouter.post('/login', adminLoginRateLimit, loginAdmin);
adminRouter.get('/session', getAdminSession);
adminRouter.post('/logout', logoutAdmin);
adminRouter.get('/enquiries', requireAdmin, getAdminEnquiries);
