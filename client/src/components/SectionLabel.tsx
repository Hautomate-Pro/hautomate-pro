export function SectionLabel({ n, children, inverse }: { n: string; children: string; inverse?: boolean }) {
  return (
    <p className={`flex items-center gap-4 font-mono text-[0.78rem] uppercase tracking-[0.22em] ${inverse ? 'text-sky' : 'text-brand'}`}>
      <span>{n}</span>
      <span className="h-px w-16 bg-current opacity-60" />
      <span>{children}</span>
    </p>
  );
}

export function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="mt-6 max-w-3xl font-display text-4xl font-bold leading-none md:text-5xl">{children}</h2>;
}
