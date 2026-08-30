const ko = {
  metadata: {
    site: {
      title: "GhostYak | 일상을 정리하는 Windows 소프트웨어",
      titleTemplate: "%s | GhostYak",
      description: "GhostYak은 일상의 Windows 작업 공간을 더 단순하고 편리하게 만드는 소프트웨어를 만듭니다.",
    },
    boxes: { title: "Boxes", openGraphTitle: "Ghostyak Boxes | Windows 바탕화면 정리 도구" },
    boxesDownload: { title: "Boxes 다운로드" },
    blog: { title: "블로그", description: "GhostYak 제품 소식과 개발 이야기를 전합니다." },
  },
  header: {
    homeLabel: "GhostYak 홈페이지",
    navigationLabel: "주요 메뉴",
    language: "언어 선택",
    products: "제품",
    blog: "블로그",
  },
  footer: {
    description: "일상의 Windows 작업 공간을 더 단순하게 만드는 소프트웨어.",
    navigationLabel: "푸터 메뉴",
    blog: "블로그",
  },
  carousel: {
    slideLabel: "{index}번째 화면 보기",
    pauseLabel: "자동 회전 일시 정지",
    playLabel: "자동 회전 재생",
    pause: "정지",
    play: "재생",
  },
  home: {
    screenReaderTitle: "GhostYak 소프트웨어",
    hero: {
      regionLabel: "GhostYak 주요 소식",
      controlsLabel: "히어로 화면 선택",
      slides: [
        {
          eyebrow: "GHOSTYAK BOXES",
          title: "바탕화면을, 다시 일할 수 있는 공간으로.",
          description: "흩어진 파일과 바로가기를 목적에 맞는 박스에 모아 한눈에 정리하세요.",
          actionLabel: "제품 둘러보기",
          imageAlt: "Boxes 데모 화면 1",
        },
        {
          eyebrow: "DESKTOP, ORGANIZED",
          title: "필요한 파일을 더 빠르게 찾으세요.",
          description: "업무, 프로젝트, 자주 쓰는 도구를 나만의 방식으로 나누고 바로 꺼내 쓸 수 있습니다.",
          actionLabel: "제품 둘러보기",
          imageAlt: "Boxes 데모 화면 2",
        },
      ],
    },
    products: {
      eyebrow: "GHOSTYAK SOFTWARE",
      heading: "지금 만나볼 수 있는 제품",
      intro: "복잡한 기능보다 매일 마주치는 작은 불편을 해결하는 데 집중합니다.",
      freeBadge: "무료",
      viewAction: "제품 둘러보기",
    },
    blog: {
      eyebrow: "BLOG",
      heading: "만들고 있는 것에 대한 기록",
      intro: "제품 소식과 개발 이야기를 GhostYak 블로그에서 전합니다.",
      viewAction: "블로그 보기",
    },
  },
  boxes: {
    description: "Windows 바탕화면의 파일, 폴더와 바로가기를 유연한 박스에 모아 정리하는 데스크톱 도구입니다.",
    tagline: "흩어진 바탕화면을 한눈에 정리하세요.",
    downloadAction: "무료 다운로드",
    screenshotAlts: ["Boxes 데모 화면 1", "Boxes 데모 화면 2"],
    carousel: { regionLabel: "Boxes 화면 미리보기", controlsLabel: "제품 화면 선택" },
    features: {
      label: "주요 기능",
      heading: "정리에 필요한 핵심만 담았습니다.",
      items: [
        { title: "박스로 한눈에 정리", description: "관련된 파일, 폴더와 바로가기를 목적별 박스에 모아 필요한 항목을 빠르게 찾습니다." },
        { title: "내 작업 방식에 맞게", description: "박스의 위치와 크기를 자유롭게 조절하고 필요할 때 접어 바탕화면 공간을 확보합니다." },
        { title: "원본 파일은 그대로", description: "원본 위치를 바꾸지 않고 바로가기로 정리하므로 기존 폴더 구조를 안전하게 유지합니다." },
      ],
    },
    availabilityNotice: "현재는 무료 버전만 제공합니다. 상업용 에디션은 준비가 완료된 뒤 별도로 안내할 예정입니다.",
    download: {
      breadcrumbLabel: "현재 위치",
      breadcrumbCurrent: "다운로드",
      waitNotice: "브라우저에서 설치 파일 다운로드가 시작될 때까지 이 페이지를 열어 두세요.",
      fileInfoLabel: "설치 파일 정보",
      version: "버전 {version}",
      fileSize: "약 3.3MB",
      requirement: "Microsoft Edge WebView2 Runtime 필요",
      countdown: "{seconds}초 후 다운로드가 시작됩니다.",
      starting: "다운로드를 시작하고 있습니다.",
      help: "자동 다운로드가 시작되지 않았나요?",
      directAction: "설치 파일 직접 다운로드",
    },
  },
  blog: {
    eyebrow: "GHOSTYAK BLOG",
    heading: "블로그",
    intro: "제품 소식과 개발 과정에서 배운 것을 기록합니다.",
    readMore: "글 읽기",
    breadcrumbLabel: "현재 위치",
    breadcrumbHome: "블로그",
  },
} as const;

export default ko;
