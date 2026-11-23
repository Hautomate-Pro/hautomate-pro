import { useEffect, useState } from 'react';

const CONSENT_KEY = 'hautomate_cookie_consent';
type ConsentState = 'not_asked' | 'accepted' | 'rejected';

export function CookieConsent() {
  const [consent, setConsent] = useState<ConsentState>('not_asked');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem(CONSENT_KEY) as ConsentState | null;
    if (stored === 'accepted' || stored === 'rejected') {
      setConsent(stored);
    }
  }, []);

  if (!mounted || consent !== 'not_asked') return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 bg-navy text-slate-300 z-[100] p-6 md:p-10"
      role="dialog"
      aria-modal="true"
      aria-label="Cookie consent"
    >
      <div className="mx-auto max-w-[1400px] px-4 lg:px-10">
        <div className="grid gap-4 md:grid-cols-[1fr_auto] items-center">
          <div className="text-sm leading-relaxed">
            <p className="font-semibold mb-2">Cookies and similar technologies</p>
            <p className="text-slate-400">
              We use essential cookies to make the site work, and optional preference and analytics
              cookies to improve your experience. You can accept all non-essential cookies or reject
              them. Your choice can be changed at any time by clearing your cookies.
            </p>
            <p className="mt-2 text-xs text-slate-500">
              Read our{' '}
              <a
                href="/cookies"
                className="text-brand underline underline-offset-4 hover:text-white"
              >
                Cookie Policy
              </a>
              .
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-end mt-4 sm:mt-0">
            <button
              onClick={() => {
                setConsent('rejected');
                localStorage.setItem(CONSENT_KEY, 'rejected');
              }}
              className="px-5 py-3 text-sm font-medium text-slate-300 border border-slate-500 hover:bg-slate-800 transition-colors"
            >
              Reject non-essential
            </button>
            <button
              onClick={() => {
                setConsent('accepted');
                localStorage.setItem(CONSENT_KEY, 'accepted');
              }}
              className="px-5 py-3 text-sm font-medium text-white bg-brand hover:bg-[#104d99] transition-colors"
            >
              Accept all
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Hook to check whether the user has accepted non-essential cookies.
 * Returns false until consent is given (conservative default).
 */
export function useCookieConsent() {
  const [accepted, setAccepted] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setAccepted(localStorage.getItem(CONSENT_KEY) === 'accepted');
  }, []);

  return mounted && accepted;
}