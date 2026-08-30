import type { Metadata } from "next";
import { HomeContent } from "@/components/SitePages";
import { sourceLocale } from "@/i18n/locales";
import { getLocalizedAlternates } from "@/i18n/metadata";

export function generateMetadata(): Metadata {
  return { alternates: getLocalizedAlternates(sourceLocale, "/") };
}

export default function HomePage() {
  return <HomeContent locale={sourceLocale} />;
}
