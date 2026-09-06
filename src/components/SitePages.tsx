import Image from "next/image";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { boxes } from "@/data/products";
import { getDictionary } from "@/i18n/get-dictionary";
import { localeConfig, type PublishedLocale } from "@/i18n/locales";
import { localizedPath } from "@/i18n/routing";
import { getAllPosts, getPost } from "@/lib/blog";
import { getSoftwareApplicationJsonLd } from "@/seo";
import { RenewalLanding } from "@/components/renewal/RenewalLanding";

async function LandingContent({ locale, path }: { locale: PublishedLocale; path: "/" | "/product/boxes" }) {
  const dictionary = await getDictionary(locale);
  const copy = dictionary.landing;
  const jsonLd = getSoftwareApplicationJsonLd({ locale, description: copy.metadata.description, featureNames: copy.free.currentFeatures });
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} /><RenewalLanding copy={copy} locale={locale} currentPath={localizedPath(locale, path)} languageLabel={dictionary.header.language} /></>;
}

export async function HomeContent({ locale }: { locale: PublishedLocale }) {
  const dictionary = await getDictionary(locale);
  const boxesPath = localizedPath(locale, "/product/boxes");
  const blogPath = localizedPath(locale, "/blog");

  return (
    <main>
      <section className="bg-base-200 py-16 sm:py-20 lg:py-28" aria-labelledby="product-title">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <p className="mb-3 text-sm font-bold text-primary">{dictionary.home.products.eyebrow}</p>
          <h2 className="text-3xl font-black tracking-tight sm:text-5xl" id="product-title">{dictionary.home.products.heading}</h2>
          <p className="mt-4 max-w-2xl leading-7 text-base-content/65">{dictionary.home.products.intro}</p>
          <article className="card mt-10 overflow-hidden border border-base-300 bg-base-100 shadow-xl lg:card-side">
            <figure className="relative min-h-72 overflow-hidden bg-neutral lg:w-1/2"><Image className="object-cover" src={boxes.screenshots[0].src} alt={dictionary.boxes.screenshotAlts[0]} fill sizes="(max-width: 1024px) 100vw, 50vw" /></figure>
            <div className="card-body justify-center p-7 sm:p-10 lg:w-1/2 lg:p-14"><div className="flex flex-wrap gap-2"><span className="badge badge-primary badge-soft">{dictionary.home.products.freeBadge}</span><span className="badge badge-outline">{boxes.platform}</span></div><h3 className="card-title mt-3 text-4xl font-black">{boxes.name}</h3><p className="mt-3 max-w-xl text-lg leading-8 text-base-content/70">{dictionary.boxes.description}</p><div className="card-actions mt-6"><Link className="btn btn-primary min-h-12 px-7" href={boxesPath}>{dictionary.home.products.viewAction}<span aria-hidden="true">→</span></Link></div></div>
          </article>
        </div>
      </section>
      <section className="bg-base-100 py-20 lg:py-24" aria-labelledby="blog-title"><div className="mx-auto grid w-full max-w-6xl gap-8 px-4 sm:px-6 md:grid-cols-[1fr_auto] md:items-end"><div><p className="mb-3 text-sm font-bold text-primary">{dictionary.home.blog.eyebrow}</p><h2 className="text-3xl font-black tracking-tight sm:text-4xl" id="blog-title">{dictionary.home.blog.heading}</h2><p className="mt-4 max-w-2xl text-lg leading-8 text-base-content/65">{dictionary.home.blog.intro}</p></div><Link className="btn btn-outline btn-primary" href={blogPath}>{dictionary.home.blog.viewAction}</Link></div></section>
    </main>
  );
}

export function BoxesContent({ locale }: { locale: PublishedLocale }) {
  return <LandingContent locale={locale} path="/product/boxes" />;
}

export function BoxesDownloadContent({ locale }: { locale: PublishedLocale }) {
  return redirect(localizedPath(locale, "/") + "#download");
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
