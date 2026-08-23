import { notFound } from "next/navigation";
import { BoxesOverview } from "@/app/products/boxes/page";
import { isLocale } from "@/i18n";

export default async function LocalizedBoxesPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return <BoxesOverview locale={lang} />;
}
