import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { EditionCard } from "@/components/EditionCard";
import { FeatureCard } from "@/components/FeatureCard";
import { boxes } from "@/data/products";
import { getDictionary } from "@/i18n";

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

export default function BoxesPage() {
  return (
    <main>
      <section className="hero product-hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <p className="section-label">Windows desktop organizer</p>
            <h1>Everything on your desktop, right where it belongs.</h1>
            <p className="intro">
              Organize files, folders, and shortcuts into flexible boxes that
              keep your workspace calm and easy to navigate.
            </p>
            <div className="hero-actions">
              <Link className="primary-button" href={boxes.editions[0].downloadPageUrl}>
                Download Community
              </Link>
              <Link className="secondary-button" href={boxes.editions[1].downloadPageUrl}>
                Try Pro free
              </Link>
            </div>
            <p className="hero-meta">
              Version {boxes.version} · {boxes.platform} · Approx. 3.3 MB
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

      <section className="features" id="features" aria-labelledby="product-features-title">
        <div className="container">
          <p className="section-label">Features</p>
          <h2 id="product-features-title">Work with a desktop that stays organized.</h2>
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

      <section className="editions" id="download" aria-labelledby="product-editions-title">
        <div className="container editions-inner">
          <div className="editions-heading">
            <p className="section-label">Download</p>
            <h2 id="product-editions-title">Choose the Boxes edition that fits you.</h2>
            <p>Use Community for free, or unlock every box and Pro feature for 30 days.</p>
          </div>
          <div className="edition-grid">
            {dictionary.download.editions.map((edition, index) => (
              <EditionCard
                key={edition.id}
                {...edition}
                downloadUrl={boxes.editions[index].downloadPageUrl}
                featured={edition.id === "pro"}
              />
            ))}
          </div>
          <div className="download-details" aria-label="Download information">
            <span>Version {boxes.version}</span>
            <span>{boxes.platform}</span>
            <span>Approx. 3.3 MB</span>
            <span>Requires Microsoft Edge WebView2 Runtime</span>
          </div>
          <p className="trial-note">
            When the Pro trial ends, Boxes switches to Community while keeping your
            existing boxes and files.
          </p>
        </div>
      </section>
    </main>
  );
}
