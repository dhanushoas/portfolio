import { Reveal } from './reveal';

/** Numbered section heading with a gradient accent bar. */
export function SectionHeading({ index, eyebrow, title, subtitle }: { index: string; eyebrow: string; title: string; subtitle?: string }) {
  return (
    <Reveal className="mb-10 text-center md:mb-14">
      <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary dark:text-accent">
        <span className="font-code">{index}</span>
        <span className="h-px w-4 bg-current opacity-50" />
        {eyebrow}
      </p>
      <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-primary via-accent to-pink-500" />
      {subtitle && <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground sm:text-base">{subtitle}</p>}
    </Reveal>
  );
}
