import type { Metadata } from "next";
import { BlogContent } from "@/components/SitePages";
import { getDictionary } from "@/i18n/get-dictionary";
import { getLocalizedAlternates, getOpenGraphLocale } from "@/i18n/metadata";
import { requireTranslatedLocale } from "@/i18n/route-locale";

export async function generateMetadata({ params }: PageProps<"/[locale]/blog">): Promise<Metadata> {
  const locale = requireTranslatedLocale((await params).locale);
  const dictionary = await getDictionary(locale);
  return {
    title: dictionary.metadata.blog.title,
    description: dictionary.metadata.blog.description,
    alternates: getLocalizedAlternates(locale, "/blog"),
    openGraph: { ...getOpenGraphLocale(locale), title: dictionary.metadata.blog.title, description: dictionary.metadata.blog.description, url: `/${locale}/blog` },
  };
}

export default async function LocalizedBlogPage({ params }: PageProps<"/[locale]/blog">) {
  return <BlogContent locale={requireTranslatedLocale((await params).locale)} />;
}
