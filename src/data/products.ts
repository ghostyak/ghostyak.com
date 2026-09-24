export type CarouselImage = {
  src: string;
};

// 실제 제품 이미지가 준비되면 이 배열의 src만 교체하면 됩니다.
export const homeSlideMedia = [
  { src: "/images/demo/boxes-screen-01.png" },
  { src: "/images/demo/boxes-screen-02.png" },
] as const satisfies readonly CarouselImage[];

const boxesPreview = {
  src: "/images/demo/boxes-screen-01.png",
  width: 2560,
  height: 1380,
} as const;

export const boxes = {
  name: "Boxes",
  fullName: "Ghostyak Boxes",
  version: "0.3.38",
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
  platform: "Windows 11 · x64",
  url: "https://github.com/ghostyak/folder-history",
  downloadUrl: "https://github.com/ghostyak/folder-history/releases/latest/download/Folder.History_x64-setup.exe",
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
    { src: "/images/demo/CSV search Engine.png", width: 889, height: 484 },
    { src: "/images/demo/CSV search Engine 2.png", width: 879, height: 542 },
  ],
} as const;
