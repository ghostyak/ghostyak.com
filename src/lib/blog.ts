import "server-only";

import { promises as fs } from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import { publishedLocales, sourceLocale, type PublishedLocale } from "@/i18n/locales";

const blogRoot = path.join(process.cwd(), "content", "blog");

export type BlogPostSummary = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  translationKey: string;
  sourceRevision: number;
  // Optional share and structured-data image, a path under public/.
  image?: string;
  imageAlt?: string;
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
  if ((data.image !== undefined && typeof data.image !== "string") || (data.imageAlt !== undefined && typeof data.imageAlt !== "string") || (data.image && !data.imageAlt)) {
    throw new Error(`${slug}.md image must be a string path with a string imageAlt.`);
  }
  return {
    slug,
    title: data.title,
    description: data.description,
    publishedAt: data.publishedAt,
    translationKey: data.translationKey,
    sourceRevision: data.sourceRevision,
    image: data.image,
    imageAlt: data.imageAlt,
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
        image: post.image,
        imageAlt: post.imageAlt,
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

export async function validatePublishedBlogTranslations() {
  const sourcePosts = await getAllPosts(sourceLocale);

  for (const locale of publishedLocales) {
    const translatedPosts = await getAllPosts(locale);
    const translationsByKey = new Map(translatedPosts.map((post) => [post.translationKey, post]));

    const sourceKeys = new Set(sourcePosts.map((post) => post.translationKey));
    if (translationsByKey.size !== translatedPosts.length || translatedPosts.some((post) => !sourceKeys.has(post.translationKey))) {
      throw new Error(`[${locale}] Duplicate or source-less blog translation.`);
    }

    for (const sourcePost of sourcePosts) {
      const translation = translationsByKey.get(sourcePost.translationKey);
      if (!translation) throw new Error(`[${locale}] Missing blog translation: ${sourcePost.translationKey}`);
      if (translation.sourceRevision !== sourcePost.sourceRevision) {
        throw new Error(`[${locale}] Outdated blog translation: ${sourcePost.translationKey}`);
      }
      if (translation.slug !== sourcePost.slug) {
        throw new Error(`[${locale}] Blog translations must share the source slug: ${sourcePost.slug}`);
      }
    }
  }
}
