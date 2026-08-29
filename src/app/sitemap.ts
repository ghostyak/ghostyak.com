import type { MetadataRoute } from "next";
import { boxes } from "@/data/products";
import { getAllPosts } from "@/lib/blog";
import { siteUrl } from "@/seo";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts();

  return [
    {
      url: siteUrl,
      changeFrequency: "monthly",
      priority: 1,
      images: [`${siteUrl}${boxes.screenshots[0].src}`],
    },
    {
      url: `${siteUrl}/product/boxes`,
      changeFrequency: "monthly",
      priority: 0.9,
      images: boxes.screenshots.map((screenshot) => `${siteUrl}${screenshot.src}`),
    },
    {
      url: `${siteUrl}/blog`,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...posts.map((post) => ({
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified: new Date(`${post.publishedAt}T00:00:00+09:00`),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
