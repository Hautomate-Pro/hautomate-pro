import { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { company } from '../content';

// PLACEHOLDER TEXT. Replace each `body` with the client-approved wording from the original
// site's /privacy, /cookies and /terms pages before going live. Legal copy must come from the client.
const pages: Record<string, { title: string; body: string[] }> = {
  '/privacy': {
    title: 'Privacy Notice',
    body: [
      `${company.name} (company number ${company.number}) collects the details you submit through the enquiry form, such as your name, email address, company, phone number and project information, to respond to your enquiry.`,
      `For questions about how your data is handled, contact us at ${company.email}.`,
    ],
  },
  '/cookies': {
    title: 'Cookie Policy',
    body: [
      'This site stores one preference in your browser (light or dark theme). Replace this text with the approved cookie policy.',
    ],
  },
  '/terms': {
    title: 'Website Terms',
    body: ['Replace this text with the approved website terms.'],
  },
};

export default function Legal() {
  const { pathname } = useLocation();
  const page = pages[pathname];
  useEffect(() => window.scrollTo(0, 0), [pathname]);
  if (!page) return <Navigate to="/" replace />;

  return (
    <section className="py-24">
      <div className="mx-auto max-w-3xl px-6">
        {import.meta.env.DEV && (
          <p className="mb-8 border border-amber-500/50 bg-amber-500/10 p-4 text-sm">
            Dev notice: placeholder legal text. Replace with client-approved wording in <code>src/pages/Legal.tsx</code>.
          </p>
        )}
        <h1 className="font-display text-5xl font-extrabold">{page.title}</h1>
        <div className="mt-10 space-y-5 text-lg leading-relaxed text-muted">
          {page.body.map((p) => (<p key={p}>{p}</p>))}
        </div>
      </div>
    </section>
  );
}
