import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { notes } from "@/data/products";
import type { Dictionary } from "@/i18n/get-dictionary";
import type { PublishedLocale } from "@/i18n/locales";
import { localizedPath } from "@/i18n/routing";
import { cn } from "@/lib/utils";

const actionClassName = "h-auto min-h-12 max-w-full whitespace-normal rounded-full px-6 py-3";

// Home spotlight for the flagship product: full-width card above the product categories.
export function NotesFeatureCard({ copy, locale, viewAction }: {
  copy: Dictionary["notes"];
  locale: PublishedLocale;
  viewAction: string;
}) {
  const href = localizedPath(locale, notes.pagePath);
  return <section aria-labelledby="featured-notes">
    <Card className="gap-0 overflow-hidden rounded-3xl border-border/80 py-0 shadow-xl shadow-ink/10">
      <article id="notes" className="grid scroll-mt-24 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="flex flex-col items-start justify-center p-6 sm:p-10 lg:p-12">
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="min-h-6 border-transparent bg-brand px-2.5 text-ink">{copy.featuredEyebrow}</Badge>
            <Badge variant="outline" className="min-h-6 border-transparent bg-ink px-2.5 text-white">{copy.betaBadge}</Badge>
            <Badge variant="outline" className="min-h-6 px-2.5">{notes.platform}</Badge>
          </div>
          <h2 id="featured-notes" className="mt-5 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">{notes.name}</h2>
          <p className="mt-4 text-base leading-8 text-muted-foreground">{copy.cardDescription}</p>
          <a className={cn(buttonVariants({ size: "lg", className: `mt-7 ${actionClassName}` }))} href={href}>{viewAction}<ArrowRight aria-hidden="true" /></a>
          <p className="mt-4 text-xs leading-6 text-muted-foreground">{copy.trialBadge}</p>
        </div>
        {/* A gold panel keeps the card edge visible where it overlaps the ink hero. */}
        <figure className="order-first flex items-center bg-linear-to-br from-brand/30 to-brand/5 p-4 sm:p-8 lg:order-none">
          <a href={href} className="block w-full rounded-xl" aria-label={`${viewAction}: ${notes.name}`}>
            <Image {...notes.screenshots.annotate} preload className="h-auto w-full rounded-xl shadow-xl shadow-ink/20 ring-1 ring-ink/10" alt={copy.screenshots.annotate.alt} sizes="(min-width: 1280px) 670px, (min-width: 1024px) calc((100vw - 64px) * 0.6 - 64px), (min-width: 640px) calc(100vw - 128px), calc(100vw - 64px)" />
          </a>
        </figure>
      </article>
    </Card>
  </section>;
}
