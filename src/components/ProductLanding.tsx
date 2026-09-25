import type { ReactNode } from "react";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, ArrowUpRight, Download, HandHeart } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { buttonVariants } from "@/components/ui/button";
import { PageHero, heroActionClassName } from "@/components/PageHero";
import { ShareLinks, type ShareLabels } from "@/components/ShareLinks";
import { cn } from "@/lib/utils";

export const textLink = "inline-flex min-h-11 items-center gap-2 text-sm font-medium text-primary underline decoration-brand decoration-2 underline-offset-4 hover:decoration-current";

type Screenshot = { src: string; width: number; height: number; alt: string; caption: string };
type Item = { title: string; description: string };
type DownloadArchitecture = "x64" | "ARM64";
export type ProductLandingCopy = {
  description: string;
  downloadAction: string;
  howToAction: string;
  workflow: { eyebrow: string; title: string; description: string; steps: readonly Item[] };
  features: { eyebrow: string; title: string; items: readonly Item[] };
  privacy: { eyebrow: string; title: string; description: string };
  faq: { title: string; items: readonly { question: string; answer: string }[] };
  download: { title: string; description: string };
};

export function SectionHeading({ id, eyebrow, title, description }: { id: string; eyebrow: string; title: string; description?: string }) {
  return <div><p className="mb-4 text-xs font-semibold tracking-wide text-brand-foreground">{eyebrow}</p><h2 id={id} className="whitespace-pre-line text-3xl font-semibold leading-[1.25] tracking-[-0.035em] text-balance sm:text-4xl">{title}</h2>{description && <p className="mt-5 max-w-xl text-base leading-8 text-muted-foreground">{description}</p>}</div>;
}

function Frame({ screenshot, sizes, preload = false }: { screenshot: Screenshot; sizes: string; preload?: boolean }) {
  return <div className="overflow-hidden rounded-2xl bg-ink p-1.5 shadow-xl shadow-ink/15 sm:p-2">
    <Image src={screenshot.src} width={screenshot.width} height={screenshot.height} alt={screenshot.alt} sizes={sizes} preload={preload} className="h-auto w-full rounded-xl" />
  </div>;
}

function DownloadLabel({ label, architecture }: { label: string; architecture?: DownloadArchitecture }) {
  const position = architecture ? label.indexOf(architecture) : -1;
  if (!architecture || position < 0) return label;

  const before = label.slice(0, position).trim();
  const after = label.slice(position + architecture.length).trim();
  return <span className="inline-flex flex-wrap items-center justify-center gap-1.5" aria-hidden="true">
    {before && <span>{before}</span>}
    <strong className="rounded-md bg-brand px-1.5 py-0.5 text-xs font-bold leading-none text-ink">{architecture}</strong>
    {after && <span>{after}</span>}
  </span>;
}

