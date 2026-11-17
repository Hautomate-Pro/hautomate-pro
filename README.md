# Hautomate Pro

Marketing site for Hautomate Pro Limited, rebuilt as an owned codebase.

**Stack:** React 18 + TypeScript + Vite + Tailwind CSS v4 (client) · Express + TypeScript + Drizzle ORM + Postgres (server)

## Run it locally

```bash
cp .env.example .env
npm install
npm run db:up      # starts Postgres in Docker (or point DATABASE_URL at your own)
npm run db:push    # creates the `enquiries` table
npm run dev        # client http://localhost:5173, API http://localhost:3001
```

## Production build and API

```bash
npm run build
npm start   # starts the Express API on PORT; it does not serve the client
```

## Deploying to Vercel with Neon

Set the Vercel project root to the repository root. The root `vercel.json` configures separate Vite client (`client/`) and Express server (`server/`) services. Requests to `/api/*` go to the server service, whose entry point is `server/src/app.ts`; all other paths go to the client service, which rewrites SPA routes such as `/admin` to its `index.html`. The Express server does not serve the client.

Create a Neon Postgres project and add its pooled connection string as `DATABASE_URL` in Vercel. Also configure `ADMIN_PASSWORD`, `ADMIN_SESSION_SECRET`, and `CLIENT_ORIGIN`; add the SMTP variables if enquiry email is enabled. Set secrets in Vercel's environment settings, not in source control. Apply the schema to Neon with `npm run db:push` using the Neon connection string before relying on the production API.

## Assets and content to verify

- The supplied hero and About photos are in `client/public/images/`.
- The supplied brand icons and wordmarks (light and dark) are in `client/public/brand/`; the logo is currently rendered from PNG files. An SVG version has not been supplied.
- All seven vendor logos referenced in `src/content.ts` are in `client/public/vendors/`.
- Optional: add an `og.jpg` social-sharing image.
- Real legal text in `src/pages/Legal.tsx` (currently placeholders).
- BMS tab copy in `src/content.ts` marked `VERIFY`.
- Fonts load from Google Fonts. Self-host them if the client wants no third-party requests (this also affects the cookie/privacy wording).

## Enquiries

`POST /api/enquiries` validates (zod), stores to Postgres, and emails `ENQUIRY_TO` if SMTP is configured.

## Admin

Set `ADMIN_PASSWORD` (at least 8 UTF-8 bytes; 16+ characters is recommended) and `ADMIN_SESSION_SECRET` (at least 32 UTF-8 bytes) in `.env` to enable `/admin`. The page uses a rate-limited password login and an eight-hour, signed, HttpOnly, SameSite=Strict cookie; cookies are Secure in production. Generate a session secret with:

```bash
node -e "console.log(require('node:crypto').randomBytes(32).toString('base64url'))"
```

The admin table shows the latest 200 enquiries, newest first. Rotate `ADMIN_SESSION_SECRET` to invalidate existing sessions.

## Server structure

The Express server separates startup (`src/index.ts`) from app/middleware wiring (`src/app.ts`). Request handling is organized into `routes/`, `controllers/`, and `middlewares/`; enquiry persistence lives in `repositories/`, business and email behavior in `services/`, configuration in `config/`, shared domain types in `types/`, and session helpers in `utils/`.

## Email delivery

When `SMTP_HOST` and `ENQUIRY_TO` are configured, the server verifies the SMTP connection at startup and logs failures. SMTP failure does not stop the site; enquiries are still stored in Postgres.
