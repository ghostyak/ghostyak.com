import Image from "next/image";
import Link from "next/link";

type BoxesEditionPageProps = {
  eyebrow: string;
  name: string;
  description: string;
  highlights: readonly string[];
  downloadLabel: string;
  downloadPageUrl: string;
  boxesUrl?: string;
};

export function BoxesEditionPage({
  eyebrow,
  name,
  description,
  highlights,
  downloadLabel,
  downloadPageUrl,
  boxesUrl = "/products/boxes",
}: BoxesEditionPageProps) {
  return (
    <main className="min-h-[calc(100vh-11rem)] bg-gradient-to-b from-primary/10 to-base-100">
      <nav className="breadcrumbs mx-auto w-full max-w-[1180px] overflow-x-auto px-4 text-sm text-base-content/65 sm:px-5" aria-label="Breadcrumb">
        <ul>
          <li><Link href={boxesUrl}>Boxes</Link></li>
          <li aria-current="page">{name}</li>
        </ul>
      </nav>
      <section className="mx-auto grid w-full max-w-[1040px] items-center gap-12 px-4 py-14 sm:px-5 md:grid-cols-[minmax(0,1fr)_17rem] md:py-24 lg:gap-20">
        <div>
          <p className="badge badge-info badge-soft mb-5 font-bold">{eyebrow}</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">Ghostyak Boxes {name}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-base-content/70">{description}</p>
          <ul className="my-8 grid gap-3">
            {highlights.map((highlight) => (
              <li className="flex gap-3 leading-7" key={highlight}>
                <span className="text-success" aria-hidden="true">✓</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
          <Link className="btn btn-primary min-h-12 px-7" href={downloadPageUrl}>
            {downloadLabel}
          </Link>
        </div>
        <Image
          className="order-first mx-auto w-48 drop-shadow-2xl md:order-none md:w-full"
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
