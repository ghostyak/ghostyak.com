import type { Metadata } from "next";
import { getDictionary } from "@/i18n/get-dictionary";
import type { PublishedLocale } from "@/i18n/locales";
import { getLocalizedAlternates, getOpenGraphLocale } from "@/i18n/metadata";
import { localizedPath } from "@/i18n/routing";
import { landingMedia } from "@/data/landing";

export async function getHomeMetadata(locale: PublishedLocale): Promise<Metadata> {
  const dictionary = await getDictionary(locale);
  const title = dictionary.metadata.site.title;
  const description = dictionary.metadata.site.description;
  const images = [{ url: landingMedia.desktop.src, width: landingMedia.desktop.width, height: landingMedia.desktop.height, alt: dictionary.boxes.screenshotAlts[0] }];
  return {
    title: { absolute: title },
    description,
    alternates: getLocalizedAlternates(locale, "/"),
    openGraph: { ...getOpenGraphLocale(locale), type: "website", title, description, url: localizedPath(locale, "/"), images },
    twitter: { card: "summary_large_image", title, description, images },
  };
}

export async function getLandingMetadata(locale: PublishedLocale, path: "/" | "/product/boxes"): Promise<Metadata> {
  const { landing: copy } = await getDictionary(locale);
  const images = [{ url: landingMedia.desktop.src, width: landingMedia.desktop.width, height: landingMedia.desktop.height, alt: copy.hero.mediaAlt }];
  return {
    title: { absolute: copy.metadata.title },
    description: copy.metadata.description,
    alternates: getLocalizedAlternates(locale, path),
    openGraph: { ...getOpenGraphLocale(locale), type: "website", title: copy.metadata.title, description: copy.metadata.description, url: localizedPath(locale, path), images },
    twitter: { card: "summary_large_image", title: copy.metadata.title, description: copy.metadata.description, images },
  };
}
