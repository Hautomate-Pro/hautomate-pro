import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { EnquiryForm } from '../components/EnquiryForm';
import { SectionHeading, SectionLabel } from '../components/SectionLabel';
import { company } from '../content';

function Row({ icon: Icon, label, children }: { icon: typeof Mail; label: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-5 bg-surface p-7">
      <Icon size={22} strokeWidth={1.5} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted">{label}</p>
        <div className="mt-2 text-lg font-medium leading-snug">{children}</div>
      </div>
    </div>
  );
}

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <SectionLabel n="05">Contact</SectionLabel>
        <SectionHeading>Let's talk about your next facility.</SectionHeading>
        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted">
          Tell us about your project, programme or challenge. We aim to respond to all enquiries within two working days.
        </p>

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.8fr_1.4fr]">
          <div className="grid h-fit gap-px border border-line bg-line">
            <Row icon={MapPin} label="Registered office">
              {company.address.map((l) => (<span key={l} className="block">{l}</span>))}
            </Row>
            {/* <Row icon={Phone} label="Telephone"><a href={company.phoneHref} className="hover:text-brand">{company.phone}</a></Row> */}
            <Row icon={Mail} label="Email"><a href={`mailto:${company.email}`} className="break-all hover:text-brand">{company.email}</a></Row>
            <Row icon={Clock} label="Office hours">{company.hours}</Row>
          </div>

          <div className="border border-line bg-surface p-8 md:p-12">
            <h3 className="font-display text-2xl font-bold">Send us your project enquiry</h3>
            <p className="mb-8 mt-4 max-w-xl text-lg leading-relaxed text-muted">
              Share your project location, scope, programme dates and the support you need. Drawings and specifications are welcome as attachments.
            </p>
            <EnquiryForm />
            <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-line pt-8">
              <a href={`mailto:${company.email}?subject=Project%20enquiry%20-%20Hautomate%20Pro`} className="inline-flex items-center gap-2 bg-solid px-5 py-3 font-semibold text-white hover:bg-[#104d99]">
                <Mail size={18} /> Email an enquiry
              </a>
              <a href={company.phoneHref} className="inline-flex items-center gap-2 bg-slate-700 px-5 py-3 font-semibold text-white hover:bg-slate-600">
                <Phone size={18} /> Call us
              </a>
            </div>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted">
              Enquiries are stored securely and delivered to our team. We use your details only to respond to your enquiry. See our{' '}
              <Link to="/privacy" className="underline underline-offset-4 hover:text-brand">Privacy Notice</Link> for how we handle personal data.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
