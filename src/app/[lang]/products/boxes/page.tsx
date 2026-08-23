import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BoxesOverview } from "@/app/products/boxes/page";
import { getDictionary, isLocale } from "@/i18n";
import { getSoftwareApplicationJsonLd } from "@/seo";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const { metadata } = getDictionary(lang);
  return { title: metadata.title, description: metadata.description, keywords: [...metadata.keywords], alternates: { canonical: `/${lang}/products/boxes` }, openGraph: { title: metadata.title, description: metadata.description, url: `/${lang}/products/boxes`, images: [{ url: "/images/boxes-hero-concept-v3.png", alt: metadata.imageAlt }] } };
}

export default async function LocalizedBoxesPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dictionary = getDictionary(lang);
  const jsonLd = getSoftwareApplicationJsonLd({ locale: lang, description: dictionary.metadata.description, featureNames: dictionary.features.items.map((feature) => feature.title) });
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} /><BoxesOverview locale={lang} /></>;
}
