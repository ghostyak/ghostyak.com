import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Clock3, ScanSearch, PanelsTopLeft, ChevronRight } from "lucide-react";
import { notFound, redirect } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { boxes, clock, osints } from "@/data/products";
import { getDictionary } from "@/i18n/get-dictionary";
import { localeConfig, type PublishedLocale } from "@/i18n/locales";
import { localizedPath } from "@/i18n/routing";
import { getAllPosts, getPost } from "@/lib/blog";
import { getSoftwareApplicationJsonLd } from "@/seo";
import { RenewalLanding } from "@/components/renewal/RenewalLanding";
import { CsvSearchCard } from "@/components/CsvSearchCard";
import { PageHero } from "@/components/PageHero";

export async function HomeContent({ locale }: { locale: PublishedLocale }) {
  const dictionary = await getDictionary(locale);
  const copy = dictionary.home;
  return <main id="main-content">
    <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-8 sm:pb-24" id="products" aria-labelledby="product-title">
      <PageHero
        id="product-title"
        eyebrow={<p className="inline-flex items-center justify-center gap-2.5 text-xs font-semibold tracking-[0.18em] text-primary"><span className="size-2 shrink-0 rounded-full bg-primary" aria-hidden="true" />{copy.products.eyebrow}</p>}
        title={copy.products.heading}
        description={copy.products.intro}
      />

      <div className="grid gap-6 md:auto-rows-fr md:grid-cols-2">
        <Card className="gap-0 overflow-hidden rounded-2xl py-0 shadow-none">
          <article className="flex h-full flex-col">
            <figure className="h-60 shrink-0 bg-[#e9edf5] p-4 sm:p-6">
              <a href={localizedPath(locale, "/product/boxes")} className="block h-full" aria-label={copy.products.viewAction + ": Boxes"}>
                <Image {...boxes.preview} preload className="h-full w-full object-contain" alt={dictionary.boxes.screenshotAlts[0]} sizes="(min-width: 1280px) 540px, (min-width: 768px) calc((100vw - 138px) / 2), calc(100vw - 82px)" />
              </a>
            </figure>
            <CardContent className="flex flex-1 flex-col items-start p-6 sm:p-8">
              <div className="flex w-full flex-wrap items-center justify-between gap-3"><h2 className="text-3xl font-semibold tracking-tight">{boxes.name}</h2><div className="flex flex-wrap gap-2"><Badge variant="secondary">{copy.products.freeBadge}</Badge><Badge variant="outline">{boxes.platform}</Badge></div></div>
              <p className="mb-6 mt-4 text-sm leading-7 text-muted-foreground">{dictionary.boxes.description}</p>
              <a className={cn(buttonVariants({ variant: "outline", className: "mt-auto h-auto min-h-11 max-w-full whitespace-normal py-3" }))} href={localizedPath(locale, "/product/boxes")}>{copy.products.viewAction}<ArrowRight aria-hidden="true" /></a>
            </CardContent>
          </article>
        </Card>
        <Card className="gap-0 overflow-hidden rounded-2xl py-0 shadow-none">
          <article className="flex h-full flex-col">
            <figure className="relative flex h-60 shrink-0 flex-col items-center justify-center overflow-hidden bg-[#18202c] px-4 py-12 text-white" aria-label={copy.products.clockPreviewLabel}>
              <div className="absolute size-80 rounded-full border border-white/5" aria-hidden="true" /><div className="absolute size-60 rounded-full border border-white/10" aria-hidden="true" />
              <Clock3 className="mb-4 size-5 text-blue-300" aria-hidden="true" /><time className="relative text-5xl font-light tabular-nums tracking-[-0.05em] sm:text-6xl" dateTime="10:09:42">10<span className="text-blue-300">:</span>09<span className="text-blue-300">:</span>42</time><span className="relative mt-4 font-mono text-[11px] tracking-[0.15em] text-slate-400">2026. 09. 08.</span>
            </figure>
            <CardContent className="flex flex-1 flex-col items-start p-6 sm:p-8">
              <div className="flex w-full flex-wrap items-center justify-between gap-3"><h2 className="text-3xl font-semibold tracking-tight">{clock.name}</h2><div className="flex gap-2"><Badge variant="secondary">{copy.products.freeBadge}</Badge><Badge variant="outline">{copy.products.webBadge}</Badge></div></div>
              <p className="mb-6 mt-4 text-sm leading-7 text-muted-foreground">{copy.products.clockDescription}</p>
              <a className={cn(buttonVariants({ variant: "outline", className: "mt-auto h-auto min-h-11 max-w-full whitespace-normal py-3" }))} href={clock.url} rel="noreferrer" target="_blank">{copy.products.webAction}<ArrowUpRight aria-hidden="true" /></a>
            </CardContent>
          </article>
        </Card>
        <Card className="gap-0 overflow-hidden rounded-2xl py-0 shadow-none">
          <article className="flex h-full flex-col">
            <div className="relative flex h-60 shrink-0 items-center justify-center overflow-hidden bg-[#e9eef1] px-4 py-12" aria-hidden="true">
              <div className="absolute h-px w-full bg-slate-300/50" /><div className="absolute h-full w-px bg-slate-300/50" /><div className="absolute size-48 rounded-full border border-slate-300/80" /><div className="absolute size-72 rounded-full border border-slate-300/50" />
              <div className="relative flex items-center gap-3 rounded-xl border border-white bg-white/80 px-7 py-5 shadow-lg shadow-slate-400/10 backdrop-blur-sm"><ScanSearch className="size-7 text-primary" /><span className="text-3xl font-semibold tracking-tight">{osints.name}</span></div>
            </div>
            <CardContent className="flex flex-1 flex-col items-start p-6 sm:p-8">
              <div className="flex w-full flex-wrap items-center justify-between gap-3"><h2 className="text-3xl font-semibold tracking-tight">{osints.name}</h2><Badge variant="outline">{copy.products.webBadge}</Badge></div>
              <p className="mb-6 mt-4 text-sm leading-7 text-muted-foreground">{copy.products.osintsDescription}</p>
              <a className={cn(buttonVariants({ variant: "outline", className: "mt-auto h-auto min-h-11 max-w-full whitespace-normal py-3" }))} href={osints.url} rel="noreferrer" target="_blank">{copy.products.webAction}<ArrowUpRight aria-hidden="true" /></a>
            </CardContent>
          </article>
        </Card>
        <CsvSearchCard copy={dictionary.csvSearch} locale={locale} viewAction={copy.products.viewAction} />
      </div>
    </section>

    <section className="border-t bg-muted/40 px-4 py-14 sm:px-8 sm:py-20" aria-labelledby="blog-title">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_auto] md:items-center">
        <div><p className="mb-4 text-xs font-semibold tracking-[0.18em] text-primary">{copy.blog.eyebrow}</p><h2 className="text-3xl font-semibold tracking-tight sm:text-4xl" id="blog-title">{copy.blog.heading}</h2><p className="mt-4 max-w-2xl leading-7 text-muted-foreground">{copy.blog.intro}</p></div>
        <Link className={cn(buttonVariants({ variant: "outline", size: "lg", className: "h-auto min-h-12 w-fit max-w-full whitespace-normal py-3" }))} href={localizedPath(locale, "/blog")}>{copy.blog.viewAction}<ArrowRight aria-hidden="true" /></Link>
      </div>
    </section>
  </main>;
}

