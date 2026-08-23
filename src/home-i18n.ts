import type { Locale } from "@/locales";

type HomeCopy = {
  metadata: { title: string; description: string };
  hero: { eyebrow: string; heading: string; intro: string; action: string };
  products: { label: string; heading: string; intro: string; boxesDescription: string; view: string; download: string };
  principles: { label: string; heading: string; items: readonly { title: string; description: string }[] };
  cta: { heading: string; intro: string; action: string };
};

const english: HomeCopy = {
  metadata: { title: "Ghostyak | Thoughtful software for a simpler workspace", description: "Discover Ghostyak software designed to make everyday Windows workspaces calmer and easier to use." },
  hero: { eyebrow: "Independent software studio", heading: "Thoughtful tools for a simpler digital workspace.", intro: "Ghostyak builds focused Windows software that removes friction from everyday work.", action: "Explore our products" },
  products: { label: "Products", heading: "Small tools with a clear purpose.", intro: "Start with Boxes, our Windows desktop organizer.", boxesDescription: "Bring files, folders, and shortcuts together in flexible boxes, then keep your desktop calm and easy to navigate.", view: "Explore Boxes", download: "Download Boxes" },
  principles: { label: "How we build", heading: "Software that stays out of your way.", items: [
    { title: "Focused by design", description: "Each product starts with a specific everyday problem and a clear way to solve it." },
    { title: "Easy to start", description: "Useful defaults and a free Community edition make it simple to begin." },
    { title: "Built for Windows", description: "Our tools are designed around familiar Windows workflows and conventions." },
  ] },
  cta: { heading: "Give your desktop a calmer place to work.", intro: "Meet Ghostyak Boxes and organize the files you use every day.", action: "Meet Boxes" },
};

