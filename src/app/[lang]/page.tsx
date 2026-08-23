import Image from "next/image";
import { notFound } from "next/navigation";
import { EditionCard } from "@/components/EditionCard";
import { FeatureCard } from "@/components/FeatureCard";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { boxes } from "@/data/products";
import { getDictionary, isLocale } from "@/i18n";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;

  if (!isLocale(lang)) notFound();

  const dictionary = getDictionary(lang);
  return (
    <>
      <Header
        locale={lang}
        labels={dictionary.header}
      />
      <main>
        <section className="hero">
          <div className="container hero-inner">
            <div className="hero-copy">
              <div className="product-title">
                <p>Ghostyak Boxes</p>
              </div>
              <h1>{dictionary.hero.heading}</h1>
              <p className="intro">{dictionary.hero.intro}</p>
              <div className="hero-actions">
                <a className="primary-button" href="#download">
                  {dictionary.hero.action}
                </a>
              </div>
              <p className="hero-meta">
                {dictionary.download.versionLabel} {boxes.version} · {boxes.platform} ·{" "}
                {dictionary.download.fileSize}
              </p>
              <p className="preview-notice">
                <strong>{dictionary.hero.previewTitle}</strong> —{" "}
                {dictionary.hero.previewText}
              </p>
            </div>
            <figure>
              <Image
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
          className="features"
          id="features"
          aria-labelledby="features-title"
        >
          <div className="container">
            <p className="section-label">{dictionary.features.label}</p>
            <h2 id="features-title">{dictionary.features.heading}</h2>
            <div className="feature-grid">
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
          className="editions"
          id="download"
          aria-labelledby="editions-title"
        >
          <div className="container editions-inner">
            <div className="editions-heading">
              <p className="section-label">{dictionary.download.label}</p>
              <h2 id="editions-title">{dictionary.download.heading}</h2>
              <p>{dictionary.download.intro}</p>
            </div>
            <div className="edition-grid">
              {dictionary.download.editions.map((edition, index) => (
                <EditionCard
                  key={edition.id}
                  {...edition}
                  downloadUrl={boxes.editions[index].downloadUrl}
                  featured={edition.id === "trial"}
                />
              ))}
            </div>
            <div
              className="download-details"
              aria-label={dictionary.download.detailsLabel}
            >
              <span>
                {dictionary.download.versionLabel} {boxes.version}
              </span>
              <span>{boxes.platform}</span>
              <span>{dictionary.download.fileSize}</span>
              <span>{dictionary.download.requirement}</span>
            </div>
            <p className="trial-note">{dictionary.download.trialNote}</p>
          </div>
        </section>
      </main>
      <Footer labels={dictionary.footer} />
    </>
  );
}
