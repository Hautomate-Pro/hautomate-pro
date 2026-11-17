import { type FormEvent, useCallback, useEffect, useState } from 'react';
import { LogOut, RefreshCw } from 'lucide-react';
import { Logo } from '../components/Logo';

type Enquiry = {
  id: number;
  name: string;
  email: string;
  company: string;
  location: string;
  message: string;
  createdAt: string;
};

type AdminResponse = {
  ok?: boolean;
  authenticated?: boolean;
  enquiries?: Enquiry[];
  error?: string;
};

type AdminState = 'checking' | 'unavailable' | 'signed-out' | 'signed-in';

async function readResponse(response: Response): Promise<AdminResponse> {
  try {
    return (await response.json()) as AdminResponse;
  } catch {
    return {};
  }
}

function errorMessage(error: unknown) {
  return error instanceof Error ? error.message : 'Something went wrong. Please try again.';
}

function apiError(data: AdminResponse, fallback: string) {
  return typeof data.error === 'string' ? data.error : fallback;
}

export default function Admin() {
  const [adminState, setAdminState] = useState<AdminState>('checking');
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const loadEnquiries = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch('/api/admin/enquiries', {
        credentials: 'include',
        headers: { Accept: 'application/json' },
      });
      const data = await readResponse(response);
      if (response.status === 401) {
        setAdminState('signed-out');
        throw new Error('Your session has expired. Please sign in again.');
      }
      if (!response.ok) throw new Error(apiError(data, 'Unable to load enquiries.'));
      setEnquiries(data.enquiries ?? []);
    } catch (requestError) {
      setError(errorMessage(requestError));
    } finally {
      setLoading(false);
    }
  }, []);

  const checkSession = useCallback(async () => {
    setAdminState('checking');
    setError('');
    try {
      const response = await fetch('/api/admin/session', {
        credentials: 'include',
        headers: { Accept: 'application/json' },
      });
      const data = await readResponse(response);
      if (!response.ok) throw new Error(apiError(data, 'Unable to check admin access.'));
      if (data.authenticated) {
        setAdminState('signed-in');
        await loadEnquiries();
      } else {
        setAdminState('signed-out');
      }
    } catch (requestError) {
      setAdminState('unavailable');
      setError(errorMessage(requestError));
    }
  }, [loadEnquiries]);

  useEffect(() => {
    void checkSession();
  }, [checkSession]);

  async function signIn(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setError('');
    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ password }),
      });
      const data = await readResponse(response);
      if (!response.ok) throw new Error(apiError(data, 'Sign-in failed.'));
      setPassword('');
      setAdminState('signed-in');
      await loadEnquiries();
    } catch (requestError) {
      setError(errorMessage(requestError));
    } finally {
      setSubmitting(false);
    }
  }

  async function signOut() {
    setError('');
    try {
      const response = await fetch('/api/admin/logout', {
        method: 'POST',
        credentials: 'include',
        headers: { Accept: 'application/json' },
      });
      const data = await readResponse(response);
      if (!response.ok) throw new Error(apiError(data, 'Unable to sign out.'));
      setEnquiries([]);
      setPassword('');
      setAdminState('signed-out');
    } catch (requestError) {
      setError(errorMessage(requestError));
    }
  }

  return (
    <div className="min-h-screen bg-bg px-4 py-8 text-ink sm:px-6 lg:py-12">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex items-center justify-between border-b border-line pb-6">
          <Logo />
          {adminState === 'signed-in' && (
            <button type="button" onClick={() => void signOut()} className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-brand">
              <LogOut size={17} /> Sign out
            </button>
          )}
        </div>

        <section className="py-10 lg:py-14">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-brand">Hautomate Pro · Admin</p>
          <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h1 className="font-display text-3xl font-bold sm:text-4xl">Enquiry inbox</h1>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
                Review project enquiries saved to the database, including those received while email delivery is unavailable.
              </p>
            </div>
            {adminState === 'signed-in' && (
              <button type="button" onClick={() => void loadEnquiries()} disabled={loading} className="inline-flex items-center gap-2 border border-line px-4 py-2 text-sm transition-colors hover:bg-alt disabled:opacity-60">
                <RefreshCw size={16} className={loading ? 'animate-spin' : ''} /> Refresh
              </button>
            )}
          </div>

          {adminState === 'checking' && <p className="mt-8 text-sm text-muted">Checking admin session…</p>}

          {adminState === 'unavailable' && (
            <div className="mt-8 max-w-xl border border-line bg-surface p-6">
              <p role="alert" className="text-sm text-red-600 dark:text-red-400">{error}</p>
              <p className="mt-3 text-sm text-muted">Check the server configuration, then try again.</p>
              <button type="button" onClick={() => void checkSession()} className="mt-5 bg-solid px-4 py-2 text-sm font-semibold text-white hover:bg-[#104d99]">
                Try again
              </button>
            </div>
          )}

          {adminState === 'signed-out' && (
            <form onSubmit={signIn} className="mt-8 max-w-md border border-line bg-surface p-6 sm:p-8">
              <label htmlFor="admin-password" className="text-sm font-medium">Admin password</label>
              <input
                id="admin-password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="mt-2 w-full border border-line bg-bg px-4 py-3 text-base text-ink focus:border-brand focus:outline-none"
              />
              {error && <p role="alert" className="mt-3 text-sm text-red-600 dark:text-red-400">{error}</p>}
              <button type="submit" disabled={submitting} className="mt-5 w-full bg-solid px-5 py-3 font-semibold text-white transition-colors hover:bg-[#104d99] disabled:opacity-60">
                {submitting ? 'Signing in…' : 'Sign in'}
              </button>
            </form>
          )}

          {adminState === 'signed-in' && (
            <div className="mt-8">
              {error && <p role="alert" className="mb-4 text-sm text-red-600 dark:text-red-400">{error}</p>}
              <p className="mb-3 text-sm text-muted">
                {loading ? 'Loading enquiries…' : `Showing ${enquiries.length} of up to 200 most recent enquiries.`}
              </p>
              <div className="overflow-x-auto border border-line bg-surface">
                <table className="w-full min-w-[900px] border-collapse text-left text-sm">
                  <caption className="sr-only">Enquiries, newest first</caption>
                  <thead className="bg-alt text-xs uppercase tracking-wide text-muted">
                    <tr>
                      <th scope="col" className="px-4 py-3">Date</th>
                      <th scope="col" className="px-4 py-3">Name / email</th>
                      <th scope="col" className="px-4 py-3">Company</th>
                      <th scope="col" className="px-4 py-3">Location</th>
                      <th scope="col" className="px-4 py-3">Message</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-line">
                    {enquiries.map((enquiry) => (
                      <tr key={enquiry.id} className="align-top">
                        <td className="whitespace-nowrap px-4 py-4 text-muted">{new Date(enquiry.createdAt).toLocaleString()}</td>
                        <td className="px-4 py-4">
                          <p className="font-semibold">{enquiry.name}</p>
                          <a href={`mailto:${enquiry.email}`} className="mt-1 inline-block text-brand hover:underline">{enquiry.email}</a>
                        </td>
                        <td className="px-4 py-4">{enquiry.company || '—'}</td>
                        <td className="px-4 py-4">{enquiry.location || '—'}</td>
                        <td className="max-w-xl whitespace-pre-wrap break-words px-4 py-4">{enquiry.message}</td>
                      </tr>
                    ))}
                    {!loading && enquiries.length === 0 && (
                      <tr>
                        <td colSpan={5} className="px-4 py-10 text-center text-muted">No enquiries have been submitted yet.</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
