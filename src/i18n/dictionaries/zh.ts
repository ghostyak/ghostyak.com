import landing from "@/i18n/landing/zh";
import type { Dictionary } from "@/i18n/get-dictionary";

const zh: Dictionary = {
  landing,
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
    ]
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
  header: { homeLabel: "GhostYak 首页", navigationLabel: "主菜单", language: "选择语言", products: "产品", blog: "博客" },
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
