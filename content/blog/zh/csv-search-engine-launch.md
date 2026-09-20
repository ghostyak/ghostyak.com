---
title: "CSV Search Engine发布：亲手打造需要的搜索工具"
description: "介绍Rust开发的DFIR应用CSV Search Engine，开发契机源于使用Timeline Explorer时遇到的安装依赖与CSV解析错误。"
publishedAt: "2026-09-20"
translationKey: "csv-search-engine-launch"
sourceRevision: 1
---

**CSV Search Engine现已发布。** 这是一款Windows应用，用于在数字取证与事件响应（DFIR）工作中搜索大型CSV和Excel数据集。

## 为什么开发它

起点是使用Timeline Explorer时遇到的不便。我们需要准备安装所需的依赖，工作中也曾遇到CSV解析错误。我们希望减少这样的中断：原本准备查看数据，却转而处理工具配置或错误。

这段经历促使我们动手开发所需的搜索工具，CSV Search Engine由此诞生。

## 使用Rust开发的搜索工具

应用使用**Rust**开发。它可以打开CSV和Excel文件，按列搜索、排序，并将相同的值分组查看。我们专注于帮助分析工作从数据中找到所需的信息。

产品页面提供实际界面截图与Windows安装程序下载。

[了解CSV Search Engine](/zh/product/csv-search-engine)

[查看GitHub仓库](https://github.com/ghostyak/csv-search-engine)

