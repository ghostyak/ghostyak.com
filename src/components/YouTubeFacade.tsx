"use client";

import { Play } from "lucide-react";
import { useState, type MouseEvent, type ReactNode } from "react";

// Keeps the framed poster until the visitor presses play, so loading the page sends nothing to YouTube.
// The link still opens the video without JavaScript and on modified clicks.
export function YouTubeFacade({ videoId, title, playLabel, children }: { videoId: string; title: string; playLabel: string; children: ReactNode }) {
  const [playing, setPlaying] = useState(false);

  function play(event: MouseEvent<HTMLAnchorElement>) {
    if (event.ctrlKey || event.metaKey || event.shiftKey) return;
    event.preventDefault();
    setPlaying(true);
  }

  if (playing) {
    return <div className="relative">
      {children}
      <div className="absolute inset-1.5 overflow-hidden rounded-xl bg-black sm:inset-2">
        <iframe ref={(frame) => frame?.focus()} className="size-full" src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&playsinline=1`} title={title} allow="autoplay; encrypted-media; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
      </div>
    </div>;
  }

  return <a className="group relative block rounded-2xl" href={`https://www.youtube.com/watch?v=${videoId}`} target="_blank" rel="noreferrer" aria-label={playLabel} onClick={play}>
    {children}
    <span className="absolute inset-0 flex items-end justify-center px-4 pb-[2%] sm:pb-[5%]">
      <span className="flex min-h-11 min-w-11 items-center justify-center gap-2.5 rounded-full bg-brand text-base font-semibold text-ink shadow-xl shadow-ink/30 transition-transform group-hover:scale-105 sm:min-h-14 sm:min-w-14 sm:px-7"><Play className="size-5 shrink-0 fill-current" aria-hidden="true" /><span className="hidden sm:inline">{playLabel}</span></span>
    </span>
  </a>;
}
