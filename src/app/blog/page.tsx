import type { Metadata } from "next";
import { BlogContent } from "@/components/SitePages";
import { getDictionary } from "@/i18n/get-dictionary";
import { sourceLocale } from "@/i18n/locales";
import { getLocalizedAlternates, getOpenGraphLocale } from "@/i18n/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const dictionary = await getDictionary(sourceLocale);
  return {
    title: dictionary.metadata.blog.title,
    description: dictionary.metadata.blog.description,
    alternates: getLocalizedAlternates(sourceLocale, "/blog"),
    openGraph: { ...getOpenGraphLocale(sourceLocale), title: dictionary.metadata.blog.title, description: dictionary.metadata.blog.description, url: "/blog" },
  };
}

export default function BlogPage() {
  return <BlogContent locale={sourceLocale} />;
}
