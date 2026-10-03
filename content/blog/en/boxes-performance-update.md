---
title: "Boxes performance update: v0.4.1 is coming soon"
description: "We optimized Boxes to run faster and lighter, focusing on desktop organization. The optimized v0.4.1 is coming soon."
publishedAt: "2026-10-03"
translationKey: "boxes-performance-update"
sourceRevision: 1
image: "/images/boxes/ghostyak-boxes-1920x1080.png"
imageAlt: "Apps, photos, music and project boxes on a Windows desktop, with a Downloads box in list view and two collapsed boxes"
---

**Boxes v0.4.1 is coming soon.** This version focuses on performance so that Boxes runs faster and lighter.

## Why we optimized Boxes

A desktop organizer is the first workspace you see every time you turn on your PC. Earlier versions drew boxes with a web view (WebView2), which repeatedly caused boxes to appear late right after sign-in and to display incorrectly on monitors with different scaling.

## What changes

- **Boxes are drawn directly on the desktop.** We rebuilt Boxes to draw boxes and icons with Windows graphics features (DirectComposition and Direct2D) instead of a web view.
- **Menus and settings now use native Windows UI.** Box menus, the settings window and the tray menu open as standard Windows menus and windows, so they run lighter.
- **A focus on desktop organization.** For performance, all widget features such as the photo viewer and clocks have been removed starting with v0.4. If you have been using widgets, we appreciate your understanding.

## Release

v0.4.1 will be available from GitHub Releases and the Boxes product page as soon as it is ready. Organizing files, folders and app shortcuts into boxes remains free for personal, company and work use.

If you run into a problem or see something to improve, please tell us your Windows and Boxes versions and what was happening when it occurred.

[Explore Boxes](/en/product/boxes)

[Check the latest release](https://github.com/ghostyak/boxes/releases/latest)

[Report a problem or share feedback](https://github.com/ghostyak/boxes/issues)
