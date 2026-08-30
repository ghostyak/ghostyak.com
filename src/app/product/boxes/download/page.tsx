import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { DownloadCountdown } from "@/components/DownloadCountdown";
import { boxes } from "@/data/products";
import { getDictionary } from "@/i18n/get-dictionary";
import { sourceLocale } from "@/i18n/locales";
import { formatMessage, localizedPath } from "@/i18n/routing";

export async function generateMetadata(): Promise<Metadata> {
  const dictionary = await getDictionary(sourceLocale);
  return { title: dictionary.metadata.boxesDownload.title, robots: { index: false, follow: true } };
}

export default async function BoxesDownloadPage() {
  const dictionary = await getDictionary(sourceLocale);
  const copy = dictionary.boxes.download;
  return (
    <main className="bg-base-200 py-12 sm:py-20">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">
        <nav className="breadcrumbs mb-8 text-sm text-base-content/60" aria-label={copy.breadcrumbLabel}>
          <ul><li><Link href={localizedPath(sourceLocale, "/product/boxes")}>Boxes</Link></li><li aria-current="page">{copy.breadcrumbCurrent}</li></ul>
        </nav>
        <section className="card border border-base-300 bg-base-100 shadow-xl">
          <div className="card-body gap-8 p-6 sm:p-10">
            <div className="flex items-center gap-4">
              <Image src="/images/boxes-icon.png" alt="" width={80} height={80} className="size-16 object-contain sm:size-20" loading="eager" />
              <div><p className="text-sm font-bold text-primary">GHOSTYAK</p><p className="text-3xl font-black">Boxes</p></div>
            </div>
            <DownloadCountdown downloadUrl={boxes.download.installerUrl} labels={copy} />
            <div className="alert alert-info alert-soft text-sm leading-6"><span aria-hidden="true">ⓘ</span><p>{copy.waitNotice}</p></div>
            <div className="flex flex-wrap gap-2 text-xs" aria-label={copy.fileInfoLabel}>
              <span className="badge badge-outline">{formatMessage(copy.version, { version: boxes.version })}</span>
              <span className="badge badge-outline">{boxes.platform}</span>
              <span className="badge badge-outline">{copy.fileSize}</span>
              <span className="badge badge-outline h-auto min-h-6 whitespace-normal py-1">{copy.requirement}</span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
