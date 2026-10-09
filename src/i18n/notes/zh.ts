import type { Dictionary } from "@/i18n/get-dictionary";

// Translation of the Korean source approved on 2026-10-09.
const notes: Dictionary["notes"] = {
  metadataTitle: "Ghostyak Notes | 在 PDF 上做笔记并快速查找的 Windows 笔记应用",
  cardDescription: "一款 Windows 笔记应用：用笔和键盘在 PDF 上书写，并在所有文档中快速找到读过的内容。",
  description: "用笔和键盘在 PDF 上书写，读过的内容可在所有文档中快速找到。",
  featuredEyebrow: "新产品",
  betaBadge: "测试版",
  trialBadge: "14 天内可使用全部功能",
  downloadAction: "下载 Windows x64 版",
  featuresAction: "查看功能",
  heroNote: "这是测试版。自首次启动之日起 14 天内，可以不受限制地使用全部功能。",
  screenshots: {
    annotate: { alt: "在 Ghostyak Notes 中为 PDF 教材添加荧光标记并在页边手写笔记的界面", caption: "在 PDF 上书写 · 韩语界面" },
    pen: { alt: "Ghostyak Notes 的笔设置窗口，可选择三个颜色槽、调色板和三档粗细", caption: "笔设置 · 颜色与粗细" },
    search: { alt: "Ghostyak Notes 的全库搜索窗口，输入一个韩语词后列出两个文档中的匹配页面及预览", caption: "在所有文档中查找" },
    library: { alt: "Ghostyak Notes 的资料库，以封面网格显示十个文档，左侧为文件夹和收藏", caption: "资料库 · 文件夹与封面网格" },
    pages: { alt: "Ghostyak Notes 的页面总览，以网格展开 24 页文档的所有页面，并提供移动、复制、旋转按钮", caption: "页面总览" },
    spread: { alt: "Ghostyak Notes 的双页视图，并排显示带笔记的第 4 页和第 5 页", caption: "双页视图" },
  },
  showcase: {
    eyebrow: "主要功能",
    title: "阅读、书写、查找，\n一个应用就够了。",
    description: "教材和讲义、报告和论文。导入 PDF，直接在上面书写，之后再找到需要的那一页。",
    items: {
      pen: {
        eyebrow: "书写",
        title: "笔、荧光笔、橡皮擦。\n颜色和粗细随你定。",
        description: "为笔和荧光笔分别设定三种常用颜色和三种粗细，随时切换。书写内容会边写边自动保存。",
        points: ["笔、荧光笔、橡皮擦和套索选择", "直线、箭头、矩形、椭圆等形状以及插入图片", "撤销与重做"],
      },
      search: {
        eyebrow: "全库搜索",
        title: "不记得在哪本书里，\n也能一次找到。",
        description: "按 Ctrl+Shift+F 搜索资料库中所有文档的正文。结果按文档分组，并附带页码和预览，按 Enter 即可打开该页。",
        points: ["在所有文档中查找（Ctrl+Shift+F）", "在文档内查找（Ctrl+F）", "通过书签和 PDF 目录跳转"],
      },
      library: {
        eyebrow: "资料库",
        title: "像书架一样\n整理教材和笔记。",
        description: "导入 PDF 或新建笔记，并用文件夹分类。每个封面都会显示读到了哪里，还可以用标签页打开多个文档来回切换。",
        points: ["文件夹、收藏和最近的文档", "封面网格与列表视图，支持排序", "删除的文档保留在回收站"],
      },
      pages: {
        eyebrow: "页面总览",
        title: "移动、添加\n和旋转页面。",
        description: "把文档的所有页面铺在一个画面上，调整顺序、复制、删除或旋转。还可以添加空白页，或插入其他 PDF 的页面。",
        points: ["只显示加了书签或有笔记的页面", "空白页可选无格、横线、方格、点阵", "页面编辑同样可以撤销"],
      },
      spread: {
        eyebrow: "查看",
        title: "可以单页看，\n也可以像书一样双页看。",
        description: "在单页视图和双页视图之间切换，并按宽度或高度缩放。即使是很长的文档，也能从侧边栏直接跳到想看的页面。",
        points: ["单页与双页视图", "适合宽度、适合高度与缩放", "页面、有笔记的页面、标记的文字、书签和目录侧边栏"],
      },
    },
  },
  more: {
    eyebrow: "更多功能",
    title: "学习和工作需要的工具都在这里。",
    items: [
      { title: "文本框", description: "用键盘在页面上输入文字。可选择黑体、宋体、手写体和等宽字体。" },
      { title: "标记文字", description: "选择 PDF 中的文字，添加荧光、下划线或删除线标记，并可复制。" },
      { title: "书签", description: "为重要页面添加书签，并从列表中直接跳转。" },
      { title: "透视", description: "点击笔迹或文本框使其暂时变透明，查看下方的正文。" },
      { title: "自动保存", description: "没有保存按钮。书写内容会边写边保存到文档文件中。" },
      { title: "键盘快捷键", description: "用快捷键选择工具、搜索和翻页。" },
    ],
  },
  privacy: {
    eyebrow: "保存在你的电脑上",
    title: "你的文档就在你的电脑上。",
    description: "文档以文件形式保存在电脑“文档”文件夹内的“Ghostyak Notes”文件夹中。无需创建账号或连接互联网即可使用，并且不会更改导入的 PDF 原始文件。",
  },
  beta: {
    eyebrow: "测试版说明",
    title: "14 天内，\n全部功能不受限制。",
    description: "目前提供下载的安装程序是测试版。使用期限从首次启动应用之日起计算。",
    steps: [
      { title: "14 天内可用全部功能", description: "自首次启动之日起 14 天内，可以使用包括书写、全库搜索和页面编辑在内的全部功能。" },
      { title: "到期后为只读", description: "使用期限结束后，只能打开并阅读文档。书写和全库搜索将无法使用。" },
      { title: "下一个版本再用 14 天", description: "安装下一个版本后，可以再使用 14 天。" },
    ],
    note: "即使期限结束，已创建的文档和笔迹也不会被删除。",
  },
  faq: {
    title: "常见问题",
    items: [
      { question: "测试版可以使用多久？", answer: "自首次启动应用之日起 14 天内，可以不受限制地使用全部功能。首次启动时会告知使用期限的结束日期。" },
      { question: "14 天之后会怎样？", answer: "仍然可以打开并阅读文档，也可以在文档内查找，但无法书写，也无法在所有文档中查找。已创建的文档和笔迹不会被删除，安装下一个版本后可以再使用 14 天。" },
      { question: "文档保存在哪里？", answer: "保存在电脑“文档”文件夹内的“Ghostyak Notes”文件夹中。可以通过资料库左下角的“문서 폴더 열기”（打开文档文件夹）直接打开。" },
      { question: "扫描的 PDF 也能搜索吗？", answer: "可以搜索包含文字信息的 PDF 正文。仅由扫描图像组成的 PDF 的文字识别（OCR）目前尚不支持。" },
      { question: "没有手写笔也能用吗？", answer: "可以。你可以用鼠标书写，并用键盘在文本框中输入文字。" },
      { question: "应用提供哪些语言？", answer: "目前应用界面以韩语提供。其他语言即将支持。" },
      { question: "需要什么运行环境？", answer: "适用于 64 位（x64）Windows。如果没有 Microsoft Edge WebView2 Runtime，安装程序会下载并安装。" },
    ],
  },
  download: {
    title: "下载后，\n导入你的第一个 PDF。",
    description: "Windows x64 · 测试版 · 14 天内可使用全部功能",
  },
};

export default notes;
