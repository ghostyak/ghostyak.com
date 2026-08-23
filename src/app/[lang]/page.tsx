import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { boxes } from "@/data/products";
import { getHomeCopy } from "@/home-i18n";
import { getDictionary, isLocale } from "@/i18n";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dictionary = getDictionary(lang);
  const copy = getHomeCopy(lang);
  const boxesUrl = `/${lang}/products/boxes`;

  return (
    <>
      <Header locale={lang} labels={dictionary.header} featuresHref={`${boxesUrl}#features`} downloadHref={`${boxesUrl}#download`} />
      <main>
        <section className="hero min-h-[34rem] overflow-hidden bg-gradient-to-br from-primary/15 via-base-100 to-secondary/10">
          <div className="hero-content w-full max-w-[1180px] flex-col gap-10 px-4 py-20 sm:px-5 lg:flex-row lg:justify-between lg:py-28">
            <div className="max-w-3xl">
              <p className="badge badge-primary badge-soft mb-5 font-bold">{copy.hero.eyebrow}</p>
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">{copy.hero.heading}</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-base-content/70 sm:text-xl">{copy.hero.intro}</p>
              <Link className="btn btn-primary mt-8 min-h-12 px-7" href="#products">{copy.hero.action}<span aria-hidden="true">↓</span></Link>
            </div>
            <Image className="w-44 drop-shadow-2xl sm:w-56 lg:w-64" src="/ghostyak.png" alt="" width={300} height={300} priority />
          </div>
        </section>

        <section className="scroll-mt-16 bg-base-200 py-20 lg:py-28" id="products" aria-labelledby="products-title">
          <div className="mx-auto w-full max-w-[1180px] px-4 sm:px-5">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-primary">{copy.products.label}</p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl" id="products-title">{copy.products.heading}</h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-base-content/70">{copy.products.intro}</p>
            <article className="card mt-10 overflow-hidden border border-base-300 bg-base-100 shadow-xl lg:card-side">
              <figure className="bg-gradient-to-br from-primary/15 to-base-200 p-8 lg:w-2/5 lg:p-12">
                <Image className="h-auto w-full max-w-md rounded-box shadow-2xl" src="/images/boxes-hero-concept-v3.png" alt={dictionary.metadata.imageAlt} width={836} height={471} />
              </figure>
              <div className="card-body justify-center p-7 lg:p-12">
                <div className="flex flex-wrap items-center gap-2"><span className="badge badge-success badge-soft">Community</span><span className="badge badge-outline">{boxes.platform}</span></div>
                <h3 className="card-title mt-3 text-3xl sm:text-4xl">Ghostyak Boxes</h3>
                <p className="mt-3 max-w-2xl text-lg leading-8 text-base-content/70">{copy.products.boxesDescription}</p>
                <div className="card-actions mt-6 flex-col sm:flex-row">
                  <Link className="btn btn-primary" href={boxesUrl}>{copy.products.view}<span aria-hidden="true">→</span></Link>
                  <Link className="btn btn-outline btn-primary" href={`${boxesUrl}#download`}>{copy.products.download}</Link>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="bg-base-100 py-20 lg:py-28" aria-labelledby="principles-title">
          <div className="mx-auto w-full max-w-[1180px] px-4 sm:px-5">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-primary">{copy.principles.label}</p>
            <h2 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-5xl" id="principles-title">{copy.principles.heading}</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {copy.principles.items.map((item, index) => (
                <article className="card border border-base-300 bg-base-100 shadow-sm" key={item.title}>
                  <div className="card-body"><span className="text-sm font-bold text-primary">0{index + 1}</span><h3 className="card-title text-xl">{item.title}</h3><p className="leading-7 text-base-content/70">{item.description}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-neutral px-4 py-16 text-neutral-content sm:px-5 lg:py-20">
          <div className="mx-auto flex w-full max-w-[1180px] flex-col items-start justify-between gap-7 md:flex-row md:items-center">
            <div><h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{copy.cta.heading}</h2><p className="mt-3 text-lg text-neutral-content/70">{copy.cta.intro}</p></div>
            <Link className="btn btn-primary min-h-12 shrink-0 px-7" href={boxesUrl}>{copy.cta.action}<span aria-hidden="true">→</span></Link>
          </div>
        </section>
      </main>
      <Footer labels={dictionary.footer} />
    </>
  );
}
