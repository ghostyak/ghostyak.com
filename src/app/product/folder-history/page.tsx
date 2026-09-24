import { FolderHistoryProduct } from "@/components/FolderHistoryProduct";
import { getFolderHistoryMetadata } from "@/i18n/folder-history-metadata";
import { defaultLocale } from "@/i18n/locales";

export async function generateMetadata() {
  return getFolderHistoryMetadata(defaultLocale);
}

export default function Page() {
  return <FolderHistoryProduct locale={defaultLocale} />;
}
