import Image from "next/image";
import Link from "next/link";
import ghostyakIcon from "../../public/ghostyak.png";
import { HeaderDropdown } from "@/components/HeaderDropdown";
import { htmlLanguages, localeNames, locales, type Locale } from "@/locales";

type HeaderProps = {
  locale: Locale;
  homeHref?: string;
  featuresHref?: string;
  downloadHref?: string;
  productsHref?: string;
  labels: {
    homeLabel: string;
    navLabel: string;
    products: string;
    features: string;
    download: string;
    languageLabel: string;
  };
};

export function Header({
  locale,
  labels,
  homeHref = `/${locale}`,
  featuresHref = "#features",
  downloadHref = "#download",
  productsHref = `/${locale}/products/boxes`,
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-content/10 bg-neutral text-neutral-content shadow-md">
      <div className="navbar mx-auto min-h-16 w-full max-w-[1180px] px-3 sm:px-5">
        <div className="navbar-start w-auto flex-1">
          <Link
            className="btn btn-ghost min-h-11 gap-2 px-2 text-base font-bold normal-case text-neutral-content hover:bg-neutral-content/10"
            href={homeHref}
            aria-label={labels.homeLabel}
          >
            <Image className="size-9 object-contain" src={ghostyakIcon} alt="" width={38} height={38} />
            <span className="hidden sm:inline">ghostyak.com</span>
          </Link>
        </div>
        <nav className="navbar-end w-auto shrink-0 gap-0 sm:gap-1" aria-label={labels.navLabel}>
          <HeaderDropdown
            label={labels.products}
            menuClassName="menu dropdown-content z-[60] mt-3 w-48 rounded-box border border-base-300 bg-base-100 p-2 text-base-content shadow-2xl"
          >
            <li>
              <Link href={productsHref}>Boxes</Link>
            </li>
          </HeaderDropdown>
          <Link className="btn btn-ghost hidden min-h-11 text-neutral-content hover:bg-neutral-content/10 md:inline-flex" href={featuresHref}>
            {labels.features}
          </Link>
          <Link className="btn btn-ghost hidden min-h-11 text-neutral-content hover:bg-neutral-content/10 sm:inline-flex" href={downloadHref}>
            {labels.download}
          </Link>
          <HeaderDropdown
            label={labels.languageLabel}
            menuClassName="menu dropdown-content z-[60] mt-3 max-h-[70vh] w-52 overflow-y-auto rounded-box border border-base-300 bg-base-100 p-2 text-base-content shadow-2xl"
          >
            {locales.map((language) => (
              <li key={language}>
                <Link
                  className={language === locale ? "menu-active" : undefined}
                  href={`/${language}`}
                  hrefLang={htmlLanguages[language]}
                  aria-current={language === locale ? "page" : undefined}
                >
                  {localeNames[language]}
                </Link>
              </li>
            ))}
          </HeaderDropdown>
        </nav>
      </div>
    </header>
  );
}
