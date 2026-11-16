import { ClipboardCheck, Compass, Gauge, HardHat, ShieldCheck, Users } from 'lucide-react';
import { SectionHeading, SectionLabel } from '../components/SectionLabel';
import { ServiceIcon, services } from '../content';

const icons: Record<ServiceIcon, typeof HardHat> = {
  hardhat: HardHat, users: Users, compass: Compass, clipboard: ClipboardCheck, gauge: Gauge, shield: ShieldCheck,
};

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <SectionLabel n="01">Services</SectionLabel>
        <SectionHeading>Delivery leadership for facilities where downtime is not an option.</SectionHeading>
        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted">
          We support developers, operators and principal contractors at every stage, from concept and design through construction, commissioning and handover.
        </p>

        <ul className="mt-16 grid gap-px border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = icons[s.icon];
            return (
              <li key={s.title} className="group bg-surface p-9 transition-colors hover:bg-brand/10">
                <div className="flex items-start justify-between">
                  <Icon size={30} strokeWidth={1.5} className="text-brand" aria-hidden="true" />
                  <span className="font-mono text-sm text-muted">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="mt-10 font-display text-xl font-bold leading-tight">{s.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted">{s.body}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
