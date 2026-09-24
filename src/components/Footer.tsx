import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { osints, csvSearchEngine, folderHistory } from "@/data/products";
import { socialLinks } from "@/data/social";
import { supportLinkName, supportLinks, supportPagePath } from "@/data/support";
import type { Dictionary } from "@/i18n/get-dictionary";
import type { PublishedLocale } from "@/i18n/locales";
import { localizedPath } from "@/i18n/routing";

const footerLink = "inline-flex min-h-11 items-center gap-1 text-muted-foreground transition-colors hover:text-foreground";

export function Footer({ labels, supportLabel, locale }: { labels: Dictionary["footer"]; supportLabel: string; locale: PublishedLocale }) {
  return <footer className="surface-ink border-t px-4 pb-8 pt-14 sm:px-8 sm:pt-20">
    <div className="mx-auto max-w-7xl">
      <div className="flex flex-col justify-between gap-10 md:flex-row">
        <div>
          <a className="inline-flex min-h-11 items-center gap-2.5 text-xl font-semibold tracking-tight" href={localizedPath(locale, "/")}><Image className="rounded-lg ring-1 ring-white/10" src="/favicon.svg" alt="" width={32} height={32} /><span>GhostYak<span className="text-brand">.</span></span></a>
          <p className="mt-4 max-w-sm text-sm leading-7 text-muted-foreground">{labels.description}</p>
        </div>
        <nav className="flex flex-wrap content-start gap-x-7 text-sm" aria-label={labels.navigationLabel}>
          <a className={footerLink} href={localizedPath(locale, "/product/boxes")}>Boxes</a>
          <a className={footerLink} href={localizedPath(locale, folderHistory.pagePath)}>{folderHistory.name}</a>
          <a className={footerLink} href="https://clock.ghostyak.com/" rel="noreferrer" target="_blank">Clock</a>
          <a className={footerLink} href={osints.url} rel="noreferrer" target="_blank">{osints.name}</a>
          <a className={footerLink} href={localizedPath(locale, csvSearchEngine.pagePath)}>{csvSearchEngine.name}</a>
          <a className={footerLink} href={localizedPath(locale, "/blog")}>{labels.blog}</a>
          <a className={footerLink} href={localizedPath(locale, supportPagePath)}>{supportLabel}</a>
        </nav>
      </div>
      <div className="mt-12 flex flex-wrap items-center justify-between gap-x-8 border-t pt-4 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} GhostYak</p>
        <div className="flex flex-wrap gap-x-5">{[...Object.values(socialLinks), ...supportLinks.map(link => ({ href: link.url, label: supportLinkName(link, locale) }))].map(link => <a className={footerLink} href={link.href} key={link.label} rel="noreferrer" target="_blank">{link.label}<ArrowUpRight className="size-3" aria-hidden="true" /></a>)}</div>
      </div>
    </div>
  </footer>;
}
