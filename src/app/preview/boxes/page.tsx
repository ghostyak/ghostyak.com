import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { RenewalLanding } from "@/components/renewal/RenewalLanding";
import copy from "@/i18n/landing/ko";
import { isRenewalPreview, renewalPreviewPath } from "@/lib/renewal-preview";

export const metadata: Metadata = {
  ...(isRenewalPreview(renewalPreviewPath) ? {
    title: { absolute: `${copy.review} | ${copy.metadata.title}` },
    description: copy.metadata.description,
  } : {}),
  robots: { index: false, follow: false },
};

export default function RenewalPreviewPage() {
  if (!isRenewalPreview(renewalPreviewPath)) notFound();
  return <RenewalLanding copy={copy} locale="ko" currentPath="/preview/boxes" languageLabel="" preview />;
}
