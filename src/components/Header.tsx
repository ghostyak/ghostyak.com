import { cn } from "@/lib/utils";
import Image from "next/image";
import { HandHeart } from "lucide-react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { NavDropdown } from "@/components/NavDropdown";
import { buttonVariants } from "@/components/ui/button";
import { boxes, clock, osints, csvSearchEngine, folderHistory } from "@/data/products";
import { supportPagePath } from "@/data/support";
import type { Dictionary } from "@/i18n/get-dictionary";
import type { PublishedLocale } from "@/i18n/locales";
import { localizedPath } from "@/i18n/routing";

export function Header({ labels, categoryLabels, locale, currentPath }: { labels: Dictionary["header"]; categoryLabels: { windows: string; web: string; forensics: string }; locale: PublishedLocale; currentPath: string }) {
  const productPath = localizedPath(locale, "/product/boxes");
  const csvSearchPath = localizedPath(locale, csvSearchEngine.pagePath);
  const folderHistoryPath = localizedPath(locale, folderHistory.pagePath);
  const blogPath = localizedPath(locale, "/blog");
  const supportPath = localizedPath(locale, supportPagePath);
  return <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl supports-[backdrop-filter]:bg-background/75">
    <div className="mx-auto flex min-h-16 max-w-7xl items-center gap-2 px-4 sm:min-h-20 sm:gap-8 sm:px-8">
      <a className="flex min-h-11 shrink-0 items-center gap-2.5 font-semibold tracking-tight sm:text-xl" href={localizedPath(locale, "/")} aria-label={labels.homeLabel}>
        <Image className="size-8 rounded-lg object-contain shadow-sm shadow-ink/20" src="/favicon.svg" alt="" width={32} height={32} loading="eager" /><span className="hidden min-[400px]:inline">GhostYak<span className="text-brand-foreground">.</span></span>
      </a>
      <nav className="ml-auto flex min-w-0 items-center gap-0.5 sm:gap-2" aria-label={labels.navigationLabel}>
        <NavDropdown label={labels.products} groups={[
          { id: "windows-productivity", label: categoryLabels.windows, items: [
            { name: boxes.name, href: productPath, icon: "boxes", current: currentPath === productPath },
            { name: folderHistory.name, href: folderHistoryPath, icon: "folderHistory", current: currentPath === folderHistoryPath },
          ] },
          { id: "web-apps", label: categoryLabels.web, items: [
            { name: clock.name, href: clock.url, icon: "clock", external: true },
            { name: osints.name, href: osints.url, icon: "osints", external: true },
          ] },
          { id: "digital-forensics", label: categoryLabels.forensics, items: [
            { name: csvSearchEngine.name, href: csvSearchPath, icon: "csvSearch", current: currentPath === csvSearchPath },
          ] },
        ]} />
        <a className={cn(buttonVariants({ variant: "ghost", className: "min-h-11 rounded-full px-2.5 aria-[current=page]:bg-accent sm:px-4" }))} href={blogPath} aria-current={currentPath.startsWith(blogPath) ? "page" : undefined}>{labels.blog}</a>
        {/* Below 640px only the icon shows; the label stays as the accessible name. */}
        <a className={cn(buttonVariants({ variant: "ghost", className: "min-h-11 gap-1.5 rounded-full px-2.5 aria-[current=page]:bg-accent sm:px-4" }))} href={supportPath} aria-current={currentPath === supportPath ? "page" : undefined}><HandHeart className="size-4 text-brand-foreground" aria-hidden="true" /><span className="sr-only sm:not-sr-only">{labels.support}</span></a>
      </nav>
      <div className="border-l pl-1 sm:pl-5"><LanguageSwitcher currentLocale={locale} currentPath={currentPath} label={labels.language} /></div>
    </div>
  </header>;
}
