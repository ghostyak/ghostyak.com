import "server-only";

import { notFound } from "next/navigation";
import { isPrefixedLocale, type PrefixedLocale } from "@/i18n/locales";

export function requirePrefixedLocale(value: string): PrefixedLocale {
  if (!isPrefixedLocale(value)) notFound();
  return value;
}
