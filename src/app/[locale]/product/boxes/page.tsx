import type { Metadata } from "next";
import { BoxesContent } from "@/components/SitePages";
import { boxes } from "@/data/products";
import { getDictionary } from "@/i18n/get-dictionary";
import { getLocalizedAlternates, getOpenGraphLocale } from "@/i18n/metadata";
import { requireTranslatedLocale } from "@/i18n/route-locale";

export async function generateMetadata({ params }: PageProps<"/[locale]/product/boxes">): Promise<Metadata> {
  const locale = requireTranslatedLocale((await params).locale);
  const dictionary = await getDictionary(locale);
  const url = `/${locale}/product/boxes`;
  return {
    title: dictionary.metadata.boxes.title,
    description: dictionary.worldClock.description,
    alternates: getLocalizedAlternates(locale, "/product/boxes"),
    openGraph: { ...getOpenGraphLocale(locale), title: dictionary.metadata.boxes.openGraphTitle, description: dictionary.worldClock.description, url, images: [boxes.screenshots[0].src] },
  };
}

export default async function LocalizedBoxesPage({ params }: PageProps<"/[locale]/product/boxes">) {
  return <BoxesContent locale={requireTranslatedLocale((await params).locale)} />;
}
