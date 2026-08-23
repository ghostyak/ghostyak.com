import Image from "next/image";
import Link from "next/link";
import ghostyakIcon from "../../public/ghostyak.png";
import { htmlLanguages, localeNames, locales, type Locale } from "@/locales";

type HeaderProps = {
  locale: Locale;
  labels: {
    homeLabel: string;
    navLabel: string;
    features: string;
    download: string;
    languageLabel: string;
  };
};

export function Header({ locale, labels }: HeaderProps) {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" href={`/${locale}`} aria-label={labels.homeLabel}>
          <Image src={ghostyakIcon} alt="" width={38} height={38} />
          <span>ghostyak.com</span>
        </Link>
        <nav aria-label={labels.navLabel}>
          <a href="#features">{labels.features}</a>
          <a href="#download">{labels.download}</a>
          <details className="language-menu">
            <summary>{labels.languageLabel}</summary>
            <div className="language-options">
              {locales.map((language) => (
                <Link
                  key={language}
                  href={`/${language}`}
                  hrefLang={htmlLanguages[language]}
                  aria-current={language === locale ? "page" : undefined}
                >
                  {localeNames[language]}
                </Link>
              ))}
            </div>
          </details>
        </nav>
      </div>
    </header>
  );
}
