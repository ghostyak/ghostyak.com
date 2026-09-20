import { CsvSearchProduct } from "@/components/CsvSearchProduct";
import { getCsvSearchMetadata } from "@/i18n/csv-search-metadata";
import { requirePrefixedLocale } from "@/i18n/route-locale";

export async function generateMetadata({ params }: PageProps<"/[locale]/product/csv-search-engine">) {
  return getCsvSearchMetadata(requirePrefixedLocale((await params).locale));
}

export default async function Page({ params }: PageProps<"/[locale]/product/csv-search-engine">) {
  return <CsvSearchProduct locale={requirePrefixedLocale((await params).locale)} />;
}
