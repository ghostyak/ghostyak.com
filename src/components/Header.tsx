import { cn } from "@/lib/utils";
import Image from "next/image";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { ProductsDropdown } from "@/components/ProductsDropdown";
import { buttonVariants } from "@/components/ui/button";
import { boxes, clock, osints, csvSearchEngine } from "@/data/products";
import type { Dictionary } from "@/i18n/get-dictionary";
import type { PublishedLocale } from "@/i18n/locales";
import { localizedPath } from "@/i18n/routing";

export function Header({ labels, digitalForensicsLabel, locale, currentPath }: { labels: Dictionary["header"]; digitalForensicsLabel: string; locale: PublishedLocale; currentPath: string }) {
  const productPath = localizedPath(locale, "/product/boxes");
  const csvSearchPath = localizedPath(locale, csvSearchEngine.pagePath);
  const blogPath = localizedPath(locale, "/blog");
  return <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur-xl">
    <div className="mx-auto flex min-h-16 max-w-7xl items-center gap-2 px-4 sm:min-h-20 sm:gap-8 sm:px-8">
      <a className="flex min-h-11 shrink-0 items-center gap-2.5 font-semibold tracking-tight sm:text-xl" href={localizedPath(locale, "/")} aria-label={labels.homeLabel}>
        <Image className="size-8 object-contain" src="/favicon.svg" alt="" width={32} height={32} loading="eager" /><span className="hidden min-[400px]:inline">GhostYak<span className="text-primary">.</span></span>
      </a>
      <nav className="ml-auto flex min-w-0 items-center gap-0.5 sm:gap-2" aria-label={labels.navigationLabel}>
        <ProductsDropdown label={labels.products} groups={[
          { id: "tools", items: [
            { name: boxes.name, href: productPath, icon: "boxes", current: currentPath === productPath },
            { name: clock.name, href: clock.url, icon: "clock", external: true },
            { name: osints.name, href: osints.url, icon: "osints", external: true },
          ] },
          { id: "digital-forensics", label: digitalForensicsLabel, items: [
            { name: csvSearchEngine.name, href: csvSearchPath, icon: "csvSearch", current: currentPath === csvSearchPath },
          ] },
        ]} />
        <a className={cn(buttonVariants({ variant: "ghost", className: "min-h-11 px-2.5 sm:px-4" }))} href={blogPath} aria-current={currentPath.startsWith(blogPath) ? "page" : undefined}>{labels.blog}</a>
      </nav>
      <div className="border-l pl-1 sm:pl-5"><LanguageSwitcher currentLocale={locale} currentPath={currentPath} label={labels.language} /></div>
    </div>
  </header>;
}
