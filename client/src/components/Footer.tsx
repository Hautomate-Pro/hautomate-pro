import { useState } from 'react';
import { Link } from 'react-router-dom';
import { company, legalLinks, nav, vendors } from '../content';
import { Logo } from './Logo';

function VendorLogo({ name, file }: { name: string; file: string }) {
  const [failed, setFailed] = useState(false);
  return (
    <li className="group grid h-20 place-items-center bg-[#cdd0d6] px-4">
      {failed ? (
        <span className="text-center text-sm font-semibold text-[#2b3140]">{name}</span>
      ) : (
        <img src={`/vendors/${file}`} alt={`${name} logo`} className="max-h-10 w-auto max-w-full object-contain grayscale transition-all duration-300 group-hover:grayscale-0" onError={() => setFailed(true)} />
      )}
    </li>
  );
}

export function Footer() {
  return (
    <footer className="bg-navy text-slate-300">
      <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10">
        <h2 className="text-center font-mono text-[11px] font-normal uppercase tracking-[0.3em] text-slate-400" style={{ fontFamily: 'var(--font-mono)', letterSpacing: '0.3em' }}>
          Vendors and OEMs on projects our team has delivered
        </h2>
        <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-7">
          {vendors.map((v) => (
            <VendorLogo key={v.name} {...v} />
          ))}
        </ul>
        <p className="mx-auto mt-8 max-w-3xl text-center text-[11px] leading-relaxed text-slate-500">
          Logos are shown solely to identify vendors and equipment manufacturers present on projects in which our personnel have participated. All trade marks are the property of their respective owners. Their display does not imply any partnership, sponsorship or endorsement of Hautomate Pro Limited.
        </p>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-6 py-14 md:grid-cols-[1.4fr_1fr_1fr] lg:px-10">
          <div>
            <Logo tone="inverse" />
            <p className="mt-6 max-w-sm text-slate-400">Project management and consulting for hyperscale data centre delivery across Europe, the Middle East and Africa.</p>
          </div>
          <FooterList title="Explore">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-white">{n.label}</a>
            ))}
          </FooterList>
          <FooterList title="Legal">
            {legalLinks.map((l) => (
              <Link key={l.to} to={l.to} className="hover:text-white">{l.label}</Link>
            ))}
          </FooterList>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-[1400px] px-6 py-6 text-sm text-slate-400 lg:px-10">
          © {new Date().getFullYear()} {company.name}. Registered in England and Wales, company number {company.number}. Registered office: Office 11366, 182-184 High Street North, East Ham, London, E6 2JA, United Kingdom.
        </p>
      </div>
    </footer>
  );
}

function FooterList({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="font-mono text-xs font-normal uppercase tracking-[0.25em] text-slate-500">{title}</h3>
      <div className="mt-5 flex flex-col gap-3 text-[1.05rem]">{children}</div>
    </div>
  );
}
