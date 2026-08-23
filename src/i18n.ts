export const locales = ["ko", "en", "ja", "zh"] as const;

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
      languageLabel: "언어",
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
      socials: "GhostYak 소셜 미디어",
      blog: "GhostYak 블로그",
      instagram: "GhostYak 인스타그램",
      threads: "GhostYak 스레드",
      github: "GhostYak 깃허브",
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
      languageLabel: "Language",
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
      socials: "GhostYak social media",
      blog: "GhostYak blog",
      instagram: "GhostYak Instagram",
      threads: "GhostYak Threads",
      github: "GhostYak GitHub",
    },
  },
  ja: {
    metadata: {
      title: "Ghostyak Boxes | Windowsデスクトップ整理ソフト",
      description: "Windowsデスクトップのファイル、フォルダー、ショートカットをボックスごとにすっきり整理。Ghostyak Boxes Freeまたは30日間のPro体験版をダウンロードできます。",
      keywords: ["Ghostyak Boxes", "Windows デスクトップ整理", "デスクトップ整理", "ファイル整理ソフト", "デスクトップアイコン整理", "Windows 11", "Windows 10"],
      imageAlt: "Ghostyak Boxesでファイルとアプリをボックスごとに整理したWindowsデスクトップ",
    },
    header: { homeLabel: "ghostyak.com ホーム", navLabel: "メインメニュー", features: "主な機能", download: "ダウンロード", languageLabel: "言語" },
    hero: {
      heading: "必要なファイルがひと目で見つかるデスクトップ",
      intro: "散らばったファイルやショートカットを、自分だけのボックスにまとめましょう。",
      action: "FreeとProを比較",
      previewTitle: "初期開発版",
      previewText: "大切なデスクトップ環境で使う前に、別のWindowsユーザー環境でお試しください。",
    },
    download: {
      label: "ダウンロード", versionLabel: "バージョン", fileSize: "約3.3 MB", requirement: "Microsoft Edge WebView2 Runtimeが必要",
      heading: "あなたに合うBoxesを選んで始めましょう。",
      intro: "基本機能をずっと無料で使うか、ボックス数が無制限のProを30日間体験できます。",
      detailsLabel: "ダウンロード情報",
      trialNote: "Pro体験期間が終了するとFreeに切り替わり、既存のボックスとファイルはそのまま保持されます。",
      editions: [
        { id: "free", label: "ずっと無料", name: "Free", description: "基本的な整理機能を期限なく使いたい方に最適です。", highlights: ["利用期限なし", "ボックスは最大3個", "各ボックスのアイコン数は無制限", "設定のバックアップ・復元・エクスポート"], downloadLabel: "Freeをダウンロード" },
        { id: "trial", label: "30日間体験", name: "Pro体験版", description: "無制限のボックスとPro機能を十分に試してから選べます。", highlights: ["インストール後30日間利用可能", "ボックス数は無制限", "現在提供中のPro機能を搭載", "インターネット接続・ログイン不要"], downloadLabel: "Pro体験版をダウンロード" },
      ],
    },
    features: {
      label: "主な機能", heading: "ファイルをひとまとめにして、必要なときにすぐ見つける。",
      items: [
        { title: "ボックスで整理", description: "ファイル、フォルダー、ショートカットを目的別のボックスに分け、ひと目で見つけられます。" },
        { title: "自分らしく配置", description: "ボックスを移動・サイズ変更し、折りたたみやロックで必要なスペースだけを残せます。" },
        { title: "画面構成ごとに復元", description: "モニター構成に合わせてボックスの位置とサイズを記憶し、使い慣れた作業環境を保ちます。" },
        { title: "フォトビューアー", description: "ボックスやフォルダー内の写真をスライドショーで表示し、切り替え間隔や順序を設定できます。" },
      ],
    },
    footer: { socials: "GhostYak ソーシャルメディア", blog: "GhostYak ブログ", instagram: "GhostYak Instagram", threads: "GhostYak Threads", github: "GhostYak GitHub" },
  },
  zh: {
    metadata: {
      title: "Ghostyak Boxes | Windows 桌面整理工具",
      description: "将 Windows 桌面上的文件、文件夹和快捷方式整齐归入不同收纳框。下载 Ghostyak Boxes Free，或免费试用 Pro 版 30 天。",
      keywords: ["Ghostyak Boxes", "Windows 桌面整理", "桌面整理", "文件整理工具", "桌面图标整理", "Windows 11", "Windows 10"],
      imageAlt: "使用 Ghostyak Boxes 将文件和应用按收纳框分类的 Windows 桌面",
    },
    header: { homeLabel: "ghostyak.com 首页", navLabel: "主菜单", features: "主要功能", download: "下载", languageLabel: "语言" },
    hero: {
      heading: "需要的文件，一眼就能找到",
      intro: "把散落的文件和快捷方式收进专属收纳框。",
      action: "比较 Free 与 Pro",
      previewTitle: "早期开发版本",
      previewText: "用于重要桌面环境前，请先在单独的 Windows 用户环境中测试。",
    },
    download: {
      label: "下载", versionLabel: "版本", fileSize: "约 3.3 MB", requirement: "需要 Microsoft Edge WebView2 Runtime",
      heading: "选择适合你的 Boxes 版本。",
      intro: "永久免费使用核心功能，或体验 30 天不限收纳框数量的 Pro 版本。",
      detailsLabel: "下载信息",
      trialNote: "Pro 试用期结束后将切换为 Free，现有收纳框和文件都会保留。",
      editions: [
        { id: "free", label: "永久免费", name: "Free", description: "适合希望长期免费使用核心整理功能的用户。", highlights: ["无使用期限", "最多 3 个收纳框", "每个收纳框的图标数量不限", "支持设置备份、恢复与导出"], downloadLabel: "下载 Free" },
        { id: "trial", label: "试用 30 天", name: "Pro 试用版", description: "充分体验不限数量的收纳框与 Pro 功能后再做选择。", highlights: ["安装后可使用 30 天", "收纳框数量不限", "包含当前提供的 Pro 功能", "无需联网或登录账户"], downloadLabel: "下载 Pro 试用版" },
      ],
    },
    features: {
      label: "主要功能", heading: "文件集中整理，需要时立即找到。",
      items: [
        { title: "按收纳框整理", description: "按用途将文件、文件夹和快捷方式放入不同收纳框，一眼即可找到。" },
        { title: "按你的方式布局", description: "移动或调整收纳框大小，并通过折叠和锁定只保留所需空间。" },
        { title: "适配不同屏幕布局", description: "根据显示器配置记住收纳框的位置和大小，始终保持熟悉的工作环境。" },
        { title: "照片查看器", description: "以幻灯片方式浏览收纳框或文件夹中的照片，并自定义切换间隔和顺序。" },
      ],
    },
    footer: { socials: "GhostYak 社交媒体", blog: "GhostYak 博客", instagram: "GhostYak Instagram", threads: "GhostYak Threads", github: "GhostYak GitHub" },
  },
} as const;

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}
