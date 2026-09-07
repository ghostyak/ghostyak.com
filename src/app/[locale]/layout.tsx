import type { ReactNode } from "react";
import { prefixedLocales } from "@/i18n/locales";
import { requirePrefixedLocale } from "@/i18n/route-locale";

export function generateStaticParams() {
  return prefixedLocales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: { children: ReactNode; params: Promise<{ locale: string }> }) {
  requirePrefixedLocale((await params).locale);
  return children;
}
