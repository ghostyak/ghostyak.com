import { HomeContent } from "@/components/SitePages";
import { getHomeMetadata } from "@/i18n/landing-metadata";
import { defaultLocale } from "@/i18n/locales";

export async function generateMetadata() {
  return getHomeMetadata(defaultLocale);
}

export default function Page() {
  return <HomeContent locale={defaultLocale} />;
}
