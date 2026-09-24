import { FolderHistoryProduct } from "@/components/FolderHistoryProduct";
import { getFolderHistoryMetadata } from "@/i18n/folder-history-metadata";
import { requirePrefixedLocale } from "@/i18n/route-locale";

export async function generateMetadata({ params }: PageProps<"/[locale]/product/folder-history">) {
  return getFolderHistoryMetadata(requirePrefixedLocale((await params).locale));
}

export default async function Page({ params }: PageProps<"/[locale]/product/folder-history">) {
  return <FolderHistoryProduct locale={requirePrefixedLocale((await params).locale)} />;
}
