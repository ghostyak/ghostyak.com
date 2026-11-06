import type { ReactNode } from "react";
import { Check, Download, Minus, NotebookPen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { DownloadLabel, SectionHeading } from "@/components/ProductLanding";
import { notes } from "@/data/products";
import type { Dictionary } from "@/i18n/get-dictionary";
import { localeConfig, type PublishedLocale } from "@/i18n/locales";
import { cn } from "@/lib/utils";

function PointList({ points, lead, inverted = false }: { points: readonly string[]; lead?: string; inverted?: boolean }) {
  return <div className="mt-7 border-t pt-7">
    {lead && <p className="mb-4 text-sm font-medium">{lead}</p>}
    <ul className="space-y-3">{points.map(point => <li key={point} className="flex items-start gap-3 text-sm leading-6 text-muted-foreground">
      <Check className={cn("mt-1 size-4 shrink-0 stroke-[2.5]", inverted ? "text-brand" : "text-brand-foreground")} aria-hidden="true" />
      <span>{point}</span>
    </li>)}</ul>
  </div>;
}

// One plan card. The price row keeps the amount and its unit on one baseline like a storefront.
function Plan({ name, tagline, badge, price, priceUnit, action, children, inverted = false }: {
  name: string; tagline: string; badge?: string; price: string; priceUnit: string; action: ReactNode; children: ReactNode; inverted?: boolean;
}) {
  return <li className={cn("relative flex flex-col rounded-[28px] border p-7 sm:p-9", inverted ? "surface-ink border-transparent shadow-[0_1px_2px_rgb(13_21_32/0.06),0_40px_80px_-32px_rgb(13_21_32/0.5)]" : "bg-card shadow-[var(--shadow-card)]")}>
    {inverted && <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-brand/80 to-transparent" aria-hidden="true" />}
    <span className={cn("mb-6 flex size-11 items-center justify-center rounded-2xl", inverted ? "bg-brand/10 text-brand ring-1 ring-brand/30" : "bg-ink text-brand")}><NotebookPen className="size-5" aria-hidden="true" /></span>
    <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
      <h3 className="text-2xl font-semibold tracking-[-0.03em]">{name}</h3>
      {badge && <Badge variant="outline" className="min-h-6 border-transparent bg-brand px-2.5 text-ink">{badge}</Badge>}
    </div>
    <p className="mt-1 text-sm text-muted-foreground">{tagline}</p>
    <p className="mt-7 flex flex-wrap items-baseline gap-x-3 gap-y-1">
      <span className="text-5xl font-semibold tracking-[-0.045em] tabular-nums">{price}</span>
      <span className="text-sm leading-5 text-muted-foreground">{priceUnit}</span>
    </p>
    <div className="mt-7">{action}</div>
    {children}
  </li>;
}

function Availability({ available, label }: { available: boolean; label: string }) {
  return <td className="px-1 py-4 text-center sm:px-4">
    {available
      ? <Check className="mx-auto size-4 stroke-[2.5] text-brand-foreground" aria-hidden="true" />
      : <Minus className="mx-auto size-4 stroke-[2.5] text-muted-foreground" aria-hidden="true" />}
    <span className="sr-only">{label}</span>
  </td>;
}

// Pricing section of the Notes page: trial and Pro cards, footnote and the feature comparison.
export function NotesPricing({ copy, downloadAction, locale }: { copy: Dictionary["pricing"]; downloadAction: string; locale: PublishedLocale }) {
  const { trial, pro } = copy.plans;
  const { compare } = copy;
  const proPrice = new Intl.NumberFormat(localeConfig[locale].htmlLanguage, { style: "currency", currency: notes.proPrice.currency, currencyDisplay: "narrowSymbol", maximumFractionDigits: 0 }).format(notes.proPrice.amount);
  // The Pro group leads because it holds the only rows where the columns differ.
  const groups = [
    { label: compare.proGroup, rows: compare.proFeatures.map(name => ({ name, afterTrial: false })) },
    { label: compare.readGroup, rows: compare.readFeatures.map(name => ({ name, afterTrial: true })) },
    { label: compare.writeGroup, rows: compare.writeFeatures.map(name => ({ name, afterTrial: true })) },
  ];

  return <section id="pricing" className="scroll-mt-24 border-t px-4 py-16 sm:px-8 sm:py-24" aria-labelledby="notes-pricing">
    <div className="mx-auto max-w-7xl">
      <SectionHeading id="notes-pricing" eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />
      <ul className="mt-12 grid gap-5 md:grid-cols-2 md:gap-6" aria-label={copy.plans.label}>
        <Plan name={trial.name} tagline={trial.tagline} price={trial.price} priceUnit={trial.priceUnit}
          action={<a className={cn(buttonVariants({ variant: "architectureDownload", size: "lg", className: "h-auto min-h-12 w-full whitespace-normal rounded-full px-6 py-3" }))} href={notes.downloadUrl} aria-label={downloadAction}><Download className="size-4" aria-hidden="true" /><DownloadLabel label={downloadAction} architecture="x64" /></a>}>
          <PointList points={trial.points} lead={trial.lead} />
        </Plan>
        <Plan inverted name={pro.name} tagline={pro.tagline} price={proPrice} priceUnit={pro.priceUnit}
          action={<a className={cn(buttonVariants({ size: "lg", className: "h-auto min-h-12 w-full whitespace-normal rounded-full px-6 py-3" }))} href={notes.checkoutUrl}>{pro.action}</a>}>
          <PointList inverted points={pro.points} lead={copy.plans.includes} />
          <p className="mt-6 text-xs leading-5 text-muted-foreground">{pro.note}</p>
        </Plan>
      </ul>
      <p className="mt-6 text-xs leading-6 text-muted-foreground">{copy.footnote}</p>

      <div className="mt-16 sm:mt-20">
        <SectionHeading id="notes-compare" eyebrow={compare.eyebrow} title={compare.title} description={compare.description} />
        <div className="card-surface mt-10 overflow-hidden rounded-[28px]">
          {/* Fixed mark columns keep the table inside a 320px screen; feature names wrap instead. */}
          <table className="w-full table-fixed border-collapse text-sm">
            <caption className="sr-only">{compare.title}</caption>
            <colgroup><col /><col className="w-12 sm:w-28" /><col className="w-12 sm:w-28" /><col className="w-12 sm:w-28" /></colgroup>
            <thead className="text-xs sm:text-sm">
              <tr className="border-b">
                <th scope="col" rowSpan={2} className="px-4 py-4 text-left font-semibold sm:px-6">{compare.feature}</th>
                <th scope="colgroup" colSpan={2} className="px-1 pt-4 text-center font-semibold">{trial.name}</th>
                <th scope="col" rowSpan={2} className="px-1 py-4 text-center font-semibold"><span className="inline-flex min-h-6 items-center rounded-full bg-ink px-2.5 text-brand">{pro.name}</span></th>
              </tr>
              <tr className="border-b">
                <th scope="col" className="px-1 pb-3 pt-1 text-center font-normal text-muted-foreground">{compare.during}</th>
                <th scope="col" className="px-1 pb-3 pt-1 text-center font-normal text-muted-foreground">{compare.after}</th>
              </tr>
            </thead>
            {groups.map(group => <tbody key={group.label} className="divide-y border-b last:border-b-0">
              <tr className="bg-muted/60"><th scope="rowgroup" colSpan={4} className="px-4 py-2.5 text-left text-xs font-semibold tracking-wide text-brand-foreground sm:px-6">{group.label}</th></tr>
              {group.rows.map(row => <tr key={row.name}>
                <th scope="row" className="px-4 py-4 text-left font-normal leading-6 hyphens-auto sm:px-6">{row.name}</th>
                <Availability available label={compare.available} />
                <Availability available={row.afterTrial} label={row.afterTrial ? compare.available : compare.unavailable} />
                <Availability available label={compare.available} />
              </tr>)}
            </tbody>)}
          </table>
        </div>
      </div>
    </div>
  </section>;
}
