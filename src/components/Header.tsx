import Image from "next/image";
import Link from "next/link";
import ghostyakIcon from "../../public/ghostyak.png";
import type { Locale } from "@/i18n";

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

const languageNames: Record<Locale, string> = {
  ko: "한국어",
  en: "English",
  ja: "日本語",
  zh: "中文",
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
              {(Object.keys(languageNames) as Locale[]).map((language) => (
                <Link
                  key={language}
                  href={`/${language}`}
                  hrefLang={language}
                  aria-current={language === locale ? "page" : undefined}
                >
                  {languageNames[language]}
                </Link>
              ))}
            </div>
          </details>
        </nav>
      </div>
    </header>
  );
}
