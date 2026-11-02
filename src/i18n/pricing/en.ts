import type { Dictionary } from "@/i18n/get-dictionary";

// Translation of the Korean source of 2026-11-02.
const pricing: Dictionary["pricing"] = {
  eyebrow: "Pricing",
  title: "Try it for 30 days,\nthen keep going with Pro.",
  description: "For 30 days the trial is identical to Pro. After it ends you can keep writing, and OCR and library search stay in Pro.",
  plans: {
    label: "Trial and Pro",
    includes: "Everything in the trial, plus:",
    trial: {
      name: "Trial",
      tagline: "Try it first",
      price: "30 days",
      priceUnit: "From your first launch",
      points: [
        "Write on PDFs with pen, highlighter and text boxes",
        "Search every document at once",
        "Edit pages, build outlines, merge documents",
        "Text recognition for scanned pages (OCR)",
        "Export to PDF with handwriting, and print",
        "Writing keeps working after it ends",
      ],
    },
    pro: {
      name: "Pro",
      tagline: "No time limit",
      status: "Coming soon",
      priceUnit: "USD · One-time purchase",
      action: "Purchase coming soon",
      note: "Notes is still in beta testing and purchasing is being built. Until then, try every feature with the trial.",
      points: [
        "OCR, Auto Mode, Performance Mode",
        "Search all documents",
        "All bookmarks, all marked text, minimap",
        "One key activates up to 3 devices",
        "Works offline after activation",
        "Updates included",
      ],
    },
  },
  footnote: "*When the trial ends, only OCR, Auto Mode, Performance Mode, library search, all bookmarks, all marked text and the minimap turn off. Your documents, handwriting and already recognized text stay.",
  compare: {
    eyebrow: "Feature comparison",
    title: "30-day trial vs. Pro: what changes?",
    description: "For 30 days you can use every Pro feature. When the trial ends, OCR and library search turn off, and you can keep writing.",
    feature: "Feature",
    during: "First 30 days",
    after: "After it ends",
    available: "Available",
    unavailable: "Not available",
    readGroup: "Read · Find · Export",
    writeGroup: "Write · Organize",
    proGroup: "Text recognition · Library search",
    readFeatures: [
      "Read documents, view existing handwriting, select and copy text",
      "Find in a document, quick jump, go to bookmarks and outline",
      "Import PDFs, organize documents",
      "Export to PDF (with handwriting), print",
      "Find and copy already recognized text",
      "Dictionary lookup",
    ],
    writeFeatures: [
      "Write, mark text, add bookmarks, edit pages",
      "New notes, merge documents",
    ],
    proFeatures: [
      "OCR: this page, multiple pages, whole document",
      "Text recognition (OCR) Auto Mode, Performance Mode",
      "Search all documents at once",
      "All bookmarks, all marked text",
      "Minimap",
    ],
  },
  faq: {
    items: [
      {
        question: "When can I buy Pro?",
        answer: "Notes is still in beta testing, so purchasing is being built and will be available soon. Until then, you can try every feature with the trial.",
      },
      {
        question: "Is Pro a subscription?",
        answer: "No. It’s a one-time purchase, and updates after purchase are included.",
      },
      {
        question: "How many PCs can use Pro?",
        answer: "One key activates up to 3 devices. You only need the internet to activate; after that it works offline.",
      },
      {
        question: "What happens to my documents when the trial ends?",
        answer: "Your documents and handwriting are not deleted. You can keep opening, reading and writing on them, and export them to PDF with your handwriting.",
      },
      {
        question: "Can I restart the trial?",
        answer: "No. The trial is once per device, and installing a new version doesn’t extend it. Setting the device’s date back ends the trial immediately.",
      },
      {
        question: "Can a PC that used the beta get the trial?",
        answer: "Yes. Installing v1.0.0 starts a new 30-day trial.",
      },
    ],
  },
};

export default pricing;
