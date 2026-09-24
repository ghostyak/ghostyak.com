import landing from "@/i18n/landing/en";
import type { Dictionary } from "@/i18n/get-dictionary";

const en: Dictionary = {
  landing,
  csvSearch: {
    downloadAction: "Download for Windows",
    "category": "Digital forensics",
    "description": "Search large CSV and Excel files in one place.",
    "repositoryAction": "View on GitHub",
    "screenshots": [
      {
        "alt": "CSV Search Engine start screen for opening CSV and Excel files",
        "caption": "Open a file · Korean interface"
      },
      {
        "alt": "CSV Search Engine displaying MFT data, column search fields, and rows",
        "caption": "MFT data view · Korean interface"
      }
    ],
    "metadataTitle": "CSV Search Engine | DFIR tool for searching large CSV and Excel files",
    "licenseBadge": "Free for non-commercial use",
    "howToAction": "How it works",
    "workflow": {
      "eyebrow": "How it works",
      "title": "Open a file and\nsearch right under the column headers.",
      "description": "Narrow large CSV or Excel files exported by forensic tools down to just the rows you need with per-column conditions.",
      "steps": [
        {
          "title": "Open a file",
          "description": "Choose a CSV, XLS, or XLSX file with File → Open (Ctrl+O), or drag it onto the window."
        },
        {
          "title": "Search by column",
          "description": "Type a condition in the search box under a column header and press Enter. Enter conditions in several columns to show only rows that match all of them."
        },
        {
          "title": "Sort and view details",
          "description": "Click a column header to sort, select a row, and open Row details to see every column’s value."
        }
      ]
    },
    "features": {
      "eyebrow": "Key features",
      "title": "Find it, narrow it, group it.",
      "items": [
        {
          "title": "Column search and filters",
          "description": "Find rows with contains, excludes, exact match, starts or ends with, empty, and not empty conditions."
        },
        {
          "title": "Number and date ranges",
          "description": "Compare numbers and dates with greater than, at least, less than, at most, and between. Example: 2026-09-01 .. 2026-09-20"
        },
        {
          "title": "Sorting and grouping",
          "description": "Click a column header to sort, and drag columns into Field groups to group identical values up to eight levels deep."
        },
        {
          "title": "Table navigation",
          "description": "Continuous scrolling, hidden columns, adjustable column widths, and row details make wide tables easy to explore."
        },
        {
          "title": "CSV and Excel support",
          "description": "Open CSV, XLS, and XLSX files and switch between sheet tabs. Excel doesn’t need to be installed."
        },
        {
          "title": "Languages and encodings",
          "description": "Korean, English, Japanese, and Chinese UI, with automatic detection of CSV encodings such as UTF-8, CP949, and Shift_JIS."
        }
      ]
    },
    "privacy": {
      "eyebrow": "Offline analysis",
      "title": "Originals stay untouched. Analysis stays on your PC.",
      "description": "It never modifies or uploads your original files. It runs without an internet connection or account, and makes no automatic network requests or usage collection."
    },
    "faq": {
      "title": "Frequently asked questions",
      "items": [
        {
          "question": "Is it free to use?",
          "answer": "For non-commercial use, all features are free with no time or usage limits. Use for commercial work, such as a company’s internal operations or paid forensic analysis, is prohibited. You can also review the terms of use in the app under Help → About."
        },
        {
          "question": "Which files can it open?",
          "answer": "It opens CSV, XLS, and XLSX files. XLS files are supported up to 32 MiB, and Excel formatting, charts, macro execution, and formula recalculation are not supported."
        },
        {
          "question": "Characters in my CSV look garbled.",
          "answer": "Encoding is detected automatically by default. If characters look garbled, choose the right encoding in Settings → CSV encoding and reopen the file."
        },
        {
          "question": "Can I edit or export data?",
          "answer": "It is a viewing and search tool. Editing data and exporting search results are not supported yet."
        },
        {
          "question": "How long do large files take?",
          "answer": "Opening a file for the first time or searching a new column can take time while the search index is built, and you need free disk space for the cache. Processing time depends on the file’s contents and your PC, and performance on CSV files of 10 GiB or more has not been fully verified yet."
        },
        {
          "question": "What do I need to run it?",
          "answer": "It is for 64-bit Windows. Run the installer, then launch CSV Search Engine from the Start menu."
        }
      ]
    },
    "download": {
      "title": "Download it and\nopen your first file.",
      "description": "64-bit Windows · Free for non-commercial use"
    }
  },
  productCategories: { windowsProductivity: "Windows productivity", webApps: "Web apps" },
  "folderHistory": {
    "metadataTitle": "Folder History | A Windows app for reopening recently visited folders",
    "cardDescription": "A Windows app that records the folders you visit in File Explorer so you can reopen them right from the tray.",
    "description": "Record the folders you visit in File Explorer, then reopen them right from the tray.",
    "downloadAction": "Free download for Windows",
    "howToAction": "How it works",
    "screenshots": [
      {
        "alt": "Folder History’s recent visits list, showing folder names, paths, and last visit times, newest first",
        "caption": "Recent visits list · Korean UI"
      },
      {
        "alt": "Folder History exclusion rules editor with node_modules and .next entered",
        "caption": "Editing exclusion rules"
      },
      {
        "alt": "Folder History settings for theme, launching at Windows sign-in, and history retention",
        "caption": "Settings · Theme, auto-start, history retention"
      }
    ],
    "workflow": {
      "eyebrow": "How it works",
      "title": "Stop hunting for folders.\nOpen them from your recent visits.",
      "description": "When you can’t remember where you were working a few days ago, double-click the tray icon to see your recently visited folders in order.",
      "steps": [
        {
          "title": "Add a watched folder",
          "description": "Choose a folder to record. That folder and its subfolders make up the recording scope."
        },
        {
          "title": "Use File Explorer as usual",
          "description": "When you open a folder in Windows File Explorer, its last visit time is recorded automatically."
        },
        {
          "title": "Reopen from the tray",
          "description": "Double-click the tray icon, then double-click a folder in the list or press Enter to open it again in File Explorer."
        }
      ]
    },
    "features": {
      "eyebrow": "Key features",
      "title": "Just the folders you need, the way you want.",
      "items": [
        {
          "title": "Search and sort",
          "description": "Search by folder name or path (Ctrl+F), and sort by folder, path, or last visit."
        },
        {
          "title": "Pin to top",
          "description": "Pin folders you open often to keep them at the top of the list."
        },
        {
          "title": "Exclusion rules",
          "description": "List folder names you don’t want recorded, such as node_modules or .git, one per line. You can use * and ?."
        },
        {
          "title": "Trash and restore",
          "description": "Deleted records go to the trash and can be restored with their original visit time."
        },
        {
          "title": "History retention",
          "description": "Keep history indefinitely, or clean it up automatically after 1, 3, 6, or 12 months."
        },
        {
          "title": "Copy path",
          "description": "Copy a folder’s full path with the row’s copy button or Ctrl+C."
        }
      ]
    },
    "privacy": {
      "eyebrow": "Stored on your PC",
      "title": "Your history stays on your PC.",
      "description": "Visit history and settings are stored in local app data on your PC, with no server or account required. Deleting records leaves your actual folders and files untouched."
    },
    "faq": {
      "title": "Frequently asked questions",
      "items": [
        {
          "question": "Which folder visits are recorded?",
          "answer": "It records when you open a folder inside a watched folder in Windows File Explorer, or return to that folder from another window or tab. Navigation in other file managers or file open dialogs, and file changes, are not recorded as visits."
        },
        {
          "question": "Is it free?",
          "answer": "Yes, you can use it for free."
        },
        {
          "question": "Does recording stop when I close the window?",
          "answer": "No. The window’s X only hides the window, and recording continues. To quit completely, right-click the tray icon and choose Exit."
        },
        {
          "question": "Can it start automatically when Windows starts?",
          "answer": "Turn on ‘Launch at Windows sign-in’ in Settings. It is off by default."
        },
        {
          "question": "What do I need to run it?",
          "answer": "It runs on Windows 11 x64. The installer installs for the current user account, so no administrator rights are needed, and it installs the WebView2 Runtime during setup if it is missing."
        }
      ]
    },
    "download": {
      "title": "Download it and\nadd your first watched folder.",
      "description": "Windows 11 x64 · Installs without administrator rights"
    }
  },
  worldClock: {
  "badge": "New · World clock widget",
  "title": "The world’s time, right on your desktop.",
  "description": "Morning in Seoul, early hours in London, night in New York. Compare times and dates across cities with the Boxes world clock. Keep your files and shortcuts organized on the same desktop.",
  "widgetTitle": "World clock",
  "previewCaption": "World clock widget preview · Times shown are examples.",
  "cities": [
    "Seoul",
    "London",
    "San Francisco",
    "New York",
    "Vancouver"
  ],
  "heading": "Different time zones. One workspace.",
  "intro": "Before contacting a colleague abroad or calling family far away, check their local time on your desktop.",
  "benefits": [
    {
      "title": "Cities side by side",
      "description": "Compare the times in the cities you check most often at a glance."
    },
    {
      "title": "Dates and time differences",
      "description": "Use each city’s date and UTC offset to spot regions on a different day."
    },
    {
      "title": "Organization meets widgets",
      "description": "Keep files, shortcuts, and the world clock together in your workspace."
    }
  ]
},
  metadata: {
    site: { title: "GhostYak | Windows software that keeps everyday work organized", titleTemplate: "%s | GhostYak", description: "GhostYak makes software that simplifies your everyday Windows workspace." },
    boxes: { title: "Boxes", openGraphTitle: "GhostYak Boxes | Windows desktop organizer" },
    boxesDownload: { title: "Download Boxes" },
    blog: { title: "Blog", description: "Product news and development stories from GhostYak." },
  },
  header: { homeLabel: "GhostYak home", navigationLabel: "Main navigation", language: "Choose language", products: "Products", blog: "Blog", support: "Support" },
  footer: { description: "Software that makes your everyday Windows workspace simpler.", navigationLabel: "Footer navigation", blog: "Blog" },
  carousel: { slideLabel: "View slide {index}", pauseLabel: "Pause automatic rotation", playLabel: "Resume automatic rotation", pause: "Pause", play: "Play" },
  home: {
    screenReaderTitle: "GhostYak software",
    hero: {
      regionLabel: "GhostYak highlights", controlsLabel: "Choose a hero slide",
      slides: [
        { eyebrow: "GHOSTYAK BOXES", title: "Turn your desktop back into a place to work.", description: "Gather scattered files and shortcuts into purpose-built boxes and organize them at a glance.", actionLabel: "Explore the product", imageAlt: "Boxes demo screen 1" },
        { eyebrow: "DESKTOP, ORGANIZED", title: "Find the files you need faster.", description: "Group work, projects, and frequently used tools your way, then open them right when you need them.", actionLabel: "Explore the product", imageAlt: "Boxes demo screen 2" },
      ],
    },
    products: { eyebrow: "GHOSTYAK SOFTWARE", heading: "Small tools you reach for every day", intro: "From desktop organization and time management to OSINT and forensic investigations. Rather than piling on features, we focus on properly solving one frustration you run into often.", freeBadge: "Free", viewAction: "Explore the product", webBadge: "Web", clockDescription: "A time tool with the current time, world clock, alarms, timers, Pomodoro, and a stopwatch, ready in your browser with nothing to install.", osintsDescription: "Search and analyze IP addresses, domains, and more in one place, without jumping between OSINT sites.", webAction: "Open website", clockPreviewLabel: "Clock preview" },
    blog: { eyebrow: "BLOG", heading: "A record of how we build", intro: "News about new products and features, plus the problems we ran into while building and how we solved them.", viewAction: "View the blog" },
  },
  boxes: {
    description: "Keep files in their original folders and gather them into task-based boxes on your desktop. Core features are free, including at work.",
    tagline: "Organize a scattered desktop at a glance.", downloadAction: "Free download", screenshotAlts: ["Boxes demo screen 1", "Boxes demo screen 2"],
    carousel: { regionLabel: "Boxes preview", controlsLabel: "Choose a product screen" },
    features: {
      label: "KEY FEATURES", heading: "Everything you need to stay organized.",
      items: [
        { title: "Organize at a glance", description: "Group related files, folders, and shortcuts into boxes so you can find what you need quickly." },
        { title: "Fit your workflow", description: "Move and resize boxes freely, and collapse them when you need more desktop space." },
        { title: "Keep original files in place", description: "Organize with shortcuts without moving the originals, so your existing folder structure stays intact." },
      ],
    },
    availabilityNotice: "Only the free version is currently available. A commercial edition will be announced separately when it is ready.",
    download: { breadcrumbLabel: "Breadcrumb", breadcrumbCurrent: "Download", waitNotice: "Keep this page open until your browser starts downloading the installer.", fileInfoLabel: "Installer information", version: "Version {version}", fileSize: "About 3.3 MB", requirement: "Requires Microsoft Edge WebView2 Runtime", countdown: "Your download will start in {seconds} seconds.", starting: "Starting your download.", help: "Did the download not start automatically?", directAction: "Download the installer directly" },
  },
  blog: { eyebrow: "GHOSTYAK BLOG", heading: "Blog", intro: "Product news and lessons from our development process.", readMore: "Read article", breadcrumbLabel: "Breadcrumb", breadcrumbHome: "Blog" },
};

export default en;
