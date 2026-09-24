import { cn } from "@/lib/utils";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Check, Download, Folder, HandHeart, Link2, Clock3, ImageIcon } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { boxes } from "@/data/products";
import { landingLinks as links, landingMedia as media, landingTimes } from "@/data/landing";
import type { Dictionary } from "@/i18n/get-dictionary";
import { localeConfig, type PublishedLocale } from "@/i18n/locales";
import { ShareLinks, type ShareLabels } from "@/components/ShareLinks";
import { PageHero, heroActionClassName } from "@/components/PageHero";

type Copy = Dictionary["landing"];
const textLink = "inline-flex min-h-11 items-center gap-2 text-sm font-medium text-primary underline decoration-brand decoration-2 underline-offset-4 hover:decoration-current";

function DownloadLink({ copy }: { copy: Copy }) {
  return <a className={cn(buttonVariants({ size: "lg", className: heroActionClassName }))} href={boxes.download.installerUrl}><Download className="size-4" aria-hidden="true" />{copy.actions.download}</a>;
}

function SectionHeading({ eyebrow, title, description, id }: { eyebrow: string; title: string; description?: string; id: string }) {
  return <div><p className="mb-4 text-xs font-semibold tracking-wide text-brand-foreground">{eyebrow}</p><h2 id={id} className="whitespace-pre-line text-3xl font-semibold leading-[1.25] tracking-[-0.035em] text-balance sm:text-4xl">{title}</h2>{description && <p className="mt-5 max-w-xl text-base leading-8 text-muted-foreground">{description}</p>}</div>;
}

function WorkflowDiagram({ copy }: { copy: Copy }) {
  return <figure className="rounded-3xl border bg-card p-4 shadow-lg shadow-ink/5 sm:p-8">
    <div className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-2 sm:gap-5">
      <div><p className="mb-4 text-xs font-medium text-muted-foreground">{copy.workflow.originalLabel}</p><div className="space-y-2">{copy.workflow.originalItems.map(item => <div className="flex min-h-12 items-center gap-2 rounded-xl border bg-muted/60 px-2 py-2.5 sm:px-3" key={item}><Folder className="hidden size-4 shrink-0 text-muted-foreground sm:block" aria-hidden="true" /><span className="text-xs leading-5">{item}</span></div>)}</div></div>
      <ArrowRight className="size-4 text-brand-foreground sm:size-5" aria-hidden="true" />
      <div className="surface-ink overflow-hidden rounded-2xl shadow-lg shadow-ink/20"><p className="bg-brand px-3 py-3 text-xs font-semibold text-ink">{copy.workflow.boxLabel}</p><div className="space-y-5 px-3 py-5">{copy.workflow.boxItems.map(item => <div key={item} className="flex items-center gap-2 text-xs"><Link2 className="size-3 shrink-0 text-brand" aria-hidden="true" />{item}</div>)}</div></div>
    </div>
    <figcaption className="mt-5 text-center text-xs leading-6 text-muted-foreground">{copy.workflow.connection}<span className="mx-2" aria-hidden="true">·</span>{copy.workflow.result}</figcaption>
  </figure>;
}

