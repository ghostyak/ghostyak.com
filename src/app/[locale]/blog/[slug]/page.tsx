import type { Metadata } from "next";
import { getBlogPostMetadata } from "@/i18n/blog-metadata";
import { BlogPostContent } from "@/components/SitePages";
import { sourceLocale } from "@/i18n/locales";
import { requirePrefixedLocale } from "@/i18n/route-locale";
import { getAllPosts, getPost } from "@/lib/blog";

export async function generateStaticParams() {
  return (await getAllPosts(sourceLocale)).map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps<"/[locale]/blog/[slug]">): Promise<Metadata> {
  const { locale: localeValue, slug } = await params;
  const locale = requirePrefixedLocale(localeValue);
  const post = await getPost(locale, slug);
  return post ? getBlogPostMetadata(locale, post) : {};
}

export default async function LocalizedBlogPostPage({ params }: PageProps<"/[locale]/blog/[slug]">) {
  const { locale, slug } = await params;
  return <BlogPostContent locale={requirePrefixedLocale(locale)} slug={slug} />;
}
