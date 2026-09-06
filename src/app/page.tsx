import { HomeContent } from "@/components/SitePages";
import { getHomeMetadata } from "@/i18n/landing-metadata";
import { sourceLocale } from "@/i18n/locales";

export async function generateMetadata() {
  return getHomeMetadata(sourceLocale);
}

export default function Page() {
  return <HomeContent locale={sourceLocale} />;
}
