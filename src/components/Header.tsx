import Image from "next/image";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { ProductsDropdown } from "@/components/ProductsDropdown";
import { boxes, clock, osints } from "@/data/products";
import type { Dictionary } from "@/i18n/get-dictionary";
import type { PublishedLocale } from "@/i18n/locales";
import { localizedPath } from "@/i18n/routing";

export function Header({
  labels,
  locale,
  currentPath,
}: {
  labels: Dictionary["header"];
  locale: PublishedLocale;
  currentPath: string;
}) {
  return (
    <header className="sticky top-0 z-50 border-b border-primary-content/15 bg-primary text-primary-content">
      <div className="navbar mx-auto min-h-14 w-full max-w-7xl gap-1 px-3 py-0 sm:min-h-16 sm:gap-4 sm:px-8">
        <div className="navbar-start w-auto min-w-0">
          <a
            className="btn btn-ghost min-h-11 gap-2 px-2 text-lg font-black normal-case text-primary-content hover:bg-primary-content/10"
            href={localizedPath(locale, "/")}
            aria-label={labels.homeLabel}
          >
            <Image className="size-9 object-contain" src="/favicon.svg" alt="" width={38} height={38} loading="eager" />
            <span className="hidden sm:inline">GhostYak</span>
          </a>
        </div>
        <nav className="flex shrink-0 items-center gap-0 sm:gap-1" aria-label={labels.navigationLabel}>
          <ProductsDropdown label={labels.products}>
            <li><a className="min-h-11" href={localizedPath(locale, "/product/boxes")} aria-current={currentPath === localizedPath(locale, "/product/boxes") ? "page" : undefined}>{boxes.name}</a></li>
            <li><a className="min-h-11 justify-between" href={clock.url} target="_blank" rel="noreferrer">{clock.name}<span aria-hidden="true">↗</span></a></li>
            <li><a className="min-h-11 justify-between" href={osints.url} target="_blank" rel="noreferrer">{osints.name}<span aria-hidden="true">↗</span></a></li>
          </ProductsDropdown>
          <a className="btn btn-ghost min-h-11 px-3 text-primary-content hover:bg-primary-content/10 sm:px-4" href={localizedPath(locale, "/blog")}>
            {labels.blog}
          </a>
        </nav>
        <div className="navbar-end ml-auto w-auto shrink-0 gap-3">
          <LanguageSwitcher currentLocale={locale} currentPath={currentPath} label={labels.language} />
        </div>
      </div>
    </header>
  );
}
