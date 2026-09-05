import { getDictionary } from "@/i18n/get-dictionary";
import type { Metadata } from "next";
import { HomeContent } from "@/components/SitePages";
import { getLocalizedAlternates, getOpenGraphLocale } from "@/i18n/metadata";
import { requireTranslatedLocale } from "@/i18n/route-locale";

export async function generateMetadata({ params }: PageProps<"/[locale]">): Promise<Metadata> {
  const locale = requireTranslatedLocale((await params).locale);
  const dictionary = await getDictionary(locale);
  return { title: `Boxes | ${dictionary.worldClock.title}`, description: dictionary.worldClock.description, alternates: getLocalizedAlternates(locale, "/"), openGraph: { ...getOpenGraphLocale(locale), title: `Boxes | ${dictionary.worldClock.title}`, description: dictionary.worldClock.description, url: `/${locale}` } };
}

export default async function LocalizedHomePage({ params }: PageProps<"/[locale]">) {
  return <HomeContent locale={requireTranslatedLocale((await params).locale)} />;
}
