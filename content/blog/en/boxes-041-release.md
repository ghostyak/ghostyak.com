---
title: "Boxes v0.4.1 is now available"
description: "Faster and lighter, Boxes v0.4.1 is now available. It installs without WebView2 or administrator permission and adds live boxes that show a folder as it is, plus a view switcher for each box."
publishedAt: "2026-10-04"
translationKey: "boxes-041-release"
sourceRevision: 1
image: "/images/boxes/ghostyak-boxes-1920x1080.png"
imageAlt: "Apps, photos, music and project boxes on a Windows desktop, with a Downloads box in list view and two collapsed boxes"
---

**Boxes v0.4.1 is now available.** This is the performance release we announced in [our previous post](/en/blog/boxes-performance-update). You can download it from the Boxes product page and GitHub Releases.

## A lighter installation

- **No WebView2 required.** We rebuilt the boxes, menus, settings window and tray with native Windows features.
- **No administrator permission required.** By default, Boxes installs for the current user only.
- The installer is for 64-bit (x64) Windows 10/11.

## New features

### Live boxes

A live box shows the contents of a single folder as it is. Right-click a folder in a box or in Windows File Explorer and choose **Open this folder as a live box**. In Windows 11 File Explorer, the command is under **Show more options**.

When files are added to or deleted from the folder, the box updates right away. Live boxes are view-only, so Boxes never moves or deletes the files in the folder.

### A view for each box

Use the buttons in the status bar at the bottom of a box to choose **Details, Icons or Large icons** for each box. The Details view shows the date modified, type and size, and you can sort by clicking a column header. The left side of the status bar shows the number of items.

### Update notifications

When a new version is released, Boxes lets you know through a Windows notification and the tray menu. It does not download or install updates automatically.

## Before you install

- The installer is not code-signed yet, so you may see a **Windows protected your PC** warning the first time you run it. Click **More info**, then **Run anyway**.
- Boxes you created in the previous version are imported automatically the first time you run the app.
- Widget features such as the photo viewer and clock were removed starting with v0.4.

Organizing file, folder and app shortcuts into boxes remains free for personal, business and work use. If you run into a problem, please tell us your Windows and Boxes versions and what happened.

[Download Boxes](/en/product/boxes#download)

[View the v0.4.1 release](https://github.com/ghostyak/boxes/releases/tag/v0.4.1)

[Report an issue or send feedback](https://github.com/ghostyak/boxes/issues)
