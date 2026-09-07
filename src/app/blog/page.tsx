import type { Metadata } from "next";
import { BlogContent } from "@/components/SitePages";
import { getDictionary } from "@/i18n/get-dictionary";
import { defaultLocale } from "@/i18n/locales";
import { getLocalizedAlternates, getOpenGraphLocale } from "@/i18n/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const dictionary = await getDictionary(defaultLocale);
  return {
    title: dictionary.metadata.blog.title,
    description: dictionary.metadata.blog.description,
    alternates: getLocalizedAlternates(defaultLocale, "/blog"),
    openGraph: { ...getOpenGraphLocale(defaultLocale), title: dictionary.metadata.blog.title, description: dictionary.metadata.blog.description, url: "/blog" },
  };
}

export default function BlogPage() {
  return <BlogContent locale={defaultLocale} />;
}
