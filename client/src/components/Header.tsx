import { Menu, Phone, X } from 'lucide-react';
import { useState } from 'react';
import { company, nav } from '../content';
import { Logo } from './Logo';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between gap-3 px-4 sm:gap-6 sm:px-6 lg:px-10 max-[360px]:gap-2 max-[360px]:px-3">
        <a href="/" aria-label="Hautomate Pro home">
          <Logo />
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-9 lg:flex">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-[0.95rem] font-medium text-ink/70 transition-colors hover:text-brand">
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3 max-[360px]:gap-1">
          <a href={company.phoneHref} className="hidden items-center gap-2 font-mono text-sm text-ink/70 hover:text-brand xl:flex">
            <Phone size={16} /> {company.phone}
          </a>
          <ThemeToggle />
          <a href="/#contact" className="hidden bg-solid px-5 py-3 text-[0.95rem] font-semibold text-white transition-colors hover:bg-[#104d99] sm:inline-block">
            Discuss a project
          </a>
          <button
            type="button"
            className="grid size-10 place-items-center max-[360px]:size-9 lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <nav aria-label="Mobile" className="border-t border-line bg-bg px-6 py-4 lg:hidden">
          {nav.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block py-3 text-lg font-medium">
              {n.label}
            </a>
          ))}
          <a href="/#contact" onClick={() => setOpen(false)} className="mt-3 block bg-solid px-5 py-3 text-center font-semibold text-white">
            Discuss a project
          </a>
        </nav>
      )}
    </header>
  );
}
