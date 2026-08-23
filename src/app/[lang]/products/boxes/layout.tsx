import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getDictionary, isLocale } from "@/i18n";

export default async function LocalizedBoxesLayout({ children, params }: { children: ReactNode; params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dictionary = getDictionary(lang);
  const boxesUrl = `/${lang}/products/boxes`;
  return <><Header locale={lang} labels={dictionary.header} homeHref={`/${lang}`} productsHref={boxesUrl} featuresHref={`${boxesUrl}#features`} downloadHref={`${boxesUrl}#download`} />{children}<Footer labels={dictionary.footer} /></>;
}
