import Image from "next/image";
import Link from "next/link";
import ghostyakIcon from "../../public/ghostyak.png";

type HeaderProps = {
  locale: "ko" | "en";
  oppositeLocale: "ko" | "en";
  labels: {
    homeLabel: string;
    navLabel: string;
    features: string;
    download: string;
    languageLabel: string;
  };
};

export function Header({ locale, oppositeLocale, labels }: HeaderProps) {
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
          <Link href={`/${oppositeLocale}`} hrefLang={oppositeLocale}>
            {labels.languageLabel}
          </Link>
        </nav>
      </div>
    </header>
  );
}
