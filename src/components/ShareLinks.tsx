"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { SiFacebook, SiInstagram, SiThreads, SiX } from "@icons-pack/react-simple-icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export type ShareLabels = {
  heading: string;
  copyLink: string;
  copied: string;
  copyFailed: string;
  copyField: string;
  x: string;
  facebook: string;
  linkedin: string;
  instagram: string;
  threads: string;
};

function SocialIcon({ network }: { network: "x" | "facebook" | "linkedin" | "instagram" | "threads" }) {
  const iconProps = { size: 20, className: "size-5", "aria-hidden": true as const, title: "" };
  if (network === "x") return <SiX {...iconProps} />;
  if (network === "facebook") return <SiFacebook {...iconProps} />;
  if (network === "instagram") return <SiInstagram {...iconProps} />;
  if (network === "threads") return <SiThreads {...iconProps} />;

  // Simple Icons removed LinkedIn in v14 following its restrictive brand guidelines.
  return <svg viewBox="0 0 24 24" className="size-5 fill-current" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.47-.9 1.63-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.55V9h3.57v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.23 0Z" /></svg>;
}

export function ShareLinks({ pageUrl, pageTitle, labels }: { pageUrl: string; pageTitle: string; labels: ShareLabels }) {
  const [status, setStatus] = useState<"idle" | "copied" | "failed">("idle");
  const encodedUrl = encodeURIComponent(pageUrl);
  const encodedTitle = encodeURIComponent(pageTitle);
  const links = [
    { key: "x", label: labels.x, href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}` },
    { key: "facebook", label: labels.facebook, href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}` },
    { key: "linkedin", label: labels.linkedin, href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}` },
    { key: "threads", label: labels.threads, href: `https://www.threads.com/intent/post?text=${encodedTitle}&url=${encodedUrl}` },
  ] as const;

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(pageUrl);
      setStatus("copied");
    } catch {
      setStatus("failed");
    }
  }

  async function shareToInstagram() {
    if (typeof navigator.share === "function") {
      try {
        await navigator.share({ title: pageTitle, text: pageTitle, url: pageUrl });
      } catch (error) {
        if (error instanceof Error && error.name === "AbortError") return;
        await copyLink();
      }
      return;
    }
    await copyLink();
  }

  return <section className="border-t border-current/15 pt-5" aria-label={labels.heading}>
    <p className="mb-3 text-sm font-medium">{labels.heading}</p>
    <div className="flex flex-wrap items-center gap-2">
      {links.map(({ key, label, href }) => <a key={key} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label} className="inline-flex size-11 items-center justify-center rounded-full border border-current/20 bg-transparent text-current transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
        <SocialIcon network={key} />
      </a>)}
      <button type="button" onClick={shareToInstagram} aria-label={labels.instagram} title={labels.instagram} className="inline-flex size-11 items-center justify-center rounded-full border border-current/20 bg-transparent text-current transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"><SocialIcon network="instagram" /></button>
      <Button type="button" variant="ghost" className="min-h-11 gap-2 text-inherit" onClick={copyLink}>
        {status === "copied" ? <Check className="size-4" aria-hidden="true" /> : <Copy className="size-4" aria-hidden="true" />}
        {labels.copyLink}
      </Button>
    </div>
    <p role="status" className="mt-2 text-sm text-muted-foreground">{status === "copied" ? labels.copied : status === "failed" ? labels.copyFailed : ""}</p>
    {status === "failed" && <Input className="mt-2 min-h-11 max-w-xl bg-background" aria-label={labels.copyField} value={pageUrl} readOnly onFocus={(event) => event.currentTarget.select()} />}
  </section>;
}
