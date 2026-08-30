import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { HeroCarousel, ImageCarousel } from "@/components/AutoCarousel";
import { DownloadCountdown } from "@/components/DownloadCountdown";
import { boxes, homeSlideMedia } from "@/data/products";
import { getDictionary } from "@/i18n/get-dictionary";
import { localeConfig, type PublishedLocale } from "@/i18n/locales";
import { formatMessage, localizedPath } from "@/i18n/routing";
import { getAllPosts, getPost } from "@/lib/blog";
import { getSoftwareApplicationJsonLd } from "@/seo";

export async function HomeContent({ locale }: { locale: PublishedLocale }) {
  const dictionary = await getDictionary(locale);
  const boxesPath = localizedPath(locale, "/product/boxes");
  const slides = homeSlideMedia.map((media, index) => ({
    ...media,
    ...dictionary.home.hero.slides[index],
    alt: dictionary.home.hero.slides[index].imageAlt,
    actionHref: boxesPath,
  }));
  const carouselLabels = { ...dictionary.carousel, regionLabel: dictionary.home.hero.regionLabel, controlsLabel: dictionary.home.hero.controlsLabel };

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
              <Image className="object-cover" src={boxes.screenshots[0].src} alt={dictionary.boxes.screenshotAlts[0]} fill loading="eager" sizes="(max-width: 1024px) 100vw, 50vw" />
            </figure>
            <div className="card-body justify-center p-7 sm:p-10 lg:w-1/2 lg:p-14">
              <div className="flex flex-wrap gap-2"><span className="badge badge-primary badge-soft">{dictionary.home.products.freeBadge}</span><span className="badge badge-outline">{boxes.platform}</span></div>
              <h3 className="card-title mt-3 text-4xl font-black">{boxes.name}</h3>
              <p className="mt-3 max-w-xl text-lg leading-8 text-base-content/70">{dictionary.boxes.description}</p>
              <div className="card-actions mt-6"><Link className="btn btn-primary min-h-12 px-7" href={boxesPath}>{dictionary.home.products.viewAction}<span aria-hidden="true">→</span></Link></div>
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
          <Link className="btn btn-outline btn-primary" href={localizedPath(locale, "/blog")}>{dictionary.home.blog.viewAction}</Link>
        </div>
      </section>
    </main>
  );
}

export async function BoxesContent({ locale }: { locale: PublishedLocale }) {
  const dictionary = await getDictionary(locale);
  const screenshots = boxes.screenshots.map((screenshot, index) => ({ ...screenshot, alt: dictionary.boxes.screenshotAlts[index] }));
  const carouselLabels = { ...dictionary.carousel, ...dictionary.boxes.carousel };
  const jsonLd = getSoftwareApplicationJsonLd({ locale, description: dictionary.boxes.description, featureNames: dictionary.boxes.features.items.map((feature) => feature.title) });

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <section className="overflow-hidden bg-gradient-to-b from-primary/12 via-base-200 to-base-100">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-4 pb-20 pt-14 text-center sm:px-6 sm:pt-20 lg:pb-28">
          <div className="flex items-center justify-center gap-4 sm:gap-5">
            <Image className="size-16 object-contain drop-shadow-lg sm:size-20" src="/images/ghostyak-boxes.svg" alt="" width={96} height={96} loading="eager" />
            <h1 className="text-5xl font-black tracking-tight text-primary sm:text-7xl">{boxes.name}</h1>
          </div>
          <p className="mt-7 text-2xl font-bold tracking-tight sm:text-4xl">{dictionary.boxes.tagline}</p>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-base-content/65">{dictionary.boxes.description}</p>
          <Link className="btn btn-primary mt-7 min-h-12 px-8 text-base" href={localizedPath(locale, boxes.download.pagePath)}>
            {dictionary.boxes.downloadAction}
            <svg className="size-5 fill-none stroke-current [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:2]" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12m0 0 5-5m-5 5-5-5M5 20h14" /></svg>
          </Link>
          <div className="mt-12 w-full lg:mt-16"><ImageCarousel slides={screenshots} labels={carouselLabels} /></div>
        </div>
      </section>
      <section className="bg-base-200 py-20 lg:py-28" aria-labelledby="features-title">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <p className="mb-3 text-sm font-bold text-primary">{dictionary.boxes.features.label}</p>
          <h2 className="max-w-3xl text-3xl font-black tracking-tight sm:text-5xl" id="features-title">{dictionary.boxes.features.heading}</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {dictionary.boxes.features.items.map((feature, index) => (
              <article className="card border border-base-300 bg-base-100 shadow-sm" key={feature.title}>
                <div className="card-body p-7"><span className="text-sm font-black text-primary">0{index + 1}</span><h3 className="card-title mt-2 text-xl">{feature.title}</h3><p className="mt-2 leading-7 text-base-content/65">{feature.description}</p></div>
              </article>
            ))}
          </div>
          <div className="alert alert-info alert-soft mt-8 text-sm leading-6"><span aria-hidden="true">ⓘ</span><p>{dictionary.boxes.availabilityNotice}</p></div>
        </div>
      </section>
    </main>
  );
}

