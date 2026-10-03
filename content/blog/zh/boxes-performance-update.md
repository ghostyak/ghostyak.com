---
title: "Boxes 性能优化：v0.4.1 即将发布"
description: "为了让 Boxes 运行得更快、更轻巧，我们以桌面整理功能为中心进行了性能优化。优化后的 v0.4.1 即将发布。"
publishedAt: "2026-10-03"
translationKey: "boxes-performance-update"
sourceRevision: 1
image: "/images/boxes/ghostyak-boxes-1920x1080.png"
imageAlt: "Windows 桌面上的应用、照片、音乐和项目盒子，以列表视图打开的下载盒子，以及两个已折叠的盒子"
---

**Boxes v0.4.1 即将发布。** 这个版本专注于性能优化，让 Boxes 运行得更快、更轻巧。

## 为什么要优化

桌面整理工具是每次打开电脑时最先看到的工作空间。以前的版本使用网页视图（WebView2）绘制盒子，因此反复出现登录后盒子显示较慢、在缩放比例不同的显示器上显示错位等问题。

## 有哪些变化

- **直接在桌面上绘制盒子。** 我们重新构建了 Boxes，改用 Windows 图形功能（DirectComposition、Direct2D）而不是网页视图来绘制盒子和图标。
- **菜单和设置窗口也改为 Windows 原生界面。** 盒子菜单、设置窗口和托盘菜单以 Windows 标准菜单和窗口打开，运行更轻巧。
- **专注于桌面整理。** 为了性能，从 v0.4 起移除了照片查看器、时钟等全部小组件功能。如果您一直在使用小组件，敬请谅解。

## 发布说明

v0.4.1 准备就绪后即可在 GitHub Releases 和 Boxes 产品页面下载。用盒子整理文件、文件夹和应用快捷方式的功能，仍然对个人、公司和工作用途免费。

如果在使用中遇到问题或发现需要改进的地方，请告诉我们您使用的 Windows 和 Boxes 版本，以及问题发生时的情况。

[了解 Boxes](/zh/product/boxes)

[查看最新版本](https://github.com/ghostyak/boxes/releases/latest)

[报告问题或提出意见](https://github.com/ghostyak/boxes/issues)
