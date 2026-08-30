import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ImageCarousel } from "@/components/AutoCarousel";
import { boxes } from "@/data/products";
import { getSoftwareApplicationJsonLd } from "@/seo";

export const metadata: Metadata = {
  title: "Boxes",
  description: boxes.description,
  alternates: { canonical: "/product/boxes" },
  openGraph: {
    title: "Ghostyak Boxes | Windows 바탕화면 정리 도구",
    description: boxes.description,
    url: "/product/boxes",
    images: [boxes.screenshots[0].src],
  },
};

export default function BoxesPage() {
  const jsonLd = getSoftwareApplicationJsonLd();

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <section className="overflow-hidden bg-gradient-to-b from-primary/12 via-base-200 to-base-100">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-4 pb-20 pt-14 text-center sm:px-6 sm:pt-20 lg:pb-28">
          <div className="flex items-center justify-center gap-4 sm:gap-5">
            <Image
              className="size-16 object-contain drop-shadow-lg sm:size-20"
              src="/images/boxes-icon.png"
              alt=""
              width={96}
              height={96}
              priority
            />
            <h1 className="text-5xl font-black tracking-tight text-primary sm:text-7xl">
              Boxes
            </h1>
          </div>
          <p className="mt-7 break-keep text-2xl font-bold tracking-tight sm:text-4xl">
            {boxes.tagline}
          </p>
          <p className="mt-4 max-w-2xl break-keep text-lg leading-8 text-base-content/65">
            {boxes.description}
          </p>
          <Link
            className="btn btn-primary mt-7 min-h-12 px-8 text-base"
            href={boxes.download.pageUrl}
          >
            {boxes.download.label}
            <svg
              className="size-5 fill-none stroke-current [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:2]"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 3v12m0 0 5-5m-5 5-5-5M5 20h14" />
            </svg>
          </Link>
          <div className="mt-12 w-full lg:mt-16">
            <ImageCarousel slides={boxes.screenshots} />
          </div>
        </div>
      </section>

      <section
        className="bg-base-200 py-20 lg:py-28"
        aria-labelledby="features-title"
      >
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <p className="mb-3 text-sm font-bold text-primary">주요 기능</p>
          <h2
            className="max-w-3xl text-3xl font-black tracking-tight sm:text-5xl"
            id="features-title"
          >
            정리에 필요한 핵심만 담았습니다.
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {boxes.features.map((feature, index) => (
              <article
                className="card border border-base-300 bg-base-100 shadow-sm"
                key={feature.title}
              >
                <div className="card-body p-7">
                  <span className="text-sm font-black text-primary">
                    0{index + 1}
                  </span>
                  <h3 className="card-title mt-2 text-xl">{feature.title}</h3>
                  <p className="mt-2 leading-7 text-base-content/65">
                    {feature.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
          <div className="alert alert-info alert-soft mt-8 text-sm leading-6">
            <span aria-hidden="true">ⓘ</span>
            <p>
              현재는 무료 버전만 제공합니다. 상업용 에디션은 준비가 완료된 뒤
              별도로 안내할 예정입니다.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
