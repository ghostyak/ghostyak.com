import type { Metadata } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { Analytics } from "@vercel/analytics/next";
import { getDictionary, isLocale, locales } from "@/i18n";
import "../globals.css";

const siteUrl = "https://ghostyak.com";

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
    formatDetection: { email: false, address: false, telephone: false },
    alternates: {
      canonical: `/${lang}`,
      languages: {
        ko: "/ko",
        en: "/en",
        ja: "/ja",
        zh: "/zh",
        "x-default": "/ko",
      },
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
      locale: { ko: "ko_KR", en: "en_US", ja: "ja_JP", zh: "zh_CN" }[lang],
      alternateLocale: ["ko_KR", "en_US", "ja_JP", "zh_CN"].filter(
        (locale) => locale !== { ko: "ko_KR", en: "en_US", ja: "ja_JP", zh: "zh_CN" }[lang],
      ),
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
    <html lang={lang}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
