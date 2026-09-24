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
    ]
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
  header: { homeLabel: "GhostYak home", navigationLabel: "Main navigation", language: "Choose language", products: "Products", blog: "Blog" },
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
