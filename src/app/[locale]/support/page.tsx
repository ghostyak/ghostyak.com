import { SupportContent } from "@/components/SupportContent";
import { requirePrefixedLocale } from "@/i18n/route-locale";
import { getSupportMetadata } from "@/i18n/support-metadata";

export async function generateMetadata({ params }: PageProps<"/[locale]/support">) {
  return getSupportMetadata(requirePrefixedLocale((await params).locale));
}

export default async function Page({ params }: PageProps<"/[locale]/support">) {
  return <SupportContent locale={requirePrefixedLocale((await params).locale)} />;
}
