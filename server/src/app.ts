import cors from 'cors';
import express, { type NextFunction, type Request, type Response } from 'express';
import helmet from 'helmet';
import { env, getAdminConfigError } from './config/env.js';
import { verifySmtpConnection } from './services/mailer.js';
import { adminRouter } from './routes/admin-routes.js';
import { enquiryRouter } from './routes/enquiry-routes.js';

const app = express();
const isProd = env.NODE_ENV === 'production';


if (isProd) app.set('trust proxy', 1);

app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'"],
        styleSrc: ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
        fontSrc: ["'self'", 'https://fonts.gstatic.com'],
        imgSrc: ["'self'", 'data:'],
        connectSrc: ["'self'"],
      },
    },
  }),
);
app.use(cors({ origin: env.CLIENT_ORIGIN, credentials: true }));
app.use(express.json({ limit: '50kb' }));

app.get('/api/health', (_req, res) => res.json({ ok: true }));
app.use('/api/enquiries', enquiryRouter);
app.use('/api/admin', adminRouter);
app.use('/api', (_req, res) => res.status(404).json({ ok: false, error: 'Not found' }));


app.use((err: unknown, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err);
  res.status(500).json({ ok: false, error: 'Something went wrong. Please try again.' });
});

// bottom of app.ts, before the exports
const adminConfigError = getAdminConfigError();
if (adminConfigError) console.warn(`[admin] Admin sign-in is disabled. ${adminConfigError}`);
void verifySmtpConnection();

export { app };
export default app;