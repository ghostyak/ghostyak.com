import Image from "next/image";
import Link from "next/link";
import { DownloadCountdown } from "@/components/DownloadCountdown";

type BoxesDownloadPageProps = {
  editionName: string;
  editionUrl: string;
  downloadUrl: string;
  boxesUrl?: string;
  proUrl?: string;
};

export function BoxesDownloadPage({
  editionName,
  editionUrl,
  downloadUrl,
  boxesUrl = "/products/boxes",
  proUrl = "/products/boxes/pro",
}: BoxesDownloadPageProps) {
  return (
    <main className="min-h-[calc(100vh-11rem)] bg-base-200">
      <nav className="breadcrumbs mx-auto w-full max-w-[1180px] overflow-x-auto px-4 text-sm text-base-content/65 sm:px-5" aria-label="Breadcrumb">
        <ul>
          <li><Link href={boxesUrl}>Boxes</Link></li>
          <li><Link href={editionUrl}>{editionName}</Link></li>
          <li aria-current="page">Download</li>
        </ul>
      </nav>
      <section className="mx-auto grid w-full max-w-[1040px] items-start gap-10 px-4 py-14 sm:px-5 md:grid-cols-[minmax(0,1fr)_18rem] md:py-20 lg:gap-16">
        <div>
          <DownloadCountdown downloadUrl={downloadUrl} proUrl={proUrl} />
          <div className="alert alert-info alert-soft mt-8 text-sm leading-6">
            <span aria-hidden="true">ⓘ</span>
            <p>Keep this page open until your browser starts the installer download.</p>
          </div>
        </div>
        <div className="card order-first border border-base-300 bg-base-100 shadow-xl md:order-none" aria-hidden="true">
          <div className="card-body flex-row items-center gap-4 p-5">
            <Image
              className="size-20 object-contain"
              src="/images/boxes-icon.png"
              alt=""
              width={112}
              height={112}
              priority
            />
            <div className="flex min-w-0 flex-col">
              <span className="text-xs font-bold uppercase text-base-content/55">Ghostyak</span>
              <strong className="text-2xl tracking-tight text-primary">Boxes</strong>
              <small className="text-base-content/60">{editionName}</small>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
