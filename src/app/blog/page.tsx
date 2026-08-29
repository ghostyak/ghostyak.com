import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "블로그",
  description: "GhostYak 제품 소식과 개발 이야기를 전합니다.",
  alternates: { canonical: "/blog" },
};

function formatPublishedAt(value: string) {
  return new Intl.DateTimeFormat("ko-KR", { dateStyle: "long", timeZone: "Asia/Seoul" }).format(
    new Date(`${value}T00:00:00+09:00`),
  );
}

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <main className="bg-base-200 py-16 sm:py-24">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">
        <p className="mb-3 text-sm font-bold text-primary">GHOSTYAK BLOG</p>
        <h1 className="text-4xl font-black tracking-tight sm:text-6xl">블로그</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-base-content/65">제품 소식과 개발 과정에서 배운 것을 기록합니다.</p>

        <div className="mt-12 grid gap-5">
          {posts.map((post) => (
            <article className="card border border-base-300 bg-base-100 shadow-sm transition-shadow hover:shadow-lg motion-reduce:transition-none" key={post.slug}>
              <div className="card-body p-7 sm:p-9">
                <time className="text-sm font-semibold text-primary" dateTime={post.publishedAt}>{formatPublishedAt(post.publishedAt)}</time>
                <h2 className="card-title mt-1 text-2xl sm:text-3xl"><Link className="link-hover" href={`/blog/${post.slug}`}>{post.title}</Link></h2>
                <p className="mt-2 leading-7 text-base-content/65">{post.description}</p>
                <div className="card-actions mt-4"><Link className="link link-primary font-bold" href={`/blog/${post.slug}`}>글 읽기 →</Link></div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
