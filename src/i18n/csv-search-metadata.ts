import type { Metadata } from "next";
import { csvSearchEngine } from "@/data/products";
import { getDictionary } from "@/i18n/get-dictionary";
import type { PublishedLocale } from "@/i18n/locales";
import { getLocalizedAlternates, getOpenGraphLocale } from "@/i18n/metadata";
import { localizedPath } from "@/i18n/routing";

export async function getCsvSearchMetadata(locale: PublishedLocale): Promise<Metadata> {
  const { csvSearch: copy } = await getDictionary(locale);
  const title = csvSearchEngine.name;
  const description = copy.description;
  const screenshot = csvSearchEngine.screenshots[1];
  const images = [{ url: screenshot.src, width: screenshot.width, height: screenshot.height, alt: copy.screenshots[1].alt }];
  return {
    title,
    description,
    alternates: getLocalizedAlternates(locale, csvSearchEngine.pagePath),
    openGraph: { ...getOpenGraphLocale(locale), type: "website", title, description, url: localizedPath(locale, csvSearchEngine.pagePath), images },
    twitter: { card: "summary_large_image", title, description, images },
  };
}
