import type { Dictionary } from "@/i18n/get-dictionary";

// Translation of the Korean source approved on 2026-10-09.
const notes: Dictionary["notes"] = {
  metadataTitle: "Ghostyak Notes | A Windows note app for writing on PDFs and finding anything fast",
  cardDescription: "A Windows note app for writing on PDFs with pen and keyboard, and finding what you read across all your documents.",
  description: "Write on PDFs with pen and keyboard, and find what you read across all your documents.",
  featuredEyebrow: "New",
  betaBadge: "Beta",
  trialBadge: "All features for 14 days",
  downloadAction: "Download for Windows x64",
  featuresAction: "See features",
  heroNote: "This is a beta version. You can use every feature without limits for 14 days from the day you first launch it.",
  screenshots: {
    annotate: { alt: "Ghostyak Notes showing a PDF textbook with highlighted text and handwritten notes in the margin", caption: "Writing on a PDF · Korean UI" },
    pen: { alt: "Ghostyak Notes pen settings with three color slots, a color palette, and three thickness levels", caption: "Pen settings · Color and thickness" },
    search: { alt: "Ghostyak Notes library search for a Korean word, listing matching pages from two documents with previews", caption: "Find in all documents" },
    library: { alt: "Ghostyak Notes library showing ten documents as a cover grid, with folders and favorites on the left", caption: "Library · Folders and cover grid" },
    pages: { alt: "Ghostyak Notes page overview showing all pages of a 24-page document in a grid, with buttons to move, duplicate, and rotate", caption: "Page overview" },
    spread: { alt: "Ghostyak Notes two-page view with annotated pages 4 and 5 side by side", caption: "Two-page view" },
  },
  showcase: {
    eyebrow: "Key features",
    title: "Read, write, and find,\nall in one app.",
    description: "Textbooks and lecture notes, reports and papers. Import a PDF, write right on it, and find the page you need later.",
    items: {
      pen: {
        eyebrow: "Writing",
        title: "Pen, highlighter, eraser.\nColors and thickness your way.",
        description: "Set three favorite colors and three thicknesses for the pen and for the highlighter, then switch between them instantly. Your writing is saved automatically as you go.",
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
      { title: "Peek", description: "Click handwriting or a text box to make it see-through for a moment and check the text underneath." },
      { title: "Autosave", description: "There is no save button. Your writing is saved to the document file as you go." },
      { title: "Keyboard shortcuts", description: "Pick tools, search, and move between pages with shortcuts." },
    ],
  },
  privacy: {
    eyebrow: "Stored on your PC",
    title: "Your documents stay on your PC.",
    description: "Documents are saved as files in the ‘Ghostyak Notes’ folder inside your Documents folder. You don’t need an account or an internet connection, and the original PDF files you import are never changed.",
  },
  beta: {
    eyebrow: "About the beta",
    title: "14 days,\nevery feature, no limits.",
    description: "The installer available now is a beta version. The usage period starts on the day you first launch the app.",
    steps: [
      { title: "All features for 14 days", description: "For 14 days from first launch, you can use every feature, including writing, library search, and page editing." },
      { title: "Read-only after that", description: "When the usage period ends, you can only open and read documents. Writing and library search are unavailable." },
      { title: "14 more days with the next version", description: "Install the next version to use it for another 14 days." },
    ],
    note: "Your documents and handwriting are not deleted when the period ends.",
  },
  faq: {
    title: "Frequently asked questions",
    items: [
      { question: "How long can I use the beta?", answer: "You can use every feature without limits for 14 days from the day you first launch the app. The app tells you when the usage period ends the first time you launch it." },
      { question: "What happens after 14 days?", answer: "You can still open and read documents and search within a document, but writing and searching all documents are unavailable. Your documents and handwriting are not deleted, and installing the next version gives you another 14 days." },
      { question: "Where are my documents stored?", answer: "In the ‘Ghostyak Notes’ folder inside your Documents folder. You can open it with ‘문서 폴더 열기’ (Open documents folder) at the bottom left of the library." },
      { question: "Can it search scanned PDFs?", answer: "It searches the text of PDFs that contain text information. Text recognition (OCR) for PDFs made only of scanned images is not supported yet." },
      { question: "Can I use it without a pen?", answer: "Yes. You can write with a mouse and type into text boxes with a keyboard." },
      { question: "What language is the app in?", answer: "The app interface is currently available in Korean. Other languages are coming soon." },
      { question: "What do I need to run it?", answer: "It is for 64-bit (x64) Windows. If Microsoft Edge WebView2 Runtime is missing, the installer downloads and installs it." },
    ],
  },
  download: {
    title: "Download it and\nimport your first PDF.",
    description: "Windows x64 · Beta · All features for 14 days",
  },
};

export default notes;
