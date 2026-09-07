import { HomeContent } from "@/components/SitePages";
import { getHomeMetadata } from "@/i18n/landing-metadata";
import { requirePrefixedLocale } from "@/i18n/route-locale";

export async function generateMetadata({ params }: PageProps<"/[locale]">) {
  return getHomeMetadata(requirePrefixedLocale((await params).locale));
}

export default async function Page({ params }: PageProps<"/[locale]">) {
  return <HomeContent locale={requirePrefixedLocale((await params).locale)} />;
}
