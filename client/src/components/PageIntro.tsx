type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <section className="bg-navy py-16 text-white md:py-24">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.28em] text-sky">
          <span className="size-2 rounded-full bg-sky" aria-hidden="true" />
          {eyebrow}
        </p>
        <h1 className="mt-7 max-w-4xl font-display text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold leading-[1.02] tracking-tight">
          {title}
        </h1>
        <p className="mt-7 max-w-3xl text-lg leading-relaxed text-slate-300 md:text-xl">
          {description}
        </p>
      </div>
    </section>
  );
}
