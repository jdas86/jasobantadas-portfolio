export function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return (
    <div className="max-w-3xl">
      <div className="mb-3 text-sm uppercase tracking-[0.28em] text-cyan-300/80">{eyebrow}</div>
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      {copy ? <p className="mt-4 text-base leading-7 text-slate-300">{copy}</p> : null}
    </div>
  );
}
