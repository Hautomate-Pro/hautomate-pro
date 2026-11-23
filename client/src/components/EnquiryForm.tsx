import { Send } from 'lucide-react';
import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';

type Fields = { name: string; email: string; company: string; phone: string; location: string; message: string; website: string; marketing: boolean };
const empty: Fields = { name: '', email: '', company: '', phone: '', location: '', message: '', website: '', marketing: false };
type Status = 'idle' | 'sending' | 'sent' | 'error';

const inputCls =
  'mt-2 w-full border border-line bg-bg px-4 py-3 text-base text-ink placeholder:text-muted/60 focus:border-brand focus:outline-none';

export function EnquiryForm() {
  const [values, setValues] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string[]>>>({});
  const [status, setStatus] = useState<Status>('idle');
  const [formError, setFormError] = useState('');

  const set = (k: keyof Fields) => (e: { target: { value: string } }) => setValues((v) => ({ ...v, [k]: e.target.value }));

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus('sending');
    setErrors({});
    setFormError('');
    try {
      const res = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        setValues(empty);
        setStatus('sent');
        return;
      }
      if (data.errors) setErrors(data.errors);
      setFormError(data.error ?? 'Check the highlighted fields and try again.');
      setStatus('error');
    } catch {
      setFormError('We could not reach the server. Email or call us instead.');
      setStatus('error');
    }
  }

  if (status === 'sent') {
    return (
      <div role="status" className="border border-line bg-alt p-6">
        <p className="font-display text-xl font-bold">Enquiry sent</p>
        <p className="mt-2 text-muted">Thanks. We aim to reply within two working days.</p>
        <button type="button" onClick={() => setStatus('idle')} className="mt-4 font-semibold text-brand underline underline-offset-4">
          Send another enquiry
        </button>
      </div>
    );
  }

  const field = (k: Exclude<keyof Fields, 'marketing'>, label: string, props: React.InputHTMLAttributes<HTMLInputElement> = {}) => (
    <div>
      <label htmlFor={k} className="text-sm font-medium">{label}</label>
      <input id={k} name={k} value={values[k]} onChange={set(k)} className={inputCls} aria-invalid={!!errors[k]} aria-describedby={errors[k] ? `${k}-err` : undefined} {...props} />
      {errors[k] && <p id={`${k}-err`} className="mt-1 text-sm text-red-600 dark:text-red-400">{errors[k]![0]}</p>}
    </div>
  );

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        {field('name', 'Name', { required: true, autoComplete: 'name' })}
        {field('email', 'Email', { required: true, type: 'email', autoComplete: 'email' })}
        {field('company', 'Company (optional)', { autoComplete: 'organization' })}
        {field('phone', 'Phone (optional)', { type: 'tel', autoComplete: 'tel' })}
      </div>
      {field('location', 'Project location (optional)', { placeholder: 'e.g. Amsterdam, Netherlands' })}
      <div>
        <label htmlFor="message" className="text-sm font-medium">Project scope and programme</label>
        <textarea id="message" name="message" rows={5} required value={values.message} onChange={set('message')} className={inputCls} placeholder="Scope, programme dates and the support you need" aria-invalid={!!errors.message} />
        {errors.message && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message[0]}</p>}
      </div>
      {/* Honeypot: hidden from people, tempting to bots */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" value={values.website} onChange={set('website')} className="absolute -left-[9999px] h-0 w-0 opacity-0" />

      {formError && <p role="alert" className="text-sm text-red-600 dark:text-red-400">{formError}</p>}
      <div className="flex items-start gap-3 pt-4 border-t border-line">
        <input
          id="marketing"
          name="marketing"
          type="checkbox"
          checked={values.marketing}
          onChange={() => setValues((v) => ({ ...v, marketing: !v.marketing }))}
          className="mt-1 shrink-0 text-brand border-line focus:ring-brand"
        />
        <label htmlFor="marketing" className="text-sm leading-relaxed text-muted">
          I consent to Hautomate Pro using my details to send me marketing communications. This is
          separate from my enquiry and I can withdraw consent at any time. See our{' '}
          <Link to="/privacy" className="underline underline-offset-4 hover:text-brand">
            Privacy Notice
          </Link>
          .
        </label>
      </div>
      <div>
        <button type="submit" disabled={status === 'sending'} className="inline-flex items-center gap-2 bg-solid px-6 py-3.5 font-semibold text-white transition-colors hover:bg-[#104d99] disabled:opacity-60">
          <Send size={18} /> {status === 'sending' ? 'Sending…' : 'Send enquiry'}
        </button>
      </div>
    </form>
  );
}
