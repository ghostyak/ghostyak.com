"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { formatMessage } from "@/i18n/routing";

const ROTATION_INTERVAL = 6500;

type CarouselImage = { src: string; alt: string };
type HeroSlide = CarouselImage & {
  eyebrow: string;
  title: string;
  description: string;
  actionLabel: string;
  actionHref: string;
};

export type CarouselLabels = {
  regionLabel: string;
  controlsLabel: string;
  slideLabel: string;
  pauseLabel: string;
  playLabel: string;
  pause: string;
  play: string;
};

function useAutoCarousel(length: number) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    if (isPaused || isInteracting || length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const intervalId = window.setInterval(() => setActiveIndex((current) => (current + 1) % length), ROTATION_INTERVAL);
    return () => window.clearInterval(intervalId);
  }, [isPaused, isInteracting, length]);

  return { activeIndex, setActiveIndex, isPaused, setIsPaused, setIsInteracting };
}

function CarouselControls({ activeIndex, count, isPaused, labels, onPause, onSelect }: {
  activeIndex: number;
  count: number;
  isPaused: boolean;
  labels: CarouselLabels;
  onPause: () => void;
  onSelect: (index: number) => void;
}) {
  return (
    <div className="flex items-center justify-center gap-2" aria-label={labels.controlsLabel}>
      {Array.from({ length: count }, (_, index) => (
        <button
          className="btn btn-circle btn-ghost size-11 min-h-11 p-0"
          type="button"
          key={index}
          onClick={() => onSelect(index)}
          aria-label={formatMessage(labels.slideLabel, { index: index + 1 })}
          aria-current={index === activeIndex ? "true" : undefined}
        >
          <span className={`rounded-full transition-all motion-reduce:transition-none ${index === activeIndex ? "size-4 bg-primary" : "size-3 bg-base-300"}`} aria-hidden="true" />
        </button>
      ))}
      <button
        className="btn btn-ghost btn-sm ml-1 min-h-11 min-w-14"
        type="button"
        onClick={onPause}
        aria-label={isPaused ? labels.playLabel : labels.pauseLabel}
      >
        {isPaused ? labels.play : labels.pause}
      </button>
    </div>
  );
}

export function HeroCarousel({ slides, labels }: { slides: readonly HeroSlide[]; labels: CarouselLabels }) {
  const { activeIndex, setActiveIndex, isPaused, setIsPaused, setIsInteracting } = useAutoCarousel(slides.length);
  const slide = slides[activeIndex];

  return (
    <section
      className="relative overflow-hidden bg-base-100"
      aria-label={labels.regionLabel}
      aria-roledescription="carousel"
      onMouseEnter={() => setIsInteracting(true)}
      onMouseLeave={() => setIsInteracting(false)}
      onFocus={() => setIsInteracting(true)}
      onBlur={(event) => {
        if (!(event.relatedTarget instanceof Node) || !event.currentTarget.contains(event.relatedTarget)) setIsInteracting(false);
      }}
    >
      <article className="mx-auto grid min-h-[36rem] w-full max-w-6xl items-center gap-8 px-4 py-12 motion-safe:animate-[carousel-reveal_600ms_ease-out] sm:px-6 lg:grid-cols-[minmax(20rem,0.78fr)_minmax(34rem,1.22fr)] lg:py-16" key={activeIndex} aria-live="polite">
        <div className="z-10 max-w-xl lg:py-12">
          <p className="mb-4 text-sm font-black tracking-[0.16em] text-primary">{slide.eyebrow}</p>
          <h2 className="break-keep text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">{slide.title}</h2>
          <p className="mt-6 break-keep text-lg leading-8 text-base-content/70">{slide.description}</p>
          <Link className="btn btn-primary mt-8 min-h-12 px-7" href={slide.actionHref}>{slide.actionLabel}<span aria-hidden="true">→</span></Link>
        </div>
        <div className="relative aspect-video overflow-hidden rounded-box border border-base-300 bg-neutral shadow-2xl lg:-mr-24">
          <Image className="object-cover" src={slide.src} alt={slide.alt} fill loading="eager" sizes="(max-width: 1024px) 100vw, 65vw" />
        </div>
      </article>
      <div className="border-t border-base-300 bg-base-200 px-4 py-4">
        <CarouselControls activeIndex={activeIndex} count={slides.length} isPaused={isPaused} labels={labels} onPause={() => setIsPaused((current) => !current)} onSelect={setActiveIndex} />
      </div>
    </section>
  );
}

export function ImageCarousel({ slides, labels }: { slides: readonly CarouselImage[]; labels: CarouselLabels }) {
  const { activeIndex, setActiveIndex, isPaused, setIsPaused, setIsInteracting } = useAutoCarousel(slides.length);
  const slide = slides[activeIndex];

  return (
    <div
      className="w-full"
      aria-label={labels.regionLabel}
      aria-roledescription="carousel"
      onMouseEnter={() => setIsInteracting(true)}
      onMouseLeave={() => setIsInteracting(false)}
      onFocus={() => setIsInteracting(true)}
      onBlur={(event) => {
        if (!(event.relatedTarget instanceof Node) || !event.currentTarget.contains(event.relatedTarget)) setIsInteracting(false);
      }}
    >
      <div className="rounded-[1.75rem] bg-neutral p-2 shadow-2xl sm:p-4">
        <div className="relative aspect-video overflow-hidden rounded-[1.15rem] bg-base-300 motion-safe:animate-[carousel-reveal_600ms_ease-out]" key={activeIndex} aria-live="polite">
          <Image className="object-cover" src={slide.src} alt={slide.alt} fill loading="eager" sizes="(max-width: 1180px) calc(100vw - 32px), 1120px" />
        </div>
      </div>
      <div className="mx-auto h-8 w-1/3 bg-gradient-to-b from-neutral to-neutral/80 [clip-path:polygon(35%_0,65%_0,75%_100%,25%_100%)]" aria-hidden="true" />
      <div className="mx-auto mb-6 h-2 w-1/2 rounded-full bg-neutral shadow-md" aria-hidden="true" />
      <CarouselControls activeIndex={activeIndex} count={slides.length} isPaused={isPaused} labels={labels} onPause={() => setIsPaused((current) => !current)} onSelect={setActiveIndex} />
    </div>
  );
}
