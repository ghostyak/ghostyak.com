import Image from "next/image";
import Link from "next/link";
import { HeroCarousel } from "@/components/AutoCarousel";
import { boxes, homeSlideMedia } from "@/data/products";
import { getDictionary } from "@/i18n/get-dictionary";
import { sourceLocale } from "@/i18n/locales";
import { localizedPath } from "@/i18n/routing";

export default async function HomePage() {
  const dictionary = await getDictionary(sourceLocale);
  const boxesPath = localizedPath(sourceLocale, "/product/boxes");
  const slides = homeSlideMedia.map((media, index) => ({
    ...media,
    ...dictionary.home.hero.slides[index],
    alt: dictionary.home.hero.slides[index].imageAlt,
    actionHref: boxesPath,
  }));
  const carouselLabels = {
    ...dictionary.carousel,
    regionLabel: dictionary.home.hero.regionLabel,
    controlsLabel: dictionary.home.hero.controlsLabel,
  };

  return (
    <main>
      <h1 className="sr-only">{dictionary.home.screenReaderTitle}</h1>
      <HeroCarousel slides={slides} labels={carouselLabels} />
      <section className="bg-base-200 py-20 lg:py-28" aria-labelledby="product-title">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-sm font-bold text-primary">{dictionary.home.products.eyebrow}</p>
              <h2 className="text-3xl font-black tracking-tight sm:text-5xl" id="product-title">{dictionary.home.products.heading}</h2>
            </div>
            <p className="max-w-lg leading-7 text-base-content/65">{dictionary.home.products.intro}</p>
          </div>
          <article className="card overflow-hidden border border-base-300 bg-base-100 shadow-xl lg:card-side">
            <figure className="relative min-h-72 overflow-hidden bg-neutral lg:w-1/2">
              <Image className="object-cover" src={boxes.screenshots[0].src} alt={dictionary.boxes.screenshotAlts[0]} fill sizes="(max-width: 1024px) 100vw, 50vw" />
            </figure>
            <div className="card-body justify-center p-7 sm:p-10 lg:w-1/2 lg:p-14">
              <div className="flex flex-wrap gap-2">
                <span className="badge badge-primary badge-soft">{dictionary.home.products.freeBadge}</span>
                <span className="badge badge-outline">{boxes.platform}</span>
              </div>
              <h3 className="card-title mt-3 text-4xl font-black">{boxes.name}</h3>
              <p className="mt-3 max-w-xl text-lg leading-8 text-base-content/70">{dictionary.boxes.description}</p>
              <div className="card-actions mt-6">
                <Link className="btn btn-primary min-h-12 px-7" href={boxesPath}>{dictionary.home.products.viewAction}<span aria-hidden="true">→</span></Link>
              </div>
            </div>
          </article>
        </div>
      </section>
      <section className="bg-base-100 py-20 lg:py-24" aria-labelledby="blog-title">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 sm:px-6 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="mb-3 text-sm font-bold text-primary">{dictionary.home.blog.eyebrow}</p>
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl" id="blog-title">{dictionary.home.blog.heading}</h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-base-content/65">{dictionary.home.blog.intro}</p>
          </div>
          <Link className="btn btn-outline btn-primary" href={localizedPath(sourceLocale, "/blog")}>{dictionary.home.blog.viewAction}</Link>
        </div>
      </section>
    </main>
  );
}
