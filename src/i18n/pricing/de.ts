import type { Dictionary } from "@/i18n/get-dictionary";

// Translation of the Korean source of 2026-11-01.
const pricing: Dictionary["pricing"] = {
  eyebrow: "Preise",
  title: "30 Tage testen,\nmit Pro weitermachen.",
  description: "30 Tage lang ist die Testversion identisch mit Pro. Um danach weiter zu schreiben und die Bibliothek zu durchsuchen, reicht Pro.",
  plans: {
    label: "Testversion und Pro",
    includes: "Alles aus der Testversion, plus:",
    trial: {
      name: "Testversion",
      tagline: "Erst ausprobieren",
      price: "30 Tage",
      priceUnit: "Ab dem ersten Start",
      points: [
        "Mit Stift, Textmarker und Textfeldern auf PDFs schreiben",
        "Alle Dokumente auf einmal durchsuchen",
        "Seiten bearbeiten, Gliederungen erstellen, Dokumente zusammenführen",
        "Texterkennung für gescannte Seiten (OCR)",
        "Als PDF mit Handschrift exportieren und drucken",
        "Danach nur noch lesen; Dokumente und Notizen bleiben erhalten",
      ],
    },
    pro: {
      name: "Pro",
      tagline: "Ohne zeitliche Begrenzung",
      status: "Bald verfügbar",
      priceUnit: "USD · Einmalkauf",
      action: "Kauf bald möglich",
      note: "Die Kauffunktion entsteht gerade. Probiere bis dahin alle Funktionen mit der Testversion aus.",
      points: [
        "Schreiben und Bibliothekssuche ohne zeitliche Begrenzung",
        "Ein Schlüssel aktiviert bis zu 3 Geräte",
        "Nach der Aktivierung ohne Internet nutzbar",
        "Gekaufte Version bleibt nutzbar",
      ],
    },
  },
  footnote: "*Nach Ablauf der Testversion kannst du Dokumente nur noch öffnen und lesen. Deine Dokumente und Notizen werden nicht gelöscht und lassen sich mit Handschrift als PDF exportieren.",
  compare: {
    eyebrow: "Funktionsvergleich",
    title: "30-Tage-Testversion und Pro: Was ändert sich?",
    description: "30 Tage lang entspricht die Testversion Pro. Danach kannst du nur noch lesen; deine Dokumente und Notizen bleiben erhalten.",
    feature: "Funktion",
    during: "30 Tage",
    after: "Danach",
    available: "Verfügbar",
    unavailable: "Nicht verfügbar",
    readGroup: "Lesen · Suchen · Exportieren",
    writeGroup: "Schreiben · Ordnen · Bibliothekssuche",
    readFeatures: [
      "Dokumente lesen, vorhandene Notizen ansehen, Text auswählen und kopieren",
      "Im Dokument suchen, Schnellnavigation, zu Lesezeichen und Gliederung springen",
      "PDFs importieren, Dokumente ordnen",
      "Als PDF exportieren (mit Handschrift), drucken",
      "Texterkennung für gescannte Seiten (OCR)",
      "Im Wörterbuch nachschlagen",
    ],
    writeFeatures: [
      "Schreiben, Text markieren, Lesezeichen setzen, Seiten bearbeiten, Rückgängig",
      "Neue Notiz, Dokumente zusammenführen",
      "In allen Dokumenten suchen",
    ],
  },
  faq: {
    items: [
      {
        question: "Wann kann ich Pro kaufen?",
        answer: "Die Kauffunktion entsteht gerade und ist bald verfügbar. Bis dahin kannst du alle Funktionen mit der Testversion ausprobieren.",
      },
      {
        question: "Ist Pro ein Abo?",
        answer: "Nein. Pro ist ein Einmalkauf. Die gekaufte Version bleibt nutzbar, Upgrades auf eine große neue Version sind kostenpflichtig.",
      },
      {
        question: "Auf wie vielen PCs kann ich Pro nutzen?",
        answer: "Ein Schlüssel aktiviert bis zu 3 Geräte. Internet brauchst du nur für die Aktivierung, danach funktioniert die App offline.",
      },
      {
        question: "Was passiert mit meinen Dokumenten nach Ablauf der Testversion?",
        answer: "Deine Dokumente und Notizen werden nicht gelöscht. Du kannst sie weiterhin öffnen, lesen und mit Handschrift als PDF exportieren.",
      },
      {
        question: "Kann ich die Testversion neu starten?",
        answer: "Die Testversion gibt es einmal pro Gerät. Eine neue Version verlängert sie nicht, und wenn du das Gerätedatum zurückstellst, endet sie sofort.",
      },
      {
        question: "Kann ein PC, auf dem die Beta lief, die Testversion nutzen?",
        answer: "Ja. Mit der Installation von v1.0.0 beginnt eine neue 30-Tage-Testversion.",
      },
    ],
  },
};

export default pricing;
