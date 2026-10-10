import type { Metadata } from "next";
import { notes } from "@/data/products";
import { getDictionary } from "@/i18n/get-dictionary";
import type { PublishedLocale } from "@/i18n/locales";
import { getLocalizedAlternates, getOpenGraphLocale } from "@/i18n/metadata";
import { localizedPath } from "@/i18n/routing";

export async function getNotesMetadata(locale: PublishedLocale): Promise<Metadata> {
  const { notes: copy } = await getDictionary(locale);
  const title = notes.name;
  const description = copy.description;
  // The library view is the image shown when the page is shared.
  const screenshot = notes.screenshots.library;
  const images = [{ url: screenshot.src, width: screenshot.width, height: screenshot.height, alt: copy.screenshots.library.alt }];
  return {
    title,
    description,
    alternates: getLocalizedAlternates(locale, notes.pagePath),
    openGraph: { ...getOpenGraphLocale(locale), type: "website", title: copy.metadataTitle, description, url: localizedPath(locale, notes.pagePath), images },
    twitter: { card: "summary_large_image", title: copy.metadataTitle, description, images },
  };
}
