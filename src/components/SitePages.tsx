import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { AppWindow, ArrowRight, Clock3, ChevronRight, Fingerprint, Globe, ScanSearch, type LucideIcon } from "lucide-react";
import { notFound, redirect } from "next/navigation";
import { buttonVariants } from "@/components/ui/button";
import { boxes, clock, folderHistory, osints } from "@/data/products";
import { getDictionary } from "@/i18n/get-dictionary";
import { localeConfig, type PublishedLocale } from "@/i18n/locales";
import { localizedPath } from "@/i18n/routing";
import { getAllPosts, getPost, type BlogPostSummary } from "@/lib/blog";
import { getBlogPostingJsonLd, getSoftwareApplicationJsonLd } from "@/seo";
import { RenewalLanding } from "@/components/renewal/RenewalLanding";
import { CsvSearchCard } from "@/components/CsvSearchCard";
import { PageHero } from "@/components/PageHero";
import { ProductCard } from "@/components/ProductCard";

const eyebrowClassName = "inline-flex items-center justify-center gap-2.5 text-xs font-semibold tracking-[0.18em] text-brand-foreground";

// Decorative gold glow and grid behind ink hero bands.
function InkBackdrop() {
  return <div className="pointer-events-none absolute inset-0" aria-hidden="true">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgb(255_255_255/0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.04)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
    <div className="absolute left-1/2 top-0 h-80 w-[min(56rem,100%)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/15 blur-3xl" />
  </div>;
}

// One home category: a pill heading that stays readable over the ink hero, then two-column cards.
function ProductCategory({ id, label, icon: Icon, children }: { id: string; label: string; icon: LucideIcon; children: ReactNode }) {
  return <section aria-labelledby={`category-${id}`}>
    <h2 id={`category-${id}`} className="mb-5 inline-flex min-h-10 items-center gap-2.5 rounded-full border bg-card px-4 text-sm font-semibold shadow-sm shadow-ink/5"><span className="flex size-6 items-center justify-center rounded-full bg-ink text-brand"><Icon className="size-3.5" aria-hidden="true" /></span>{label}</h2>
    <div className="grid gap-6 md:auto-rows-fr md:grid-cols-2">{children}</div>
  </section>;
}

function formatPublishedAt(locale: PublishedLocale, value: string) {
  return new Intl.DateTimeFormat(localeConfig[locale].htmlLanguage, { dateStyle: "long", timeZone: "Asia/Seoul" }).format(new Date(`${value}T00:00:00+09:00`));
}

function PostCard({ post, locale, readMore, featured = false, headingLevel: Heading = "h2" }: { post: BlogPostSummary; locale: PublishedLocale; readMore: string; featured?: boolean; headingLevel?: "h2" | "h3" }) {
  const href = localizedPath(locale, `/blog/${post.slug}`);
  return <article className={cn("group relative flex h-full flex-col rounded-3xl border p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/10 motion-reduce:hover:translate-y-0 sm:p-9", featured ? "surface-ink overflow-hidden border-transparent md:col-span-2 md:p-12" : "bg-card")}>
    {featured && <InkBackdrop />}
    <time className="relative text-xs font-medium text-muted-foreground" dateTime={post.publishedAt}>{formatPublishedAt(locale, post.publishedAt)}</time>
    <Heading className={cn("relative mt-4 font-semibold leading-snug tracking-[-0.03em] text-balance", featured ? "max-w-3xl text-3xl sm:text-4xl" : "text-xl sm:text-2xl")}>
      {/* The stretched link makes the whole card clickable while keeping one accessible link. */}
      <Link className="after:absolute after:inset-0 after:rounded-3xl focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:outline-offset-4 focus-visible:after:outline-ring" href={href}>{post.title}</Link>
    </Heading>
    <p className={cn("relative mb-7 mt-3 leading-7 text-muted-foreground", featured ? "max-w-2xl text-base" : "text-sm")}>{post.description}</p>
    <span className="relative mt-auto inline-flex min-h-11 items-center gap-2 text-sm font-medium" aria-hidden="true">{readMore}<ArrowRight className="size-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" /></span>
  </article>;
}

