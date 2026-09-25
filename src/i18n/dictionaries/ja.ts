import landing from "@/i18n/landing/ja";
import type { Dictionary } from "@/i18n/get-dictionary";

const ja: Dictionary = {
  landing,
  share: {
    heading: "役に立ったら、ぜひ共有してください",
    copyLink: "リンクをコピー",
    copied: "リンクをコピーしました",
    copyFailed: "自動でコピーできませんでした。下のアドレスをコピーしてください。",
    copyField: "共有するページのアドレス",
    x: "Xで共有",
    facebook: "Facebookで共有",
    linkedin: "LinkedInで共有",
    instagram: "Instagramで共有",
    threads: "Threadsで共有",
  },
  csvSearch: {
    downloadAction: "Windows用をダウンロード",
    "category": "デジタルフォレンジック",
    "description": "大容量CSV・Excelの検索を、これひとつで。",
    "repositoryAction": "GitHubで見る",
    "screenshots": [
      {
        "alt": "CSV・Excelファイルを開くCSV Search Engineの開始画面",
        "caption": "ファイルを開く · 韓国語UI"
      },
      {
        "alt": "MFTデータ、列ごとの検索欄と行を表示したCSV Search Engineの画面",
        "caption": "MFTデータの表示 · 韓国語UI"
      }
    ],
    "metadataTitle": "CSV Search Engine | 大容量CSV・Excelを検索するDFIRツール",
    "licenseBadge": "非商用利用は無料",
    "howToAction": "使い方",
    "workflow": {
      "eyebrow": "使い方",
      "title": "ファイルを開いて、\n列見出しの下ですぐに検索。",
      "description": "フォレンジックツールが出力した大容量のCSVやExcelファイルから、列ごとの条件で必要な行だけを絞り込めます。",
      "steps": [
        {
          "title": "ファイルを開く",
          "description": "ファイル → 開く(Ctrl+O)でCSV・XLS・XLSXファイルを選ぶか、ウィンドウにドラッグ＆ドロップします。"
        },
        {
          "title": "列ごとに検索",
          "description": "列見出しの下の検索欄に条件を入力してEnterを押します。複数の列に入力すると、すべての条件に一致する行だけを表示します。"
        },
        {
          "title": "並べ替えと詳細表示",
          "description": "列見出しをクリックして並べ替え、行を選んで行の詳細からすべての列の値を確認します。"
        }
      ]
    },
    "features": {
      "eyebrow": "主な機能",
      "title": "探して、絞り込んで、まとめる。",
      "items": [
        {
          "title": "列ごとの検索・フィルター",
          "description": "含む、除外、完全一致、前方・後方一致、空欄・値ありの条件で目的の行を探します。"
        },
        {
          "title": "数値・日付の範囲",
          "description": "より大きい・以上・未満・以下・範囲の条件で数値と日付を比較します。例: 2026-09-01 .. 2026-09-20"
        },
        {
          "title": "並べ替えとグループ化",
          "description": "列見出しのクリックで並べ替え、列をフィールドグループにドラッグすると同じ値を最大8階層でまとめられます。"
        },
        {
          "title": "表の閲覧",
          "description": "連続スクロール、列の非表示、列幅の調整、行の詳細表示で、列の多い表も快適に確認できます。"
        },
        {
          "title": "CSV・Excel対応",
          "description": "CSVとXLS・XLSXファイルを開き、シートタブで切り替えます。Excelのインストールは不要です。"
        },
        {
          "title": "多言語・文字コード",
          "description": "韓国語・英語・日本語・中国語のUIに対応し、UTF-8、CP949、Shift_JISなどCSVの文字コードを自動で判別します。"
        }
      ]
    },
    "privacy": {
      "eyebrow": "オフライン分析",
      "title": "元のファイルはそのまま、分析はPCの中で。",
      "description": "元のファイルを変更したり外部にアップロードしたりしません。インターネット接続やアカウントなしで動作し、自動のネットワーク通信や利用状況の収集も行いません。"
    },
    "faq": {
      "title": "よくある質問",
      "items": [
        {
          "question": "無料で使えますか？",
          "answer": "非商用利用に限り、すべての機能を期間・回数の制限なく無料で使えます。企業の内部業務や有償のフォレンジック分析など、商用業務での利用は禁止されています。利用条件はアプリのヘルプ → プログラム情報でも確認できます。"
        },
        {
          "question": "どのファイルを開けますか？",
          "answer": "CSV、XLS、XLSXファイルを開けます。XLSファイルは最大32 MiBまで対応し、Excelの書式・グラフ・マクロの実行と数式の再計算には対応していません。"
        },
        {
          "question": "CSVの文字が化けて表示されます。",
          "answer": "初期設定では文字コードを自動判別します。文字化けする場合は、設定 → CSVエンコーディングで適切な文字コードを選び、ファイルを開き直してください。"
        },
        {
          "question": "データの編集やエクスポートはできますか？",
          "answer": "閲覧・検索用のツールです。データの編集と検索結果のエクスポートにはまだ対応していません。"
        },
        {
          "question": "大きなファイルはどのくらい時間がかかりますか？",
          "answer": "ファイルを初めて開くときや新しい列を検索するときは、検索用インデックスの作成に時間がかかることがあり、キャッシュを保存するためのディスクの空き容量が必要です。処理時間はファイルの内容とPCの性能によって異なり、10 GiB以上のCSVの性能はまだ十分に検証していません。"
        },
        {
          "question": "必要な環境は？",
          "answer": "64ビット版Windows用です。インストーラーを実行したあと、スタートメニューからCSV Search Engineを起動してください。"
        }
      ]
    },
    "download": {
      "title": "ダウンロードして、\n最初のファイルを開いてみましょう。",
      "description": "64ビット版Windows · 非商用利用は無料"
    }
  },
  productCategories: { windowsProductivity: "Windows生産性", webApps: "Webアプリ" },
  "folderHistory": {
    "metadataTitle": "Folder History | 最近開いたフォルダーをすぐに開き直せるWindowsアプリ",
    "cardDescription": "エクスプローラーで開いたフォルダーを記録し、トレイからすぐに開き直せるWindowsアプリです。",
    "description": "エクスプローラーで開いたフォルダーを記録しておき、トレイからすぐに開き直しましょう。",
    "downloadAction": "Windows x64版を無料ダウンロード",
    "arm64DownloadAction": "Windows ARM64版を無料ダウンロード",
    "howToAction": "使い方",
    "screenshots": [
      {
        "alt": "Folder Historyの最近の訪問一覧。フォルダー名、パス、最終訪問日時が新しい順に表示されている",
        "caption": "最近の訪問一覧 · 韓国語UI"
      },
      {
        "alt": "node_modulesと.nextを入力したFolder Historyの除外ルール編集画面",
        "caption": "除外ルールの編集"
      },
      {
        "alt": "画面テーマ、Windowsログイン時の起動、履歴の保存期間を設定するFolder Historyの設定画面",
        "caption": "設定 · 画面テーマ、自動起動、履歴の保存"
      }
    ],
    "workflow": {
      "eyebrow": "使い方",
      "title": "フォルダーを探し回らずに。\n最近の訪問からすぐに開けます。",
      "description": "数日前に作業したフォルダーがどこだったか思い出せないときは、トレイアイコンをダブルクリック。最近開いたフォルダーが順番に表示されます。",
      "steps": [
        {
          "title": "監視フォルダーを追加",
          "description": "記録するフォルダーを選びます。選んだフォルダーとそのサブフォルダーが記録の範囲です。"
        },
        {
          "title": "いつもどおりエクスプローラーを使う",
          "description": "Windowsのエクスプローラーでフォルダーを開くと、最終訪問日時が自動で記録されます。"
        },
        {
          "title": "トレイから開き直す",
          "description": "トレイアイコンをダブルクリックし、一覧のフォルダーをダブルクリックするかEnterを押すと、エクスプローラーで開き直せます。"
        }
      ]
    },
    "features": {
      "eyebrow": "主な機能",
      "title": "必要なフォルダーだけを、好きな方法で。",
      "items": [
        {
          "title": "検索と並べ替え",
          "description": "フォルダー名やパスで検索し(Ctrl+F)、フォルダー・パス・最終訪問の順に並べ替えられます。"
        },
        {
          "title": "上部に固定",
          "description": "よく開くフォルダーはピンで一覧の一番上に固定しましょう。"
        },
        {
          "title": "除外ルール",
          "description": "node_modulesや.gitなど、記録しないフォルダー名を1行に1つずつ入力します。*と?を使えます。"
        },
        {
          "title": "ゴミ箱と復元",
          "description": "削除した記録はゴミ箱に保管され、元の訪問日時で復元できます。"
        },
        {
          "title": "履歴の保存期間",
          "description": "履歴を無期限に保存するか、1・3・6・12か月が過ぎたら自動で整理します。"
        },
        {
          "title": "パスのコピー",
          "description": "行のコピーボタンまたはCtrl+Cで、フォルダーのフルパスをコピーします。"
        }
      ]
    },
    "privacy": {
      "eyebrow": "PC内に保存",
      "title": "記録はあなたのPCにだけ残ります。",
      "description": "訪問履歴と設定はPCのローカルアプリデータに保存され、サーバーやアカウントは必要ありません。記録を削除しても、実際のフォルダーやファイルはそのままです。"
    },
    "faq": {
      "title": "よくある質問",
      "items": [
        {
          "question": "どのフォルダー移動が記録されますか？",
          "answer": "監視フォルダー内でWindowsのエクスプローラーを使ってフォルダーを開いたとき、またはほかのウィンドウやタブからそのフォルダーに戻ったときに記録します。ほかのファイルマネージャーやファイルを開くダイアログでの移動、ファイルの変更は訪問として記録しません。"
        },
        {
          "question": "無料ですか？",
          "answer": "はい、無料で使えます。"
        },
        {
          "question": "ウィンドウを閉じると記録は止まりますか？",
          "answer": "いいえ。ウィンドウの×はウィンドウを隠すだけで、記録は続きます。完全に終了するには、トレイアイコンを右クリックして「終了」を選んでください。"
        },
        {
          "question": "Windowsの起動時に自動で実行できますか？",
          "answer": "設定の「Windowsログイン時に実行」をオンにしてください。初期設定ではオフです。"
        },
        {
          "question": "必要な環境は？",
          "answer": "Windows 11 x64またはARM64で使えます。インストーラーは現在のユーザーアカウントにインストールされるため管理者権限は不要で、WebView2 Runtimeがない場合はインストール中に一緒にインストールします。"
        }
      ]
    },
    "download": {
      "title": "ダウンロードして、\n最初の監視フォルダーを追加しましょう。",
      "description": "Windows 11 x64 / ARM64 · 管理者権限なしでインストール"
    }
  },
  worldClock: {
  "badge": "新機能 · 世界時計ウィジェット",
  "title": "デスクトップで、世界の時間をひと目で。",
  "description": "ソウルの午前、ロンドンの未明、ニューヨークの夜。Boxesの世界時計で、複数の都市の時刻と日付を並べて確認しましょう。ファイルやショートカットも同じデスクトップで整理できます。",
  "widgetTitle": "世界時計",
  "previewCaption": "世界時計ウィジェットのプレビュー · 時刻は表示例です。",
  "cities": [
    "ソウル",
    "ロンドン",
    "サンフランシスコ",
    "ニューヨーク",
    "バンクーバー"
  ],
  "heading": "異なるタイムゾーンも、同じ作業スペースで。",
  "intro": "海外の同僚に連絡する前や、遠くにいる家族に電話する前に。デスクトップで相手の時間を確認しましょう。",
  "benefits": [
    {
      "title": "複数の都市を並べて",
      "description": "よく確認する都市の時刻をひと目で比較できます。"
    },
    {
      "title": "日付と時差も確認",
      "description": "都市ごとの日付とUTCオフセットで、日付が異なる地域も確認できます。"
    },
    {
      "title": "整理とウィジェットを一緒に",
      "description": "ファイル、ショートカット、世界時計を作業スペースにまとめましょう。"
    }
  ]
},
  metadata: {
    site: { title: "GhostYak | 日々の作業を整えるWindowsソフトウェア", titleTemplate: "%s | GhostYak", description: "GhostYakは、毎日のWindowsワークスペースをよりシンプルで便利にするソフトウェアを開発しています。" },
    boxes: { title: "Boxes", openGraphTitle: "GhostYak Boxes | Windowsデスクトップ整理ツール" },
    boxesDownload: { title: "Boxesをダウンロード" },
    blog: { title: "ブログ", description: "GhostYakの製品ニュースと開発ストーリーをお届けします。" },
  },
  header: { homeLabel: "GhostYakホーム", navigationLabel: "メインメニュー", language: "言語を選択", products: "製品", blog: "ブログ", support: "支援する" },
  supportPage: {
    metadataTitle: "GhostYakを支援する",
    title: "GhostYakを応援してください",
    description: "GhostYakのWindowsツールとWebアプリの多くは無料で提供しています。いただいた支援は、製品を作り続け、磨き上げるために使われます。",
    methodsAction: "支援方法を見る",
    productsAction: "製品を見る",
    methods: { eyebrow: "支援方法", title: "ご都合のよい方法で支援してください", description: "どちらも外部の支援ページで手続きし、新しいタブで開きます。", action: "{name}で支援する", items: { buyMeACoffee: "カードで手軽に支援できる海外の支援サービスです。海外からも利用しやすいサービスです。", ctee: "韓国の決済手段で支援できる、韓国のクリエイター支援プラットフォームです。" } },
    uses: { eyebrow: "支援の使い道", title: "支援は製品を続けるために使われます", items: [{ title: "新機能と新製品", description: "ユーザーの意見を反映した機能や、新しいツールを作る時間を確保します。" }, { title: "メンテナンス", description: "Windowsアップデートへの対応やバグ修正で、お使いの製品を安定して保ちます。" }, { title: "Webサービスの運営", description: "ClockやOSINTSなどのWebアプリと、このWebサイトの運営費用に充てます。" }] },
    other: {
      eyebrow: "ほかの応援方法",
      title: "支援以外にもできることがあります",
      share: { title: "周りに紹介する", description: "役に立ったGhostYakの製品を、必要としている人に紹介してください。" },
      feedback: { title: "意見を送る", description: "GitHubで問題を報告したり、改善のアイデアを残したりしてください。", action: "GitHubを開く" },
      follow: { title: "最新情報をシェアする", description: "InstagramとThreadsでGhostYakをフォローし、最新情報をシェアしてください。" },
    },
    thanks: { title: "ありがとうございます", description: "GhostYakを使い、応援してくださりありがとうございます。より良いツールでお応えします。" },
  },
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
    products: { eyebrow: "GHOSTYAK SOFTWARE", heading: "毎日手に取る、小さな道具をつくっています", intro: "デスクトップ整理や時間管理から、OSINT・フォレンジック調査まで。機能を増やすより、よく出会う不便をひとつ、きちんと解決することに集中しています。", freeBadge: "無料", viewAction: "製品を見る", webBadge: "ウェブ", clockDescription: "現在時刻、世界時計、アラーム、タイマー、ポモドーロ、ストップウォッチを、インストール不要でブラウザからすぐに使える時間ツールです。", osintsDescription: "複数のOSINTサイトを行き来せずに、IPアドレスやドメインなどをひとつの場所で検索・分析しましょう。", webAction: "ウェブサイトを開く", clockPreviewLabel: "Clockのプレビュー" },
    blog: { eyebrow: "BLOG", heading: "つくる過程を記録しています", intro: "新しい製品や機能のお知らせ、開発中にぶつかった問題とその解決までをお伝えします。", viewAction: "ブログを見る" },
  },
  boxes: {
    description: "ファイルは元のフォルダーに置いたまま、デスクトップでは作業ごとのボックスにまとめましょう。基本機能は会社でも無料です。",
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
