import { boxes } from "@/data/products";

// Shared main preview.
export const landingMedia = {
  desktop: boxes.preview,
} as const;

export const landingLinks = {
  alternativeTo: "https://alternativeto.net/software/ghostyak-boxes/about/",
  release: "https://github.com/ghostyak/boxes/releases/latest",
  feedback: "https://github.com/ghostyak/boxes/issues",
  webview: "https://developer.microsoft.com/en-us/microsoft-edge/webview2/#download",
  site: "https://www.ghostyak.com/",
} as const;
