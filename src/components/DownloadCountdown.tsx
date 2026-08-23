"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const DOWNLOAD_DELAY_SECONDS = 10;

type DownloadCountdownProps = {
  downloadUrl: string;
};

export function DownloadCountdown({ downloadUrl }: DownloadCountdownProps) {
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
    <div className="download-countdown" aria-live="polite">
      <h1>Boxes is downloading in {seconds} seconds...</h1>
      <p>
        <a href={downloadUrl}>Click this link</a> if this download did not start
        automatically. Ready to unlock your trial? Get{" "}
        <Link href="/products/boxes/pro">Boxes</Link> today.
      </p>
    </div>
  );
}
