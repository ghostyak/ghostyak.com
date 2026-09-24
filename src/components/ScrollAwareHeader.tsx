"use client";

import { useEffect, useState, type ReactNode } from "react";

export function ScrollAwareHeader({ children }: { children: ReactNode }) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let previousY = window.scrollY;
    let frame = 0;

    const update = () => {
      const currentY = window.scrollY;
      const delta = currentY - previousY;

      if (currentY < 80) setHidden(false);
      else if (Math.abs(delta) > 5) setHidden(delta > 0);

      previousY = currentY;
      frame = 0;
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return <>
    <div className={`fixed inset-x-0 top-0 z-50 transition-transform duration-300 ease-out motion-reduce:transition-none ${hidden ? "-translate-y-full" : "translate-y-0"}`}>
      {children}
    </div>
    <div aria-hidden="true" className="h-16 sm:h-20" />
  </>;
}
