import { getDictionary } from "@/i18n/get-dictionary";
import type { Metadata } from "next";
import { HomeContent } from "@/components/SitePages";
import { sourceLocale } from "@/i18n/locales";
import { getLocalizedAlternates, getOpenGraphLocale } from "@/i18n/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const locale = sourceLocale;
  const dictionary = await getDictionary(locale);
  return { title: `Boxes | ${dictionary.worldClock.title}`, description: dictionary.worldClock.description, alternates: getLocalizedAlternates(locale, "/"), openGraph: { ...getOpenGraphLocale(locale), title: `Boxes | ${dictionary.worldClock.title}`, description: dictionary.worldClock.description, url: "/" } };
}

export default function HomePage() {
  return <HomeContent locale={sourceLocale} />;
}
