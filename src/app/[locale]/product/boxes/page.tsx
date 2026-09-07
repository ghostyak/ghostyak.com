import { BoxesContent } from "@/components/SitePages";
import { getLandingMetadata } from "@/i18n/landing-metadata";
import { requirePrefixedLocale } from "@/i18n/route-locale";

export async function generateMetadata({ params }: PageProps<"/[locale]/product/boxes">) {
  return getLandingMetadata(requirePrefixedLocale((await params).locale), "/product/boxes");
}

export default async function Page({ params }: PageProps<"/[locale]/product/boxes">) {
  return <BoxesContent locale={requirePrefixedLocale((await params).locale)} />;
}
