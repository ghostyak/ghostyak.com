import type { Metadata } from "next";
import { BoxesEditionPage } from "@/components/BoxesEditionPage";
import { boxes } from "@/data/products";
import { getDictionary } from "@/i18n";

const edition = boxes.editions[0];
const copy = getDictionary("en").download.editions[0];

export const metadata: Metadata = {
  title: "Community",
  description: copy.description,
  alternates: { canonical: edition.productUrl },
};

export default function CommunityPage() {
  return (
    <BoxesEditionPage
      eyebrow="Free forever"
      name={edition.name}
      description={copy.description}
      highlights={copy.highlights}
      downloadLabel="Download Community"
      downloadPageUrl={edition.downloadPageUrl}
    />
  );
}
