import type { Metadata } from "next";
import { folderHistory } from "@/data/products";
import { getDictionary } from "@/i18n/get-dictionary";
import type { PublishedLocale } from "@/i18n/locales";
import { getLocalizedAlternates, getOpenGraphLocale } from "@/i18n/metadata";
import { localizedPath } from "@/i18n/routing";

export async function getFolderHistoryMetadata(locale: PublishedLocale): Promise<Metadata> {
  const { folderHistory: copy } = await getDictionary(locale);
  const title = folderHistory.name;
  const description = copy.description;
  const screenshot = folderHistory.screenshots[0];
  const images = [{ url: screenshot.src, width: screenshot.width, height: screenshot.height, alt: copy.screenshots[0].alt }];
  return {
    title,
    description,
    alternates: getLocalizedAlternates(locale, folderHistory.pagePath),
    openGraph: { ...getOpenGraphLocale(locale), type: "website", title: copy.metadataTitle, description, url: localizedPath(locale, folderHistory.pagePath), images },
    twitter: { card: "summary_large_image", title: copy.metadataTitle, description, images },
  };
}
