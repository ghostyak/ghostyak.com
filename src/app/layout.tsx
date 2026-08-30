import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { TrackingScripts } from "@/components/TrackingScripts";
import { getDictionary } from "@/i18n/get-dictionary";
import { localeConfig, sourceLocale } from "@/i18n/locales";
import { getSearchEngineVerification, siteUrl } from "@/seo";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const dictionary = await getDictionary(sourceLocale);
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
      locale: localeConfig[sourceLocale].openGraphLocale,
      siteName: "GhostYak",
      images: [{ url: "/ghostyak.png", width: 300, height: 300, alt: "GhostYak" }],
    },
    twitter: { card: "summary_large_image", images: ["/ghostyak.png"] },
  };
}

export default async function RootLayout({ children }: { children: ReactNode }) {
  const dictionary = await getDictionary(sourceLocale);
  return (
    <html lang={localeConfig[sourceLocale].htmlLanguage} data-theme="ghostyak" data-scroll-behavior="smooth">
      <head><TrackingScripts /></head>
      <body className="flex min-h-screen min-w-80 flex-col bg-base-100 text-base-content antialiased">
        <Header labels={dictionary.header} locale={sourceLocale} />
        <div className="flex-1">{children}</div>
        <Footer labels={dictionary.footer} locale={sourceLocale} />
        <Analytics />
      </body>
    </html>
  );
}