// Shared product landing: hero, framed main screenshot, three steps, feature cards with
// secondary screenshots, an ink highlight, FAQ and a download band.
export function ProductLanding({ id, name, badges, copy, screenshots, featureIcons, highlightIcon: HighlightIcon, productIcon: ProductIcon, downloadUrl, downloadArchitecture, alternateDownload, repository, viewScreenshot, supportUrl, supportAction, shareUrl, shareLabels }: {
  id: string;
  name: string;
  badges: ReactNode;
  copy: ProductLandingCopy;
  // The first screenshot is the hero; the rest appear under the features.
  screenshots: readonly Screenshot[];
  // Same order as copy.features.items.
  featureIcons: readonly LucideIcon[];
  highlightIcon: LucideIcon;
  productIcon: LucideIcon;
  downloadUrl: string;
  downloadArchitecture?: DownloadArchitecture;
  alternateDownload?: { url: string; label: string; architecture?: DownloadArchitecture };
  repository: { url: string; label: string };
  viewScreenshot: string;
  supportUrl: string;
  supportAction: string;
  shareUrl: string;
  shareLabels: ShareLabels;
}) {
  const [main, ...secondary] = screenshots;
  const downloadLink = <a className={cn(buttonVariants({ variant: downloadArchitecture ? "architectureDownload" : "default", size: "lg", className: heroActionClassName }))} href={downloadUrl} aria-label={copy.downloadAction}><Download className="size-4" aria-hidden="true" /><DownloadLabel label={copy.downloadAction} architecture={downloadArchitecture} /></a>;
  const alternateDownloadLink = alternateDownload && <a className={cn(buttonVariants({ variant: "architectureDownload", size: "lg", className: heroActionClassName }))} href={alternateDownload.url} aria-label={alternateDownload.label}><Download className="size-4" aria-hidden="true" /><DownloadLabel label={alternateDownload.label} architecture={alternateDownload.architecture} /></a>;

  return <main id="main-content" className="[overflow-wrap:anywhere]">
    <section className="px-4 pb-12 sm:px-8 sm:pb-20" aria-labelledby={`${id}-title`}>
      <div className="mx-auto max-w-7xl">
        <PageHero
          id={`${id}-title`}
          eyebrow={badges}
          title={name}
          description={copy.description}
          actions={<>{downloadLink}{alternateDownloadLink}<a className={cn(buttonVariants({ variant: "outline", size: "lg", className: heroActionClassName }))} href="#how-it-works">{copy.howToAction}<ArrowRight aria-hidden="true" /></a><a className={cn(buttonVariants({ variant: "support", size: "lg", className: heroActionClassName }))} href={supportUrl}><HandHeart className="size-4" aria-hidden="true" />{supportAction}</a></>}
        />
        <figure className="relative mx-auto max-w-5xl">
          <div className="absolute inset-x-[10%] -bottom-6 top-1/3 rounded-full bg-brand/25 blur-3xl" aria-hidden="true" />
          <a className="relative block rounded-3xl" href={main.src} target="_blank" rel="noreferrer" aria-label={`${viewScreenshot}: ${main.caption}`}>
            <Frame screenshot={main} preload sizes="(min-width: 1088px) 1024px, (min-width: 640px) calc(100vw - 64px), calc(100vw - 32px)" />
          </a>
          <figcaption className="relative mt-4 flex flex-wrap items-center justify-between gap-x-5 text-xs leading-6 text-muted-foreground"><span>{main.caption}</span><a href={main.src} target="_blank" rel="noreferrer" className={textLink}>{viewScreenshot}<ArrowUpRight className="size-3.5" aria-hidden="true" /></a></figcaption>
        </figure>
      </div>
    </section>

    <section id="how-it-works" className="scroll-mt-24 border-t px-4 py-16 sm:px-8 sm:py-24" aria-labelledby={`${id}-workflow`}>
      <div className="mx-auto max-w-7xl">
        <SectionHeading id={`${id}-workflow`} eyebrow={copy.workflow.eyebrow} title={copy.workflow.title} description={copy.workflow.description} />
        <ol className="mt-12 grid gap-4 md:grid-cols-3 md:gap-6">{copy.workflow.steps.map((step, index) => <li key={step.title} className="rounded-3xl border bg-card p-6 sm:p-7"><span className="flex size-9 items-center justify-center rounded-full bg-brand font-mono text-xs font-semibold text-ink" aria-hidden="true">0{index + 1}</span><h3 className="mb-3 mt-4 text-base font-semibold">{step.title}</h3><p className="text-sm leading-7 text-muted-foreground">{step.description}</p></li>)}</ol>
      </div>
    </section>

    <section className="border-y bg-muted/50 px-4 py-16 sm:px-8 sm:py-24" aria-labelledby={`${id}-features`}>
      <div className="mx-auto max-w-7xl">
        <SectionHeading id={`${id}-features`} eyebrow={copy.features.eyebrow} title={copy.features.title} />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{copy.features.items.map((item, index) => {
          const Icon = featureIcons[index];
          return <li key={item.title} className="rounded-3xl border bg-card p-6"><span className="mb-5 flex size-11 items-center justify-center rounded-2xl bg-ink text-brand"><Icon className="size-5" aria-hidden="true" /></span><h3 className="font-semibold">{item.title}</h3><p className="mt-2 text-sm leading-7 text-muted-foreground">{item.description}</p></li>;
        })}</ul>
        {secondary.length > 0 && <div className={cn("mt-12 grid gap-8", secondary.length > 1 ? "md:grid-cols-2" : "mx-auto max-w-3xl")}>{secondary.map(screenshot => <figure key={screenshot.src}>
          <a className="block rounded-2xl" href={screenshot.src} target="_blank" rel="noreferrer" aria-label={`${viewScreenshot}: ${screenshot.caption}`}>
            <Frame screenshot={screenshot} sizes={secondary.length > 1 ? "(min-width: 1280px) 596px, (min-width: 768px) calc((100vw - 96px) / 2), calc(100vw - 32px)" : "(min-width: 832px) 768px, (min-width: 640px) calc(100vw - 64px), calc(100vw - 32px)"} />
          </a>
          <figcaption className="mt-3 text-xs leading-6 text-muted-foreground">{screenshot.caption}</figcaption>
        </figure>)}</div>}
      </div>
    </section>

    <section className="px-4 py-16 sm:px-8 sm:py-24" aria-labelledby={`${id}-highlight`}>
      <div className="surface-ink mx-auto flex max-w-7xl flex-col gap-6 rounded-3xl p-8 shadow-2xl shadow-ink/20 sm:flex-row sm:items-center sm:gap-10 sm:p-12">
        <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-brand/10 text-brand ring-1 ring-brand/30"><HighlightIcon className="size-6" aria-hidden="true" /></span>
        <SectionHeading id={`${id}-highlight`} eyebrow={copy.privacy.eyebrow} title={copy.privacy.title} description={copy.privacy.description} />
      </div>
    </section>

    <section className="border-t px-4 py-16 sm:px-8 sm:py-24" aria-labelledby={`${id}-faq`}>
      <div className="mx-auto grid max-w-7xl items-start gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
        <div><p className="mb-4 font-mono text-xs font-semibold text-brand-foreground">FAQ</p><h2 id={`${id}-faq`} className="text-3xl font-semibold tracking-tight">{copy.faq.title}</h2></div>
        <Accordion type="multiple" defaultValue={["faq-0"]} className="border-t">
          {copy.faq.items.map((item, index) => <AccordionItem value={`faq-${index}`} key={item.question}><AccordionTrigger className="min-h-16 py-6 text-base font-medium leading-7">{item.question}</AccordionTrigger><AccordionContent className="pb-6 text-sm leading-7 text-muted-foreground"><p>{item.answer}</p></AccordionContent></AccordionItem>)}
        </Accordion>
      </div>
    </section>

    <section id="download" className="surface-ink scroll-mt-24 px-4 py-16 sm:px-8 sm:py-24" aria-labelledby={`${id}-download`}>
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-8 md:flex-row md:items-end md:justify-between">
        <div><span className="mb-6 flex size-14 items-center justify-center rounded-2xl bg-brand/10 text-brand ring-1 ring-brand/30"><ProductIcon className="size-6" aria-hidden="true" /></span><h2 id={`${id}-download`} className="whitespace-pre-line text-3xl font-semibold leading-tight tracking-[-0.035em] sm:text-4xl">{copy.download.title}</h2><p className="mt-5 text-sm leading-7 text-muted-foreground">{copy.download.description}</p></div>
        <div className="w-full md:w-auto"><div className="flex flex-col items-start gap-2 md:items-end">{downloadLink}{alternateDownloadLink}<a href={repository.url} className={textLink} target="_blank" rel="noreferrer">{repository.label}<ArrowUpRight className="size-3.5" aria-hidden="true" /></a></div><div className="mt-5 md:min-w-80"><ShareLinks pageUrl={shareUrl} pageTitle={name} labels={shareLabels} /></div></div>
      </div>
    </section>
  </main>;
}
