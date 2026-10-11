import type { Metadata } from "next";
import { boxes, notes } from "@/data/products";
import { localeConfig, type PublishedLocale } from "@/i18n/locales";
import { localizedPath } from "@/i18n/routing";
import type { BlogPostSummary } from "@/lib/blog";

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
      url: `${siteUrl}${localizedPath(locale, "/")}`,
      logo: `${siteUrl}/favicon.svg`,
    },
  };
}

// Notes is a time-limited beta with no announced price, so it declares no offer.
export function getNotesJsonLd({ locale, description, featureNames }: { locale: PublishedLocale; description: string; featureNames: readonly string[] }) {
  const screenshots = Object.values(notes.screenshots).map((screenshot) => `${siteUrl}${screenshot.src}`);
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${siteUrl}/#ghostyak-notes`,
    name: notes.fullName,
    description,
    url: `${siteUrl}${localizedPath(locale, notes.pagePath)}`,
    image: `${siteUrl}${notes.screenshots.library.src}`,
    screenshot: screenshots,
    downloadUrl: notes.downloadUrl,
    operatingSystem: "Windows",
    applicationCategory: "UtilitiesApplication",
    inLanguage: localeConfig[locale].htmlLanguage,
    featureList: featureNames,
    publisher: {
      "@type": "Organization",
      name: "GhostYak",
      url: `${siteUrl}${localizedPath(locale, "/")}`,
      logo: `${siteUrl}/favicon.svg`,
    },
  };
}

export function getBlogPostingJsonLd({ locale, post }: { locale: PublishedLocale; post: BlogPostSummary }) {
  const url = `${siteUrl}${localizedPath(locale, `/blog/${post.slug}`)}`;
  const organization = { "@type": "Organization", name: "GhostYak", url: `${siteUrl}${localizedPath(locale, "/")}`, logo: `${siteUrl}/favicon.svg` };
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: `${post.publishedAt}T00:00:00+09:00`,
    inLanguage: localeConfig[locale].htmlLanguage,
    url,
    mainEntityOfPage: url,
    ...(post.image ? { image: `${siteUrl}${post.image}` } : {}),
    author: organization,
    publisher: organization,
  };
}
