import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { DownloadCountdown } from "@/components/DownloadCountdown";
import { boxes } from "@/data/products";

export const metadata: Metadata = {
  title: "Boxes 다운로드",
  robots: { index: false, follow: true },
};

export default function BoxesDownloadPage() {
  return (
    <main className="bg-base-200 py-12 sm:py-20">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">
        <nav className="breadcrumbs mb-8 text-sm text-base-content/60" aria-label="현재 위치">
          <ul><li><Link href="/product/boxes">Boxes</Link></li><li aria-current="page">다운로드</li></ul>
        </nav>
        <section className="card border border-base-300 bg-base-100 shadow-xl">
          <div className="card-body gap-8 p-6 sm:p-10">
            <div className="flex items-center gap-4">
              <Image src="/images/boxes-icon.png" alt="" width={80} height={80} className="size-16 object-contain sm:size-20" priority />
              <div><p className="text-sm font-bold text-primary">GHOSTYAK</p><p className="text-3xl font-black">Boxes</p></div>
            </div>
            <DownloadCountdown downloadUrl={boxes.download.installerUrl} />
            <div className="alert alert-info alert-soft text-sm leading-6"><span aria-hidden="true">ⓘ</span><p>브라우저에서 설치 파일 다운로드가 시작될 때까지 이 페이지를 열어 두세요.</p></div>
            <div className="flex flex-wrap gap-2 text-xs" aria-label="설치 파일 정보">
              <span className="badge badge-outline">버전 {boxes.version}</span><span className="badge badge-outline">{boxes.platform}</span><span className="badge badge-outline">{boxes.fileSize}</span><span className="badge badge-outline h-auto min-h-6 whitespace-normal py-1">{boxes.requirement}</span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
