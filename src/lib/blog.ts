import "server-only";

import { promises as fs } from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

const blogDirectory = path.join(process.cwd(), "content", "blog");

export type BlogPostSummary = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
};

export type BlogPost = BlogPostSummary & {
  html: string;
};

function isValidSlug(slug: string) {
  return /^[a-z0-9-]+$/.test(slug);
}

function readFrontmatter(slug: string, source: string): BlogPostSummary & { content: string } {
  const { data, content } = matter(source);

  if (typeof data.title !== "string" || typeof data.description !== "string" || typeof data.publishedAt !== "string") {
    throw new Error(`${slug}.md의 title, description, publishedAt 메타데이터를 확인해 주세요.`);
  }

  return {
    slug,
    title: data.title,
    description: data.description,
    publishedAt: data.publishedAt,
    content,
  };
}

export async function getAllPosts(): Promise<BlogPostSummary[]> {
  const filenames = await fs.readdir(blogDirectory);
  const posts = await Promise.all(
    filenames
      .filter((filename) => filename.endsWith(".md"))
      .map(async (filename) => {
        const slug = filename.replace(/\.md$/, "");
        const source = await fs.readFile(path.join(blogDirectory, filename), "utf8");
        const post = readFrontmatter(slug, source);
        return {
          slug: post.slug,
          title: post.title,
          description: post.description,
          publishedAt: post.publishedAt,
        };
      }),
  );

  return posts.sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export async function getPost(slug: string): Promise<BlogPost | null> {
  if (!isValidSlug(slug)) return null;

  try {
    const source = await fs.readFile(path.join(blogDirectory, `${slug}.md`), "utf8");
    const { content, ...summary } = readFrontmatter(slug, source);
    const html = String(
      await unified().use(remarkParse).use(remarkRehype).use(rehypeStringify).process(content),
    );

    return { ...summary, html };
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") return null;
    throw error;
  }
}
