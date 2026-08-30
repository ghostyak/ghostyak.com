import "server-only";

import { promises as fs } from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import type { PublishedLocale } from "@/i18n/locales";

const blogRoot = path.join(process.cwd(), "content", "blog");

export type BlogPostSummary = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  translationKey: string;
  sourceRevision: number;
};

export type BlogPost = BlogPostSummary & { html: string };

function isValidSlug(slug: string) {
  return /^[a-z0-9-]+$/.test(slug);
}

function readFrontmatter(slug: string, source: string): BlogPostSummary & { content: string } {
  const { data, content } = matter(source);
  if (
    typeof data.title !== "string" ||
    typeof data.description !== "string" ||
    typeof data.publishedAt !== "string" ||
    typeof data.translationKey !== "string" ||
    typeof data.sourceRevision !== "number"
  ) {
    throw new Error(`${slug}.md must define title, description, publishedAt, translationKey, and a numeric sourceRevision.`);
  }
  return {
    slug,
    title: data.title,
    description: data.description,
    publishedAt: data.publishedAt,
    translationKey: data.translationKey,
    sourceRevision: data.sourceRevision,
    content,
  };
}

export async function getAllPosts(locale: PublishedLocale): Promise<BlogPostSummary[]> {
  const directory = path.join(blogRoot, locale);
  const filenames = await fs.readdir(directory);
  const posts = await Promise.all(
    filenames.filter((filename) => filename.endsWith(".md")).map(async (filename) => {
      const slug = filename.replace(/\.md$/, "");
      const source = await fs.readFile(path.join(directory, filename), "utf8");
      const post = readFrontmatter(slug, source);
      return {
        slug: post.slug,
        title: post.title,
        description: post.description,
        publishedAt: post.publishedAt,
        translationKey: post.translationKey,
        sourceRevision: post.sourceRevision,
      };
    }),
  );
  return posts.sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export async function getPost(locale: PublishedLocale, slug: string): Promise<BlogPost | null> {
  if (!isValidSlug(slug)) return null;
  try {
    const source = await fs.readFile(path.join(blogRoot, locale, `${slug}.md`), "utf8");
    const { content, ...summary } = readFrontmatter(slug, source);
    const html = String(await unified().use(remarkParse).use(remarkRehype).use(rehypeStringify).process(content));
    return { ...summary, html };
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") return null;
    throw error;
  }
}