export async function BoxesDownloadContent({ locale }: { locale: PublishedLocale }) {
  const dictionary = await getDictionary(locale);
  const copy = dictionary.boxes.download;
  return (
    <main className="bg-base-200 py-12 sm:py-20">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">
        <nav className="breadcrumbs mb-8 text-sm text-base-content/60" aria-label={copy.breadcrumbLabel}>
          <ul><li><Link href={localizedPath(locale, "/product/boxes")}>Boxes</Link></li><li aria-current="page">{copy.breadcrumbCurrent}</li></ul>
        </nav>
        <section className="card border border-base-300 bg-base-100 shadow-xl">
          <div className="card-body gap-8 p-6 sm:p-10">
            <div className="flex items-center gap-4"><Image src="/images/ghostyak-boxes.svg" alt="" width={80} height={80} className="size-16 object-contain sm:size-20" loading="eager" /><div><p className="text-sm font-bold text-primary">GHOSTYAK</p><p className="text-3xl font-black">Boxes</p></div></div>
            <DownloadCountdown downloadUrl={boxes.download.installerUrl} labels={copy} />
            <div className="alert alert-info alert-soft text-sm leading-6"><span aria-hidden="true">ⓘ</span><p>{copy.waitNotice}</p></div>
            <div className="flex flex-wrap gap-2 text-xs" aria-label={copy.fileInfoLabel}>
              <span className="badge badge-outline">{formatMessage(copy.version, { version: boxes.version })}</span><span className="badge badge-outline">{boxes.platform}</span><span className="badge badge-outline">{copy.fileSize}</span><span className="badge badge-outline h-auto min-h-6 whitespace-normal py-1">{copy.requirement}</span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function formatPublishedAt(locale: PublishedLocale, value: string) {
  return new Intl.DateTimeFormat(localeConfig[locale].htmlLanguage, { dateStyle: "long", timeZone: "Asia/Seoul" }).format(new Date(`${value}T00:00:00+09:00`));
}

export async function BlogContent({ locale }: { locale: PublishedLocale }) {
  const [posts, dictionary] = await Promise.all([getAllPosts(locale), getDictionary(locale)]);
  return (
    <main className="bg-base-200 py-16 sm:py-24">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">
        <p className="mb-3 text-sm font-bold text-primary">{dictionary.blog.eyebrow}</p><h1 className="text-4xl font-black tracking-tight sm:text-6xl">{dictionary.blog.heading}</h1><p className="mt-5 max-w-2xl text-lg leading-8 text-base-content/65">{dictionary.blog.intro}</p>
        <div className="mt-12 grid gap-5">
          {posts.map((post) => {
            const postPath = localizedPath(locale, `/blog/${post.slug}`);
            return <article className="card border border-base-300 bg-base-100 shadow-sm transition-shadow hover:shadow-lg motion-reduce:transition-none" key={post.slug}><div className="card-body p-7 sm:p-9"><time className="text-sm font-semibold text-primary" dateTime={post.publishedAt}>{formatPublishedAt(locale, post.publishedAt)}</time><h2 className="card-title mt-1 text-2xl sm:text-3xl"><Link className="link-hover" href={postPath}>{post.title}</Link></h2><p className="mt-2 leading-7 text-base-content/65">{post.description}</p><div className="card-actions mt-4"><Link className="link link-primary font-bold" href={postPath}>{dictionary.blog.readMore} →</Link></div></div></article>;
          })}
        </div>
      </div>
    </main>
  );
}

export async function BlogPostContent({ locale, slug }: { locale: PublishedLocale; slug: string }) {
  const [post, dictionary] = await Promise.all([getPost(locale, slug), getDictionary(locale)]);
  if (!post) notFound();
  return (
    <main className="bg-base-100 py-12 sm:py-20">
      <article className="mx-auto w-full max-w-3xl px-4 sm:px-6">
        <nav className="breadcrumbs mb-10 text-sm text-base-content/60" aria-label={dictionary.blog.breadcrumbLabel}><ul><li><Link href={localizedPath(locale, "/blog")}>{dictionary.blog.breadcrumbHome}</Link></li><li aria-current="page">{post.title}</li></ul></nav>
        <header className="border-b border-base-300 pb-8"><p className="text-sm font-bold text-primary">{dictionary.blog.eyebrow}</p><h1 className="mt-3 text-4xl font-black leading-tight tracking-tight sm:text-6xl">{post.title}</h1><p className="mt-5 text-lg leading-8 text-base-content/65">{post.description}</p><time className="mt-5 block text-sm text-base-content/50" dateTime={post.publishedAt}>{formatPublishedAt(locale, post.publishedAt)}</time></header>
        <div className="mt-10 text-lg leading-8 text-base-content/80 [&_h2]:mb-4 [&_h2]:mt-12 [&_h2]:text-2xl [&_h2]:font-black [&_h2]:tracking-tight [&_li]:ml-6 [&_li]:list-disc [&_li]:pl-1 [&_p]:my-5 [&_strong]:font-bold [&_strong]:text-base-content [&_ul]:my-6 [&_ul]:space-y-2" dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
    </main>
  );
}
