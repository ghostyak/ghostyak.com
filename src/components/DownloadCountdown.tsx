"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const DOWNLOAD_DELAY_SECONDS = 10;

type DownloadCountdownProps = {
  downloadUrl: string;
  proUrl?: string;
};

export function DownloadCountdown({ downloadUrl, proUrl = "/products/boxes/pro" }: DownloadCountdownProps) {
  const [seconds, setSeconds] = useState(DOWNLOAD_DELAY_SECONDS);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setSeconds((current) => Math.max(0, current - 1));
    }, 1000);
    const downloadId = window.setTimeout(() => {
      window.clearInterval(intervalId);
      window.location.assign(downloadUrl);
    }, DOWNLOAD_DELAY_SECONDS * 1000);

    return () => {
      window.clearInterval(intervalId);
      window.clearTimeout(downloadId);
    };
  }, [downloadUrl]);

  return (
    <div aria-live="polite">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Boxes is downloading in {seconds} seconds...</h1>
      <p className="mt-5 max-w-2xl leading-7 text-base-content/70">
        <a className="link link-primary font-semibold" href={downloadUrl}>Click this link</a> if this download did not start
        automatically. Ready to unlock your trial? Get{" "}
        <Link className="link link-primary font-semibold" href={proUrl}>Boxes</Link> today.
      </p>
    </div>
  );
}
