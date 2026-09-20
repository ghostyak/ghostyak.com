"use client";

import { useState } from "react";
import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

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
      <Button type="button" variant="ghost" className="h-auto min-h-11 max-w-full whitespace-normal text-inherit" onClick={copyLink}>
        <Copy className="size-4" aria-hidden="true" />{labels.copy}
      </Button>
      <p className="text-sm" role="status">
        {status === "copied" ? labels.copied : status === "failed" ? labels.copyFailed : ""}
      </p>
      {status === "failed" && (
        <Input className="mt-2 min-h-11 w-full bg-background" aria-label={labels.copyField}
          value={url} readOnly onFocus={(event) => event.currentTarget.select()} />
      )}
    </div>
  );
}
