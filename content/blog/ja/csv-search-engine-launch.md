---
title: "CSV Search Engineを公開：必要な検索ツールを自分たちで"
description: "Timeline Explorerで経験した導入時の依存関係やCSV解析エラーをきっかけに生まれた、Rust製のDFIRアプリを紹介します。"
publishedAt: "2026-09-20"
translationKey: "csv-search-engine-launch"
sourceRevision: 1
---

**CSV Search Engineを公開しました。** デジタルフォレンジック・インシデント対応（DFIR）で、大容量のCSV・Excelデータを検索するために作ったWindowsアプリです。

## 開発のきっかけ

始まりは、Timeline Explorerを使う中で感じた不便さでした。導入に必要な依存関係を準備する必要があり、作業中にCSVの解析エラーに遭遇することもありました。データの確認が、ツールの準備やエラー対応で中断される場面を減らしたいと考えました。

この経験から、必要な検索ツールを自分たちで作り始めました。それがCSV Search Engineの出発点です。

## Rustで作った検索ツール

開発言語は**Rust**です。CSV・Excelファイルを開き、列ごとの検索、並べ替え、同じ値のグループ化ができます。分析対象のデータから必要な情報を見つける作業に重点を置きました。

製品ページで実際の画面を確認し、Windows用インストーラーをダウンロードできます。

[CSV Search Engineを見る](/ja/product/csv-search-engine)

[GitHubリポジトリを見る](https://github.com/ghostyak/csv-search-engine)