export async function HomeContent({ locale }: { locale: PublishedLocale }) {
  const [dictionary, posts] = await Promise.all([getDictionary(locale), getAllPosts(locale)]);
  const copy = dictionary.home;
  return <main id="main-content">
    <section id="products" aria-labelledby="product-title">
      <div className="surface-ink relative overflow-hidden px-4 pb-24 sm:px-8 sm:pb-32">
        <InkBackdrop />
        <div className="relative">
          <PageHero
            id="product-title"
            eyebrow={<p className={eyebrowClassName}><span className="size-2 shrink-0 rounded-full bg-brand" aria-hidden="true" />{copy.products.eyebrow}</p>}
            title={copy.products.heading}
            description={copy.products.intro}
          />
        </div>
      </div>

      <div className="relative mx-auto -mt-24 max-w-7xl px-4 pb-16 sm:-mt-32 sm:px-8 sm:pb-24">
        <div className="space-y-12 sm:space-y-16">
          <ProductCategory id="windows-productivity" label={dictionary.productCategories.windowsProductivity} icon={AppWindow}>
              <ProductCard
                name={boxes.name}
                badges={[{ label: copy.products.freeBadge, tone: "free" }, { label: boxes.platform }]}
                description={dictionary.boxes.description}
                action={{ label: copy.products.viewAction, href: localizedPath(locale, "/product/boxes") }}
                preview={<figure className="relative h-full bg-ink p-4 sm:p-6">
                  <div className="absolute inset-x-10 bottom-0 h-24 rounded-full bg-brand/20 blur-3xl" aria-hidden="true" />
                  <a href={localizedPath(locale, "/product/boxes")} className="relative block h-full" aria-label={copy.products.viewAction + ": Boxes"}>
                    <Image {...boxes.preview} preload className="h-full w-full object-contain" alt={dictionary.boxes.screenshotAlts[0]} sizes="(min-width: 1280px) 540px, (min-width: 768px) calc((100vw - 138px) / 2), calc(100vw - 82px)" />
                  </a>
                </figure>}
              />
              <ProductCard
                name={folderHistory.name}
                badges={[{ label: copy.products.freeBadge, tone: "free" }, { label: folderHistory.platform }]}
                description={dictionary.folderHistory.cardDescription}
                action={{ label: copy.products.viewAction, href: localizedPath(locale, folderHistory.pagePath) }}
                preview={<figure className="relative h-full bg-ink p-4 sm:p-6">
                  <div className="absolute inset-x-10 bottom-0 h-24 rounded-full bg-brand/20 blur-3xl" aria-hidden="true" />
                  <a href={localizedPath(locale, folderHistory.pagePath)} className="relative block h-full" aria-label={copy.products.viewAction + ": " + folderHistory.name}>
                    <Image {...folderHistory.screenshots[0]} className="h-full w-full object-contain" alt={dictionary.folderHistory.screenshots[0].alt} sizes="(min-width: 1280px) 540px, (min-width: 768px) calc((100vw - 138px) / 2), calc(100vw - 82px)" />
                  </a>
                </figure>}
              />
          </ProductCategory>
          <ProductCategory id="web-apps" label={dictionary.productCategories.webApps} icon={Globe}>
              <ProductCard
                name={clock.name}
                badges={[{ label: copy.products.freeBadge, tone: "free" }, { label: copy.products.webBadge }]}
                description={copy.products.clockDescription}
                action={{ label: copy.products.webAction, href: clock.url, external: true }}
                preview={<figure className="surface-ink relative flex h-full flex-col items-center justify-center overflow-hidden px-4 py-12" aria-label={copy.products.clockPreviewLabel}>
                  <div className="absolute size-80 rounded-full border border-white/5" aria-hidden="true" /><div className="absolute size-60 rounded-full border border-brand/15" aria-hidden="true" />
                  <Clock3 className="relative mb-4 size-5 text-brand" aria-hidden="true" /><time className="relative text-5xl font-light tabular-nums tracking-[-0.05em] sm:text-6xl" dateTime="10:09:42">10<span className="text-brand">:</span>09<span className="text-brand">:</span>42</time><span className="relative mt-4 font-mono text-[11px] tracking-[0.15em] text-muted-foreground">2026. 09. 08.</span>
                </figure>}
              />
              <ProductCard
                name={osints.name}
                badges={[{ label: copy.products.webBadge }]}
                description={copy.products.osintsDescription}
                action={{ label: copy.products.webAction, href: osints.url, external: true }}
                preview={<div className="relative flex h-full items-center justify-center overflow-hidden bg-muted px-4 py-12" aria-hidden="true">
                  <div className="absolute h-px w-full bg-ink/10" /><div className="absolute h-full w-px bg-ink/10" /><div className="absolute size-48 rounded-full border border-ink/15" /><div className="absolute size-72 rounded-full border border-ink/10" /><div className="absolute size-3 translate-x-16 -translate-y-10 rounded-full bg-brand shadow-[0_0_0_6px_rgb(255_208_54/0.25)]" />
                  <div className="relative flex items-center gap-3 rounded-2xl bg-card px-7 py-5 shadow-lg shadow-ink/10"><ScanSearch className="size-7 text-brand-foreground" /><span className="text-3xl font-semibold tracking-tight">{osints.name}</span></div>
                </div>}
              />
          </ProductCategory>
          <ProductCategory id="digital-forensics" label={dictionary.csvSearch.category} icon={Fingerprint}>
              <CsvSearchCard copy={dictionary.csvSearch} locale={locale} viewAction={copy.products.viewAction} />
          </ProductCategory>
        </div>
      </div>
    </section>

    <section className="border-t bg-muted/50 px-4 py-16 sm:px-8 sm:py-24" aria-labelledby="blog-title">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div><p className={cn(eyebrowClassName, "mb-4")}>{copy.blog.eyebrow}</p><h2 className="text-3xl font-semibold tracking-[-0.035em] sm:text-4xl" id="blog-title">{copy.blog.heading}</h2><p className="mt-4 max-w-2xl leading-7 text-muted-foreground">{copy.blog.intro}</p></div>
          <Link className={cn(buttonVariants({ variant: "outline", size: "lg", className: "h-auto min-h-12 w-fit max-w-full shrink-0 whitespace-normal rounded-full px-6 py-3" }))} href={localizedPath(locale, "/blog")}>{copy.blog.viewAction}<ArrowRight aria-hidden="true" /></Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {posts.slice(0, 3).map(post => <PostCard key={post.slug} post={post} locale={locale} readMore={dictionary.blog.readMore} headingLevel="h3" />)}
        </div>
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

export async function BlogContent({ locale }: { locale: PublishedLocale }) {
  const [posts, dictionary] = await Promise.all([getAllPosts(locale), getDictionary(locale)]);
  return <main id="main-content" className="mx-auto max-w-7xl px-4 py-14 sm:px-8 sm:py-24">
    <header className="max-w-3xl"><p className={cn(eyebrowClassName, "mb-5")}>{dictionary.blog.eyebrow}</p><h1 className="text-5xl font-semibold tracking-[-0.045em] sm:text-7xl">{dictionary.blog.heading}</h1><p className="mt-6 text-lg leading-8 text-muted-foreground">{dictionary.blog.intro}</p></header>
    <div className="mt-14 grid gap-6 md:grid-cols-2">
      {posts.map((post, index) => <PostCard key={post.slug} post={post} locale={locale} readMore={dictionary.blog.readMore} featured={index === 0} />)}
    </div>
  </main>;
}

export async function BlogPostContent({ locale, slug }: { locale: PublishedLocale; slug: string }) {
  const [post, dictionary] = await Promise.all([getPost(locale, slug), getDictionary(locale)]);
  if (!post) notFound();
  const jsonLd = getBlogPostingJsonLd({ locale, post });
  return <main id="main-content"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} /><article>
    <header className="surface-ink relative overflow-hidden px-4 pb-14 pt-6 sm:px-8 sm:pb-20 sm:pt-10">
      <InkBackdrop />
      <div className="relative mx-auto max-w-3xl">
        <nav className="mb-10 text-sm text-muted-foreground" aria-label={dictionary.blog.breadcrumbLabel}><ol className="flex flex-wrap items-center gap-2"><li><Link className="inline-flex min-h-11 items-center hover:text-foreground" href={localizedPath(locale, "/blog")}>{dictionary.blog.breadcrumbHome}</Link></li><li aria-hidden="true"><ChevronRight className="size-3.5" /></li><li className="min-w-0" aria-current="page">{post.title}</li></ol></nav>
        <p className={eyebrowClassName}>{dictionary.blog.eyebrow}</p>
        <h1 className="mt-5 text-4xl font-semibold leading-[1.2] tracking-[-0.04em] text-balance sm:text-5xl">{post.title}</h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">{post.description}</p>
        <time className="mt-6 block text-sm text-muted-foreground" dateTime={post.publishedAt}>{formatPublishedAt(locale, post.publishedAt)}</time>
      </div>
    </header>
    <div className="px-4 py-12 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-3xl text-base leading-8 text-foreground/85 sm:text-lg [&_a]:font-medium [&_a]:text-foreground [&_a]:underline [&_a]:decoration-brand [&_a]:decoration-2 [&_a]:underline-offset-4 [&_a:hover]:decoration-ink [&_blockquote]:my-8 [&_blockquote]:border-l-4 [&_blockquote]:border-brand [&_blockquote]:pl-5 [&_blockquote]:text-muted-foreground [&_code]:rounded [&_code]:bg-muted [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:text-[0.9em] [&_h2]:mb-4 [&_h2]:mt-14 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-foreground [&_h3]:mt-8 [&_h3]:font-semibold [&_h3]:text-foreground [&_hr]:my-12 [&_img]:h-auto [&_img]:max-w-full [&_img]:rounded-2xl [&_img]:border [&_li]:ml-6 [&_li]:pl-1 [&_ol]:list-decimal [&_p]:my-5 [&_pre]:overflow-x-auto [&_pre]:rounded-xl [&_pre]:bg-muted [&_pre]:p-4 [&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_strong]:font-semibold [&_strong]:text-foreground [&_ul]:my-6 [&_ul]:list-disc [&_ul]:space-y-2" dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  </article></main>;
}
