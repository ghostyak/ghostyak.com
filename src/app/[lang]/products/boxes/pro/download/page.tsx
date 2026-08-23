import { notFound } from "next/navigation";
import { BoxesDownloadPage } from "@/components/BoxesDownloadPage";
import { boxes } from "@/data/products";
import { getDictionary, isLocale } from "@/i18n";

export default async function ProDownloadPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const boxesUrl = `/${lang}/products/boxes`;
  return <BoxesDownloadPage editionName={getDictionary(lang).download.editions[1].name} editionUrl={`${boxesUrl}/pro`} downloadUrl={boxes.editions[1].downloadUrl} boxesUrl={boxesUrl} proUrl={`${boxesUrl}/pro`} />;
}
