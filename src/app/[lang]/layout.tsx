import type { Metadata } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { Analytics } from "@vercel/analytics/next";
import { getDictionary } from "@/i18n";
import {
  htmlLanguages,
  isLocale,
  languageAlternates,
  locales,
  openGraphLocales,
} from "@/locales";
import { getSearchEngineVerification, siteUrl } from "@/seo";
import "../globals.css";

type Props = {
  children: ReactNode;
  params: Promise<{ lang: string }>;
};

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;

  if (!isLocale(lang)) notFound();

  const { metadata } = getDictionary(lang);
  const image = {
    url: "/images/boxes-hero-concept-v3.png",
    width: 1672,
    height: 941,
    alt: metadata.imageAlt,
  };

  return {
    metadataBase: new URL(siteUrl),
    title: metadata.title,
    description: metadata.description,
    applicationName: "Ghostyak Boxes",
    keywords: [...metadata.keywords],
    creator: "Ghostyak",
    publisher: "Ghostyak",
    category: "software",
    verification: getSearchEngineVerification(),
    formatDetection: { email: false, address: false, telephone: false },
    alternates: {
      canonical: `/${lang}`,
      languages: languageAlternates,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "website",
      url: `/${lang}`,
      locale: openGraphLocales[lang],
      alternateLocale: locales
        .filter((locale) => locale !== lang)
        .map((locale) => openGraphLocales[locale]),
      siteName: "Ghostyak",
      title: metadata.title,
      description: metadata.description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: metadata.title,
      description: metadata.description,
      images: [image],
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { lang } = await params;

  if (!isLocale(lang)) notFound();

  return (
    <html lang={htmlLanguages[lang]}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
