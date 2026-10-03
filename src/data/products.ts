export type CarouselImage = {
  src: string;
};

const boxesPreview = {
  src: "/images/boxes/ghostyak-boxes-3840x2160.png",
  width: 3840,
  height: 2160,
} as const;

export const boxesIcon = "/images/boxes/ghostyak-boxes.ico";

export const boxes = {
  name: "Boxes",
  fullName: "Ghostyak Boxes",
  platform: "Windows 10/11",
  preview: boxesPreview,
  download: {
    pagePath: "/product/boxes/download",
    installerUrl:
      "https://github.com/ghostyak/boxes/releases/latest/download/GhostyakBoxes-setup.exe",
  },
  screenshots: [
    boxesPreview,
  ] satisfies readonly CarouselImage[],
} as const;

export const clock = {
  name: "Clock",
  url: "https://clock.ghostyak.com/",
} as const;

export const osints = {
  name: "OSINTS",
  url: "https://osints.ghostyak.com/",
} as const;

export const folderHistory = {
  name: "Folder History",
  pagePath: "/product/folder-history",
  platform: "Windows 11 · x64 / ARM64",
  url: "https://github.com/ghostyak/folder-history",
  downloadUrl: "https://github.com/ghostyak/folder-history/releases/latest/download/Folder.History_x64-setup.exe",
  arm64DownloadUrl: "https://github.com/ghostyak/folder-history/releases/latest/download/Folder.History_arm64-setup.exe",
  screenshots: [
    { src: "/images/folder-history/folder-history-main.png", width: 1082, height: 604 },
    { src: "/images/folder-history/folder-history-ignore-rule.png", width: 1082, height: 604 },
    { src: "/images/folder-history/folder-history-setting.png", width: 1082, height: 604 },
  ],
} as const;

export const csvSearchEngine = {
  name: "CSV Search Engine",
  pagePath: "/product/csv-search-engine",
  url: "https://github.com/ghostyak/csv-search-engine",
  downloadUrl: "https://github.com/ghostyak/csv-search-engine/releases/latest/download/csv-search-engine-setup.exe",
  platform: "Windows · x64",
  screenshots: [
    { src: "/images/csv-search-Engine/CSV search Engine.png", width: 889, height: 484 },
    { src: "/images/csv-search-Engine/CSV search Engine 2.png", width: 879, height: 542 },
  ],
} as const;
