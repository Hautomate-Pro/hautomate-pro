import { SectionHeading, SectionLabel } from '../components/SectionLabel';
import { aboutPoints, regions } from '../content';

export function About() {
  return (
    <section id="about" className="bg-alt py-24 md:py-32">
      <div className="mx-auto grid max-w-[1400px] items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">
        <div className="relative mb-10 lg:mb-0">
          <div
            role="img"
            aria-label="Engineers reviewing plans in a data centre plant room"
            className="aspect-[4/5] w-full bg-navy bg-cover bg-center"
            style={{ backgroundImage: 'url(/images/about.jpg), linear-gradient(160deg, #0b2a4a, #070e1c)' }}
          />
          <div className="absolute -bottom-8 right-6 w-[min(21rem,85%)] bg-surface p-7 shadow-xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand">Registered in England &amp; Wales</p>
            <p className="mt-3 font-display text-2xl font-bold leading-tight">London-based. EMEA-ready.</p>
          </div>
        </div>

        <div>
          <SectionLabel n="04">About us</SectionLabel>
          <SectionHeading>Specialists in the hardest part of the build.</SectionHeading>
          <p className="mt-8 text-xl leading-relaxed text-muted">
            Hautomate Pro Limited is a London-based consultancy focused on one thing: getting hyperscale data centres built, integrated and handed over properly. Our team brings hands-on experience delivering MEP, HVAC, EPMS and BMS scopes on major projects across the EMEA region, working alongside leading global OEMs, engineering firms and system integrators.
          </p>
          <ul className="mt-8 grid gap-3">
            {aboutPoints.map((p) => (
              <li key={p} className="flex gap-4 text-lg">
                <span className="mt-2.5 size-2 shrink-0 bg-solid" aria-hidden="true" />
                {p}
              </li>
            ))}
          </ul>
          <ul className="mt-10 grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2">
            {regions.map((r) => (
              <li key={r.name} className="bg-surface p-6">
                <p className="font-display text-lg font-bold">{r.name}</p>
                <p className="mt-1 text-sm text-muted">{r.note}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
