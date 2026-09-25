import landing from "@/i18n/landing/zh";
import type { Dictionary } from "@/i18n/get-dictionary";

const zh: Dictionary = {
  landing,
  share: {
    heading: "觉得有用？分享给更多人吧",
    copyLink: "复制链接",
    copied: "链接已复制",
    copyFailed: "无法自动复制，请手动复制下方地址。",
    copyField: "要分享的页面地址",
    x: "分享到 X",
    facebook: "分享到 Facebook",
    linkedin: "分享到 LinkedIn",
    instagram: "分享到 Instagram",
    threads: "分享到 Threads",
  },
  csvSearch: {
    downloadAction: "下载Windows版",
    "category": "数字取证",
    "description": "大型CSV、Excel文件搜索，一站搞定。",
    "repositoryAction": "在GitHub上查看",
    "screenshots": [
      {
        "alt": "用于打开CSV和Excel文件的CSV Search Engine起始界面",
        "caption": "打开文件 · 韩语界面"
      },
      {
        "alt": "CSV Search Engine显示MFT数据、各列搜索框和数据行的界面",
        "caption": "MFT数据查看 · 韩语界面"
      }
    ],
    "metadataTitle": "CSV Search Engine | 搜索大型 CSV 和 Excel 的 DFIR 工具",
    "licenseBadge": "非商业用途免费",
    "howToAction": "使用方法",
    "workflow": {
      "eyebrow": "使用方法",
      "title": "打开文件，\n在列标题下方直接搜索。",
      "description": "从取证工具导出的大型 CSV 或 Excel 文件中，按列设置条件，只筛选出需要的行。",
      "steps": [
        {
          "title": "打开文件",
          "description": "通过 文件 → 打开（Ctrl+O）选择 CSV、XLS、XLSX 文件，或直接拖到窗口中。"
        },
        {
          "title": "按列搜索",
          "description": "在列标题下方的搜索框中输入条件并按 Enter。在多列中输入条件时，只显示同时满足所有条件的行。"
        },
        {
          "title": "排序并查看详情",
          "description": "点击列标题进行排序，选择一行后在行详情中查看所有列的值。"
        }
      ]
    },
    "features": {
      "eyebrow": "主要功能",
      "title": "查找、缩小范围、分组查看。",
      "items": [
        {
          "title": "按列搜索与筛选",
          "description": "使用包含、排除、完全匹配、开头或结尾匹配、为空、非空等条件查找所需的行。"
        },
        {
          "title": "数字与日期范围",
          "description": "使用大于、大于等于、小于、小于等于、介于等条件比较数字和日期。例如：2026-09-01 .. 2026-09-20"
        },
        {
          "title": "排序与分组",
          "description": "点击列标题排序，将列拖到字段分组区域，即可按相同的值最多分 8 级分组查看。"
        },
        {
          "title": "表格浏览",
          "description": "支持连续滚动、隐藏列、调整列宽和查看行详情，轻松浏览列数很多的表格。"
        },
        {
          "title": "支持 CSV 与 Excel",
          "description": "可打开 CSV 和 XLS、XLSX 文件，并通过工作表标签切换。无需安装 Excel。"
        },
        {
          "title": "多语言与编码",
          "description": "提供韩语、英语、日语、中文界面，并可自动识别 UTF-8、CP949、Shift_JIS 等多种 CSV 编码。"
        }
      ]
    },
    "privacy": {
      "eyebrow": "离线分析",
      "title": "原始文件保持不变，分析只在你的电脑上进行。",
      "description": "不会修改或向外部上传原始文件。无需联网或账号即可运行，也不会自动发送网络请求或收集使用数据。"
    },
    "faq": {
      "title": "常见问题",
      "items": [
        {
          "question": "可以免费使用吗？",
          "answer": "仅限非商业用途，可无期限、无次数限制地免费使用全部功能。禁止用于企业内部业务、付费取证分析等商业工作。也可以在应用的 帮助 → 程序信息 中查看使用条件。"
        },
        {
          "question": "可以打开哪些文件？",
          "answer": "可以打开 CSV、XLS、XLSX 文件。XLS 文件最大支持 32 MiB，不支持 Excel 格式、图表、宏的执行以及公式重新计算。"
        },
        {
          "question": "CSV 中的文字显示为乱码。",
          "answer": "默认会自动检测编码。如果出现乱码，请在 设置 → CSV 编码 中选择合适的编码后重新打开文件。"
        },
        {
          "question": "可以编辑或导出数据吗？",
          "answer": "这是一款用于查看和搜索的工具，目前尚不支持编辑数据和导出搜索结果。"
        },
        {
          "question": "大文件需要多长时间？",
          "answer": "首次打开文件或搜索新的列时，需要时间建立搜索索引，并需要有可保存缓存的磁盘空间。处理时间取决于文件内容和电脑性能，10 GiB 以上 CSV 的性能尚未完全验证。"
        },
        {
          "question": "需要什么环境？",
          "answer": "适用于 64 位 Windows。运行安装程序后，从开始菜单启动 CSV Search Engine。"
        }
      ]
    },
    "download": {
      "title": "下载后，\n打开你的第一个文件。",
      "description": "64 位 Windows · 非商业用途免费"
    }
  },
  productCategories: { windowsProductivity: "Windows 生产力", webApps: "网页应用" },
  "folderHistory": {
    "metadataTitle": "Folder History | 快速重新打开最近访问文件夹的 Windows 应用",
    "cardDescription": "记录你在文件资源管理器中访问过的文件夹，并可从托盘直接重新打开的 Windows 应用。",
    "description": "记录你在文件资源管理器中访问过的文件夹，随时从托盘直接重新打开。",
    "downloadAction": "免费下载 Windows x64 版",
    "arm64DownloadAction": "免费下载 Windows ARM64 版",
    "howToAction": "使用方法",
    "screenshots": [
      {
        "alt": "Folder History 的最近访问列表，按时间由近到远显示文件夹名称、路径和最后访问时间",
        "caption": "最近访问列表 · 韩语界面"
      },
      {
        "alt": "输入了 node_modules 和 .next 的 Folder History 排除规则编辑窗口",
        "caption": "编辑排除规则"
      },
      {
        "alt": "用于设置界面主题、Windows 登录时启动和历史保留期限的 Folder History 设置窗口",
        "caption": "设置 · 界面主题、自动启动、历史保留"
      }
    ],
    "workflow": {
      "eyebrow": "使用方法",
      "title": "不必再到处找文件夹。\n从最近访问中直接打开。",
      "description": "想不起几天前工作的文件夹在哪里时，双击托盘图标，最近访问的文件夹就会按顺序列出。",
      "steps": [
        {
          "title": "添加监视文件夹",
          "description": "选择要记录的文件夹。所选文件夹及其子文件夹即为记录范围。"
        },
        {
          "title": "照常使用文件资源管理器",
          "description": "用 Windows 文件资源管理器打开文件夹时，会自动记录最后访问时间。"
        },
        {
          "title": "从托盘重新打开",
          "description": "双击托盘图标，然后双击列表中的文件夹或按 Enter，即可在文件资源管理器中重新打开。"
        }
      ]
    },
    "features": {
      "eyebrow": "主要功能",
      "title": "只留需要的文件夹，按你的方式使用。",
      "items": [
        {
          "title": "搜索与排序",
          "description": "按文件夹名称或路径搜索（Ctrl+F），并可按文件夹、路径、最后访问时间排序。"
        },
        {
          "title": "置顶",
          "description": "常用的文件夹可以用图钉固定在列表顶部。"
        },
        {
          "title": "排除规则",
          "description": "每行输入一个不想记录的文件夹名称，例如 node_modules、.git。支持 * 和 ?。"
        },
        {
          "title": "回收站与恢复",
          "description": "删除的记录会保存在回收站中，并可按原访问时间恢复。"
        },
        {
          "title": "历史保留期限",
          "description": "可以一直保留历史，也可以在 1、3、6、12 个月后自动清理。"
        },
        {
          "title": "复制路径",
          "description": "通过行内的复制按钮或 Ctrl+C 复制文件夹的完整路径。"
        }
      ]
    },
    "privacy": {
      "eyebrow": "保存在你的电脑上",
      "title": "记录只保存在你的电脑上。",
      "description": "访问记录和设置保存在电脑的本地应用数据中，无需服务器或账号。删除记录不会影响实际的文件夹和文件。"
    },
    "faq": {
      "title": "常见问题",
      "items": [
        {
          "question": "会记录哪些文件夹访问？",
          "answer": "在监视文件夹内用 Windows 文件资源管理器打开文件夹，或从其他窗口、标签页回到该文件夹时会被记录。在其他文件管理器或文件打开对话框中的跳转以及文件更改不会记录为访问。"
        },
        {
          "question": "免费吗？",
          "answer": "是的，可以免费使用。"
        },
        {
          "question": "关闭窗口后记录会停止吗？",
          "answer": "不会。窗口的 X 只会隐藏窗口，记录仍会继续。若要完全退出，请右键单击托盘图标并选择“退出”。"
        },
        {
          "question": "可以在 Windows 启动时自动运行吗？",
          "answer": "在设置中打开“Windows 登录时启动”即可。默认处于关闭状态。"
        },
        {
          "question": "需要什么环境？",
          "answer": "可在 Windows 11 x64 或 ARM64 上使用。安装程序会安装到当前用户账户，无需管理员权限；如果缺少 WebView2 Runtime，会在安装过程中一并安装。"
        }
      ]
    },
    "download": {
      "title": "下载后，\n添加第一个监视文件夹。",
      "description": "Windows 11 x64 / ARM64 · 无需管理员权限即可安装"
    }
  },
  worldClock: {
  "badge": "新功能 · 世界时钟小组件",
  "title": "在桌面上，一览世界时间。",
  "description": "首尔的上午、伦敦的凌晨、纽约的夜晚。通过 Boxes 世界时钟并排查看多个城市的时间和日期，也能在同一桌面整理文件和快捷方式。",
  "widgetTitle": "世界时钟",
  "previewCaption": "世界时钟小组件预览 · 所示时间仅为示例。",
  "cities": [
    "首尔",
    "伦敦",
    "旧金山",
    "纽约",
    "温哥华"
  ],
  "heading": "不同时区，同一工作空间。",
  "intro": "联系海外同事或给远方家人打电话前，先在桌面上查看对方的当地时间。",
  "benefits": [
    {
      "title": "多城时间并排查看",
      "description": "一眼比较经常关注的城市时间。"
    },
    {
      "title": "日期和时差一目了然",
      "description": "通过各城市的日期和 UTC 偏移量，分辨日期不同的地区。"
    },
    {
      "title": "整理与小组件相结合",
      "description": "将文件、快捷方式和世界时钟集中在工作空间中。"
    }
  ]
},
  metadata: {
    site: { title: "GhostYak | 整理日常工作的 Windows 软件", titleTemplate: "%s | GhostYak", description: "GhostYak 致力于打造让日常 Windows 工作空间更简单、更便捷的软件。" },
    boxes: { title: "Boxes", openGraphTitle: "GhostYak Boxes | Windows 桌面整理工具" },
    boxesDownload: { title: "下载 Boxes" },
    blog: { title: "博客", description: "分享 GhostYak 产品动态与开发故事。" },
  },
  header: { homeLabel: "GhostYak 首页", navigationLabel: "主菜单", language: "选择语言", products: "产品", blog: "博客", support: "赞助" },
  supportPage: {
    metadataTitle: "赞助 GhostYak",
    title: "请支持 GhostYak",
    description: "GhostYak 的 Windows 工具和网页应用大多免费提供。您的赞助将用于持续开发和完善这些产品。",
    methodsAction: "查看赞助方式",
    productsAction: "浏览产品",
    methods: { eyebrow: "赞助方式", title: "选择方便的方式赞助", description: "两种方式都在外部赞助页面完成，并在新标签页中打开。", action: "通过 {name} 赞助", items: { buyMeACoffee: "可以用银行卡轻松赞助的海外赞助服务，在世界各地都能方便使用。", ctee: "可使用韩国支付方式赞助的韩国创作者赞助平台。" } },
    uses: { eyebrow: "赞助的用途", title: "赞助让产品得以持续", items: [{ title: "新功能与新产品", description: "确保有时间开发反映用户意见的功能和新工具。" }, { title: "维护", description: "通过适配 Windows 更新和修复错误，让您正在使用的产品保持稳定。" }, { title: "网页服务运营", description: "用于支付 Clock、OSINTS 等网页应用以及本网站的运营费用。" }] },
    other: {
      eyebrow: "其他支持方式",
      title: "不赞助也能帮忙",
      share: { title: "推荐给身边的人", description: "把觉得好用的 GhostYak 产品推荐给需要的人。" },
      feedback: { title: "发送反馈", description: "在 GitHub 上报告问题或留下改进建议。", action: "打开 GitHub" },
      follow: { title: "分享动态", description: "在 Instagram 和 Threads 上关注 GhostYak 并分享动态。" },
    },
    thanks: { title: "谢谢", description: "感谢您使用并支持 GhostYak。我们会用更好的工具回报您。" },
  },
  footer: { description: "让日常 Windows 工作空间更简单的软件。", navigationLabel: "页脚菜单", blog: "博客" },
  carousel: { slideLabel: "查看第 {index} 个画面", pauseLabel: "暂停自动轮播", playLabel: "继续自动轮播", pause: "暂停", play: "播放" },
  home: {
    screenReaderTitle: "GhostYak 软件",
    hero: {
      regionLabel: "GhostYak 最新内容", controlsLabel: "选择主视觉画面",
      slides: [
        { eyebrow: "GHOSTYAK BOXES", title: "让桌面重新成为高效工作的空间。", description: "将散落的文件和快捷方式归入不同用途的盒子，一目了然地整理桌面。", actionLabel: "查看产品", imageAlt: "Boxes 演示画面 1" },
        { eyebrow: "DESKTOP, ORGANIZED", title: "更快找到所需文件。", description: "按自己的方式整理工作、项目和常用工具，需要时即可快速打开。", actionLabel: "查看产品", imageAlt: "Boxes 演示画面 2" },
      ],
    },
    products: { eyebrow: "GHOSTYAK SOFTWARE", heading: "我们打造每天都会用到的小工具", intro: "从桌面整理、时间管理到 OSINT 与取证调查。与其堆砌功能，我们更专注于把一个常见的不便真正解决好。", freeBadge: "免费", viewAction: "查看产品", webBadge: "网页", clockDescription: "无需安装，在浏览器中即可使用当前时间、世界时钟、闹钟、计时器、番茄钟和秒表的时间工具。", osintsDescription: "无需在多个 OSINT 网站之间来回切换，在一处即可搜索和分析 IP 地址、域名等信息。", webAction: "打开网站", clockPreviewLabel: "Clock 预览" },
    blog: { eyebrow: "BLOG", heading: "记录我们的制作过程", intro: "分享新产品与新功能的消息，以及开发中遇到的问题和解决过程。", viewAction: "查看博客" },
  },
  boxes: {
    description: "文件留在原来的文件夹中，在桌面上按任务归入盒子。基础功能在公司使用也免费。",
    tagline: "一目了然地整理杂乱桌面。", downloadAction: "免费下载", screenshotAlts: ["Boxes 演示画面 1", "Boxes 演示画面 2"],
    carousel: { regionLabel: "Boxes 画面预览", controlsLabel: "选择产品画面" },
    features: {
      label: "主要功能", heading: "只保留整理真正需要的核心功能。",
      items: [
        { title: "用盒子一目了然地整理", description: "将相关文件、文件夹和快捷方式按用途归入盒子，快速找到所需内容。" },
        { title: "适应你的工作方式", description: "自由调整盒子的位置和大小，需要更多桌面空间时还可将其折叠。" },
        { title: "原始文件保持不变", description: "通过快捷方式整理而不移动原文件，安全保留现有文件夹结构。" },
      ],
    },
    availabilityNotice: "目前仅提供免费版。商业版准备就绪后将另行发布。",
    download: { breadcrumbLabel: "当前位置", breadcrumbCurrent: "下载", waitNotice: "请保持此页面打开，直到浏览器开始下载安装程序。", fileInfoLabel: "安装程序信息", version: "版本 {version}", fileSize: "约 3.3 MB", requirement: "需要 Microsoft Edge WebView2 Runtime", countdown: "下载将在 {seconds} 秒后开始。", starting: "正在开始下载。", help: "没有自动开始下载？", directAction: "直接下载安装程序" },
  },
  blog: { eyebrow: "GHOSTYAK BLOG", heading: "博客", intro: "记录产品动态以及我们在开发过程中学到的内容。", readMore: "阅读文章", breadcrumbLabel: "当前位置", breadcrumbHome: "博客" },
};

export default zh;
