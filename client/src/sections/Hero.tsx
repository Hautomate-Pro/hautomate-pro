import { ArrowRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { heroChips } from '../content';

export function Hero() {
  return (
    <section
      className="relative isolate overflow-hidden bg-navy text-white"
    >
      <img
        src="/images/hero.jpg"
        alt="Hyperscale data hall with server racks and overhead services"
        className="absolute inset-0 z-0 size-full object-cover"
      />
      <div
        className="absolute inset-0 z-[1]"
        style={{ backgroundImage: 'linear-gradient(90deg, rgb(7 14 28 / 0.86) 0%, rgb(7 14 28 / 0.68) 55%, rgb(7 14 28 / 0.45) 100%)' }}
        aria-hidden="true"
      />
      <div className="hero-grid absolute inset-0 z-[2]" aria-hidden="true" />
      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-5rem)] max-w-[1400px] flex-col justify-between px-6 pb-10 pt-20 lg:px-10">
        <div>
          <p className="flex items-center gap-3 font-mono text-[0.8rem] uppercase tracking-[0.28em] text-sky">
            <span className="size-2 rounded-full bg-sky" aria-hidden="true" />
            Hyperscale data centre delivery · EMEA
          </p>
          <h1 className="mt-8 max-w-[14ch] font-display text-[clamp(3rem,5vw,4.5rem)] font-extrabold leading-[0.98] tracking-tight md:max-w-4xl">
            Critical infrastructure, delivered <span className="text-sky">under control.</span>
          </h1>
          <p className="mt-10 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">
            Hautomate Pro provides project management and technical consulting for hyperscale data centres, from MEP and HVAC to power monitoring and building management systems, so your capacity goes live on schedule and to specification.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/contact" className="inline-flex items-center gap-3 bg-solid px-8 py-4 font-semibold transition-colors hover:bg-[#104d99]">
              Discuss your project <ArrowRight size={18} />
            </Link>
            <Link to="/services" className="border border-white/25 px-8 py-4 font-semibold transition-colors hover:bg-white/10">
              Explore services
            </Link>
          </div>
        </div>

        <div className="mt-20 flex flex-wrap items-end justify-between gap-6">
          <ul className="flex flex-wrap gap-3 font-mono text-sm uppercase tracking-wider">
            {heroChips.map((c) => (
              <li key={c} className="border border-white/20 bg-white/5 px-4 py-2">{c}</li>
            ))}
          </ul>
          <p className="flex items-center gap-2 font-mono text-sm text-slate-300">
            <MapPin size={16} /> London headquarters · Projects across Europe, Middle East & Africa
          </p>
        </div>
      </div>
    </section>
  );
}
