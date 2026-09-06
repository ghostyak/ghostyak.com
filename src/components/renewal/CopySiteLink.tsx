"use client";

import { useState } from "react";

export function CopySiteLink({ url, labels }: {
  url: string;
  labels: { copy: string; copied: string; copyFailed: string; copyField: string };
}) {
  const [status, setStatus] = useState<"idle" | "copied" | "failed">("idle");

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url);
      setStatus("copied");
    } catch {
      setStatus("failed");
    }
  }

  return (
    <div>
      <button type="button" className="btn btn-ghost min-h-11 text-inherit" onClick={copyLink}>
        {labels.copy}<span aria-hidden="true">↗</span>
      </button>
      <p className="text-sm" role="status">
        {status === "copied" ? labels.copied : status === "failed" ? labels.copyFailed : ""}
      </p>
      {status === "failed" && (
        <input className="input mt-2 w-full bg-base-100 text-base-content" aria-label={labels.copyField}
          value={url} readOnly onFocus={(event) => event.currentTarget.select()} />
      )}
    </div>
  );
}
