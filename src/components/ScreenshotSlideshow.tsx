"use client";

import Image from "next/image";
import { useEffect, useId, useState, useSyncExternalStore } from "react";
import { ArrowUpRight, Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Dictionary } from "@/i18n/get-dictionary";
import { cn } from "@/lib/utils";

const motionQuery = "(prefers-reduced-motion: reduce)";
function subscribeMotion(onChange: () => void) {
  const media = window.matchMedia(motionQuery);
  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
}
function reducedMotionSnapshot() {
  return window.matchMedia(motionQuery).matches;
}
function serverMotionSnapshot() { return true; }

type Screenshot = { src: string; alt: string; caption: string };

export function ScreenshotSlideshow({ slides, labels, viewAction, controlsLabel }: {
  slides: Screenshot[];
  labels: Dictionary["carousel"];
  viewAction: string;
  controlsLabel: string;
}) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const reducedMotion = useSyncExternalStore(subscribeMotion, reducedMotionSnapshot, serverMotionSnapshot);
  const playing = !paused && !reducedMotion;
  const slideId = useId();

  useEffect(() => {
    if (!playing || hovered || slides.length < 2) return;
    const timer = window.setInterval(() => {
      if (!document.hidden) setActive((current) => (current + 1) % slides.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [playing, hovered, slides.length]);

  function selectSlide(index: number) {
    setPaused(true);
    setActive((index + slides.length) % slides.length);
  }

  return <section
    className="mx-auto max-w-5xl"
    aria-label={controlsLabel}
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}
    onFocusCapture={(event) => {
      if (!event.currentTarget.contains(event.relatedTarget) && !(event.target as HTMLElement).closest("[data-playback]")) setPaused(true);
    }}
    onKeyDown={(event) => {
      if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        event.preventDefault();
        selectSlide(active + (event.key === "ArrowRight" ? 1 : -1));
      }
    }}
  >
    <div className="overflow-hidden" id={slideId}>
      <div className="flex transition-transform duration-700 ease-in-out motion-reduce:transition-none" style={{ transform: `translateX(-${active * 100}%)` }}>
        {slides.map((slide, index) => <div key={slide.src} className="relative aspect-[879/542] w-full shrink-0" aria-hidden={index !== active} inert={index !== active}>
          <a className="absolute inset-0 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary" href={slide.src} target="_blank" rel="noreferrer" aria-label={`${viewAction}: ${slide.caption}`}>
            <Image src={slide.src} alt={slide.alt} fill sizes="(min-width: 1088px) 1024px, (min-width: 640px) calc(100vw - 64px), calc(100vw - 32px)" className="object-contain" loading="eager" />
          </a>
        </div>)}
      </div>
    </div>
    <div className="mt-5 flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
      <div className="text-sm leading-6" aria-live={playing ? "off" : "polite"} aria-atomic="true">
        <p className="text-muted-foreground">{slides[active].caption}</p>
        <a className="inline-flex min-h-11 items-center gap-2 font-medium text-primary underline decoration-brand decoration-2 underline-offset-4 hover:decoration-current" href={slides[active].src} target="_blank" rel="noreferrer">
          {viewAction}<ArrowUpRight className="size-4" aria-hidden="true" />
        </a>
      </div>
      <div className="flex items-center gap-2" role="group" aria-label={controlsLabel}>
        {slides.map((slide, index) => <Button
          key={slide.src}
          variant="ghost"
          className="size-11 rounded-full"
          aria-label={labels.slideLabel.replace("{index}", String(index + 1))}
          aria-current={active === index ? "true" : undefined}
          aria-controls={slideId}
          onClick={() => selectSlide(index)}
        >
          <span className={cn("h-2 rounded-full transition-all motion-reduce:transition-none", active === index ? "w-6 bg-primary" : "w-2 bg-muted-foreground/40")} />
        </Button>)}
        {!reducedMotion && <Button data-playback variant="outline" className="min-h-11 rounded-full" onClick={() => setPaused((current) => !current)} aria-label={playing ? labels.pauseLabel : labels.playLabel}>
          {playing ? <Pause aria-hidden="true" /> : <Play aria-hidden="true" />}
          {playing ? labels.pause : labels.play}
        </Button>}
      </div>
    </div>
  </section>;
}
