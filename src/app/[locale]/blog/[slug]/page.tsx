import type { Metadata } from "next";
import { BlogPostContent } from "@/components/SitePages";
import { sourceLocale } from "@/i18n/locales";
import { getLocalizedAlternates, getOpenGraphLocale } from "@/i18n/metadata";
import { requireTranslatedLocale } from "@/i18n/route-locale";
import { getAllPosts, getPost } from "@/lib/blog";

export async function generateStaticParams() {
  return (await getAllPosts(sourceLocale)).map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps<"/[locale]/blog/[slug]">): Promise<Metadata> {
  const { locale: localeValue, slug } = await params;
  const locale = requireTranslatedLocale(localeValue);
  const post = await getPost(locale, slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: getLocalizedAlternates(locale, `/blog/${post.slug}`),
    openGraph: { ...getOpenGraphLocale(locale), type: "article", title: post.title, description: post.description, url: `/${locale}/blog/${post.slug}`, publishedTime: post.publishedAt },
  };
}

export default async function LocalizedBlogPostPage({ params }: PageProps<"/[locale]/blog/[slug]">) {
  const { locale, slug } = await params;
  return <BlogPostContent locale={requireTranslatedLocale(locale)} slug={slug} />;
}
