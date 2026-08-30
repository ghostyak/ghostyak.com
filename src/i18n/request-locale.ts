import "server-only";

import { headers } from "next/headers";
import { isPublishedLocale, localeHeaderName, pathnameHeaderName, sourceLocale, type PublishedLocale } from "@/i18n/locales";

export async function getRequestLocale(): Promise<PublishedLocale> {
  const locale = (await headers()).get(localeHeaderName);
  return locale && isPublishedLocale(locale) ? locale : sourceLocale;
}

export async function getRequestPathname() {
  return (await headers()).get(pathnameHeaderName) ?? "/";
}
