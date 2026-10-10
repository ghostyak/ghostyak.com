import { ArrowUpRight, Bookmark, Check, Download, Eye, HardDrive, Highlighter, Info, Keyboard, NotebookPen, Save, Type } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { PageHero, heroActionClassName } from "@/components/PageHero";
import { DownloadLabel, Frame, ProductDownload, ProductFaq, ProductHighlight, SectionHeading, textLink } from "@/components/ProductLanding";
import { ShareLinks } from "@/components/ShareLinks";
import { notes } from "@/data/products";
import { getDictionary } from "@/i18n/get-dictionary";
import type { PublishedLocale } from "@/i18n/locales";
import { localizedPath } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { siteUrl } from "@/seo";

// Order of the feature rows; the annotate screenshot is the hero.
const showcaseOrder = ["pen", "search", "library", "pages", "spread"] as const;
// Same order as copy.more.items.
const moreIcons = [Type, Highlighter, Bookmark, Eye, Save, Keyboard];

// Flagship landing: hero, one screenshot per feature row, extra feature cards,
// local storage highlight, beta terms, FAQ and a download band.
export async function NotesProduct({ locale }: { locale: PublishedLocale }) {
  const dictionary = await getDictionary(locale);
  const copy = dictionary.notes;
  const viewScreenshot = dictionary.landing.actions.viewScreenshot;
  const hero = { ...notes.screenshots.annotate, ...copy.screenshots.annotate };
  const downloadLink = <a className={cn(buttonVariants({ variant: "architectureDownload", size: "lg", className: heroActionClassName }))} href={notes.downloadUrl} aria-label={copy.downloadAction}><Download className="size-4" aria-hidden="true" /><DownloadLabel label={copy.downloadAction} architecture="x64" /></a>;

  return <main id="main-content" className="[overflow-wrap:anywhere]">
    <section className="px-4 pb-12 sm:px-8 sm:pb-20" aria-labelledby="notes-title">
      <div className="mx-auto max-w-7xl">
        <PageHero
          id="notes-title"
          eyebrow={<>
            <Badge className="min-h-7 gap-2 rounded-full bg-ink px-3 text-white"><NotebookPen className="size-3 text-brand" aria-hidden="true" />{copy.betaBadge}</Badge>
            <Badge variant="outline" className="min-h-7 rounded-full bg-card px-3">{notes.platform}</Badge>
            <Badge variant="outline" className="min-h-7 rounded-full border-transparent bg-brand px-3 text-ink">{copy.trialBadge}</Badge>
          </>}
          title={notes.name}
          description={copy.description}
          actions={<div className="flex max-w-full flex-col items-center gap-3">
            {downloadLink}
            <ShareLinks pageUrl={`${siteUrl}${localizedPath(locale, notes.pagePath)}`} pageTitle={notes.name} labels={dictionary.share} inline />
          </div>}
          note={copy.heroNote}
        />
        <figure className="relative mx-auto max-w-6xl">
          <div className="absolute inset-x-[10%] -bottom-6 top-1/3 rounded-full bg-brand/25 blur-3xl" aria-hidden="true" />
          <a className="relative block rounded-3xl" href={hero.src} target="_blank" rel="noreferrer" aria-label={`${viewScreenshot}: ${hero.caption}`}>
            <Frame screenshot={hero} preload sizes="(min-width: 1216px) 1152px, (min-width: 640px) calc(100vw - 64px), calc(100vw - 32px)" />
          </a>
          <figcaption className="relative mt-4 flex flex-wrap items-center justify-between gap-x-5 text-xs leading-6 text-muted-foreground"><span>{hero.caption}</span><a href={hero.src} target="_blank" rel="noreferrer" className={textLink}>{viewScreenshot}<ArrowUpRight className="size-3.5" aria-hidden="true" /></a></figcaption>
        </figure>
      </div>
    </section>

    <section id="features" className="scroll-mt-24 border-t px-4 py-16 sm:px-8 sm:py-24" aria-labelledby="notes-showcase">
      <div className="mx-auto max-w-7xl">
        <SectionHeading id="notes-showcase" eyebrow={copy.showcase.eyebrow} title={copy.showcase.title} description={copy.showcase.description} />
        <div className="mt-14 space-y-16 sm:mt-20 sm:space-y-28">{showcaseOrder.map((key, index) => {
          const item = copy.showcase.items[key];
          const screenshot = { ...notes.screenshots[key], ...copy.screenshots[key] };
          const flipped = index % 2 === 1;
          return <article key={key} className={cn("grid items-center gap-8 lg:gap-16", flipped ? "lg:grid-cols-[1.25fr_0.75fr]" : "lg:grid-cols-[0.75fr_1.25fr]")}>
            <div className={cn(flipped && "lg:order-2")}>
              <p className="mb-4 text-xs font-semibold tracking-wide text-brand-foreground">{item.eyebrow}</p>
              <h3 className="whitespace-pre-line text-2xl font-semibold leading-[1.3] tracking-[-0.03em] text-balance sm:text-3xl">{item.title}</h3>
              <p className="mt-4 text-base leading-8 text-muted-foreground">{item.description}</p>
              <ul className="mt-6 space-y-3">{item.points.map(point => <li key={point} className="flex items-start gap-3 text-sm leading-6"><span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-brand text-ink"><Check className="size-3 stroke-[3]" aria-hidden="true" /></span>{point}</li>)}</ul>
            </div>
            <figure>
              <a className="block rounded-2xl" href={screenshot.src} target="_blank" rel="noreferrer" aria-label={`${viewScreenshot}: ${screenshot.caption}`}>
                <Frame screenshot={screenshot} sizes="(min-width: 1280px) 760px, (min-width: 1024px) calc((100vw - 128px) * 0.625), (min-width: 640px) calc(100vw - 64px), calc(100vw - 32px)" />
              </a>
              <figcaption className="mt-3 text-xs leading-6 text-muted-foreground">{screenshot.caption}</figcaption>
            </figure>
          </article>;
        })}</div>
      </div>
    </section>

    <section className="border-y bg-muted/50 px-4 py-16 sm:px-8 sm:py-24" aria-labelledby="notes-more">
      <div className="mx-auto max-w-7xl">
        <SectionHeading id="notes-more" eyebrow={copy.more.eyebrow} title={copy.more.title} />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{copy.more.items.map((item, index) => {
          const Icon = moreIcons[index];
          return <li key={item.title} className="rounded-3xl border bg-card p-6"><span className="mb-5 flex size-11 items-center justify-center rounded-2xl bg-ink text-brand"><Icon className="size-5" aria-hidden="true" /></span><h3 className="font-semibold">{item.title}</h3><p className="mt-2 text-sm leading-7 text-muted-foreground">{item.description}</p></li>;
        })}</ul>
      </div>
    </section>

    <ProductHighlight id="notes-highlight" icon={HardDrive} eyebrow={copy.privacy.eyebrow} title={copy.privacy.title} description={copy.privacy.description} />

    <section id="beta" className="scroll-mt-24 border-t px-4 py-16 sm:px-8 sm:py-24" aria-labelledby="notes-beta">
      <div className="mx-auto max-w-7xl">
        <SectionHeading id="notes-beta" eyebrow={copy.beta.eyebrow} title={copy.beta.title} description={copy.beta.description} />
        <ol className="mt-12 grid gap-4 md:grid-cols-3 md:gap-6">{copy.beta.steps.map((step, index) => <li key={step.title} className="rounded-3xl border bg-card p-6 sm:p-7"><span className="flex size-9 items-center justify-center rounded-full bg-brand font-mono text-xs font-semibold text-ink" aria-hidden="true">0{index + 1}</span><h3 className="mb-3 mt-4 text-base font-semibold">{step.title}</h3><p className="text-sm leading-7 text-muted-foreground">{step.description}</p></li>)}</ol>
        <p className="mt-6 flex items-start gap-2.5 text-sm leading-7 text-muted-foreground"><Info className="mt-1.5 size-4 shrink-0 text-brand-foreground" aria-hidden="true" />{copy.beta.note}</p>
      </div>
    </section>

    <ProductFaq id="notes-faq" title={copy.faq.title} items={copy.faq.items} />
    <ProductDownload id="notes-download" icon={NotebookPen} title={copy.download.title} description={copy.download.description}>{downloadLink}</ProductDownload>
  </main>;
}
