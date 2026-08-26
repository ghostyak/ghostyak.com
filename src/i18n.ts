import type { Locale } from "@/locales";

export { defaultLocale, isLocale, locales } from "@/locales";
export type { Locale } from "@/locales";

const dictionaries = {
  ko: {
    metadata: {
      title: "Ghostyak Boxes | Windows 바탕화면 정리 프로그램",
      description:
        "Windows 바탕화면의 파일, 폴더와 바로가기를 박스별로 깔끔하게 정리하세요. Ghostyak Boxes Community와 30일 Pro 평가판을 다운로드할 수 있습니다.",
      keywords: [
        "Ghostyak Boxes",
        "Windows 바탕화면 정리",
        "데스크톱 정리",
        "파일 정리 프로그램",
        "바탕화면 아이콘 정리",
        "Windows 11",
        "Windows 10",
      ],
      imageAlt: "Ghostyak Boxes로 파일과 앱을 박스별로 정리한 Windows 바탕화면",
    },
    header: {
      homeLabel: "ghostyak.com 홈",
      navLabel: "주요 메뉴",
      products: "제품",
      features: "주요 기능",
      download: "다운로드",
      languageLabel: "언어",
    },
    hero: {
      heading: "필요한 파일이 한눈에 보이는 바탕화면",
      intro: "흩어진 파일과 바로가기를 나만의 박스에 모아보세요.",
      action: "Community와 Pro 비교하기",
      previewTitle: "초기 개발 버전",
      previewText:
        "중요한 바탕화면 구성에서는 별도의 Windows 사용자 환경에서 먼저 시험해 주세요.",
    },
    download: {
      label: "다운로드",
      versionLabel: "버전",
      fileSize: "약 3.3MB",
      requirement: "Microsoft Edge WebView2 Runtime 필요",
      heading: "Boxes 시작하기",
      intro:
        "Community에서 박스를 제한 없이 무료로 사용하거나, 향후 꾸미기와 위젯 기능을 제공할 Pro를 30일 동안 체험할 수 있습니다.",
      detailsLabel: "다운로드 정보",
      trialNote:
        "Pro 평가가 끝나면 Community로 전환되며, 기존 박스와 파일은 그대로 유지됩니다.",
      editions: [
        {
          id: "community",
          label: "계속 무료",
          name: "Community",
          description:
            "박스 수 제한 없이 핵심 정리 기능을 부담 없이 오래 사용하고 싶은 분께 알맞습니다.",
          highlights: [
            "기간 제한 없이 사용",
            "박스 수 제한 없음",
            "박스마다 아이콘 수 제한 없음",
            "설정 백업·복원과 내보내기 제공",
          ],
          downloadLabel: "Community 다운로드",
        },
        {
          id: "pro",
          label: "30일 체험",
          name: "Pro 평가판",
          description:
            "Pro에는 향후 꾸미기와 위젯 기능이 추가될 예정입니다.",
          highlights: [
            "설치 후 30일 동안 사용",
            "Community의 모든 기능 포함",
            "꾸미기 기능 제공 예정",
            "위젯 기능 제공 예정",
            "인터넷 연결과 계정 로그인 없이 체험",
          ],
          downloadLabel: "Try Free",
        },
      ],
    },
    features: {
      label: "주요 기능",
      heading: "한곳에 모으고, 바로 찾으세요.",
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
        {
          title: "바로가기로 안전하게 정리",
          description:
            "박스에는 원본 대신 바로가기가 등록됩니다. 파일의 실제 위치를 바꾸지 않고도 깔끔하게 분류하고 바로 열 수 있습니다.",
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
        "Organize files, folders, and shortcuts on your Windows desktop into tidy boxes. Download Ghostyak Boxes Community or try Pro free for 30 days.",
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
      products: "Product",
      features: "Features",
      download: "Download",
      languageLabel: "Language",
    },
    hero: {
      heading: "A desktop where every file is easy to find",
      intro: "Gather scattered files and shortcuts into boxes of your own.",
      action: "Compare Community and Pro",
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
        "Use unlimited boxes free with Community, or try Pro for 30 days. Customization and widget features are planned for Pro.",
      detailsLabel: "Download information",
      trialNote:
        "After the Pro trial ends, Boxes switches to Community while keeping your existing boxes and files.",
      editions: [
        {
          id: "community",
          label: "Free forever",
          name: "Community",
          description:
            "For anyone who wants essential organization tools and unlimited boxes without a time limit.",
          highlights: [
            "No time limit",
            "Unlimited boxes",
            "Unlimited icons in each box",
            "Settings backup, restore, and export",
          ],
          downloadLabel: "Download Community",
        },
        {
          id: "pro",
          label: "30-day trial",
          name: "Pro trial",
          description:
            "Customization and widget features are planned for Pro.",
          highlights: [
            "Use for 30 days after installation",
            "Includes all Community features",
            "Customization features planned",
            "Widget features planned",
            "No internet connection or account required",
          ],
          downloadLabel: "Try Pro free",
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
        {
          title: "Organize safely with shortcuts",
          description:
            "Boxes stores shortcuts instead of moving your originals, so you can organize and open files while keeping them in their existing locations.",
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
      description:
        "Windowsデスクトップのファイル、フォルダー、ショートカットをボックスごとにすっきり整理。Ghostyak Boxes Communityまたは30日間のPro体験版をダウンロードできます。",
      keywords: [
        "Ghostyak Boxes",
        "Windows デスクトップ整理",
        "デスクトップ整理",
        "ファイル整理ソフト",
        "デスクトップアイコン整理",
        "Windows 11",
        "Windows 10",
      ],
      imageAlt:
        "Ghostyak Boxesでファイルとアプリをボックスごとに整理したWindowsデスクトップ",
    },
    header: {
      homeLabel: "ghostyak.com ホーム",
      navLabel: "メインメニュー",
      products: "製品",
      features: "主な機能",
      download: "ダウンロード",
      languageLabel: "言語",
    },
    hero: {
      heading: "必要なファイルがひと目で見つかるデスクトップ",
      intro:
        "散らばったファイルやショートカットを、自分だけのボックスにまとめましょう。",
      action: "CommunityとProを比較",
      previewTitle: "初期開発版",
      previewText:
        "大切なデスクトップ環境で使う前に、別のWindowsユーザー環境でお試しください。",
    },
    download: {
      label: "ダウンロード",
      versionLabel: "バージョン",
      fileSize: "約3.3 MB",
      requirement: "Microsoft Edge WebView2 Runtimeが必要",
      heading: "あなたに合うBoxesを選んで始めましょう。",
      intro:
        "Communityではボックス数の制限なく無料で利用できます。Proは30日間体験でき、今後カスタマイズ機能とウィジェット機能を提供予定です。",
      detailsLabel: "ダウンロード情報",
      trialNote:
        "Pro体験期間が終了するとCommunityに切り替わり、既存のボックスとファイルはそのまま保持されます。",
      editions: [
        {
          id: "community",
          label: "ずっと無料",
          name: "Community",
          description:
            "ボックス数の制限なく、基本的な整理機能を期限なく使いたい方に最適です。",
          highlights: [
            "利用期限なし",
            "ボックス数は無制限",
            "各ボックスのアイコン数は無制限",
            "設定のバックアップ・復元・エクスポート",
          ],
          downloadLabel: "Communityをダウンロード",
        },
        {
          id: "pro",
          label: "30日間体験",
          name: "Pro体験版",
          description:
            "Proでは今後、カスタマイズ機能とウィジェット機能を提供予定です。",
          highlights: [
            "インストール後30日間利用可能",
            "Communityの全機能を搭載",
            "カスタマイズ機能を提供予定",
            "ウィジェット機能を提供予定",
            "インターネット接続・ログイン不要",
          ],
          downloadLabel: "Pro体験版をダウンロード",
        },
      ],
    },
    features: {
      label: "主な機能",
      heading: "ファイルをひとまとめにして、必要なときにすぐ見つける。",
      items: [
        {
          title: "ボックスで整理",
          description:
            "ファイル、フォルダー、ショートカットを目的別のボックスに分け、ひと目で見つけられます。",
        },
        {
          title: "自分らしく配置",
          description:
            "ボックスを移動・サイズ変更し、折りたたみやロックで必要なスペースだけを残せます。",
        },
        {
          title: "画面構成ごとに復元",
          description:
            "モニター構成に合わせてボックスの位置とサイズを記憶し、使い慣れた作業環境を保ちます。",
        },
        {
          title: "フォトビューアー",
          description:
            "ボックスやフォルダー内の写真をスライドショーで表示し、切り替え間隔や順序を設定できます。",
        },
        {
          title: "ショートカットで安全に整理",
          description:
            "ボックスには元のファイルではなくショートカットが登録されます。ファイルの保存場所を変えずに整理し、すぐに開けます。",
        },
      ],
    },
    footer: {
      socials: "GhostYak ソーシャルメディア",
      blog: "GhostYak ブログ",
      instagram: "GhostYak Instagram",
      threads: "GhostYak Threads",
      github: "GhostYak GitHub",
    },
  },
  zh: {
    metadata: {
      title: "Ghostyak Boxes | Windows 桌面整理工具",
      description:
        "将 Windows 桌面上的文件、文件夹和快捷方式整齐归入不同收纳框。下载 Ghostyak Boxes Community，或免费试用 Pro 版 30 天。",
      keywords: [
        "Ghostyak Boxes",
        "Windows 桌面整理",
        "桌面整理",
        "文件整理工具",
        "桌面图标整理",
        "Windows 11",
        "Windows 10",
      ],
      imageAlt: "使用 Ghostyak Boxes 将文件和应用按收纳框分类的 Windows 桌面",
    },
    header: {
      homeLabel: "ghostyak.com 首页",
      navLabel: "主菜单",
      products: "产品",
      features: "主要功能",
      download: "下载",
      languageLabel: "语言",
    },
    hero: {
      heading: "需要的文件，一眼就能找到",
      intro: "把散落的文件和快捷方式收进专属收纳框。",
      action: "比较 Community 与 Pro",
      previewTitle: "早期开发版本",
      previewText: "用于重要桌面环境前，请先在单独的 Windows 用户环境中测试。",
    },
    download: {
      label: "下载",
      versionLabel: "版本",
      fileSize: "约 3.3 MB",
      requirement: "需要 Microsoft Edge WebView2 Runtime",
      heading: "选择适合你的 Boxes 版本。",
      intro:
        "Community 可永久免费创建不限数量的收纳框；Pro 可试用 30 天，并计划在未来提供个性化与小组件功能。",
      detailsLabel: "下载信息",
      trialNote:
        "Pro 试用期结束后将切换为 Community，现有收纳框和文件都会保留。",
      editions: [
        {
          id: "community",
          label: "永久免费",
          name: "Community",
          description: "适合希望不限收纳框数量、长期免费使用核心整理功能的用户。",
          highlights: [
            "无使用期限",
            "收纳框数量不限",
            "每个收纳框的图标数量不限",
            "支持设置备份、恢复与导出",
          ],
          downloadLabel: "下载 Community",
        },
        {
          id: "pro",
          label: "试用 30 天",
          name: "Pro 试用版",
          description: "Pro 计划在未来提供个性化与小组件功能。",
          highlights: [
            "安装后可使用 30 天",
            "包含 Community 的全部功能",
            "计划提供个性化功能",
            "计划提供小组件功能",
            "无需联网或登录账户",
          ],
          downloadLabel: "下载 Pro 试用版",
        },
      ],
    },
    features: {
      label: "主要功能",
      heading: "文件集中整理，需要时立即找到。",
      items: [
        {
          title: "按收纳框整理",
          description:
            "按用途将文件、文件夹和快捷方式放入不同收纳框，一眼即可找到。",
        },
        {
          title: "按你的方式布局",
          description: "移动或调整收纳框大小，并通过折叠和锁定只保留所需空间。",
        },
        {
          title: "适配不同屏幕布局",
          description:
            "根据显示器配置记住收纳框的位置和大小，始终保持熟悉的工作环境。",
        },
        {
          title: "照片查看器",
          description:
            "以幻灯片方式浏览收纳框或文件夹中的照片，并自定义切换间隔和顺序。",
        },
        {
          title: "通过快捷方式安全整理",
          description:
            "收纳框中保存的是快捷方式，而不是移动原始文件，因此无需改变文件位置即可整理并快速打开。",
        },
      ],
    },
    footer: {
      socials: "GhostYak 社交媒体",
      blog: "GhostYak 博客",
      instagram: "GhostYak Instagram",
      threads: "GhostYak Threads",
      github: "GhostYak GitHub",
    },
  },
  es: {
    metadata: {
      title: "Ghostyak Boxes | Organizador de escritorio para Windows",
      description:
        "Organiza los archivos, carpetas y accesos directos del escritorio de Windows en cajas ordenadas. Descarga Ghostyak Boxes Community o prueba Pro gratis durante 30 días.",
      keywords: [
        "Ghostyak Boxes",
        "organizador de escritorio para Windows",
        "organización del escritorio",
        "organizador de archivos",
        "organizador de iconos del escritorio",
        "Windows 11",
        "Windows 10",
      ],
      imageAlt:
        "Un escritorio de Windows con archivos y aplicaciones organizados en Ghostyak Boxes",
    },
    header: {
      homeLabel: "Inicio de ghostyak.com",
      navLabel: "Navegación principal",
      products: "Productos",
      features: "Funciones",
      download: "Descargar",
      languageLabel: "Idioma",
    },
    hero: {
      heading: "Un escritorio donde encuentras cada archivo de un vistazo",
      intro:
        "Reúne los archivos y accesos directos dispersos en tus propias cajas.",
      action: "Comparar Community y Pro",
      previewTitle: "Versión inicial en desarrollo",
      previewText:
        "Pruébala primero en otra cuenta de usuario de Windows antes de usarla en un escritorio importante.",
    },
    download: {
      label: "Descargar",
      versionLabel: "Versión",
      fileSize: "Aprox. 3,3 MB",
      requirement: "Requiere Microsoft Edge WebView2 Runtime",
      heading: "Empieza con la edición de Boxes que mejor se adapte a ti.",
      intro:
        "Usa cajas ilimitadas gratis con Community o prueba Pro durante 30 días. Pro incorporará funciones de personalización y widgets en el futuro.",
      detailsLabel: "Información de descarga",
      trialNote:
        "Al terminar la prueba de Pro, Boxes cambia a Community y conserva tus cajas y archivos.",
      editions: [
        {
          id: "community",
          label: "Gratis para siempre",
          name: "Community",
          description:
            "Para quienes quieren las funciones esenciales de organización y cajas ilimitadas sin límite de tiempo.",
          highlights: [
            "Sin límite de tiempo",
            "Cajas ilimitadas",
            "Iconos ilimitados en cada caja",
            "Copia de seguridad, restauración y exportación de ajustes",
          ],
          downloadLabel: "Descargar Community",
        },
        {
          id: "pro",
          label: "Prueba de 30 días",
          name: "Prueba Pro",
          description:
            "Pro incorporará funciones de personalización y widgets en el futuro.",
          highlights: [
            "Uso durante 30 días desde la instalación",
            "Incluye todas las funciones de Community",
            "Funciones de personalización previstas",
            "Funciones de widgets previstas",
            "No requiere conexión a Internet ni una cuenta",
          ],
          downloadLabel: "Descargar la prueba Pro",
        },
      ],
    },
    features: {
      label: "Funciones",
      heading:
        "Mantén tus archivos juntos y encuéntralos cuando los necesites.",
      items: [
        {
          title: "Organiza con cajas",
          description:
            "Agrupa archivos, carpetas y accesos directos en cajas según su propósito para encontrarlos de un vistazo.",
        },
        {
          title: "Organiza a tu manera",
          description:
            "Mueve y cambia el tamaño de las cajas; después, pliégalas o bloquéalas para conservar solo el espacio que necesitas.",
        },
        {
          title: "Restaura cada configuración de pantalla",
          description:
            "Boxes recuerda la posición y el tamaño de las cajas para cada configuración de monitores y mantiene un espacio de trabajo familiar.",
        },
        {
          title: "Visor de fotos",
          description:
            "Muestra como presentación las fotos de una caja o carpeta y personaliza el intervalo y el orden.",
        },
        {
          title: "Organiza de forma segura con accesos directos",
          description:
            "Boxes guarda accesos directos en lugar de mover los archivos originales, para que puedas organizarlos y abrirlos sin cambiar su ubicación.",
        },
      ],
    },
    footer: {
      socials: "Redes sociales de GhostYak",
      blog: "Blog de GhostYak",
      instagram: "Instagram de GhostYak",
      threads: "Threads de GhostYak",
      github: "GitHub de GhostYak",
    },
  },
  de: {
    metadata: {
      title: "Ghostyak Boxes | Desktop-Organizer für Windows",
      description:
        "Ordne Dateien, Ordner und Verknüpfungen auf deinem Windows-Desktop in übersichtlichen Boxen. Lade Ghostyak Boxes Community herunter oder teste Pro 30 Tage kostenlos.",
      keywords: [
        "Ghostyak Boxes",
        "Desktop-Organizer für Windows",
        "Desktop organisieren",
        "Datei-Organizer",
        "Desktop-Symbole organisieren",
        "Windows 11",
        "Windows 10",
      ],
      imageAlt:
        "Ein Windows-Desktop mit Dateien und Apps, die in Ghostyak Boxes organisiert sind",
    },
    header: {
      homeLabel: "Startseite von ghostyak.com",
      navLabel: "Hauptnavigation",
      products: "Produkte",
      features: "Funktionen",
      download: "Download",
      languageLabel: "Sprache",
    },
    hero: {
      heading: "Ein Desktop, auf dem jede Datei sofort zu finden ist",
      intro:
        "Sammle verstreute Dateien und Verknüpfungen in deinen eigenen Boxen.",
      action: "Community und Pro vergleichen",
      previewTitle: "Frühe Entwicklungsversion",
      previewText:
        "Teste die App zunächst in einem separaten Windows-Benutzerkonto, bevor du sie für eine wichtige Desktop-Konfiguration verwendest.",
    },
    download: {
      label: "Download",
      versionLabel: "Version",
      fileSize: "Ca. 3,3 MB",
      requirement: "Microsoft Edge WebView2 Runtime erforderlich",
      heading: "Starte mit der Boxes-Edition, die zu dir passt.",
      intro:
        "Nutze mit Community kostenlos unbegrenzt viele Boxen oder teste Pro 30 Tage lang. Anpassungs- und Widget-Funktionen sind für Pro geplant.",
      detailsLabel: "Download-Informationen",
      trialNote:
        "Nach Ablauf der Pro-Testversion wechselt Boxes zu Community; vorhandene Boxen und Dateien bleiben erhalten.",
      editions: [
        {
          id: "community",
          label: "Dauerhaft kostenlos",
          name: "Community",
          description:
            "Für alle, die die wichtigsten Organisationsfunktionen und unbegrenzt viele Boxen ohne Zeitlimit nutzen möchten.",
          highlights: [
            "Kein Zeitlimit",
            "Unbegrenzte Boxen",
            "Unbegrenzte Symbole pro Box",
            "Einstellungen sichern, wiederherstellen und exportieren",
          ],
          downloadLabel: "Community herunterladen",
        },
        {
          id: "pro",
          label: "30 Tage testen",
          name: "Pro-Testversion",
          description:
            "Anpassungs- und Widget-Funktionen sind künftig für Pro geplant.",
          highlights: [
            "30 Tage ab Installation nutzbar",
            "Enthält alle Community-Funktionen",
            "Anpassungsfunktionen geplant",
            "Widget-Funktionen geplant",
            "Keine Internetverbindung und kein Konto erforderlich",
          ],
          downloadLabel: "Pro-Testversion herunterladen",
        },
      ],
    },
    features: {
      label: "Funktionen",
      heading: "Dateien zusammenhalten und bei Bedarf sofort finden.",
      items: [
        {
          title: "Mit Boxen organisieren",
          description:
            "Gruppiere Dateien, Ordner und Verknüpfungen nach Zweck in Boxen, damit du alles sofort findest.",
        },
        {
          title: "Nach deinen Vorstellungen anordnen",
          description:
            "Verschiebe und skaliere Boxen und klappe oder sperre sie, sodass nur der benötigte Platz belegt wird.",
        },
        {
          title: "Jede Bildschirmkonfiguration wiederherstellen",
          description:
            "Boxes merkt sich Positionen und Größen für deine Monitorkonfiguration und bewahrt so deinen vertrauten Arbeitsbereich.",
        },
        {
          title: "Fotobetrachter",
          description:
            "Zeige Fotos in einer Box oder einem Ordner als Diashow an und passe Intervall und Reihenfolge an.",
        },
        {
          title: "Sicher mit Verknüpfungen organisieren",
          description:
            "Boxes speichert Verknüpfungen, statt Originaldateien zu verschieben. So kannst du sie ordnen und öffnen, ohne ihren Speicherort zu ändern.",
        },
      ],
    },
    footer: {
      socials: "GhostYak in sozialen Medien",
      blog: "GhostYak-Blog",
      instagram: "GhostYak auf Instagram",
      threads: "GhostYak auf Threads",
      github: "GhostYak auf GitHub",
    },
  },
  fr: {
    metadata: {
      title: "Ghostyak Boxes | Organiseur de bureau pour Windows",
      description:
        "Organisez les fichiers, dossiers et raccourcis du bureau Windows dans des boîtes bien rangées. Téléchargez Ghostyak Boxes Community ou essayez Pro gratuitement pendant 30 jours.",
      keywords: [
        "Ghostyak Boxes",
        "organiseur de bureau Windows",
        "organisation du bureau",
        "organiseur de fichiers",
        "organisation des icônes du bureau",
        "Windows 11",
        "Windows 10",
      ],
      imageAlt:
        "Un bureau Windows dont les fichiers et applications sont organisés dans Ghostyak Boxes",
    },
    header: {
      homeLabel: "Accueil de ghostyak.com",
      navLabel: "Navigation principale",
      products: "Produits",
      features: "Fonctionnalités",
      download: "Télécharger",
      languageLabel: "Langue",
    },
    hero: {
      heading: "Un bureau où chaque fichier se trouve en un coup d’œil",
      intro:
        "Rassemblez vos fichiers et raccourcis dispersés dans vos propres boîtes.",
      action: "Comparer Community et Pro",
      previewTitle: "Version préliminaire",
      previewText:
        "Testez-la d’abord dans un autre compte utilisateur Windows avant de l’utiliser sur un bureau important.",
    },
    download: {
      label: "Télécharger",
      versionLabel: "Version",
      fileSize: "Environ 3,3 Mo",
      requirement: "Microsoft Edge WebView2 Runtime requis",
      heading: "Commencez avec l’édition de Boxes qui vous convient.",
      intro:
        "Créez gratuitement un nombre illimité de boîtes avec Community ou essayez Pro pendant 30 jours. Des fonctions de personnalisation et des widgets sont prévus pour Pro.",
      detailsLabel: "Informations de téléchargement",
      trialNote:
        "À la fin de l’essai Pro, Boxes passe à Community tout en conservant vos boîtes et fichiers.",
      editions: [
        {
          id: "community",
          label: "Gratuit sans limite",
          name: "Community",
          description:
            "Pour celles et ceux qui souhaitent les outils d’organisation essentiels et un nombre illimité de boîtes sans limite de temps.",
          highlights: [
            "Aucune limite de temps",
            "Nombre de boîtes illimité",
            "Nombre d’icônes illimité dans chaque boîte",
            "Sauvegarde, restauration et exportation des paramètres",
          ],
          downloadLabel: "Télécharger Community",
        },
        {
          id: "pro",
          label: "Essai de 30 jours",
          name: "Essai Pro",
          description:
            "Des fonctions de personnalisation et des widgets sont prévus pour Pro.",
          highlights: [
            "Utilisable pendant 30 jours après l’installation",
            "Inclut toutes les fonctions de Community",
            "Fonctions de personnalisation prévues",
            "Fonctions de widgets prévues",
            "Aucune connexion Internet ni aucun compte requis",
          ],
          downloadLabel: "Télécharger l’essai Pro",
        },
      ],
    },
    features: {
      label: "Fonctionnalités",
      heading:
        "Gardez vos fichiers ensemble et retrouvez-les quand vous en avez besoin.",
      items: [
        {
          title: "Organisez avec des boîtes",
          description:
            "Regroupez fichiers, dossiers et raccourcis par usage dans des boîtes afin de tout retrouver en un coup d’œil.",
        },
        {
          title: "Disposez-les à votre façon",
          description:
            "Déplacez et redimensionnez les boîtes, puis repliez-les ou verrouillez-les pour ne conserver que l’espace nécessaire.",
        },
        {
          title: "Restaurez chaque configuration d’écran",
          description:
            "Boxes mémorise les positions et dimensions adaptées à vos écrans afin de préserver un espace de travail familier.",
        },
        {
          title: "Visionneuse de photos",
          description:
            "Affichez les photos d’une boîte ou d’un dossier sous forme de diaporama et personnalisez l’intervalle et l’ordre.",
        },
        {
          title: "Organisez en sécurité avec des raccourcis",
          description:
            "Boxes enregistre des raccourcis sans déplacer les fichiers d’origine. Vous pouvez ainsi les organiser et les ouvrir tout en conservant leur emplacement.",
        },
      ],
    },
    footer: {
      socials: "Réseaux sociaux de GhostYak",
      blog: "Blog de GhostYak",
      instagram: "GhostYak sur Instagram",
      threads: "GhostYak sur Threads",
      github: "GhostYak sur GitHub",
    },
  },
  pt: {
    metadata: {
      title: "Ghostyak Boxes | Organizador de área de trabalho para Windows",
      description:
        "Organize arquivos, pastas e atalhos da área de trabalho do Windows em caixas. Baixe o Ghostyak Boxes Community ou experimente o Pro grátis por 30 dias.",
      keywords: [
        "Ghostyak Boxes",
        "organizador de área de trabalho para Windows",
        "organização da área de trabalho",
        "organizador de arquivos",
        "organizador de ícones da área de trabalho",
        "Windows 11",
        "Windows 10",
      ],
      imageAlt:
        "Uma área de trabalho do Windows com arquivos e aplicativos organizados no Ghostyak Boxes",
    },
    header: {
      homeLabel: "Início do ghostyak.com",
      navLabel: "Navegação principal",
      products: "Produtos",
      features: "Recursos",
      download: "Baixar",
      languageLabel: "Idioma",
    },
    hero: {
      heading: "Uma área de trabalho onde cada arquivo é fácil de encontrar",
      intro: "Reúna arquivos e atalhos espalhados em suas próprias caixas.",
      action: "Comparar Community e Pro",
      previewTitle: "Versão inicial de desenvolvimento",
      previewText:
        "Teste primeiro em outra conta de usuário do Windows antes de usar em uma área de trabalho importante.",
    },
    download: {
      label: "Baixar",
      versionLabel: "Versão",
      fileSize: "Aprox. 3,3 MB",
      requirement: "Requer o Microsoft Edge WebView2 Runtime",
      heading: "Comece com a edição do Boxes ideal para você.",
      intro:
        "Use caixas ilimitadas gratuitamente com o Community ou experimente o Pro por 30 dias. Recursos de personalização e widgets estão planejados para o Pro.",
      detailsLabel: "Informações do download",
      trialNote:
        "Quando o período de avaliação do Pro terminar, o Boxes mudará para o Community e manterá suas caixas e seus arquivos.",
      editions: [
        {
          id: "community",
          label: "Grátis para sempre",
          name: "Community",
          description:
            "Para quem quer os recursos essenciais de organização e caixas ilimitadas sem limite de tempo.",
          highlights: [
            "Sem limite de tempo",
            "Caixas ilimitadas",
            "Ícones ilimitados em cada caixa",
            "Backup, restauração e exportação das configurações",
          ],
          downloadLabel: "Baixar o Community",
        },
        {
          id: "pro",
          label: "Avaliação de 30 dias",
          name: "Avaliação Pro",
          description:
            "Recursos de personalização e widgets estão planejados para o Pro.",
          highlights: [
            "Use por 30 dias após a instalação",
            "Inclui todos os recursos do Community",
            "Recursos de personalização planejados",
            "Recursos de widgets planejados",
            "Não requer conexão com a Internet nem uma conta",
          ],
          downloadLabel: "Baixar a avaliação Pro",
        },
      ],
    },
    features: {
      label: "Recursos",
      heading: "Mantenha seus arquivos juntos e encontre-os quando precisar.",
      items: [
        {
          title: "Organize com caixas",
          description:
            "Agrupe arquivos, pastas e atalhos em caixas por finalidade para encontrar tudo rapidamente.",
        },
        {
          title: "Organize do seu jeito",
          description:
            "Mova e redimensione as caixas e depois recolha ou bloqueie cada uma para manter apenas o espaço necessário.",
        },
        {
          title: "Restaure cada configuração de tela",
          description:
            "O Boxes memoriza posições e tamanhos para a configuração dos seus monitores e preserva um espaço de trabalho familiar.",
        },
        {
          title: "Visualizador de fotos",
          description:
            "Veja as fotos de uma caixa ou pasta como apresentação de slides e personalize o intervalo e a ordem.",
        },
        {
          title: "Organize com segurança usando atalhos",
          description:
            "O Boxes registra atalhos em vez de mover os arquivos originais, permitindo organizá-los e abri-los sem alterar sua localização.",
        },
      ],
    },
    footer: {
      socials: "Redes sociais do GhostYak",
      blog: "Blog do GhostYak",
      instagram: "GhostYak no Instagram",
      threads: "GhostYak no Threads",
      github: "GhostYak no GitHub",
    },
  },
  it: {
    metadata: {
      title: "Ghostyak Boxes | Organizer del desktop per Windows",
      description:
        "Organizza file, cartelle e collegamenti del desktop di Windows in riquadri ordinati. Scarica Ghostyak Boxes Community o prova Pro gratuitamente per 30 giorni.",
      keywords: [
        "Ghostyak Boxes",
        "organizer del desktop per Windows",
        "organizzazione del desktop",
        "organizer di file",
        "organizzazione delle icone del desktop",
        "Windows 11",
        "Windows 10",
      ],
      imageAlt:
        "Un desktop Windows con file e app organizzati in Ghostyak Boxes",
    },
    header: {
      homeLabel: "Home di ghostyak.com",
      navLabel: "Navigazione principale",
      products: "Prodotti",
      features: "Funzionalità",
      download: "Scarica",
      languageLabel: "Lingua",
    },
    hero: {
      heading: "Un desktop dove ogni file è subito a portata di mano",
      intro: "Raccogli file e collegamenti sparsi nei tuoi riquadri personali.",
      action: "Confronta Community e Pro",
      previewTitle: "Versione iniziale in sviluppo",
      previewText:
        "Provala in un altro account utente Windows prima di usarla su un desktop importante.",
    },
    download: {
      label: "Scarica",
      versionLabel: "Versione",
      fileSize: "Circa 3,3 MB",
      requirement: "Richiede Microsoft Edge WebView2 Runtime",
      heading: "Inizia con l’edizione di Boxes più adatta a te.",
      intro:
        "Usa gratuitamente riquadri illimitati con Community oppure prova Pro per 30 giorni. Per Pro sono previste funzioni di personalizzazione e widget.",
      detailsLabel: "Informazioni sul download",
      trialNote:
        "Al termine della prova Pro, Boxes passa a Community mantenendo i riquadri e i file esistenti.",
      editions: [
        {
          id: "community",
          label: "Gratis per sempre",
          name: "Community",
          description:
            "Per chi desidera gli strumenti essenziali di organizzazione e riquadri illimitati senza limiti di tempo.",
          highlights: [
            "Nessun limite di tempo",
            "Riquadri illimitati",
            "Icone illimitate in ogni riquadro",
            "Backup, ripristino ed esportazione delle impostazioni",
          ],
          downloadLabel: "Scarica Community",
        },
        {
          id: "pro",
          label: "Prova di 30 giorni",
          name: "Prova Pro",
          description:
            "Per Pro sono previste funzioni di personalizzazione e widget.",
          highlights: [
            "Utilizzabile per 30 giorni dall’installazione",
            "Include tutte le funzionalità di Community",
            "Funzioni di personalizzazione previste",
            "Funzioni widget previste",
            "Non richiede connessione Internet né un account",
          ],
          downloadLabel: "Scarica la prova Pro",
        },
      ],
    },
    features: {
      label: "Funzionalità",
      heading: "Tieni insieme i file e trovali quando ti servono.",
      items: [
        {
          title: "Organizza con i riquadri",
          description:
            "Raggruppa file, cartelle e collegamenti in riquadri in base allo scopo, così da trovare tutto a colpo d’occhio.",
        },
        {
          title: "Disponi tutto a modo tuo",
          description:
            "Sposta e ridimensiona i riquadri, quindi comprimili o bloccali per conservare solo lo spazio necessario.",
        },
        {
          title: "Ripristina ogni configurazione dello schermo",
          description:
            "Boxes ricorda posizione e dimensioni per la configurazione dei monitor, mantenendo familiare l’area di lavoro.",
        },
        {
          title: "Visualizzatore di foto",
          description:
            "Guarda le foto di un riquadro o di una cartella come presentazione e personalizza intervallo e ordine.",
        },
        {
          title: "Organizza in sicurezza con i collegamenti",
          description:
            "Boxes registra collegamenti invece di spostare i file originali, così puoi organizzarli e aprirli senza cambiarne la posizione.",
        },
      ],
    },
    footer: {
      socials: "Social media di GhostYak",
      blog: "Blog di GhostYak",
      instagram: "GhostYak su Instagram",
      threads: "GhostYak su Threads",
      github: "GhostYak su GitHub",
    },
  },
} as const;

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}
