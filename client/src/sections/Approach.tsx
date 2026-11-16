import { SectionHeading, SectionLabel } from '../components/SectionLabel';
import { phases } from '../content';

export function Approach() {
  return (
    <section id="approach" className="py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <SectionLabel n="03">Our approach</SectionLabel>
        <SectionHeading>A disciplined lifecycle, from first sketch to live load.</SectionHeading>

        <ol className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:mt-20 lg:grid-cols-5">
          {phases.map((p, i) => (
            <li key={p.title} className="relative pr-8 pt-10">
              <span className="absolute left-0 right-0 top-[5px] h-px bg-line" aria-hidden="true" />
              <span className="absolute left-0 top-0 size-3 bg-solid" aria-hidden="true" />
              <p className="font-mono text-sm text-muted">Phase {String(i + 1).padStart(2, '0')}</p>
              <h3 className="mt-5 font-display text-2xl font-bold">{p.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted">{p.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
