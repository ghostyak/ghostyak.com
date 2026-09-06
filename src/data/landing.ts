// Fixed instants for illustrations, never presented as live clocks.
export const landingTimes = {
  worldClock: "2026-09-05T02:38:00Z",
  zones: ["Asia/Seoul", "Europe/London"],
} as const;

// Product screenshot uploaded by the owner to AlternativeTo; see docs/RENEWAL_KO.md.
export const landingMedia = {
  desktop: { src: "/images/renewal/boxes-desktop.webp", width: 1200, height: 653 },
} as const;

export const landingLinks = {
  alternativeTo: "https://alternativeto.net/software/ghostyak-boxes/about/",
  release: "https://github.com/ghostyak/boxes/releases/latest",
  feedback: "https://github.com/ghostyak/boxes/issues",
  webview: "https://developer.microsoft.com/en-us/microsoft-edge/webview2/#download",
  site: "https://www.ghostyak.com/",
} as const;
