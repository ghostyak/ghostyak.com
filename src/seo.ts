import type { Metadata } from "next";
import { boxes } from "@/data/products";
import { htmlLanguages, type Locale } from "@/locales";

export const siteUrl = "https://ghostyak.com";

export function getSearchEngineVerification(): Metadata["verification"] {
  const other: Record<string, string> = {};

  if (process.env.BING_SITE_VERIFICATION) {
    other["msvalidate.01"] = process.env.BING_SITE_VERIFICATION;
  }
  if (process.env.NAVER_SITE_VERIFICATION) {
    other["naver-site-verification"] = process.env.NAVER_SITE_VERIFICATION;
  }
  if (process.env.BAIDU_SITE_VERIFICATION) {
    other["baidu-site-verification"] = process.env.BAIDU_SITE_VERIFICATION;
  }

  const google = process.env.GOOGLE_SITE_VERIFICATION;
  if (!google && Object.keys(other).length === 0) return undefined;

  return {
    ...(google ? { google } : {}),
    ...(Object.keys(other).length > 0 ? { other } : {}),
  };
}

export function getSoftwareApplicationJsonLd({
  locale,
  description,
  featureNames,
}: {
  locale: Locale;
  description: string;
  featureNames: readonly string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${siteUrl}/#ghostyak-boxes`,
    name: boxes.name,
    description,
    url: `${siteUrl}/products/boxes`,
    image: `${siteUrl}/images/boxes-hero-concept-v3.png`,
    screenshot: `${siteUrl}/images/boxes-hero-concept-v3.png`,
    downloadUrl: boxes.editions[0].downloadUrl,
    softwareVersion: boxes.version,
    operatingSystem: "Windows 10, Windows 11",
    applicationCategory: "UtilitiesApplication",
    inLanguage: htmlLanguages[locale],
    featureList: featureNames,
    isAccessibleForFree: true,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: `${siteUrl}${boxes.editions[0].productUrl}`,
    },
    publisher: {
      "@type": "Organization",
      name: "GhostYak",
      url: siteUrl,
      logo: `${siteUrl}/ghostyak.png`,
    },
  };
}
