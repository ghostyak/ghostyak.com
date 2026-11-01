import type { ReactNode } from "react";

export const heroActionClassName = "h-auto min-h-12 max-w-full whitespace-normal rounded-full px-6 py-3 text-sm";

export function PageHero({ id, eyebrow, title, description, actions, note }: {
  id?: string;
  eyebrow?: ReactNode;
  title: string;
  description: string;
  actions?: ReactNode;
  note?: string;
}) {
  return <header data-page-hero className="mx-auto flex max-w-5xl flex-col items-center pb-14 pt-14 text-center wrap-anywhere sm:pb-20 sm:pt-24">
    {eyebrow && <div className="mb-6 flex min-h-7 flex-wrap items-center justify-center gap-2">{eyebrow}</div>}
    <h1 id={id} className="max-w-4xl whitespace-pre-line text-4xl font-semibold leading-[1.12] tracking-[-0.045em] text-balance sm:text-5xl lg:text-6xl">{title}</h1>
    <p className="mt-6 max-w-2xl text-base leading-8 text-balance text-muted-foreground sm:text-lg sm:leading-8">{description}</p>
    {actions && <div className="mt-8 flex max-w-full flex-wrap items-center justify-center gap-3">{actions}</div>}
    {note && <p className="mt-5 max-w-2xl text-sm leading-7 text-balance text-muted-foreground">{note}</p>}
  </header>;
}
