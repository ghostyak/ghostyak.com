import { notFound } from "next/navigation";
import { BoxesDownloadPage } from "@/components/BoxesDownloadPage";
import { boxes } from "@/data/products";
import { getDictionary, isLocale } from "@/i18n";

export default async function CommunityDownloadPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const boxesUrl = `/${lang}/products/boxes`;
  return <BoxesDownloadPage editionName={getDictionary(lang).download.editions[0].name} editionUrl={`${boxesUrl}/community`} downloadUrl={boxes.editions[0].downloadUrl} boxesUrl={boxesUrl} proUrl={`${boxesUrl}/pro`} />;
}
