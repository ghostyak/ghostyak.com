import type { Metadata } from "next";
import { BoxesEditionPage } from "@/components/BoxesEditionPage";
import { boxes } from "@/data/products";
import { getDictionary } from "@/i18n";

const edition = boxes.editions[1];
const copy = getDictionary("en").download.editions[1];

export const metadata: Metadata = {
  title: "Pro",
  description: copy.description,
  alternates: { canonical: edition.productUrl },
};

export default function ProPage() {
  return (
    <BoxesEditionPage
      eyebrow="Try free for 30 days"
      name={edition.name}
      description={copy.description}
      highlights={copy.highlights}
      downloadLabel="Try Pro free"
      downloadPageUrl={edition.downloadPageUrl}
    />
  );
}
