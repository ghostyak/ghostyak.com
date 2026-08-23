export const locales = ["ko", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "ko";

export function isLocale(value: string): value is Locale {
  return locales.some((locale) => locale === value);
}

const dictionaries = {
  ko: {
    metadata: {
      title: "Ghostyak Boxes | Windows 바탕화면 정리 프로그램",
      description:
        "Windows 바탕화면의 파일, 폴더와 바로가기를 박스별로 깔끔하게 정리하세요. Ghostyak Boxes Free와 30일 Pro 평가판을 다운로드할 수 있습니다.",
      keywords: [
        "Ghostyak Boxes",
        "Windows 바탕화면 정리",
        "데스크톱 정리",
        "파일 정리 프로그램",
        "바탕화면 아이콘 정리",
        "Windows 11",
        "Windows 10",
      ],
      imageAlt:
        "Ghostyak Boxes로 파일과 앱을 박스별로 정리한 Windows 바탕화면",
    },
    header: {
      homeLabel: "ghostyak.com 홈",
      navLabel: "주요 메뉴",
      features: "주요 기능",
      download: "다운로드",
      languageLabel: "English",
    },
    hero: {
      heading: "필요한 파일이 한눈에 보이는 바탕화면",
      intro: "흩어진 파일과 바로가기를 나만의 박스에 모아보세요.",
      action: "Free와 Pro 비교하기",
      previewTitle: "초기 개발 버전",
      previewText:
        "중요한 바탕화면 구성에서는 별도의 Windows 사용자 환경에서 먼저 시험해 주세요.",
    },
    download: {
      label: "다운로드",
      versionLabel: "버전",
      fileSize: "약 3.3MB",
      requirement: "Microsoft Edge WebView2 Runtime 필요",
      heading: "내게 맞는 Boxes로 시작하세요.",
      intro:
        "핵심 기능을 계속 무료로 사용하거나, 30일 동안 박스 수 제한 없는 Pro 환경을 경험할 수 있습니다.",
      detailsLabel: "다운로드 정보",
      trialNote:
        "Pro 평가가 끝나면 Free로 전환되며, 기존 박스와 파일은 그대로 유지됩니다.",
      editions: [
        {
          id: "free",
          label: "계속 무료",
          name: "Free",
          description:
            "핵심 정리 기능을 부담 없이 오래 사용하고 싶은 분께 알맞습니다.",
          highlights: [
            "기간 제한 없이 사용",
            "박스 최대 3개",
            "박스마다 아이콘 수 제한 없음",
            "설정 백업·복원과 내보내기 제공",
          ],
          downloadLabel: "Free 다운로드",
        },
        {
          id: "trial",
          label: "30일 체험",
          name: "Pro 평가판",
          description:
            "더 많은 박스와 Pro 기능을 충분히 경험한 뒤 선택할 수 있습니다.",
          highlights: [
            "설치 후 30일 동안 사용",
            "박스 수 제한 없음",
            "현재 제공되는 Pro 기능 포함",
            "인터넷 연결과 계정 로그인 없이 체험",
          ],
          downloadLabel: "Pro 평가판 다운로드",
        },
      ],
    },
    features: {
      label: "주요 기능",
      heading: "파일은 한곳에 모으고, 필요한 순간 바로 찾으세요.",
      items: [
        {
          title: "박스 단위로 정리",
          description:
            "파일, 폴더와 바로가기를 목적에 맞는 여러 박스로 나누어 한눈에 찾을 수 있습니다.",
        },
        {
          title: "내 방식대로 배치",
          description:
            "박스를 이동하거나 크기를 조절하고, 접기와 잠금으로 필요한 공간만 남길 수 있습니다.",
        },
        {
          title: "화면 구성별 복원",
          description:
            "모니터 구성에 맞춰 박스의 위치와 크기를 기억해 익숙한 작업 환경을 유지합니다.",
        },
        {
          title: "사진 뷰어",
          description:
            "박스 안의 사진과 폴더 속 이미지를 슬라이드쇼로 감상하고 전환 간격과 순서를 설정할 수 있습니다.",
        },
      ],
    },
    footer: {
      github: "GitHub에서 Boxes 보기",
    },
  },
  en: {
    metadata: {
      title: "Ghostyak Boxes | Windows Desktop Organizer",
      description:
        "Organize files, folders, and shortcuts on your Windows desktop into tidy boxes. Download Ghostyak Boxes Free or try Pro free for 30 days.",
      keywords: [
        "Ghostyak Boxes",
        "Windows desktop organizer",
        "desktop organization",
        "file organizer",
        "desktop icon organizer",
        "Windows 11",
        "Windows 10",
      ],
      imageAlt:
        "A Windows desktop with files and apps organized into Ghostyak Boxes",
    },
    header: {
      homeLabel: "ghostyak.com home",
      navLabel: "Main navigation",
      features: "Features",
      download: "Download",
      languageLabel: "한국어",
    },
    hero: {
      heading: "A desktop where every file is easy to find",
      intro: "Gather scattered files and shortcuts into boxes of your own.",
      action: "Compare Free and Pro",
      previewTitle: "Early development release",
      previewText:
        "Test it in a separate Windows user environment before using it with an important desktop setup.",
    },
    download: {
      label: "Download",
      versionLabel: "Version",
      fileSize: "Approx. 3.3 MB",
      requirement: "Requires Microsoft Edge WebView2 Runtime",
      heading: "Start with the Boxes edition that fits you.",
      intro:
        "Keep using the essential features for free, or try unlimited boxes and Pro features for 30 days.",
      detailsLabel: "Download information",
      trialNote:
        "After the Pro trial ends, Boxes switches to Free while keeping your existing boxes and files.",
      editions: [
        {
          id: "free",
          label: "Free forever",
          name: "Free",
          description:
            "For anyone who wants the essential organization tools without a time limit.",
          highlights: [
            "No time limit",
            "Up to 3 boxes",
            "Unlimited icons in each box",
            "Settings backup, restore, and export",
          ],
          downloadLabel: "Download Free",
        },
        {
          id: "trial",
          label: "30-day trial",
          name: "Pro trial",
          description:
            "Explore unlimited boxes and Pro features before deciding.",
          highlights: [
            "Use for 30 days after installation",
            "Unlimited boxes",
            "Includes currently available Pro features",
            "No internet connection or account required",
          ],
          downloadLabel: "Download Pro trial",
        },
      ],
    },
    features: {
      label: "Features",
      heading: "Keep files together and find them when you need them.",
      items: [
        {
          title: "Organize with boxes",
          description:
            "Group files, folders, and shortcuts into boxes by purpose so everything is easy to find.",
        },
        {
          title: "Arrange your way",
          description:
            "Move and resize boxes, then collapse or lock them to keep only the space you need.",
        },
        {
          title: "Restore each display setup",
          description:
            "Boxes remembers positions and sizes for your monitor configuration, preserving a familiar workspace.",
        },
        {
          title: "Photo viewer",
          description:
            "View photos in a box or folder as a slideshow and customize the interval and order.",
        },
      ],
    },
    footer: {
      github: "View Boxes on GitHub",
    },
  },
} as const;

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}
