import Image from "next/image";
import Link from "next/link";
import { HeroCarousel } from "@/components/AutoCarousel";
import { boxes, homeSlides } from "@/data/products";

export default function HomePage() {
  return (
    <main>
      <h1 className="sr-only">GhostYak 소프트웨어</h1>
      <HeroCarousel slides={homeSlides} />

      <section
        className="bg-base-200 py-20 lg:py-28"
        aria-labelledby="product-title"
      >
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-sm font-bold text-primary">GHOSTYAK SOFTWARE</p>
              <h2 className="text-3xl font-black tracking-tight sm:text-5xl" id="product-title">
                지금 만나볼 수 있는 제품
              </h2>
            </div>
            <p className="max-w-lg leading-7 text-base-content/65">
              복잡한 기능보다 매일 마주치는 작은 불편을 해결하는 데 집중합니다.
            </p>
          </div>

          <article className="card overflow-hidden border border-base-300 bg-base-100 shadow-xl lg:card-side">
            <figure className="relative min-h-72 overflow-hidden bg-neutral lg:w-1/2">
              <Image
                className="object-cover"
                src={boxes.screenshots[0].src}
                alt={boxes.screenshots[0].alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </figure>
            <div className="card-body justify-center p-7 sm:p-10 lg:w-1/2 lg:p-14">
              <div className="flex flex-wrap gap-2">
                <span className="badge badge-primary badge-soft">무료</span>
                <span className="badge badge-outline">{boxes.platform}</span>
              </div>
              <h3 className="card-title mt-3 text-4xl font-black">Boxes</h3>
              <p className="mt-3 max-w-xl text-lg leading-8 text-base-content/70">
                {boxes.description}
              </p>
              <div className="card-actions mt-6">
                <Link className="btn btn-primary min-h-12 px-7" href="/product/boxes">
                  제품 둘러보기
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="bg-base-100 py-20 lg:py-24" aria-labelledby="blog-title">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 sm:px-6 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="mb-3 text-sm font-bold text-primary">BLOG</p>
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl" id="blog-title">
              만들고 있는 것에 대한 기록
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-base-content/65">
              제품 소식과 개발 이야기를 GhostYak 블로그에서 전합니다.
            </p>
          </div>
          <Link className="btn btn-outline btn-primary" href="/blog">
            블로그 보기
          </Link>
        </div>
      </section>
    </main>
  );
}