const copies: Record<Locale, HomeCopy> = {
  en: english,
  ko: {
    metadata: { title: "Ghostyak | 더 단순한 작업 공간을 위한 소프트웨어", description: "일상의 Windows 작업 공간을 더 차분하고 편리하게 만드는 Ghostyak 소프트웨어를 만나보세요." },
    hero: { eyebrow: "독립 소프트웨어 스튜디오", heading: "더 단순한 디지털 작업 공간을 위한 세심한 도구", intro: "Ghostyak은 일상적인 작업의 불편을 덜어주는 집중력 있는 Windows 소프트웨어를 만듭니다.", action: "제품 둘러보기" },
    products: { label: "제품", heading: "작지만 목적이 분명한 도구", intro: "Windows 바탕화면 정리 도구 Boxes부터 만나보세요.", boxesDescription: "파일, 폴더와 바로가기를 유연한 박스에 모아 바탕화면을 차분하고 찾기 쉽게 정리합니다.", view: "Boxes 자세히 보기", download: "Boxes 다운로드" },
    principles: { label: "만드는 방식", heading: "사용자의 흐름을 방해하지 않는 소프트웨어", items: [
      { title: "분명한 목적", description: "일상에서 겪는 구체적인 문제와 명확한 해결 방법에서 제품을 시작합니다." },
      { title: "부담 없는 시작", description: "유용한 기본 설정과 무료 Community 에디션으로 쉽게 시작할 수 있습니다." },
      { title: "Windows에 맞춘 설계", description: "익숙한 Windows 작업 방식과 사용 관례를 중심으로 설계합니다." },
    ] },
    cta: { heading: "바탕화면을 더 차분한 작업 공간으로 바꿔보세요.", intro: "Ghostyak Boxes로 매일 사용하는 파일을 정리할 수 있습니다.", action: "Boxes 만나보기" },
  },
  ja: { ...english, metadata: { title: "Ghostyak | シンプルな作業環境のためのソフトウェア", description: "日々のWindows作業環境をより快適にするGhostyakのソフトウェアをご覧ください。" }, hero: { eyebrow: "独立系ソフトウェアスタジオ", heading: "よりシンプルなデジタル作業環境のためのツール", intro: "Ghostyakは、日々の作業の手間を減らすWindowsソフトウェアを開発しています。", action: "製品を見る" }, products: { ...english.products, label: "製品", heading: "小さくても目的が明確なツール", intro: "Windowsデスクトップ整理ツールBoxesから始めましょう。", boxesDescription: "ファイル、フォルダー、ショートカットを柔軟なボックスにまとめ、デスクトップをすっきり整理します。", view: "Boxesの詳細", download: "Boxesをダウンロード" }, cta: { heading: "デスクトップを落ち着いた作業空間へ。", intro: "Ghostyak Boxesで毎日使うファイルを整理しましょう。", action: "Boxesを見る" } },
  zh: { ...english, metadata: { title: "Ghostyak | 为简洁工作空间打造的软件", description: "探索 Ghostyak 软件，让日常 Windows 工作空间更加从容易用。" }, hero: { eyebrow: "独立软件工作室", heading: "为更简洁的数字工作空间打造用心工具", intro: "Ghostyak 专注打造减少日常操作阻力的 Windows 软件。", action: "浏览产品" }, products: { ...english.products, label: "产品", heading: "小巧而目标明确的工具", intro: "从 Windows 桌面整理工具 Boxes 开始。", boxesDescription: "将文件、文件夹和快捷方式归入灵活的收纳框，让桌面整洁且易于查找。", view: "了解 Boxes", download: "下载 Boxes" }, cta: { heading: "让桌面成为更从容的工作空间。", intro: "使用 Ghostyak Boxes 整理每天使用的文件。", action: "了解 Boxes" } },
  es: { ...english, hero: { eyebrow: "Estudio de software independiente", heading: "Herramientas cuidadas para un espacio digital más sencillo.", intro: "Ghostyak crea software para Windows que reduce las fricciones del trabajo diario.", action: "Explorar productos" }, products: { ...english.products, label: "Productos", heading: "Herramientas pequeñas con un propósito claro.", intro: "Empieza con Boxes, nuestro organizador de escritorio para Windows.", view: "Descubrir Boxes", download: "Descargar Boxes" } },
  de: { ...english, hero: { eyebrow: "Unabhängiges Softwarestudio", heading: "Durchdachte Werkzeuge für einen einfacheren digitalen Arbeitsplatz.", intro: "Ghostyak entwickelt fokussierte Windows-Software, die den Arbeitsalltag erleichtert.", action: "Produkte entdecken" }, products: { ...english.products, label: "Produkte", heading: "Kleine Werkzeuge mit klarem Zweck.", intro: "Beginne mit Boxes, unserem Desktop-Organizer für Windows.", view: "Boxes entdecken", download: "Boxes herunterladen" } },
  fr: { ...english, hero: { eyebrow: "Studio logiciel indépendant", heading: "Des outils bien pensés pour un espace numérique plus simple.", intro: "Ghostyak crée des logiciels Windows ciblés qui simplifient le travail quotidien.", action: "Découvrir nos produits" }, products: { ...english.products, label: "Produits", heading: "De petits outils avec un objectif clair.", intro: "Commencez avec Boxes, notre organiseur de bureau Windows.", view: "Découvrir Boxes", download: "Télécharger Boxes" } },
  pt: { ...english, hero: { eyebrow: "Estúdio de software independente", heading: "Ferramentas cuidadosas para um espaço digital mais simples.", intro: "A Ghostyak cria software focado para Windows que facilita o trabalho diário.", action: "Explorar produtos" }, products: { ...english.products, label: "Produtos", heading: "Ferramentas pequenas com um propósito claro.", intro: "Comece com o Boxes, nosso organizador da área de trabalho do Windows.", view: "Conhecer o Boxes", download: "Baixar o Boxes" } },
  it: { ...english, hero: { eyebrow: "Studio software indipendente", heading: "Strumenti curati per uno spazio digitale più semplice.", intro: "Ghostyak crea software Windows mirato che riduce gli ostacoli del lavoro quotidiano.", action: "Scopri i prodotti" }, products: { ...english.products, label: "Prodotti", heading: "Piccoli strumenti con uno scopo chiaro.", intro: "Inizia con Boxes, il nostro organizer del desktop Windows.", view: "Scopri Boxes", download: "Scarica Boxes" } },
};

export function getHomeCopy(locale: Locale) {
  return copies[locale];
}
