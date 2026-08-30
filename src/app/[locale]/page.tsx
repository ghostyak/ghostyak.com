import type { Metadata } from "next";
import { HomeContent } from "@/components/SitePages";
import { getLocalizedAlternates } from "@/i18n/metadata";
import { requireTranslatedLocale } from "@/i18n/route-locale";

export async function generateMetadata({ params }: PageProps<"/[locale]">): Promise<Metadata> {
  return { alternates: getLocalizedAlternates(requireTranslatedLocale((await params).locale), "/") };
}

export default async function LocalizedHomePage({ params }: PageProps<"/[locale]">) {
  return <HomeContent locale={requireTranslatedLocale((await params).locale)} />;
}
