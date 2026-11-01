import type { Dictionary } from "@/i18n/get-dictionary";

// Translation of the Korean source of 2026-11-01.
const pricing: Dictionary["pricing"] = {
  eyebrow: "Pricing",
  title: "Try it for 30 days,\nthen keep going with Pro.",
  description: "For 30 days the trial is identical to Pro. To keep writing and searching your library after it ends, Pro is all you need.",
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
        "Read-only when it ends; documents and handwriting stay",
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
        "Writing and library search with no time limit",
        "One key activates up to 3 devices",
        "Works offline after activation",
        "Keep using the version you bought",
      ],
    },
  },
  footnote: "*When the trial ends you can only open and read documents. Your documents and handwriting are not deleted, and you can export them to PDF with handwriting.",
  compare: {
    eyebrow: "Feature comparison",
    title: "30-day trial vs. Pro: what changes?",
    description: "For 30 days the trial matches Pro. When it ends, the app becomes read-only and your documents and handwriting stay as they are.",
    feature: "Feature",
    during: "First 30 days",
    after: "After it ends",
    available: "Available",
    unavailable: "Not available",
    readGroup: "Read · Find · Export",
    writeGroup: "Write · Organize · Library search",
    readFeatures: [
      "Read documents, view existing handwriting, select and copy text",
      "Find in a document, quick jump, go to bookmarks and outline",
      "Import PDFs, organize documents",
      "Export to PDF (with handwriting), print",
      "Text recognition for scanned pages (OCR)",
      "Dictionary lookup",
    ],
    writeFeatures: [
      "Write, mark text, add bookmarks, edit pages, undo",
      "New notes, merge documents",
      "Search all documents",
    ],
  },
  faq: {
    items: [
      {
        question: "When can I buy Pro?",
        answer: "Notes is still in beta testing, so purchasing is being built and will be available soon. Until then, you can try every feature with the trial, and after 30 days, installing a new version gives you another 30 days.",
      },
      {
        question: "Is Pro a subscription?",
        answer: "No. It's a one-time purchase. You can keep using the version you bought, and upgrading to a major new version is paid.",
      },
      {
        question: "How many PCs can use Pro?",
        answer: "One key activates up to 3 devices. You only need the internet to activate; after that it works offline.",
      },
      {
        question: "What happens to my documents when the trial ends?",
        answer: "Your documents and handwriting are not deleted. You can still open and read them, and export them to PDF with your handwriting.",
      },
      {
        question: "Can I restart the trial?",
        answer: "During beta testing, installing a new version after 30 days starts another 30-day trial. Setting the device’s date back ends the trial immediately.",
      },
      {
        question: "Can a PC that used the beta get the trial?",
        answer: "Yes. Installing v1.0.0 starts a new 30-day trial.",
      },
    ],
  },
};

export default pricing;
