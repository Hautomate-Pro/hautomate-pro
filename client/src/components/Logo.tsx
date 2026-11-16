export function Logo({ tone = 'default' }: { tone?: 'default' | 'inverse' }) {
  if (tone === 'inverse') return <BrandImage suffix="-light" />;
  return (
    <>
      <span className="dark:hidden">
        <BrandImage suffix="" />
      </span>
      <span className="hidden dark:inline-flex">
        <BrandImage suffix="-light" />
      </span>
    </>
  );
}

function BrandImage({ suffix }: { suffix: '' | '-light' }) {
  return (
    <span className="inline-flex max-w-full items-center gap-2 sm:gap-3 max-[360px]:gap-1.5">
      <img
        src={`/brand/icon${suffix}.png`}
        alt=""
        aria-hidden="true"
        className="size-9 shrink-0 object-contain sm:size-10 lg:size-11 max-[360px]:size-7"
      />
      <img
        src={`/brand/wordmark${suffix}.png`}
        alt="Hautomate Pro"
        className="h-auto w-[clamp(7rem,45vw,16rem)] max-h-8 object-contain sm:w-64 lg:w-[12.5rem] max-[360px]:w-28"
      />
    </span>
  );
}