export function RenewalLanding({ copy, locale, currentPath, supportUrl, supportAction, shareLabels }: { copy: Copy; locale: PublishedLocale; currentPath: string; supportUrl: string; supportAction: string; shareLabels: ShareLabels }) {
  return <main id="main-content" className="scroll-mt-24 [overflow-wrap:anywhere]">
    <section className="px-4 pb-12 sm:px-8 sm:pb-20" aria-labelledby="renewal-title">
      <div className="mx-auto max-w-7xl">
        <PageHero
          id="renewal-title"
          eyebrow={<Badge variant="outline" className="min-h-7 gap-2 rounded-full bg-card px-3"><span className="flex size-5 items-center justify-center rounded-full bg-ink"><Image src="/images/ghostyak-boxes.svg" width={12} height={12} alt="" /></span>{copy.hero.platform}</Badge>}
          title={boxes.name}
          description={copy.hero.title.join(" ")}
          actions={<><DownloadLink copy={copy} /><a className={cn(buttonVariants({ variant: "outline", size: "lg", className: heroActionClassName }))} href="#download">{copy.actions.install}<ArrowRight aria-hidden="true" /></a><a className={cn(buttonVariants({ variant: "outline", size: "lg", className: heroActionClassName }))} href={supportUrl}><HandHeart className="size-4" aria-hidden="true" />{supportAction}</a></>}
        />
        <figure className="relative mx-auto max-w-6xl">
          <div className="absolute inset-x-[10%] -bottom-6 top-1/3 rounded-full bg-brand/25 blur-3xl" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-3xl bg-ink p-2 shadow-2xl shadow-ink/25 ring-1 ring-ink/10 sm:p-3"><a href={media.desktop.src} target="_blank" rel="noreferrer" aria-label={copy.actions.viewScreenshot} className="block overflow-hidden rounded-2xl"><Image {...media.desktop} alt={copy.hero.mediaAlt} preload sizes="(min-width: 1280px) 1128px, (min-width: 640px) calc(100vw - 88px), calc(100vw - 48px)" className="h-auto w-full" /></a></div>
          <figcaption className="relative mt-4 flex flex-wrap items-center justify-between gap-x-5 text-xs leading-6 text-muted-foreground"><span>{copy.hero.caption}</span><a href={media.desktop.src} target="_blank" rel="noreferrer" className={textLink}>{copy.actions.viewScreenshot}<ArrowUpRight className="size-3.5" aria-hidden="true" /></a></figcaption>
        </figure>
      </div>
    </section>

    <section id="how-it-works" className="scroll-mt-24 border-t px-4 py-16 sm:px-8 sm:py-24" aria-labelledby="workflow-title">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20"><SectionHeading id="workflow-title" eyebrow={copy.workflow.eyebrow} title={copy.workflow.title} description={copy.workflow.description} /><WorkflowDiagram copy={copy} /></div>
        <ol className="mt-12 grid gap-4 md:grid-cols-3 md:gap-6">{copy.workflow.steps.map((step, index) => <li key={step.title} className="rounded-3xl border bg-card p-6 sm:p-7"><span className="flex size-9 items-center justify-center rounded-full bg-brand font-mono text-xs font-semibold text-ink" aria-hidden="true">0{index + 1}</span><h3 className="mb-3 mt-4 text-base font-semibold">{step.title}</h3><p className="text-sm leading-7 text-muted-foreground">{step.description}</p></li>)}</ol>
        <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-4 rounded-2xl bg-muted p-5 sm:px-7">{copy.workflow.extras.map(item => <li key={item} className="flex items-center gap-2.5 text-xs leading-6 text-muted-foreground sm:text-sm"><Check className="size-4 shrink-0 text-brand-foreground" aria-hidden="true" />{item}</li>)}</ul>
      </div>
    </section>

    <section id="widgets" className="scroll-mt-24 border-y bg-muted/50 px-4 py-16 sm:px-8 sm:py-24" aria-labelledby="widgets-title">
      <div className="mx-auto max-w-7xl">
        <SectionHeading id="widgets-title" eyebrow={copy.widgets.eyebrow} title={copy.widgets.title} description={copy.widgets.description} />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Card className="gap-0 overflow-hidden rounded-3xl py-0 shadow-none"><article className="flex h-full flex-col">
            <CardContent className="p-6 sm:p-8"><span className="mb-5 flex size-11 items-center justify-center rounded-2xl bg-ink text-brand"><Clock3 className="size-5" aria-hidden="true" /></span><h3 className="text-xl font-semibold">{copy.widgets.clockTitle}</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">{copy.widgets.clockDescription}</p></CardContent>
            <figure className="mt-auto px-5 pb-6 sm:px-8"><div className="surface-ink grid min-h-44 grid-cols-2 items-center divide-x rounded-2xl py-7">{copy.widgets.clockCities.map((city, index) => <div className="px-2 text-center" key={city}><p className="text-xs text-brand">{city}</p><p className="my-3 text-4xl font-light tabular-nums tracking-tight sm:text-5xl">{new Intl.DateTimeFormat(localeConfig[locale].htmlLanguage, { timeZone: landingTimes.zones[index], hour: "2-digit", minute: "2-digit", hourCycle: "h23" }).format(new Date(landingTimes.worldClock))}</p><p className="text-[11px] leading-5 text-muted-foreground">{new Intl.DateTimeFormat(localeConfig[locale].htmlLanguage, { timeZone: landingTimes.zones[index], month: "long", day: "numeric", weekday: "long" }).format(new Date(landingTimes.worldClock))}</p></div>)}</div><figcaption className="mt-4 text-center text-xs leading-5 text-muted-foreground">{copy.widgets.clockCaption}</figcaption></figure>
          </article></Card>
          <Card className="gap-0 overflow-hidden rounded-3xl py-0 shadow-none"><article className="flex h-full flex-col">
            <CardContent className="p-6 sm:p-8"><span className="mb-5 flex size-11 items-center justify-center rounded-2xl bg-ink text-brand"><ImageIcon className="size-5" aria-hidden="true" /></span><h3 className="text-xl font-semibold">{copy.widgets.photoTitle}</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">{copy.widgets.photoDescription}</p></CardContent>
            <figure className="mt-auto px-5 pb-6 sm:px-8"><div className="flex min-h-44 items-center justify-center rounded-2xl bg-muted p-3"><div className="relative aspect-[196/138] w-52 max-w-full overflow-hidden rounded-xl shadow-lg shadow-ink/20">
              {/* The original screenshot crop is x=1004, y=428, w=196, h=138. */}
              <Image {...media.photoDetail} alt={copy.widgets.photoAlt} className="absolute -bottom-[63.05%] right-0 h-auto w-[612.25%] max-w-none" sizes="1274px" />
            </div></div><figcaption className="mt-4 text-center text-xs leading-5 text-muted-foreground">{copy.widgets.photoCaption}</figcaption></figure>
          </article></Card>
        </div>
      </div>
    </section>

    <section id="free" className="scroll-mt-24 px-4 py-16 sm:px-8 sm:py-24" aria-labelledby="free-title">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <SectionHeading id="free-title" eyebrow={copy.free.eyebrow} title={copy.free.title} description={copy.free.description} />
        <Card className="surface-ink relative overflow-hidden rounded-3xl border-transparent py-0 shadow-2xl shadow-ink/20"><CardContent className="p-6 sm:p-9"><div className="flex flex-wrap items-center justify-between gap-4"><h3 className="text-xl font-semibold">{copy.free.currentTitle}</h3><Badge className="rounded-full bg-brand px-3 py-1 text-ink">{copy.free.price}</Badge></div><p className="mt-3 text-sm leading-7 text-muted-foreground">{copy.free.currentDescription}</p><ul className="my-7 grid gap-4 sm:grid-cols-2">{copy.free.currentFeatures.map(feature => <li key={feature} className="flex items-start gap-2.5 text-sm leading-6"><Check className="mt-1 size-4 shrink-0 text-brand" aria-hidden="true" />{feature}</li>)}</ul><p className="border-t pt-5 text-xs leading-6 text-muted-foreground">{copy.free.plannedNote}</p></CardContent></Card>
      </div>
    </section>

    <section id="faq" className="scroll-mt-24 border-t px-4 py-16 sm:px-8 sm:py-24" aria-labelledby="faq-title">
      <div className="mx-auto grid max-w-7xl items-start gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
        <div><p className="mb-4 font-mono text-xs font-semibold text-brand-foreground">FAQ</p><h2 id="faq-title" className="text-3xl font-semibold tracking-tight">{copy.faq.title}</h2><a href={links.alternativeTo} className={textLink + " mt-5"} target="_blank" rel="noreferrer">{copy.actions.alternativeTo}<ArrowUpRight className="size-4 shrink-0" aria-hidden="true" /></a></div>
        <Accordion type="multiple" defaultValue={["faq-0"]} className="border-t">
          {copy.faq.items.map((item, index) => <AccordionItem value={`faq-${index}`} key={item.question}><AccordionTrigger className="min-h-16 py-6 text-base font-medium leading-7">{item.question}</AccordionTrigger><AccordionContent className="pb-6 text-sm leading-7 text-muted-foreground"><p>{item.answer}</p>{"link" in item && (item.link === "install" ? <a href="#download" className={textLink + " mt-3"}>{copy.actions.install}<ArrowRight className="size-4" aria-hidden="true" /></a> : <a href={links.feedback} className={textLink + " mt-3"} target="_blank" rel="noreferrer">{copy.actions.feedback}<ArrowUpRight className="size-4" aria-hidden="true" /></a>)}</AccordionContent></AccordionItem>)}
        </Accordion>
      </div>
    </section>

    <section id="download" className="surface-ink relative scroll-mt-24 overflow-hidden px-4 py-16 sm:px-8 sm:py-24" aria-labelledby="download-title">
      <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-2 lg:gap-20">
        <div><span className="mb-6 flex size-14 items-center justify-center rounded-2xl bg-brand/10 ring-1 ring-brand/30"><Image src="/images/ghostyak-boxes.svg" alt="" width={32} height={32} /></span><h2 id="download-title" className="whitespace-pre-line text-3xl font-semibold leading-tight tracking-[-0.035em] sm:text-4xl">{copy.download.title}</h2><p className="mb-7 mt-5 text-sm leading-7 text-muted-foreground">{copy.download.description}</p><DownloadLink copy={copy} /><p className="mt-4 text-xs leading-6 text-muted-foreground">{copy.download.source}</p><a href={links.release} className={textLink + " mt-1"} target="_blank" rel="noreferrer">{copy.actions.release}<ArrowUpRight className="size-3.5" aria-hidden="true" /></a><div className="mt-5"><ShareLinks pageUrl={`${links.site.replace(/\/$/, "")}${currentPath}`} pageTitle={copy.brand} labels={shareLabels} /></div></div>
        <div><ol className="space-y-7">{copy.download.steps.map((step, index) => <li className="flex gap-4" key={step.title}><span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand font-mono text-xs font-semibold text-ink" aria-hidden="true">0{index + 1}</span><div><h3 className="pt-1 font-semibold">{step.title}</h3><p className="mt-2 text-sm leading-7 text-muted-foreground">{step.description}</p></div></li>)}</ol>
          <Accordion type="single" collapsible className="mt-8 rounded-2xl border bg-card px-5"><AccordionItem value="install-help"><AccordionTrigger className="min-h-14 leading-6">{copy.download.help.title}</AccordionTrigger><AccordionContent className="space-y-3 leading-7 text-muted-foreground"><p>{copy.download.help.launch}</p><p>{copy.download.help.runtime}</p><a href={links.webview} className={textLink} target="_blank" rel="noreferrer">{copy.actions.webview}<ArrowUpRight className="size-4 shrink-0" aria-hidden="true" /></a><p>{copy.download.help.feedback}</p><a href={links.feedback} className={textLink} target="_blank" rel="noreferrer">{copy.actions.feedback}<ArrowUpRight className="size-4" aria-hidden="true" /></a></AccordionContent></AccordionItem></Accordion>
        </div>
      </div>
    </section>
  </main>;
}
