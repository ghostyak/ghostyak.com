import type { Metadata } from "next";
import { boxes } from "@/data/products";
import { localeConfig, type PublishedLocale } from "@/i18n/locales";
import { localizedPath } from "@/i18n/routing";

export const siteUrl = "https://www.ghostyak.com";

export function getSearchEngineVerification(): Metadata["verification"] {
  const other: Record<string, string> = {};

  if (process.env.BING_SITE_VERIFICATION)
    other["msvalidate.01"] = process.env.BING_SITE_VERIFICATION;
  if (process.env.NAVER_SITE_VERIFICATION)
    other["naver-site-verification"] = process.env.NAVER_SITE_VERIFICATION;
  if (process.env.BAIDU_SITE_VERIFICATION)
    other["baidu-site-verification"] = process.env.BAIDU_SITE_VERIFICATION;

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
  locale: PublishedLocale;
  description: string;
  featureNames: readonly string[];
}) {
  const productPath = localizedPath(locale, "/product/boxes");
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${siteUrl}/#ghostyak-boxes`,
    name: boxes.fullName,
    description,
    url: `${siteUrl}${productPath}`,
    image: `${siteUrl}${boxes.screenshots[0].src}`,
    screenshot: boxes.screenshots.map(
      (screenshot) => `${siteUrl}${screenshot.src}`,
    ),
    downloadUrl: boxes.download.installerUrl,
    softwareVersion: boxes.version,
    operatingSystem: "Windows 10, Windows 11",
    applicationCategory: "UtilitiesApplication",
    inLanguage: localeConfig[locale].htmlLanguage,
    featureList: featureNames,
    isAccessibleForFree: true,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "KRW",
      availability: "https://schema.org/InStock",
      url: `${siteUrl}${productPath}`,
    },
    publisher: {
      "@type": "Organization",
      name: "GhostYak",
      url: siteUrl,
      logo: `${siteUrl}/ghostyak.png`,
    },
  };
}
