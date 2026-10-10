"use client";

import { useEffect, useState } from "react";
import { Mail } from "lucide-react";
import { contactEmailCodes, contactEmailShift } from "@/data/contact";

const presenceEvents = ["pointermove", "pointerdown", "touchstart", "keydown", "scroll"] as const;

// Renders nothing on the server. The address is decoded only after the first
// sign of a real visitor, so scrapers that read the HTML or just run the page
// script never see it.
export function ContactEmail({ className }: { className?: string }) {
  const [address, setAddress] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const reveal = () => {
      setAddress(contactEmailCodes.map(code => String.fromCharCode(code - contactEmailShift)).reverse().join(""));
      controller.abort();
    };
    for (const name of presenceEvents) window.addEventListener(name, reveal, { passive: true, signal: controller.signal });
    return () => controller.abort();
  }, []);

  if (!address) return null;
  return <a className={className} href={`mailto:${address}`}><Mail className="size-3" aria-hidden="true" />{address}</a>;
}
