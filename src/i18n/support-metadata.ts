import type { Metadata } from "next";
import { supportPagePath } from "@/data/support";
import { getDictionary } from "@/i18n/get-dictionary";
import type { PublishedLocale } from "@/i18n/locales";
import { getLocalizedAlternates, getOpenGraphLocale } from "@/i18n/metadata";
import { localizedPath } from "@/i18n/routing";

export async function getSupportMetadata(locale: PublishedLocale): Promise<Metadata> {
  const { header, supportPage: copy } = await getDictionary(locale);
  const description = copy.description;
  return {
    title: header.support,
    description,
    alternates: getLocalizedAlternates(locale, supportPagePath),
    openGraph: { ...getOpenGraphLocale(locale), type: "website", title: copy.metadataTitle, description, url: localizedPath(locale, supportPagePath) },
    twitter: { card: "summary", title: copy.metadataTitle, description },
  };
}
