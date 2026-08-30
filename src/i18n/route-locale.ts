import "server-only";

import { notFound } from "next/navigation";
import { isTranslatedLocale, type TranslatedLocale } from "@/i18n/locales";

export function requireTranslatedLocale(value: string): TranslatedLocale {
  if (!isTranslatedLocale(value)) notFound();
  return value;
}
