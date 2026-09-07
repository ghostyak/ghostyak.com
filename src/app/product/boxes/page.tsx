import { BoxesContent } from "@/components/SitePages";
import { getLandingMetadata } from "@/i18n/landing-metadata";
import { defaultLocale } from "@/i18n/locales";

export async function generateMetadata() {
  return getLandingMetadata(defaultLocale, "/product/boxes");
}

export default function Page() {
  return <BoxesContent locale={defaultLocale} />;
}
