import type { ReactNode } from "react";
import { translatedLocales } from "@/i18n/locales";
import { requireTranslatedLocale } from "@/i18n/route-locale";

export function generateStaticParams() {
  return translatedLocales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: { children: ReactNode; params: Promise<{ locale: string }> }) {
  requireTranslatedLocale((await params).locale);
  return children;
}
