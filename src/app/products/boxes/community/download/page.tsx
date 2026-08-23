import type { Metadata } from "next";
import { BoxesDownloadPage } from "@/components/BoxesDownloadPage";
import { boxes } from "@/data/products";

const edition = boxes.editions[0];

export const metadata: Metadata = {
  title: "Downloading Community",
  robots: { index: false, follow: true },
};

export default function CommunityDownloadPage() {
  return (
    <BoxesDownloadPage
      editionName={edition.name}
      editionUrl={edition.productUrl}
      downloadUrl={edition.downloadUrl}
    />
  );
}
