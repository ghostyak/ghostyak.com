import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { TrackingScripts } from "@/components/TrackingScripts";
import { getDictionary } from "@/i18n/get-dictionary";
import { localeConfig, publishedLocales } from "@/i18n/locales";
import { getRequestLocale, getRequestPathname } from "@/i18n/request-locale";
import { getSearchEngineVerification, siteUrl } from "@/seo";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const dictionary = await getDictionary(locale);
  return {
    metadataBase: new URL(siteUrl),
    title: { default: dictionary.metadata.site.title, template: dictionary.metadata.site.titleTemplate },
    description: dictionary.metadata.site.description,
    applicationName: "GhostYak",
    creator: "GhostYak",
    publisher: "GhostYak",
    verification: getSearchEngineVerification(),
    formatDetection: { email: false, address: false, telephone: false },
    openGraph: {
      type: "website",
      locale: localeConfig[locale].openGraphLocale,
      alternateLocale: publishedLocales.filter((candidate) => candidate !== locale).map((candidate) => localeConfig[candidate].openGraphLocale),
      siteName: "GhostYak",
      images: [{ url: "/ghostyak.png", width: 300, height: 300, alt: "GhostYak" }],
    },
    twitter: { card: "summary_large_image", images: ["/ghostyak.png"] },
  };
}

export default async function RootLayout({ children }: { children: ReactNode }) {
  const [locale, currentPath] = await Promise.all([getRequestLocale(), getRequestPathname()]);
  const dictionary = await getDictionary(locale);
  return (
    <html lang={localeConfig[locale].htmlLanguage} data-theme="ghostyak" data-scroll-behavior="smooth">
      <head><TrackingScripts /></head>
      <body className="flex min-h-screen min-w-80 flex-col bg-base-100 text-base-content antialiased">
        <Header labels={dictionary.header} locale={locale} currentPath={currentPath} />
        <div className="flex-1">{children}</div>
        <Footer labels={dictionary.footer} locale={locale} />
        <Analytics />
      </body>
    </html>
  );
}
