import type { MetadataRoute } from "next";
import { languageAlternates, locales } from "@/locales";
import { siteUrl } from "@/seo";

const productImage = `${siteUrl}/images/boxes-hero-concept-v3.png`;

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(
    Object.entries(languageAlternates).map(([locale, path]) => [
      locale,
      `${siteUrl}${path}`,
    ]),
  );

  return locales.map((locale) => ({
    url: `${siteUrl}/${locale}`,
    changeFrequency: "monthly",
    priority: 1,
    images: [productImage],
    alternates: { languages },
  }));
}
