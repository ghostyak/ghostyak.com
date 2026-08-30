import type { Metadata } from "next";
import { BoxesContent } from "@/components/SitePages";
import { boxes } from "@/data/products";
import { getDictionary } from "@/i18n/get-dictionary";
import { sourceLocale } from "@/i18n/locales";
import { getLocalizedAlternates, getOpenGraphLocale } from "@/i18n/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const dictionary = await getDictionary(sourceLocale);
  return {
    title: dictionary.metadata.boxes.title,
    description: dictionary.boxes.description,
    alternates: getLocalizedAlternates(sourceLocale, "/product/boxes"),
    openGraph: { ...getOpenGraphLocale(sourceLocale), title: dictionary.metadata.boxes.openGraphTitle, description: dictionary.boxes.description, url: "/product/boxes", images: [boxes.screenshots[0].src] },
  };
}

export default function BoxesPage() {
  return <BoxesContent locale={sourceLocale} />;
}
