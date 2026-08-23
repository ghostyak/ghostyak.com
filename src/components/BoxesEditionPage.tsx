import Image from "next/image";
import Link from "next/link";

type BoxesEditionPageProps = {
  eyebrow: string;
  name: string;
  description: string;
  highlights: readonly string[];
  downloadLabel: string;
  downloadPageUrl: string;
};

export function BoxesEditionPage({
  eyebrow,
  name,
  description,
  highlights,
  downloadLabel,
  downloadPageUrl,
}: BoxesEditionPageProps) {
  return (
    <main className="product-edition-page">
      <nav className="product-breadcrumbs" aria-label="Breadcrumb">
        <Link href="/products/boxes">Boxes</Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page">{name}</span>
      </nav>
      <section className="product-edition-hero">
        <div className="product-edition-copy">
          <p className="section-label">{eyebrow}</p>
          <h1>Ghostyak Boxes {name}</h1>
          <p>{description}</p>
          <ul>
            {highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
          <Link className="primary-button" href={downloadPageUrl}>
            {downloadLabel}
          </Link>
        </div>
        <Image
          src="/images/boxes-icon.png"
          alt="Ghostyak Boxes icon"
          width={300}
          height={300}
          priority
        />
      </section>
    </main>
  );
}
