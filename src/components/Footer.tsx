import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { osints, csvSearchEngine } from "@/data/products";
import type { Dictionary } from "@/i18n/get-dictionary";
import type { PublishedLocale } from "@/i18n/locales";
import { localizedPath } from "@/i18n/routing";

const socialLinks = [
  { href: "https://www.instagram.com/ghostyak/", label: "Instagram" },
  { href: "https://www.threads.com/@ghostyak", label: "Threads" },
  { href: "https://github.com/ghostyak", label: "GitHub" },
];

export function Footer({ labels, locale }: { labels: Dictionary["footer"]; locale: PublishedLocale }) {
  return <footer className="border-t bg-background px-4 py-10 sm:px-8 sm:py-14">
    <div className="mx-auto max-w-7xl">
      <div className="flex flex-col justify-between gap-8 md:flex-row">
        <div><a className="inline-flex min-h-11 items-center gap-2 text-xl font-semibold tracking-tight" href={localizedPath(locale, "/")}><Image src="/favicon.svg" alt="" width={28} height={28} />GhostYak.</a><p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">{labels.description}</p></div>
        <nav className="flex flex-wrap content-start gap-x-6 text-sm" aria-label={labels.navigationLabel}>
          <a className="inline-flex min-h-11 items-center hover:text-primary" href={localizedPath(locale, "/product/boxes")}>Boxes</a>
          <a className="inline-flex min-h-11 items-center hover:text-primary" href="https://clock.ghostyak.com/" rel="noreferrer" target="_blank">Clock</a>
          <a className="inline-flex min-h-11 items-center hover:text-primary" href={osints.url} rel="noreferrer" target="_blank">{osints.name}</a>
          <a className="inline-flex min-h-11 items-center hover:text-primary" href={localizedPath(locale, csvSearchEngine.pagePath)}>{csvSearchEngine.name}</a>
          <a className="inline-flex min-h-11 items-center hover:text-primary" href={localizedPath(locale, "/blog")}>{labels.blog}</a>
        </nav>
      </div>
      <div className="mt-8 flex flex-wrap items-center justify-between gap-x-8 border-t pt-5 text-xs text-muted-foreground"><p>© {new Date().getFullYear()} GhostYak</p><div className="flex flex-wrap gap-x-5">{socialLinks.map(link => <a className="inline-flex min-h-11 items-center gap-1 hover:text-foreground" href={link.href} key={link.label} rel="noreferrer" target="_blank">{link.label}<ArrowUpRight className="size-3" aria-hidden="true" /></a>)}</div></div>
    </div>
  </footer>;
}
