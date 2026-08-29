"use client";

import { useEffect, useState } from "react";

const DOWNLOAD_DELAY_SECONDS = 5;

export function DownloadCountdown({ downloadUrl }: { downloadUrl: string }) {
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
      <h1 className="text-3xl font-black tracking-tight sm:text-4xl">
        {seconds > 0 ? `${seconds}초 후 다운로드가 시작됩니다.` : "다운로드를 시작하고 있습니다."}
      </h1>
      <p className="mt-5 max-w-2xl leading-7 text-base-content/65">
        자동으로 시작되지 않으면{" "}
        <a className="link link-primary font-semibold" href={downloadUrl}>설치 파일을 직접 다운로드</a>
        해 주세요.
      </p>
    </div>
  );
}
