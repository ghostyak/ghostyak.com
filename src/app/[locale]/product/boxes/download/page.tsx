import type { Metadata } from "next";
import { BoxesDownloadContent } from "@/components/SitePages";
import { getDictionary } from "@/i18n/get-dictionary";
import { requireTranslatedLocale } from "@/i18n/route-locale";

export async function generateMetadata({ params }: PageProps<"/[locale]/product/boxes/download">): Promise<Metadata> {
  const locale = requireTranslatedLocale((await params).locale);
  const dictionary = await getDictionary(locale);
  return { title: dictionary.metadata.boxesDownload.title, robots: { index: false, follow: true } };
}

export default async function LocalizedBoxesDownloadPage({ params }: PageProps<"/[locale]/product/boxes/download">) {
  return <BoxesDownloadContent locale={requireTranslatedLocale((await params).locale)} />;
}
