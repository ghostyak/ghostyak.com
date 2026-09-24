import { SupportContent } from "@/components/SupportContent";
import { defaultLocale } from "@/i18n/locales";
import { getSupportMetadata } from "@/i18n/support-metadata";

export async function generateMetadata() {
  return getSupportMetadata(defaultLocale);
}

export default function Page() {
  return <SupportContent locale={defaultLocale} />;
}
