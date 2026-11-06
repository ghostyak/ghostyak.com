import type { Dictionary } from "@/i18n/get-dictionary";

// Translation of the Korean source, including the trial and Pro terms of 2026-11-02.
const notes: Dictionary["notes"] = {
  metadataTitle: "Ghostyak Notes | PDF note-taking app for Windows",
  metadataDescription: "A Windows note app for writing on PDFs with pen and keyboard and finding what you read across all your documents. Try every feature for 30 days.",
  heroTitle: "Ghostyak Notes: write on PDFs,\nfind anything fast",
  featuredAction: "Explore the PDF note app",
  cardDescription: "A Windows note app for writing on PDFs with pen and keyboard, and finding what you read across all your documents.",
  description: "Write on PDFs with pen and keyboard, and find what you read across all your documents.",
  featuredEyebrow: "New",
  betaBadge: "30-day trial",
  trialBadge: "All features for 30 days",
  downloadAction: "Download for Windows x64",
  featuresAction: "See features",
  pricingAction: "Compare Trial and Pro",
  heroNote: "You can use every feature for 30 days from first launch, and you can keep writing after that.",
  screenshots: {
    annotate: { alt: "Ghostyak Notes showing a PDF textbook with highlighted text and handwritten notes in the margin" },
    pen: { alt: "Ghostyak Notes pen settings with three color slots, a color palette, and three thickness levels", caption: "Pen settings · Color and thickness" },
    search: { alt: "Ghostyak Notes library search for a Korean word, listing matching pages from two documents with previews", caption: "Find in all documents" },
    library: { alt: "Ghostyak Notes library showing ten documents as a cover grid, with folders and favorites on the left", caption: "Library · Folders and cover grid" },
    pages: { alt: "Ghostyak Notes page overview showing all pages of a 24-page document in a grid, with buttons to move, duplicate, and rotate", caption: "Page overview" },
    spread: { alt: "Ghostyak Notes two-page view with annotated pages 4 and 5 side by side", caption: "Two-page view" },
  },
  video: { playAction: "Watch the intro video", title: "Ghostyak Notes intro video", posterAlt: "Opening screen of the intro video: the Ghostyak Notes app icon and name on a blue background, with the line “Write on PDFs, find anything”", caption: "1 min 29 sec · Korean UI", watchOnYouTube: "Watch on YouTube" },
  showcase: {
    eyebrow: "Key features",
    title: "Read, write on, and search PDFs,\nall in one app.",
    description: "Textbooks and lecture notes, reports and papers. Import a PDF, write right on it, and find the page you need later.",
    items: {
      pen: {
        eyebrow: "Writing",
        title: "Pen, highlighter, eraser.\nColors and thickness your way.",
        description: "Save three slots of color and thickness for the pen and for the highlighter, then switch between them instantly. Your writing is saved automatically as you go.",
        points: ["Pen, highlighter, eraser, and lasso selection", "Lines, arrows, rectangles, ellipses, and images", "Undo and redo"],
      },
      search: {
        eyebrow: "Library search",
        title: "Not sure which book it was in?\nFind it in one search.",
        description: "Press Ctrl+Shift+F to search the text of every document in your library. Results are grouped by document with page numbers and previews, and Enter opens that page.",
        points: ["Find in all documents (Ctrl+Shift+F)", "Find in the current document (Ctrl+F)", "Jump with bookmarks and the PDF outline"],
      },
      library: {
        eyebrow: "Library",
        title: "Organize textbooks and notes\nlike a bookshelf.",
        description: "Import PDFs or create new notes and sort them into folders. Each cover shows how far you have read, and you can open several documents in tabs.",
        points: ["Folders, favorites, and recent documents", "Cover grid and list views with sorting", "Deleted documents are kept in the trash"],
      },
      pages: {
        eyebrow: "Page overview",
        title: "Move, add,\nand rotate pages.",
        description: "Lay out every page of a document on one screen to reorder, duplicate, delete, or rotate them. You can also add blank pages or insert pages from another PDF.",
        points: ["Show only bookmarked or annotated pages", "Blank pages: plain, lined, grid, or dotted", "Page edits can be undone too"],
      },
      spread: {
        eyebrow: "Viewing",
        title: "One page at a time,\nor two like a book.",
        description: "Switch between single-page and two-page view, and zoom to fit the width or height. Even in long documents, the sidebar takes you straight to the page you want.",
        points: ["Single-page and two-page views", "Fit width, fit height, and zoom", "Sidebar for pages, annotated pages, marked text, bookmarks, and outline"],
      },
    },
  },
  more: {
    eyebrow: "More features",
    title: "The tools you need for study and work.",
    items: [
      { title: "Text boxes", description: "Type directly on the page. Choose from sans-serif, serif, handwriting, and monospace fonts." },
      { title: "Mark up text", description: "Select text in a PDF to highlight, underline, or strike it through, and copy it." },
      { title: "Bookmarks", description: "Bookmark important pages and jump to them from the list." },
      { title: "Translucent", description: "Click handwriting or a text box to make it translucent and check the text underneath." },
      { title: "Autosave", description: "There is no save button. Your writing is saved to the document file as you go." },
      { title: "Keyboard shortcuts", description: "Pick tools, search, and move between pages with shortcuts." },
    ],
  },
  privacy: {
    eyebrow: "Stored on your PC",
    title: "Your PDFs and notes are stored only on your PC.",
    description: "Documents are saved as files in the ‘Ghostyak Notes’ folder inside your Documents folder. You don’t need an account or an internet connection, and the original PDF files you import are never changed.",
  },
  faq: {
    title: "Frequently asked questions",
    items: [
      { question: "How long can I use the trial?", answer: "You can use every feature without limits for 30 days from the day you first launch the app. The app tells you the end date on first launch." },
      { question: "What happens after 30 days?", answer: "You can keep writing. OCR, Auto Mode, Performance Mode, searching all documents, all bookmarks, all marked text and the minimap are no longer available. Your documents, handwriting and already recognized text stay. Pro is required for those features." },
      { question: "Where are my documents stored?", answer: "In the ‘Ghostyak Notes’ folder inside your Documents folder. You can open it with ‘Documents folder’ at the bottom left of the library." },
      { question: "Can it search scanned PDFs?", answer: "Yes. For scanned PDFs with no text information, the app recognizes the text (OCR) so you can search it. Recognition happens on your own PC, and searching handwriting is not supported yet." },
      { question: "Can I write on PDFs with a mouse, without a pen tablet?", answer: "Yes. You can write with a mouse and type into text boxes with a keyboard." },
      { question: "What language is the app in?", answer: "The app interface is available in Korean and English. It starts in your device language, or in English for any other language, and you can change it in Settings." },
      { question: "What Windows do I need to run it?", answer: "It is for 64-bit (x64) Windows. If Microsoft Edge WebView2 Runtime is missing, the installer downloads and installs it." },
    ],
  },
  download: {
    title: "Download it and\nimport your first PDF.",
    description: "Windows x64 · All features for 30 days · Pro $10 one-time purchase",
  },
};

export default notes;
