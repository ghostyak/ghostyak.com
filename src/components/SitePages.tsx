import Link from "next/link";
import { notFound, redirect } from "next/navigation";
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

export function HomeContent({ locale }: { locale: PublishedLocale }) {
  return <LandingContent locale={locale} path="/" />;
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
