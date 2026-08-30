import type { Metadata } from "next";
import { BlogPostContent } from "@/components/SitePages";
import { sourceLocale } from "@/i18n/locales";
import { getLocalizedAlternates, getOpenGraphLocale } from "@/i18n/metadata";
import { getAllPosts, getPost } from "@/lib/blog";

export async function generateStaticParams() {
  return (await getAllPosts(sourceLocale)).map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(sourceLocale, slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: getLocalizedAlternates(sourceLocale, `/blog/${post.slug}`),
    openGraph: { ...getOpenGraphLocale(sourceLocale), type: "article", title: post.title, description: post.description, url: `/blog/${post.slug}`, publishedTime: post.publishedAt },
  };
}

export default async function BlogPostPage({ params }: PageProps<"/blog/[slug]">) {
  return <BlogPostContent locale={sourceLocale} slug={(await params).slug} />;
}
