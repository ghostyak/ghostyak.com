import type { Dictionary } from "@/i18n/get-dictionary";

// Translation of the Korean source, including the trial and Pro terms of 2026-10-31.
const notes: Dictionary["notes"] = {
  metadataTitle: "Ghostyak Notes | PDFに書き込んで、すぐに探せるWindowsノートアプリ",
  metadataDescription: "PDFの上にペンとキーボードで書き込み、読んだ内容をすべての文書からすぐに探せるWindowsノートアプリです。30日間すべての機能を試せます。",
  heroTitle: "PDFに書き込んで、すぐに探せる\nノートアプリ、Ghostyak Notes",
  featuredAction: "PDFノートアプリを見る",
  cardDescription: "PDFの上にペンとキーボードで書き込み、読んだ内容をすべての文書からすぐに探せるWindowsノートアプリです。",
  description: "PDFの上にペンとキーボードで書き込み、読んだ内容はすべての文書からすぐに探せます。",
  featuredEyebrow: "新製品",
  betaBadge: "ベータテスト中",
  trialBadge: "30日間すべての機能を利用可能",
  downloadAction: "Windows x64版をダウンロード",
  featuresAction: "機能を見る",
  pricingAction: "体験版とProを比較する",
  heroNote: "まだベータテスト中のため、購入機能は準備中です。初めて起動した日から30日間すべての機能を使え、30日を過ぎても新しいバージョンをインストールし直せばさらに30日使えます。",
  screenshots: {
    annotate: { alt: "Ghostyak NotesでPDFの教材に蛍光マーカーを引き、余白に手書きでメモした画面" },
    pen: { alt: "3つの色スロット、カラーパレット、3段階の太さを選ぶGhostyak Notesのペン設定", caption: "ペン設定 · 色と太さ" },
    search: { alt: "韓国語の単語を入力し、2つの文書で見つかったページをプレビュー付きで表示するGhostyak Notesの全体検索", caption: "すべての文書から検索" },
    library: { alt: "10個の文書を表紙のグリッドで表示し、左にフォルダーとお気に入りを置いたGhostyak Notesのライブラリ", caption: "ライブラリ · フォルダーと表紙グリッド" },
    pages: { alt: "24ページの文書の全ページをグリッドに並べ、移動・複製・回転ボタンを備えたGhostyak Notesのページ一覧", caption: "ページ一覧" },
    spread: { alt: "書き込みのある4ページと5ページを並べて表示したGhostyak Notesの見開き表示", caption: "見開き表示" },
  },
  video: { playAction: "紹介動画を見る", title: "Ghostyak Notes 紹介動画", posterAlt: "青い背景にGhostyak Notesのアプリアイコンと名前、「PDFに書いて、何でも探せるノート」という文を置いた紹介動画の最初の画面", caption: "1分29秒 · 韓国語UI", watchOnYouTube: "YouTubeで見る" },
  showcase: {
    eyebrow: "主な機能",
    title: "PDFを読む、書く、探すを\nひとつのアプリで。",
    description: "教材や講義資料、報告書や論文。PDFを取り込んでその上に直接書き、あとで必要なページをまた探せます。",
    items: {
      pen: {
        eyebrow: "手書き",
        title: "ペン、蛍光ペン、消しゴム。\n色と太さは自分好みに。",
        description: "ペンと蛍光ペンそれぞれに、よく使う色3つと太さ3つを登録してすぐに切り替えられます。書いた内容は書くそばから自動保存されます。",
        points: ["ペン・蛍光ペン・消しゴムと投げ縄選択", "線・矢印・四角形・楕円の図形と画像の挿入", "元に戻すとやり直し"],
      },
      search: {
        eyebrow: "全体検索",
        title: "どの本にあったか分からなくても、\n一度で見つかります。",
        description: "Ctrl+Shift+Fでライブラリ内のすべての文書の本文を検索できます。結果は文書ごとにまとめられ、ページ番号とプレビュー付きで表示され、Enterでそのページをすぐに開きます。",
        points: ["すべての文書から検索（Ctrl+Shift+F）", "文書内を検索（Ctrl+F）", "ブックマークとPDFの目次で移動"],
      },
      library: {
        eyebrow: "ライブラリ",
        title: "教材とノートを\n本棚のように整理。",
        description: "PDFを取り込んだり新しいノートを作ったりして、フォルダーに分けられます。表紙ごとにどこまで読んだかが表示され、複数の文書をタブで開いて行き来できます。",
        points: ["フォルダー・お気に入り・最近の文書", "表紙グリッドとリスト表示、並べ替え", "削除した文書はごみ箱に保管"],
      },
      pages: {
        eyebrow: "ページ一覧",
        title: "ページを移動、追加、\n回転。",
        description: "文書の全ページを1画面に並べて、順序の変更、複製、削除、回転ができます。空白ページを追加したり、別のPDFのページを挿入したりすることもできます。",
        points: ["ブックマークしたページ・書き込んだページだけを表示", "無地・罫線・方眼・ドットの空白ページ", "ページ編集も元に戻せます"],
      },
      spread: {
        eyebrow: "表示",
        title: "1ページでも、\n本のように見開きでも。",
        description: "単ページ表示と見開き表示を切り替え、幅や高さに合わせて拡大できます。長い文書でも、サイドバーから目的のページへすぐに移動できます。",
        points: ["単ページ・見開き表示", "幅・高さに合わせる、拡大・縮小", "ページ・書き込んだページ・マークした文字・ブックマーク・目次のサイドバー"],
      },
    },
  },
  more: {
    eyebrow: "その他の機能",
    title: "勉強と仕事に必要な道具をそろえました。",
    items: [
      { title: "テキストボックス", description: "キーボードでページの上に文字を書けます。ゴシック・明朝・手書き・等幅のフォントを選べます。" },
      { title: "文字にマーク", description: "PDFの文字を選択して蛍光・下線・取り消し線でマークし、コピーできます。" },
      { title: "ブックマーク", description: "大事なページにブックマークを付けておき、一覧からすぐに移動できます。" },
      { title: "のぞき見", description: "書き込みやテキストボックスをクリックして一時的に透かし、その下の本文を確認できます。" },
      { title: "自動保存", description: "保存ボタンはありません。書いた内容は書くそばから文書ファイルに保存されます。" },
      { title: "キーボードショートカット", description: "ツールの選択、検索、ページ移動をショートカットで実行できます。" },
    ],
  },
  privacy: {
    eyebrow: "PC内に保存",
    title: "PDFと書き込みは自分のPCだけに保存されます。",
    description: "文書はPCの「ドキュメント」フォルダー内の「Ghostyak Notes」フォルダーにファイルとして保存されます。アカウントの作成やインターネット接続なしで使え、取り込んだPDFの元ファイルは変更しません。",
  },
  faq: {
    title: "よくある質問",
    items: [
      { question: "体験版はどのくらい使えますか？", answer: "アプリを初めて起動した日から30日間、すべての機能を制限なく使えます。初回起動時に利用期間の終了日をお知らせします。" },
      { question: "30日を過ぎるとどうなりますか？", answer: "文書を開いて読み、文書内を検索することはできますが、手書きとすべての文書からの検索は使えません。作成した文書と書き込みは削除されません。ベータテスト中は、新しいバージョンをインストールし直せばさらに30日使えます。購入機能が整ったら、使い続けるにはProが必要です。" },
      { question: "文書はどこに保存されますか？", answer: "PCの「ドキュメント」フォルダー内の「Ghostyak Notes」フォルダーに保存されます。ライブラリ左下の「문서 폴더 열기」（文書フォルダーを開く）ですぐに開けます。" },
      { question: "スキャンしたPDFも検索できますか？", answer: "はい。文字情報のないスキャンPDFは、アプリが文字を認識（OCR）して検索できるようにします。認識はお使いのPCの中で行われ、手書き文字の検索にはまだ対応していません。" },
      { question: "ペンタブレットがなくても、マウスでPDFに書き込めますか？", answer: "はい。マウスで手書きし、キーボードでテキストボックスに文字を入力できます。" },
      { question: "アプリはどの言語で提供されますか？", answer: "現在、アプリの画面は韓国語で提供されています。ほかの言語にもまもなく対応する予定です。" },
      { question: "どのWindowsで使えますか？", answer: "64ビット（x64）のWindows用です。Microsoft Edge WebView2 Runtimeがない場合は、インストーラーがダウンロードしてインストールします。" },
    ],
  },
  download: {
    title: "ダウンロードして、\n最初のPDFを取り込みましょう。",
    description: "Windows x64 · ベータテスト中 · 30日間すべての機能を利用可能",
  },
};

export default notes;
