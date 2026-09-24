import type { Metadata } from "next";
import type { PublishedLocale } from "@/i18n/locales";
import { getLocalizedAlternates, getOpenGraphLocale } from "@/i18n/metadata";
import { localizedPath } from "@/i18n/routing";
import type { BlogPostSummary } from "@/lib/blog";

export function getBlogPostMetadata(locale: PublishedLocale, post: BlogPostSummary): Metadata {
  const path = `/blog/${post.slug}` as const;
  const images = post.image ? [{ url: post.image, alt: post.imageAlt }] : undefined;
  return {
    title: post.title,
    description: post.description,
    alternates: getLocalizedAlternates(locale, path),
    openGraph: { ...getOpenGraphLocale(locale), type: "article", title: post.title, description: post.description, url: localizedPath(locale, path), publishedTime: post.publishedAt, images },
    twitter: { card: images ? "summary_large_image" : "summary", title: post.title, description: post.description, images },
  };
}
