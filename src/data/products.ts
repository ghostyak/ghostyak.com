export const boxes = {
  name: "Ghostyak Boxes",
  version: "0.3.24",
  platform: "Windows 10/11",
  fileSize: "약 3.3MB",
  requirement: "Microsoft Edge WebView2 Runtime 필요",
  description:
    "Windows 바탕화면의 파일과 바로가기를 박스 단위로 묶어 정리하는 데스크톱 도구",
  editions: [
    {
      id: "community",
      label: "계속 무료",
      name: "Community",
      description:
        "핵심 정리 기능을 부담 없이 오래 사용하고 싶은 분께 알맞습니다.",
      highlights: [
        "기간 제한 없이 사용",
        "박스 최대 3개",
        "박스마다 아이콘 수 제한 없음",
        "설정 백업·복원과 내보내기 제공",
      ],
      downloadLabel: "Community 다운로드",
      productUrl: "/products/boxes/community",
      downloadPageUrl: "/products/boxes/community/download",
      downloadUrl:
        "https://github.com/ghostyak/boxes/releases/download/v0.3.23/GhostyakBoxes-0.3.23-free-setup.exe",
    },
    {
      id: "pro",
      label: "30일 체험",
      name: "Pro",
      description:
        "더 많은 박스와 Pro 기능을 충분히 경험한 뒤 선택할 수 있습니다.",
      highlights: [
        "설치 후 30일 동안 사용",
        "박스 수 제한 없음",
        "현재 제공되는 Pro 기능 포함",
        "인터넷 연결과 계정 로그인 없이 체험",
      ],
      downloadLabel: "Try Free 다운로드 (Pro 버전)",
      productUrl: "/products/boxes/pro",
      downloadPageUrl: "/products/boxes/pro/download",
      downloadUrl:
        "https://github.com/ghostyak/boxes/releases/download/v0.3.23/GhostyakBoxes-0.3.23-trial-setup.exe",
    },
  ],
} as const;
