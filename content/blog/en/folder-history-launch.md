---
title: "Folder History is here: a free Windows app to reopen recently visited folders in File Explorer"
description: "Can't remember which folder you were working in a few days ago? Folder History automatically records the folders you visit in Windows File Explorer so you can reopen them right from the tray. It's free."
publishedAt: "2026-09-24"
translationKey: "folder-history-launch"
sourceRevision: 1
image: "/images/folder-history/folder-history-main.png"
imageAlt: "Folder History’s recent visits list, showing folder names, paths, and last visit times, newest first"
---

**Folder History is now available.** It is a free Windows app that automatically records the folders you visit in Windows File Explorer, then lets you pull them up from the system tray in order of your most recent visits and reopen them right away.

![Folder History recent visits list](/images/folder-history/folder-history-main.png)

## Where was that folder I just had open?

When you move between subfolders inside a project folder, it is easy to lose track of exactly where you were a few days later. You end up clicking back through the path or trying to recall the folder name.

We built Folder History for that moment. It records the folders you open in File Explorer inside the folders you choose, so you can find and open them from your recent visits instead of relying on memory.

## How to reopen recently visited folders

1. **Add a watched folder.** Choose a folder to record, such as `D:\Work`. That folder and its subfolders become the recording scope.
2. **Use File Explorer as usual.** When you open a folder in Windows File Explorer, its last visit time is recorded automatically.
3. **Reopen it from the tray.** Double-click the tray icon to see your recently visited folders in order. Double-click a folder in the list or press Enter to open it again in File Explorer.

Clicking the window's X only hides the window, and recording continues. To quit completely, right-click the tray icon and choose Exit.

## Key features

- **Search and sort**: Search by folder name or path (Ctrl+F), and sort by folder, path, or last visit.
- **Pin to top**: Pin folders you open often to keep them at the top of the list.
- **Exclusion rules**: List folder names you don't want recorded, such as `node_modules` or `.git`, one per line. You can use `*` and `?`.
- **Trash and restore**: Deleted records go to the trash and can be restored with their original visit time.
- **History retention**: Keep history indefinitely, or clean it up automatically after 1, 3, 6, or 12 months.
- **Copy path**: Copy a folder's full path with the row's copy button or Ctrl+C.
- **Theme and auto-start**: Choose a system, light, or dark theme, and turn on launching at Windows sign-in in Settings. Auto-start is off by default.

![Folder History exclusion rules editor](/images/folder-history/folder-history-ignore-rule.png)

## Where is my visit history stored?

Visit history and settings are stored in local app data on your PC. No server or account is required. Deleting records leaves your actual folders and files untouched.

## Which folder visits are recorded?

Folder History records when you open a folder inside a watched folder in Windows File Explorer, or return to that folder from another window or tab. Navigation in other file managers or file open dialogs, and file changes, are not recorded as visits.

## Requirements and free download

Folder History is free and runs on Windows 11 x64. The installer installs for the current user account, so no administrator rights are needed, and it installs the WebView2 Runtime during setup if it is missing.

Visit the product page to see real screenshots and frequently asked questions, and to download the installer.

[Explore Folder History](/en/product/folder-history)

[View the GitHub repository](https://github.com/ghostyak/folder-history)
