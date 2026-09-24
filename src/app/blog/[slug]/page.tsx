import type { Metadata } from "next";
import { getBlogPostMetadata } from "@/i18n/blog-metadata";
import { BlogPostContent } from "@/components/SitePages";
import { defaultLocale, sourceLocale } from "@/i18n/locales";
import { getAllPosts, getPost } from "@/lib/blog";

export async function generateStaticParams() {
  return (await getAllPosts(sourceLocale)).map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(defaultLocale, slug);
  return post ? getBlogPostMetadata(defaultLocale, post) : {};
}

export default async function BlogPostPage({ params }: PageProps<"/blog/[slug]">) {
  return <BlogPostContent locale={defaultLocale} slug={(await params).slug} />;
}
