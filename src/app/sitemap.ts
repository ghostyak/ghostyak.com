import type { MetadataRoute } from "next";

const siteUrl = "https://ghostyak.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = {
    ko: `${siteUrl}/ko`,
    en: `${siteUrl}/en`,
    ja: `${siteUrl}/ja`,
    zh: `${siteUrl}/zh`,
    "x-default": `${siteUrl}/ko`,
  };

  return (["ko", "en", "ja", "zh"] as const).map((locale) => ({
    url: languages[locale],
    changeFrequency: "monthly",
    priority: 1,
    alternates: { languages },
  }));
}
