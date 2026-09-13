import Image from "next/image";
import type { ReactNode } from "react";
import { boxes } from "@/data/products";
import { landingLinks as links, landingMedia as media, landingTimes } from "@/data/landing";
import type { Dictionary } from "@/i18n/get-dictionary";
import { localeConfig, type PublishedLocale } from "@/i18n/locales";
import { localizedPath } from "@/i18n/routing";
type Copy = Dictionary["landing"];
import { CopySiteLink } from "./CopySiteLink";

type IconName = "folder" | "link" | "check" | "download" | "arrow";

function Icon({ name, className = "size-5" }: { name: IconName; className?: string }) {
  const paths: Record<IconName, ReactNode> = {
    folder: <path d="M3 7V5a1 1 0 0 1 1-1h5l3 3h8a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7Zm0 1h18" />,
    link: <path d="m10 14 4-4m-5 6-1 1a4 4 0 0 1-6-6l4-4a4 4 0 0 1 6 0m0 10a4 4 0 0 0 6 0l4-4a4 4 0 0 0-6-6l-1 1" />,
    check: <path d="m5 12 4 4L19 6" />,
    download: <path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5" />,
    arrow: <path d="M4 12h16m-6-6 6 6-6 6" />,
  };
  return <svg className={`${className} shrink-0 fill-none stroke-current`} viewBox="0 0 24 24" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

function DownloadLink({ copy }: { copy: Copy }) {
  return <a className="btn btn-primary h-auto min-h-12 max-w-full gap-2 whitespace-normal px-4 py-3 text-sm shadow-none sm:px-6 sm:text-base"
    href={boxes.download.installerUrl}>
    <Icon name="download" className="size-4" />
    {copy.actions.download}
  </a>;
}

function SectionHeading({ eyebrow, title, description, id }: { eyebrow: string; title: string; description?: string; id?: string }) {
  return <div>
    <p className="mb-3 text-sm font-bold text-primary">{eyebrow}</p>
    <h2 id={id} className="whitespace-pre-line text-3xl font-bold leading-tight tracking-tight sm:text-4xl">{title}</h2>
    {description && <p className="mt-4 max-w-2xl text-base leading-7 text-base-content/70">{description}</p>}
  </div>;
}

function ProductScreenshot({ copy }: { copy: Copy }) {
  return <figure className="min-w-0">
    <div className="overflow-hidden rounded-2xl border border-neutral-content/15 bg-neutral text-neutral-content shadow-xl shadow-primary/10">
      <a href={media.desktop.src} target="_blank" rel="noreferrer" aria-label={copy.actions.viewScreenshot} className="block">
        <Image {...media.desktop} alt={copy.hero.mediaAlt} preload sizes="(min-width: 960px) 896px, (min-width: 640px) calc(100vw - 64px), calc(100vw - 32px)" className="h-auto w-full" />
      </a>
    </div>
    <figcaption className="mt-2 flex flex-wrap items-center justify-between gap-x-3 text-xs leading-5 text-base-content/65">
      <span>{copy.hero.caption}</span>
      <a href={media.desktop.src} target="_blank" rel="noreferrer" className="link link-hover inline-flex min-h-11 items-center text-primary">{copy.actions.viewScreenshot}<span aria-hidden="true" className="ml-1">↗</span></a>
    </figcaption>
  </figure>;
}

function WorkflowDiagram({ copy }: { copy: Copy }) {
  return <figure className="rounded-2xl bg-base-200 p-4 sm:p-7">
    <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 sm:gap-4">
      <div className="min-w-0">
        <p className="mb-3 text-xs font-semibold text-base-content/65">{copy.workflow.originalLabel}</p>
        <div className="space-y-2">
          {copy.workflow.originalItems.map(item => <div className="flex items-center gap-2 rounded-lg border border-base-300 bg-base-100 px-2 py-3 sm:px-3" key={item}>
            <Icon name="folder" className="hidden size-4 text-primary sm:block" /><span className="text-xs leading-5">{item}</span>
          </div>)}
        </div>
      </div>
      <Icon name="arrow" className="size-4 text-primary sm:size-6" />
      <div className="card min-w-0 overflow-hidden rounded-xl border border-primary/20 bg-base-100">
        <p className="border-b border-primary/15 bg-primary/8 px-3 py-3 text-xs font-semibold text-primary sm:text-sm">{copy.workflow.boxLabel}</p>
        <div className="space-y-4 px-3 py-4">
          {copy.workflow.boxItems.map(item => <div key={item} className="flex items-center gap-2 text-xs"><Icon name="link" className="size-3 text-primary" />{item}</div>)}
        </div>
      </div>
    </div>
    <figcaption className="mt-4 text-center text-xs leading-6 text-base-content/65">{copy.workflow.connection}<span className="mx-2" aria-hidden="true">·</span>{copy.workflow.result}</figcaption>
  </figure>;
}

export function RenewalLanding({ copy, locale, currentPath }: { copy: Copy; locale: PublishedLocale; currentPath: string }) {
  return <div className={`bg-base-100 [overflow-wrap:anywhere] ${locale === "ko" ? "break-keep" : ""}`}>
    <a href="#main-content" className="btn btn-primary sr-only fixed left-4 top-4 z-[100] focus:not-sr-only">{copy.skip}</a>
    <main id="main-content" className="scroll-mt-24">
      <section aria-labelledby="renewal-title" className="bg-linear-to-b from-primary/5 to-base-100">
        <div className="mx-auto max-w-7xl px-4 pb-8 pt-10 sm:px-8 sm:pt-14">
          <div className="text-center">
            <div className="flex items-center justify-center gap-4 sm:gap-6">
              <Image src="/images/ghostyak-boxes.svg" width={80} height={80} alt="" className="size-12 shrink-0 sm:size-20" />
              <h1 id="renewal-title" className="text-7xl font-bold leading-none tracking-[-0.055em] text-primary sm:text-8xl lg:text-[7rem]">{boxes.name}</h1>
            </div>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-base-content/80 text-balance sm:mt-6 sm:text-2xl">{copy.hero.title.join(" ")}</p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <DownloadLink copy={copy} />
              <a className="btn btn-ghost min-h-12 px-3 font-medium" href="#download">{copy.actions.install}<Icon name="arrow" className="size-4" /></a>
            </div>
            <p className="mt-3 text-xs leading-5 text-base-content/65">{copy.hero.platform}</p>
          </div>
          <div className="mx-auto mt-8 max-w-4xl sm:mt-10"><ProductScreenshot copy={copy} /></div>
        </div>
      </section>

      <section id="how-it-works" className="scroll-mt-24 px-4 py-12 sm:px-8 sm:py-20" aria-labelledby="workflow-title">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <SectionHeading id="workflow-title" eyebrow={copy.workflow.eyebrow} title={copy.workflow.title} description={copy.workflow.description} />
            <WorkflowDiagram copy={copy} />
          </div>
          <ol className="mt-8 grid gap-6 border-t border-base-300 pt-7 md:grid-cols-3 md:gap-8">
            {copy.workflow.steps.map((step, index) => <li key={step.title} className="flex items-start gap-3 md:block">
              <span className="mt-1 text-xs font-bold tabular-nums text-primary" aria-hidden="true">0{index + 1}</span>
              <div><h3 className="mb-2 text-base font-bold md:mt-3 md:text-lg">{step.title}</h3><p className="text-sm leading-7 text-base-content/70">{step.description}</p></div>
            </li>)}
          </ol>
          <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-3 border-t border-base-300 pt-5">
            {copy.workflow.extras.map(item => <li key={item} className="flex items-center gap-2 text-xs text-base-content/70 sm:text-sm"><Icon name="check" className="size-4 text-primary" />{item}</li>)}
          </ul>
        </div>
      </section>

      <section id="widgets" className="scroll-mt-24 bg-base-200/60 px-4 py-12 sm:px-8 sm:py-20" aria-labelledby="widgets-title">
        <div className="mx-auto max-w-7xl">
          <SectionHeading id="widgets-title" eyebrow={copy.widgets.eyebrow} title={copy.widgets.title} description={copy.widgets.description} />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <article className="card overflow-hidden rounded-2xl border border-base-300 bg-base-100">
              <div className="card-body p-5 sm:p-7"><h3 className="card-title text-xl">{copy.widgets.clockTitle}</h3><p className="text-sm leading-7 text-base-content/70">{copy.widgets.clockDescription}</p></div>
              <figure className="!flex h-56 flex-col justify-center px-5 pb-5 sm:px-7 lg:h-64">
                <div className="grid w-full grid-cols-2 divide-x divide-neutral-content/15 rounded-xl bg-neutral px-2 py-5 text-neutral-content">
                  {copy.widgets.clockCities.map((city, index) => <div className="px-2 text-center" key={city}>
                    <p className="text-xs text-accent">{city}</p>
                    <p className="my-3 text-4xl font-light tracking-tight tabular-nums sm:text-5xl">{new Intl.DateTimeFormat(localeConfig[locale].htmlLanguage, { timeZone: landingTimes.zones[index], hour: "2-digit", minute: "2-digit", hourCycle: "h23" }).format(new Date(landingTimes.worldClock))}</p>
                    <p className="text-[11px] text-neutral-content/70">{new Intl.DateTimeFormat(localeConfig[locale].htmlLanguage, { timeZone: landingTimes.zones[index], month: "long", day: "numeric", weekday: "long" }).format(new Date(landingTimes.worldClock))}</p>
                  </div>)}
                </div>
                <figcaption className="mt-3 text-center text-xs leading-5 text-base-content/60">{copy.widgets.clockCaption}</figcaption>
              </figure>
            </article>
            <article className="card overflow-hidden rounded-2xl border border-base-300 bg-base-100">
              <div className="card-body p-5 sm:p-7"><h3 className="card-title text-xl">{copy.widgets.photoTitle}</h3><p className="text-sm leading-7 text-base-content/70">{copy.widgets.photoDescription}</p></div>
              <figure className="!flex h-56 flex-col justify-center px-5 pb-5 lg:h-64">
                {/* The original screenshot is unchanged. This viewport shows x=1004, y=428, w=196, h=138. */}
                <div className="relative aspect-[196/138] w-60 max-w-full overflow-hidden rounded-lg lg:w-64">
                  <Image {...media.photoDetail} alt={copy.widgets.photoAlt} className="absolute -bottom-[63.05%] right-0 h-auto w-[612.25%] max-w-none" sizes="1568px" />
                </div>
                <figcaption className="mt-3 text-center text-xs leading-5 text-base-content/60">{copy.widgets.photoCaption}</figcaption>
              </figure>
            </article>
          </div>
        </div>
      </section>

      <section id="free" className="scroll-mt-24 px-4 py-12 sm:px-8 sm:py-20" aria-labelledby="free-title">
        <div className="mx-auto grid max-w-7xl items-center gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <SectionHeading id="free-title" eyebrow={copy.free.eyebrow} title={copy.free.title} description={copy.free.description} />
          <div className="card border border-primary/20 bg-primary/5">
            <div className="card-body p-5 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3"><h3 className="card-title text-lg">{copy.free.currentTitle}</h3><span className="badge badge-primary badge-soft">{copy.free.price}</span></div>
              <p className="mt-1 text-sm leading-6 text-base-content/65">{copy.free.currentDescription}</p>
              <ul className="my-4 grid gap-3 sm:grid-cols-2">{copy.free.currentFeatures.map(feature => <li key={feature} className="flex items-center gap-2 text-sm"><Icon name="check" className="size-4 text-primary" />{feature}</li>)}</ul>
              <p className="border-t border-primary/15 pt-4 text-xs leading-6 text-base-content/65">{copy.free.plannedNote}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="scroll-mt-24 border-t border-base-300/70 px-4 py-12 sm:px-8 sm:py-20" aria-labelledby="faq-title">
        <div className="mx-auto grid max-w-7xl items-start gap-7 lg:grid-cols-[0.65fr_1.35fr] lg:gap-16">
          <div><h2 id="faq-title" className="text-3xl font-bold tracking-tight">{copy.faq.title}</h2><a href={links.alternativeTo} className="link link-hover mt-4 inline-flex min-h-11 items-center gap-2 text-sm text-primary" target="_blank" rel="noreferrer">{copy.actions.alternativeTo}<Icon name="arrow" className="size-4" /></a></div>
          <div className="divide-y divide-base-300 border-y border-base-300">
            {copy.faq.items.map((item, index) => <details className="collapse collapse-plus rounded-none" key={item.question} open={index === 0}>
              <summary className="collapse-title min-h-16 py-5 pl-0 text-base font-semibold">{item.question}</summary>
              <div className="collapse-content px-0 text-sm leading-7 text-base-content/70">
                <p>{item.answer}</p>
                {"link" in item && (item.link === "install"
                  ? <a href="#download" className="link link-hover mt-2 inline-flex min-h-11 items-center text-primary">{copy.actions.install} →</a>
                  : <a href={links.feedback} className="link link-hover mt-2 inline-flex min-h-11 items-center text-primary" target="_blank" rel="noreferrer">{copy.actions.feedback} ↗</a>)}
              </div>
            </details>)}
          </div>
        </div>
      </section>

      <section id="download" className="scroll-mt-24 bg-neutral px-4 py-12 text-neutral-content sm:px-8 sm:py-20" aria-labelledby="download-title">
        <div className="mx-auto grid max-w-7xl items-start gap-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 id="download-title" className="whitespace-pre-line text-3xl font-bold leading-tight tracking-tight sm:text-4xl">{copy.download.title}</h2>
            <p className="mb-6 mt-4 text-sm leading-7 text-neutral-content/75">{copy.download.description}</p>
            <DownloadLink copy={copy} />
            <p className="mt-4 text-xs text-neutral-content/70">{copy.download.source}</p>
            <a href={links.release} className="link link-hover mt-1 inline-flex min-h-11 items-center gap-2 text-sm" target="_blank" rel="noreferrer">{copy.actions.release}<span aria-hidden="true">↗</span></a>
            <div className="mt-3 border-t border-neutral-content/15 pt-3"><CopySiteLink url={`${links.site.replace(/\/$/, "")}${currentPath}`} labels={copy.actions} /></div>
          </div>
          <div>
            <ol className="space-y-6">
              {copy.download.steps.map((step, index) => <li className="flex gap-4" key={step.title}>
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full border border-neutral-content/25 text-xs" aria-hidden="true">{index + 1}</span>
                <div><h3 className="font-semibold">{step.title}</h3><p className="mt-2 text-sm leading-7 text-neutral-content/75">{step.description}</p>
                </div>
              </li>)}
            </ol>
            <details className="collapse collapse-plus mt-7 rounded-xl border border-neutral-content/20">
              <summary className="collapse-title min-h-12 text-sm font-semibold">{copy.download.help.title}</summary>
              <div className="collapse-content space-y-3 text-sm leading-7 text-neutral-content/80">
                <p>{copy.download.help.launch}</p>
                <p>{copy.download.help.runtime}</p>
                <a href={links.webview} className="link link-hover inline-flex min-h-11 items-center gap-2 text-neutral-content" target="_blank" rel="noreferrer">{copy.actions.webview}<span aria-hidden="true">↗</span></a>
                <p>{copy.download.help.feedback}</p>
                <a href={links.feedback} className="link link-hover inline-flex min-h-11 items-center gap-2 text-neutral-content" target="_blank" rel="noreferrer">{copy.actions.feedback}<span aria-hidden="true">↗</span></a>
              </div>
            </details>
          </div>
        </div>
      </section>
    </main>

    <footer className="footer border-t border-base-300 bg-base-100 px-4 py-7 sm:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div><p className="font-bold">{copy.brand}</p><p className="mt-2 text-xs leading-6 text-base-content/65">{copy.footer.description}</p><p className="mt-1 text-xs text-base-content/55">{copy.footer.copyright}</p></div>
        <nav className="flex flex-wrap gap-x-6 text-sm" aria-label={copy.footer.navigation}>
          <a className="link link-hover inline-flex min-h-11 items-center" href={localizedPath(locale, "/blog")}>{copy.footer.blog}</a>
          <a className="link link-hover inline-flex min-h-11 items-center" href={links.alternativeTo} target="_blank" rel="noreferrer">AlternativeTo</a>
          <a className="link link-hover inline-flex min-h-11 items-center" href={links.feedback} target="_blank" rel="noreferrer">GitHub</a>
        </nav>
      </div>
    </footer>
  </div>;
}