export async function BoxesContent({ locale }: { locale: PublishedLocale }) {
  const { landing: copy } = await getDictionary(locale);
  const jsonLd = getSoftwareApplicationJsonLd({ locale, description: copy.metadata.description, featureNames: copy.free.currentFeatures });
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} /><RenewalLanding copy={copy} locale={locale} currentPath={localizedPath(locale, "/product/boxes")} /></>;
}

export function BoxesDownloadContent({ locale }: { locale: PublishedLocale }) {
  return redirect(localizedPath(locale, "/product/boxes") + "#download");
}

function formatPublishedAt(locale: PublishedLocale, value: string) {
  return new Intl.DateTimeFormat(localeConfig[locale].htmlLanguage, { dateStyle: "long", timeZone: "Asia/Seoul" }).format(new Date(`${value}T00:00:00+09:00`));
}

export async function BlogContent({ locale }: { locale: PublishedLocale }) {
  const [posts, dictionary] = await Promise.all([getAllPosts(locale), getDictionary(locale)]);
  return <main id="main-content" className="mx-auto max-w-7xl px-4 py-14 sm:px-8 sm:py-24">
    <header className="max-w-3xl"><p className="mb-5 text-xs font-semibold tracking-[0.18em] text-primary">{dictionary.blog.eyebrow}</p><h1 className="text-5xl font-semibold tracking-[-0.045em] sm:text-7xl">{dictionary.blog.heading}</h1><p className="mt-6 text-lg leading-8 text-muted-foreground">{dictionary.blog.intro}</p></header>
    <div className="mt-14 grid gap-6 md:grid-cols-2">
      {posts.map((post, index) => <Card key={post.slug} className="gap-0 overflow-hidden py-0 shadow-none">
        <article className="flex h-full flex-col">
          <div className="flex h-40 items-center justify-between bg-muted/70 px-7 sm:h-48 sm:px-9" aria-hidden="true"><PanelsTopLeft className="size-12 stroke-1 text-primary" /><span className="text-7xl font-light tracking-tighter text-foreground/10">{String(index + 1).padStart(2, "0")}</span></div>
          <CardContent className="flex flex-1 flex-col items-start p-7 sm:p-9"><time className="text-xs text-muted-foreground" dateTime={post.publishedAt}>{formatPublishedAt(locale, post.publishedAt)}</time><h2 className="mt-4 text-2xl font-semibold leading-snug tracking-tight"><Link className="hover:text-primary" href={localizedPath(locale, `/blog/${post.slug}`)}>{post.title}</Link></h2><p className="mb-6 mt-3 text-sm leading-7 text-muted-foreground">{post.description}</p><Link className={cn(buttonVariants({ variant: "link", className: "mt-auto min-h-11 h-auto max-w-full whitespace-normal px-0 text-foreground" }))} href={localizedPath(locale, `/blog/${post.slug}`)}>{dictionary.blog.readMore}<ArrowRight aria-hidden="true" /></Link></CardContent>
        </article>
      </Card>)}
    </div>
  </main>;
}

