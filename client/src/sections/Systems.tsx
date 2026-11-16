import { Building2, Fan, PlugZap, Wrench } from 'lucide-react';
import { useState } from 'react';
import { SectionHeading, SectionLabel } from '../components/SectionLabel';
import { SystemIcon, systems } from '../content';

const icons: Record<SystemIcon, typeof Wrench> = { wrench: Wrench, fan: Fan, plug: PlugZap, building: Building2 };

export function Systems() {
  const [active, setActive] = useState(0);
  const current = systems[active];
  const Watermark = icons[current.icon];

  return (
    <section id="systems" className="bg-alt py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        <SectionLabel n="02">Systems expertise</SectionLabel>
        <SectionHeading>Four disciplines. One integrated view of your facility.</SectionHeading>
        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted">
          Hyperscale delivery fails at the interfaces. We manage MEP, HVAC, EPMS and BMS as one connected system, not four separate packages.
        </p>

        <div className="mt-16 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,2.1fr)]">
          <div role="tablist" aria-label="Systems" className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:gap-3 lg:overflow-visible lg:pb-0">
            {systems.map((s, i) => {
              const on = i === active;
              return (
                <button
                  key={s.key}
                  role="tab"
                  id={`tab-${s.key}`}
                  aria-selected={on}
                  aria-controls="system-panel"
                  aria-label={`${s.short}: ${s.full}`}
                  onClick={() => setActive(i)}
                  className={`flex min-w-48 shrink-0 items-center gap-5 border px-4 py-4 text-left transition-colors lg:min-w-0 ${on ? 'border-brand bg-surface' : 'border-transparent hover:border-line hover:bg-surface/60'}`}
                >
                  <span className={`font-display text-2xl font-black [font-stretch:125%] ${on ? 'text-brand' : 'text-ink/70'}`}>{s.short}</span>
                  <span className="hidden text-sm leading-snug text-muted lg:block">{s.full}</span>
                </button>
              );
            })}
          </div>

          <div id="system-panel" role="tabpanel" aria-labelledby={`tab-${current.key}`} className="relative mt-6 overflow-hidden border border-line bg-surface p-6 sm:p-8 lg:mt-0 lg:p-12">
            <Watermark aria-hidden="true" strokeWidth={0.8} className="pointer-events-none absolute -bottom-6 -right-6 size-48 text-brand/10" />
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand">{current.key}</p>
            <h3 className="pt-3 font-display text-2xl font-bold tracking-tight md:text-3xl">{current.full}</h3>
            <p className="max-w-2xl pt-4 text-base leading-relaxed text-muted">{current.body}</p>
            <ul className="relative grid gap-4 pt-8 sm:grid-cols-2">
              {current.points.map((p) => (
                <li key={p} className="flex gap-4 border-t border-line pt-4 text-sm leading-5">
                  <span className="mt-1.5 size-2 shrink-0 bg-solid" aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
