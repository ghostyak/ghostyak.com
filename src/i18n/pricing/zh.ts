import type { Dictionary } from "@/i18n/get-dictionary";

// Translation of the Korean source of 2026-11-02.
const pricing: Dictionary["pricing"] = {
  eyebrow: "价格",
  title: "试用 30 天，\n再用 Pro 继续。",
  description: "试用版在 30 天内与 Pro 完全相同。试用期结束后仍可继续书写，文字识别和全库搜索则需使用 Pro。",
  plans: {
    label: "试用版与 Pro",
    includes: "包含试用版的全部功能，另有：",
    trial: {
      name: "试用版",
      tagline: "先试一试",
      price: "30 天",
      priceUnit: "自首次启动之日起",
      points: ["用笔、荧光笔和文本框在 PDF 上书写", "一次搜索所有文档", "编辑页面、创建目录、合并文档", "扫描页文字识别（OCR）", "连同笔迹导出为 PDF 并打印", "到期后仍可书写"],
    },
    pro: {
      name: "Pro",
      tagline: "不受时间限制",
      status: "即将推出",
      priceUnit: "USD · 一次性购买",
      action: "即将开放购买",
      note: "目前仍在 Beta 测试中，购买功能正在开发。在此期间，请通过试用版体验全部功能。",
      points: ["文字识别（OCR）、自动模式、性能模式", "在所有文档中搜索", "所有书签、所有标记的文字、小地图", "一个密钥最多激活 3 台设备", "激活后无需联网即可使用", "包含更新"],
    },
  },
  footnote: "*试用期结束后，只有文字识别、自动模式、性能模式、全库搜索、所有书签、所有标记的文字和小地图无法使用。文档、笔迹和已识别的文字都会保留。",
  compare: {
    eyebrow: "功能比较",
    title: "30 天试用版与 Pro 有什么不同？",
    description: "30 天内可使用 Pro 的全部功能。试用期结束后无法使用文字识别和全库搜索，但仍可继续书写。",
    feature: "功能",
    during: "30 天内",
    after: "到期后",
    available: "可用",
    unavailable: "不可用",
    readGroup: "阅读 · 查找 · 导出",
    writeGroup: "书写 · 整理",
    proGroup: "文字识别 · 全库搜索",
    readFeatures: ["阅读文档、查看已有笔迹、选择和复制文字", "文档内查找、快速跳转、转到书签和目录", "导入 PDF、整理文档", "导出为 PDF（含笔迹）、打印", "查找和复制已识别的文字", "查词典"],
    writeFeatures: ["书写、标记文字、添加书签、编辑页面", "新建笔记、合并文档"],
    proFeatures: ["文字识别（OCR）：本页、多页、全文档、自动模式、性能模式", "一次搜索所有文档", "所有书签、所有标记的文字", "小地图"],
  },
  faq: {
    items: [
      {
        question: "什么时候可以购买 Pro？",
        answer: "目前仍在 Beta 测试中，购买功能正在开发，即将推出。在此之前，您可以通过试用版体验全部功能。",
      },
      {
        question: "Pro 是订阅制吗？",
        answer: "不是。这是一次性购买，购买后的更新也包含在内。",
      },
      {
        question: "Pro 可以在几台电脑上使用？",
        answer: "一个密钥最多可激活 3 台设备。只有激活时需要联网，之后无需联网即可使用。",
      },
      {
        question: "试用期结束后文档会怎样？",
        answer: "文档和笔迹不会被删除。您仍可打开阅读、继续书写，并连同笔迹导出为 PDF。",
      },
      {
        question: "可以重新开始试用吗？",
        answer: "不可以。每台设备只能试用一次，安装新版本也不会延长期限。将设备日期调回会立即结束试用。",
      },
      {
        question: "使用过测试版的电脑可以试用吗？",
        answer: "可以。安装 v1.0.0 后，将重新开始 30 天试用。",
      },
    ],
  },
};

export default pricing;
