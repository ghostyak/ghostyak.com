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

  const localizedHomePages: MetadataRoute.Sitemap = locales.map((locale) => ({
    url: `${siteUrl}/${locale}`,
    changeFrequency: "monthly",
    priority: 1,
    images: [productImage],
    alternates: { languages },
  }));

  const productPages: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}/products/boxes`,
      changeFrequency: "monthly",
      priority: 0.9,
      images: [productImage],
    },
    {
      url: `${siteUrl}/products/boxes/community`,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [productImage],
    },
    {
      url: `${siteUrl}/products/boxes/pro`,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [productImage],
    },
  ];

  return [...localizedHomePages, ...productPages];
}
