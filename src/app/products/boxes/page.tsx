import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { EditionCard } from "@/components/EditionCard";
import { FeatureCard } from "@/components/FeatureCard";
import { boxes } from "@/data/products";
import { getDictionary } from "@/i18n";
import type { Locale } from "@/locales";

const dictionary = getDictionary("en");

export const metadata: Metadata = {
  alternates: { canonical: "/products/boxes" },
  openGraph: {
    title: "Ghostyak Boxes | Windows Desktop Organizer",
    description: dictionary.metadata.description,
    url: "/products/boxes",
    images: ["/images/boxes-hero-concept-v3.png"],
  },
};

export function BoxesOverview({ locale = "en" }: { locale?: Locale }) {
  const pageDictionary = getDictionary(locale);
  const boxesUrl = locale === "en" ? "/products/boxes" : `/${locale}/products/boxes`;
  return (
    <main>
      <section className="overflow-hidden bg-gradient-to-b from-primary/10 via-base-200 to-base-100">
        <div className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-[1180px] flex-col items-center px-4 py-12 sm:px-5 sm:py-16">
          <div className="flex max-w-3xl flex-col items-center text-center">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-primary">Ghostyak Boxes</p>
            <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">{pageDictionary.hero.heading}</h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-base-content/70">
              {pageDictionary.hero.intro}
            </p>
            <div className="mt-7 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
              <Link className="btn btn-primary min-h-12 px-7" href={`${boxesUrl}/community/download`}>
                {pageDictionary.download.editions[0].downloadLabel}
              </Link>
              <Link className="btn btn-outline btn-primary min-h-12 px-7" href={`${boxesUrl}/pro/download`}>
                {pageDictionary.download.editions[1].downloadLabel}
              </Link>
            </div>
            <p className="mt-4 text-xs text-base-content/55">
              Version {boxes.version} · {boxes.platform} · Approx. 3.3 MB
            </p>
          </div>
          <figure className="mt-10 w-full">
            <Image
              className="h-auto w-full rounded-box border border-base-300 object-contain shadow-2xl"
              src="/images/boxes-hero-concept-v3.png"
              alt={pageDictionary.metadata.imageAlt}
              width={1672}
              height={941}
              sizes="(max-width: 1220px) calc(100vw - 40px), 1180px"
              priority
            />
          </figure>
        </div>
      </section>

      <section className="bg-base-200 py-20 lg:py-28" id="features" aria-labelledby="product-features-title">
        <div className="mx-auto w-full max-w-[1180px] px-4 sm:px-5">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-primary">{pageDictionary.features.label}</p>
          <h2 className="max-w-4xl text-3xl font-bold tracking-tight sm:text-5xl" id="product-features-title">{pageDictionary.features.heading}</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
            {pageDictionary.features.items.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                number={String(index + 1).padStart(2, "0")}
                {...feature}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="scroll-mt-16 bg-base-100 py-20 lg:py-28" id="download" aria-labelledby="product-editions-title">
        <div className="mx-auto grid w-full max-w-[1180px] gap-10 px-4 sm:px-5 lg:grid-cols-[minmax(0,0.8fr)_minmax(35rem,1.2fr)] lg:gap-x-16">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-primary">{pageDictionary.download.label}</p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl" id="product-editions-title">{pageDictionary.download.heading}</h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-base-content/70">{pageDictionary.download.intro}</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {pageDictionary.download.editions.map((edition, index) => (
              <EditionCard
                key={edition.id}
                {...edition}
                downloadUrl={`${boxesUrl}/${boxes.editions[index].id}/download`}
                featured={edition.id === "pro"}
              />
            ))}
          </div>
          <div className="flex flex-wrap gap-2 text-xs lg:col-start-2" aria-label="Download information">
            <span className="badge badge-outline">Version {boxes.version}</span>
            <span className="badge badge-outline">{boxes.platform}</span>
            <span className="badge badge-outline">Approx. 3.3 MB</span>
            <span className="badge badge-outline h-auto min-h-6 whitespace-normal py-1">Requires Microsoft Edge WebView2 Runtime</span>
          </div>
          <div className="alert alert-info alert-soft text-sm leading-6 lg:col-start-2">
            <span aria-hidden="true">ⓘ</span>
            <p>
            {pageDictionary.download.trialNote}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default function BoxesPage() {
  return <BoxesOverview />;
}
