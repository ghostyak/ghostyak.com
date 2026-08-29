export type CarouselImage = {
  src: string;
  alt: string;
};

export type HeroSlide = CarouselImage & {
  eyebrow: string;
  title: string;
  description: string;
  actionLabel: string;
  actionHref: string;
};

// 실제 제품 이미지가 준비되면 이 배열의 src만 교체하면 됩니다.
export const homeSlides: readonly HeroSlide[] = [
  {
    eyebrow: "GHOSTYAK BOXES",
    title: "바탕화면을, 다시 일할 수 있는 공간으로.",
    description: "흩어진 파일과 바로가기를 목적에 맞는 박스에 모아 한눈에 정리하세요.",
    actionLabel: "제품 둘러보기",
    actionHref: "/product/boxes",
    src: "/images/demo/boxes-screen-01.svg",
    alt: "Boxes 교체용 데모 화면 1",
  },
  {
    eyebrow: "DESKTOP, ORGANIZED",
    title: "필요한 파일을 더 빠르게 찾으세요.",
    description: "업무, 프로젝트, 자주 쓰는 도구를 나만의 방식으로 나누고 바로 꺼내 쓸 수 있습니다.",
    actionLabel: "제품 둘러보기",
    actionHref: "/product/boxes",
    src: "/images/demo/boxes-screen-02.svg",
    alt: "Boxes 교체용 데모 화면 2",
  },
  {
    eyebrow: "FREE TO START",
    title: "Boxes는 지금 무료로 시작할 수 있습니다.",
    description: "상업용 에디션은 준비 중입니다. 현재 제공되는 무료 버전으로 먼저 만나보세요.",
    actionLabel: "제품 둘러보기",
    actionHref: "/product/boxes",
    src: "/images/demo/boxes-screen-03.svg",
    alt: "Boxes 교체용 데모 화면 3",
  },
] as const;

export const boxes = {
  name: "Boxes",
  fullName: "Ghostyak Boxes",
  version: "0.3.24",
  platform: "Windows 10/11",
  fileSize: "약 3.3MB",
  requirement: "Microsoft Edge WebView2 Runtime 필요",
  description:
    "Windows 바탕화면의 파일, 폴더와 바로가기를 유연한 박스에 모아 정리하는 데스크톱 도구입니다.",
  tagline: "흩어진 바탕화면을 한눈에 정리하세요.",
  download: {
    label: "무료 다운로드",
    pageUrl: "/product/boxes/download",
    installerUrl:
      "https://github.com/ghostyak/boxes/releases/latest/download/GhostyakBoxes-setup.exe",
  },
  screenshots: [
    { src: "/images/demo/boxes-screen-01.svg", alt: "Boxes 교체용 데모 화면 1" },
    { src: "/images/demo/boxes-screen-02.svg", alt: "Boxes 교체용 데모 화면 2" },
    { src: "/images/demo/boxes-screen-03.svg", alt: "Boxes 교체용 데모 화면 3" },
  ] satisfies readonly CarouselImage[],
  features: [
    {
      title: "박스로 한눈에 정리",
      description: "관련된 파일, 폴더와 바로가기를 목적별 박스에 모아 필요한 항목을 빠르게 찾습니다.",
    },
    {
      title: "내 작업 방식에 맞게",
      description: "박스의 위치와 크기를 자유롭게 조절하고 필요할 때 접어 바탕화면 공간을 확보합니다.",
    },
    {
      title: "원본 파일은 그대로",
      description: "원본 위치를 바꾸지 않고 바로가기로 정리하므로 기존 폴더 구조를 안전하게 유지합니다.",
    },
  ],
} as const;
