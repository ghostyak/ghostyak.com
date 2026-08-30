import type { Dictionary } from "@/i18n/get-dictionary";

const ja: Dictionary = {
  metadata: {
    site: { title: "GhostYak | 日々の作業を整えるWindowsソフトウェア", titleTemplate: "%s | GhostYak", description: "GhostYakは、毎日のWindowsワークスペースをよりシンプルで便利にするソフトウェアを開発しています。" },
    boxes: { title: "Boxes", openGraphTitle: "GhostYak Boxes | Windowsデスクトップ整理ツール" },
    boxesDownload: { title: "Boxesをダウンロード" },
    blog: { title: "ブログ", description: "GhostYakの製品ニュースと開発ストーリーをお届けします。" },
  },
  header: { homeLabel: "GhostYakホーム", navigationLabel: "メインメニュー", language: "言語を選択", products: "製品", blog: "ブログ" },
  footer: { description: "毎日のWindowsワークスペースをもっとシンプルにするソフトウェア。", navigationLabel: "フッターメニュー", blog: "ブログ" },
  carousel: { slideLabel: "{index}番目の画面を表示", pauseLabel: "自動切り替えを一時停止", playLabel: "自動切り替えを再開", pause: "停止", play: "再生" },
  home: {
    screenReaderTitle: "GhostYakソフトウェア",
    hero: {
      regionLabel: "GhostYakの最新情報", controlsLabel: "ヒーロー画面を選択",
      slides: [
        { eyebrow: "GHOSTYAK BOXES", title: "デスクトップを、もう一度仕事ができる場所へ。", description: "散らばったファイルやショートカットを目的別のボックスにまとめ、ひと目で整理できます。", actionLabel: "製品を見る", imageAlt: "Boxesデモ画面1" },
        { eyebrow: "DESKTOP, ORGANIZED", title: "必要なファイルをもっとすばやく。", description: "仕事、プロジェクト、よく使うツールを自分の方法で分け、必要なときにすぐ開けます。", actionLabel: "製品を見る", imageAlt: "Boxesデモ画面2" },
      ],
    },
    products: { eyebrow: "GHOSTYAK SOFTWARE", heading: "現在ご利用いただける製品", intro: "複雑な機能を増やすのではなく、毎日の小さな不便を解決することに集中しています。", freeBadge: "無料", viewAction: "製品を見る" },
    blog: { eyebrow: "BLOG", heading: "開発しているものの記録", intro: "製品ニュースや開発の話をGhostYakブログでお届けします。", viewAction: "ブログを見る" },
  },
  boxes: {
    description: "Windowsデスクトップ上のファイル、フォルダー、ショートカットを柔軟なボックスにまとめて整理するデスクトップツールです。",
    tagline: "散らかったデスクトップをひと目で整理。", downloadAction: "無料ダウンロード", screenshotAlts: ["Boxesデモ画面1", "Boxesデモ画面2"],
    carousel: { regionLabel: "Boxes画面プレビュー", controlsLabel: "製品画面を選択" },
    features: {
      label: "主な機能", heading: "整理に必要な機能を、シンプルに。",
      items: [
        { title: "ボックスでひと目で整理", description: "関連するファイル、フォルダー、ショートカットを目的別のボックスにまとめ、必要な項目をすばやく見つけられます。" },
        { title: "自分の作業方法に合わせる", description: "ボックスの位置やサイズを自由に調整し、必要なときには折りたたんでデスクトップのスペースを確保できます。" },
        { title: "元のファイルはそのまま", description: "元の場所を変えずにショートカットで整理するため、既存のフォルダー構造を安全に保てます。" },
      ],
    },
    availabilityNotice: "現在は無料版のみ提供しています。商用エディションは準備が整い次第、別途ご案内します。",
    download: { breadcrumbLabel: "現在位置", breadcrumbCurrent: "ダウンロード", waitNotice: "ブラウザーでインストーラーのダウンロードが始まるまで、このページを開いたままにしてください。", fileInfoLabel: "インストーラー情報", version: "バージョン {version}", fileSize: "約3.3 MB", requirement: "Microsoft Edge WebView2 Runtimeが必要", countdown: "{seconds}秒後にダウンロードを開始します。", starting: "ダウンロードを開始しています。", help: "自動ダウンロードが始まりませんか？", directAction: "インストーラーを直接ダウンロード" },
  },
  blog: { eyebrow: "GHOSTYAK BLOG", heading: "ブログ", intro: "製品ニュースや開発の過程で学んだことを記録します。", readMore: "記事を読む", breadcrumbLabel: "現在位置", breadcrumbHome: "ブログ" },
};

export default ja;