export async function BlogPostContent({ locale, slug }: { locale: PublishedLocale; slug: string }) {
  const [post, dictionary] = await Promise.all([getPost(locale, slug), getDictionary(locale)]);
  if (!post) notFound();
  return <main id="main-content" className="px-4 py-10 sm:px-8 sm:py-16">
    <article className="mx-auto max-w-3xl">
      <nav className="mb-10 text-sm text-muted-foreground" aria-label={dictionary.blog.breadcrumbLabel}><ol className="flex flex-wrap items-center gap-2"><li><Link className="inline-flex min-h-11 items-center hover:text-primary" href={localizedPath(locale, "/blog")}>{dictionary.blog.breadcrumbHome}</Link></li><li aria-hidden="true"><ChevronRight className="size-3.5" /></li><li className="min-w-0" aria-current="page">{post.title}</li></ol></nav>
      <header className="border-b pb-10"><p className="text-xs font-semibold tracking-[0.18em] text-primary">{dictionary.blog.eyebrow}</p><h1 className="mt-5 text-4xl font-semibold leading-[1.2] tracking-[-0.04em] text-balance sm:text-5xl">{post.title}</h1><p className="mt-6 text-lg leading-8 text-muted-foreground">{post.description}</p><time className="mt-6 block text-sm text-muted-foreground" dateTime={post.publishedAt}>{formatPublishedAt(locale, post.publishedAt)}</time></header>
      <div className="mt-10 text-base leading-8 text-foreground/85 sm:text-lg [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-4 [&_h2]:mb-4 [&_h2]:mt-12 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h3]:mt-8 [&_h3]:font-semibold [&_img]:h-auto [&_img]:max-w-full [&_img]:rounded-xl [&_li]:ml-6 [&_li]:pl-1 [&_ol]:list-decimal [&_p]:my-5 [&_pre]:overflow-x-auto [&_pre]:rounded-lg [&_pre]:bg-muted [&_pre]:p-4 [&_strong]:font-semibold [&_strong]:text-foreground [&_ul]:my-6 [&_ul]:list-disc [&_ul]:space-y-2" dangerouslySetInnerHTML={{ __html: post.html }} />
    </article>
  </main>;
}
