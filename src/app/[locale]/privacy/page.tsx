import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { PrivacyPolicyContent } from "@/components/SitePages";
import { sourceLocale } from "@/i18n/locales";
import { getOpenGraphLocale } from "@/i18n/metadata";
import { requirePrefixedLocale } from "@/i18n/route-locale";
import { localizedPath } from "@/i18n/routing";
import { getLegalDocument, privacyPolicyPath } from "@/lib/legal";

const policyUrl = localizedPath(sourceLocale, privacyPolicyPath);

export async function generateMetadata(): Promise<Metadata> {
  const { title, description } = await getLegalDocument("privacy-policy");
  return {
    title,
    description,
    alternates: { canonical: policyUrl },
    openGraph: { ...getOpenGraphLocale(sourceLocale), alternateLocale: [], type: "website", title, description, url: policyUrl },
    twitter: { card: "summary", title, description },
  };
}

export default async function Page({ params }: PageProps<"/[locale]/privacy">) {
  // The policy is published in Korean only; other locales land on the Korean page.
  if (requirePrefixedLocale((await params).locale) !== sourceLocale) redirect(policyUrl);
  return <PrivacyPolicyContent />;
}
