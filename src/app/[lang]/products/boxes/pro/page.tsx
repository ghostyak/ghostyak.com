import { notFound } from "next/navigation";
import { BoxesEditionPage } from "@/components/BoxesEditionPage";
import { getDictionary, isLocale } from "@/i18n";

export default async function ProPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const copy = getDictionary(lang).download.editions[1];
  const boxesUrl = `/${lang}/products/boxes`;
  return <BoxesEditionPage eyebrow={copy.label} name={copy.name} description={copy.description} highlights={copy.highlights} downloadLabel={copy.downloadLabel} downloadPageUrl={`${boxesUrl}/pro/download`} boxesUrl={boxesUrl} />;
}
