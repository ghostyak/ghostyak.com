import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { EditionCard } from "@/components/EditionCard";
import { FeatureCard } from "@/components/FeatureCard";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { boxes } from "@/data/products";
import { getDictionary, isLocale } from "@/i18n";
import { getSoftwareApplicationJsonLd } from "@/seo";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;

  if (!isLocale(lang)) notFound();

  const dictionary = getDictionary(lang);
  const softwareApplicationJsonLd = getSoftwareApplicationJsonLd({
    locale: lang,
    description: dictionary.metadata.description,
    featureNames: dictionary.features.items.map((feature) => feature.title),
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplicationJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Header
        locale={lang}
        labels={dictionary.header}
      />
      <main>
        <section className="overflow-hidden bg-gradient-to-b from-primary/10 via-base-200 to-base-100">
          <div className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-[1180px] flex-col items-center px-4 py-12 sm:px-5 sm:py-16">
            <div className="flex flex-col items-center text-center">
              <div>
                <p className="text-3xl font-bold tracking-tight text-primary sm:text-5xl">Ghostyak Boxes</p>
              </div>
              <h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">{dictionary.hero.heading}</h1>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-base-content/70">{dictionary.hero.intro}</p>
              <div className="mt-7 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
                <Link className="btn btn-primary min-h-12 px-7" href={boxes.editions[0].downloadPageUrl}>
                  {dictionary.download.editions[0].downloadLabel}
                </Link>
                <Link className="btn btn-outline btn-primary min-h-12 px-7" href={boxes.editions[1].downloadPageUrl}>
                  {dictionary.download.editions[1].downloadLabel}
                </Link>
              </div>
              <p className="mt-4 text-xs text-base-content/55">
                {dictionary.download.versionLabel} {boxes.version} · {boxes.platform} ·{" "}
                {dictionary.download.fileSize}
              </p>
              <p className="alert alert-warning alert-soft mt-4 max-w-3xl py-3 text-left text-sm leading-6">
                <span aria-hidden="true">⚠</span>
                <span><strong>{dictionary.hero.previewTitle}</strong> —{" "}
                {dictionary.hero.previewText}
                </span>
              </p>
            </div>
            <figure className="mt-10 w-full">
              <Image
                className="h-auto w-full rounded-box border border-base-300 object-contain shadow-2xl"
                src="/images/boxes-hero-concept-v3.png"
                alt={dictionary.metadata.imageAlt}
                width={1672}
                height={941}
                sizes="(max-width: 1220px) calc(100vw - 40px), 1180px"
                priority
              />
            </figure>
          </div>
        </section>

        <section
          className="bg-base-200 py-20 lg:py-28"
          id="features"
          aria-labelledby="features-title"
        >
          <div className="mx-auto w-full max-w-[1180px] px-4 sm:px-5">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-primary">{dictionary.features.label}</p>
            <h2 className="max-w-4xl text-3xl font-bold tracking-tight sm:text-5xl" id="features-title">{dictionary.features.heading}</h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
              {dictionary.features.items.map((feature, index) => (
                <FeatureCard
                  key={feature.title}
                  number={String(index + 1).padStart(2, "0")}
                  {...feature}
                />
              ))}
            </div>
          </div>
        </section>

        <section
          className="scroll-mt-16 bg-base-100 py-20 lg:py-28"
          id="download"
          aria-labelledby="editions-title"
        >
          <div className="mx-auto grid w-full max-w-[1180px] gap-10 px-4 sm:px-5 lg:grid-cols-[minmax(0,0.8fr)_minmax(35rem,1.2fr)] lg:gap-x-16">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-primary">{dictionary.download.label}</p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl" id="editions-title">{dictionary.download.heading}</h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-base-content/70">{dictionary.download.intro}</p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {dictionary.download.editions.map((edition, index) => (
                <EditionCard
                  key={edition.id}
                  {...edition}
                  downloadUrl={boxes.editions[index].downloadPageUrl}
                  featured={edition.id === "pro"}
                />
              ))}
            </div>
            <div
              className="flex flex-wrap gap-2 text-xs lg:col-start-2"
              aria-label={dictionary.download.detailsLabel}
            >
              <span className="badge badge-outline">
                {dictionary.download.versionLabel} {boxes.version}
              </span>
              <span className="badge badge-outline">{boxes.platform}</span>
              <span className="badge badge-outline">{dictionary.download.fileSize}</span>
              <span className="badge badge-outline h-auto min-h-6 whitespace-normal py-1">{dictionary.download.requirement}</span>
            </div>
            <div className="alert alert-info alert-soft text-sm leading-6 lg:col-start-2">
              <span aria-hidden="true">ⓘ</span>
              <p>{dictionary.download.trialNote}</p>
            </div>
          </div>
        </section>
      </main>
      <Footer labels={dictionary.footer} />
    </>
  );
}
