import type { Metadata } from "next";
import { BoxesDownloadPage } from "@/components/BoxesDownloadPage";
import { boxes } from "@/data/products";

const edition = boxes.editions[1];

export const metadata: Metadata = {
  title: "Downloading Pro trial",
  robots: { index: false, follow: true },
};

export default function ProDownloadPage() {
  return (
    <BoxesDownloadPage
      editionName={edition.name}
      editionUrl={edition.productUrl}
      downloadUrl={edition.downloadUrl}
    />
  );
}
