import { CsvSearchProduct } from "@/components/CsvSearchProduct";
import { getCsvSearchMetadata } from "@/i18n/csv-search-metadata";
import { defaultLocale } from "@/i18n/locales";

export async function generateMetadata() {
  return getCsvSearchMetadata(defaultLocale);
}

export default function Page() {
  return <CsvSearchProduct locale={defaultLocale} />;
}
