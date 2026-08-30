import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary } from "@/i18n/get-dictionary";
import { localeConfig, sourceLocale } from "@/i18n/locales";
import { localizedPath } from "@/i18n/routing";
import { getAllPosts, getPost } from "@/lib/blog";

export async function generateStaticParams() {
  return (await getAllPosts(sourceLocale)).map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(sourceLocale, slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { type: "article", title: post.title, description: post.description, publishedTime: post.publishedAt },
  };
}

function formatPublishedAt(value: string) {
  return new Intl.DateTimeFormat(localeConfig[sourceLocale].htmlLanguage, { dateStyle: "long", timeZone: "Asia/Seoul" }).format(
    new Date(`${value}T00:00:00+09:00`),
  );
}

export default async function BlogPostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const [post, dictionary] = await Promise.all([getPost(sourceLocale, slug), getDictionary(sourceLocale)]);
  if (!post) notFound();
  return (
    <main className="bg-base-100 py-12 sm:py-20">
      <article className="mx-auto w-full max-w-3xl px-4 sm:px-6">
        <nav className="breadcrumbs mb-10 text-sm text-base-content/60" aria-label={dictionary.blog.breadcrumbLabel}>
          <ul><li><Link href={localizedPath(sourceLocale, "/blog")}>{dictionary.blog.breadcrumbHome}</Link></li><li aria-current="page">{post.title}</li></ul>
        </nav>
        <header className="border-b border-base-300 pb-8">
          <p className="text-sm font-bold text-primary">{dictionary.blog.eyebrow}</p>
          <h1 className="mt-3 text-4xl font-black leading-tight tracking-tight sm:text-6xl">{post.title}</h1>
          <p className="mt-5 text-lg leading-8 text-base-content/65">{post.description}</p>
          <time className="mt-5 block text-sm text-base-content/50" dateTime={post.publishedAt}>{formatPublishedAt(post.publishedAt)}</time>
        </header>
        <div className="mt-10 text-lg leading-8 text-base-content/80 [&_h2]:mb-4 [&_h2]:mt-12 [&_h2]:text-2xl [&_h2]:font-black [&_h2]:tracking-tight [&_li]:ml-6 [&_li]:list-disc [&_li]:pl-1 [&_p]:my-5 [&_strong]:font-bold [&_strong]:text-base-content [&_ul]:my-6 [&_ul]:space-y-2" dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
    </main>
  );
}
