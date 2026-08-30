import type { MetadataRoute } from "next";
import { boxes } from "@/data/products";
import { localeConfig, publishedLocales, type PublishedLocale } from "@/i18n/locales";
import { localizedPath } from "@/i18n/routing";
import { validatePublishedDictionaries } from "@/i18n/validate";
import { getAllPosts, validatePublishedBlogTranslations } from "@/lib/blog";
import { siteUrl } from "@/seo";

function absoluteLocalizedUrl(locale: PublishedLocale, path: `/${string}` | "/") {
  return `${siteUrl}${localizedPath(locale, path)}`;
}

function languageAlternates(path: `/${string}` | "/") {
  return Object.fromEntries(
    publishedLocales.map((locale) => [localeConfig[locale].htmlLanguage, absoluteLocalizedUrl(locale, path)]),
  );
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  await Promise.all([validatePublishedDictionaries(), validatePublishedBlogTranslations()]);
  const postsByLocale = await Promise.all(
    publishedLocales.map(async (locale) => ({ locale, posts: await getAllPosts(locale) })),
  );

  return publishedLocales.flatMap((locale) => [
    {
      url: absoluteLocalizedUrl(locale, "/"),
      changeFrequency: "monthly" as const,
      priority: 1,
      alternates: { languages: languageAlternates("/") },
      images: [`${siteUrl}${boxes.screenshots[0].src}`],
    },
    {
      url: absoluteLocalizedUrl(locale, "/product/boxes"),
      changeFrequency: "monthly" as const,
      priority: 0.9,
      alternates: { languages: languageAlternates("/product/boxes") },
      images: boxes.screenshots.map((screenshot) => `${siteUrl}${screenshot.src}`),
    },
    {
      url: absoluteLocalizedUrl(locale, "/blog"),
      changeFrequency: "weekly" as const,
      priority: 0.7,
      alternates: { languages: languageAlternates("/blog") },
    },
    ...postsByLocale
      .find((candidate) => candidate.locale === locale)!
      .posts.map((post) => ({
        url: absoluteLocalizedUrl(locale, `/blog/${post.slug}`),
        lastModified: new Date(`${post.publishedAt}T00:00:00+09:00`),
        changeFrequency: "monthly" as const,
        priority: 0.6,
        alternates: { languages: languageAlternates(`/blog/${post.slug}`) },
      })),
  ]);
}
