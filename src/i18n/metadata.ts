import type { Metadata } from "next";
import { localeConfig, publishedLocales, sourceLocale, type PublishedLocale } from "@/i18n/locales";
import { localizedPath } from "@/i18n/routing";

export function getLocalizedAlternates(locale: PublishedLocale, path: `/${string}` | "/"): Metadata["alternates"] {
  return {
    canonical: localizedPath(locale, path),
    languages: {
      ...Object.fromEntries(
        publishedLocales.map((candidate) => [localeConfig[candidate].htmlLanguage, localizedPath(candidate, path)]),
      ),
      "x-default": localizedPath(sourceLocale, path),
    },
  };
}

export function getOpenGraphLocale(locale: PublishedLocale) {
  return {
    locale: localeConfig[locale].openGraphLocale,
    alternateLocale: publishedLocales
      .filter((candidate) => candidate !== locale)
      .map((candidate) => localeConfig[candidate].openGraphLocale),
    siteName: "GhostYak",
  };
}
