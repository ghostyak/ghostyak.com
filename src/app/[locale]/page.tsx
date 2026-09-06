import { HomeContent } from "@/components/SitePages";
import { getHomeMetadata } from "@/i18n/landing-metadata";
import { requireTranslatedLocale } from "@/i18n/route-locale";

export async function generateMetadata({ params }: PageProps<"/[locale]">) {
  return getHomeMetadata(requireTranslatedLocale((await params).locale));
}

export default async function Page({ params }: PageProps<"/[locale]">) {
  return <HomeContent locale={requireTranslatedLocale((await params).locale)} />;
}
