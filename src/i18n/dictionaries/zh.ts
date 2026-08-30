import type { Dictionary } from "@/i18n/get-dictionary";

const zh: Dictionary = {
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
    products: { eyebrow: "GHOSTYAK SOFTWARE", heading: "现已推出的产品", intro: "我们不追求复杂功能，而是专注解决每天遇到的小麻烦。", freeBadge: "免费", viewAction: "查看产品" },
    blog: { eyebrow: "BLOG", heading: "记录我们正在打造的产品", intro: "在 GhostYak 博客了解产品动态和开发故事。", viewAction: "查看博客" },
  },
  boxes: {
    description: "一款桌面工具，可将 Windows 桌面上的文件、文件夹和快捷方式归入灵活的盒子中。",
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
