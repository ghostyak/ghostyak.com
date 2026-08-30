import type { Metadata } from "next";
import { BoxesDownloadContent } from "@/components/SitePages";
import { getDictionary } from "@/i18n/get-dictionary";
import { sourceLocale } from "@/i18n/locales";

export async function generateMetadata(): Promise<Metadata> {
  const dictionary = await getDictionary(sourceLocale);
  return { title: dictionary.metadata.boxesDownload.title, robots: { index: false, follow: true } };
}

export default function BoxesDownloadPage() {
  return <BoxesDownloadContent locale={sourceLocale} />;
}
