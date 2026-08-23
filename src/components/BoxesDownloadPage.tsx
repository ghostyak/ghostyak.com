import Image from "next/image";
import Link from "next/link";
import { DownloadCountdown } from "@/components/DownloadCountdown";

type BoxesDownloadPageProps = {
  editionName: string;
  editionUrl: string;
  downloadUrl: string;
};

export function BoxesDownloadPage({
  editionName,
  editionUrl,
  downloadUrl,
}: BoxesDownloadPageProps) {
  return (
    <main className="download-page">
      <nav className="product-breadcrumbs" aria-label="Breadcrumb">
        <Link href="/products/boxes">Boxes</Link>
        <span aria-hidden="true">/</span>
        <Link href={editionUrl}>{editionName}</Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page">Download</span>
      </nav>
      <section className="download-panel">
        <div>
          <DownloadCountdown downloadUrl={downloadUrl} />
          <p className="download-safety-note">
            Keep this page open until your browser starts the installer download.
          </p>
        </div>
        <div className="download-product-mark" aria-hidden="true">
          <Image
            src="/images/boxes-icon.png"
            alt=""
            width={112}
            height={112}
            priority
          />
          <div>
            <span>Ghostyak</span>
            <strong>Boxes</strong>
            <small>{editionName}</small>
          </div>
        </div>
      </section>
    </main>
  );
}
