import type { Dictionary } from "@/i18n/get-dictionary";

// Translation of the Korean source of 2026-11-02.
const pricing: Dictionary["pricing"] = {
  eyebrow: "Preise",
  title: "30 Tage testen,\nmit Pro weitermachen.",
  description: "30 Tage lang ist die Testversion identisch mit Pro. Danach kannst du weiter schreiben; OCR und Bibliothekssuche bleiben Pro vorbehalten.",
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
        "Danach bleibt das Schreiben nutzbar",
      ],
    },
    pro: {
      name: "Pro",
      tagline: "Ohne zeitliche Begrenzung",
      status: "Bald verfügbar",
      priceUnit: "USD · Einmalkauf",
      action: "Kauf bald möglich",
      note: "Notes ist noch im Betatest, die Kauffunktion entsteht gerade. Probiere bis dahin alle Funktionen mit der Testversion aus.",
      points: [
        "OCR, Automodus, Leistungsmodus",
        "In allen Dokumenten suchen",
        "Alle Lesezeichen, alle markierten Texte, Minimap",
        "Ein Schlüssel aktiviert bis zu 3 Geräte",
        "Nach der Aktivierung ohne Internet nutzbar",
        "Updates inklusive",
      ],
    },
  },
  footnote: "*Nach Ablauf der Testversion sind nur OCR, der Automodus, der Leistungsmodus, die Bibliothekssuche, alle Lesezeichen, alle markierten Texte und die Minimap nicht mehr verfügbar. Deine Dokumente, Notizen und bereits erkannter Text bleiben erhalten.",
  compare: {
    eyebrow: "Funktionsvergleich",
    title: "30-Tage-Testversion und Pro: Was ändert sich?",
    description: "30 Tage lang kannst du alle Pro-Funktionen nutzen. Danach sind OCR und Bibliothekssuche nicht mehr verfügbar; das Schreiben bleibt dir erhalten.",
    feature: "Funktion",
    during: "30 Tage",
    after: "Danach",
    available: "Verfügbar",
    unavailable: "Nicht verfügbar",
    readGroup: "Lesen · Suchen · Exportieren",
    writeGroup: "Schreiben · Ordnen",
    proGroup: "Texterkennung · Bibliothekssuche",
    readFeatures: [
      "Dokumente lesen, vorhandene Notizen ansehen, Text auswählen und kopieren",
      "Im Dokument suchen, Schnellnavigation, zu Lesezeichen und Gliederung springen",
      "PDFs importieren, Dokumente ordnen",
      "Als PDF exportieren (mit Handschrift), drucken",
      "Bereits erkannten Text suchen und kopieren",
      "Im Wörterbuch nachschlagen",
    ],
    writeFeatures: [
      "Schreiben, Text markieren, Lesezeichen setzen, Seiten bearbeiten",
      "Neue Notiz, Dokumente zusammenführen",
    ],
    proFeatures: [
      "OCR: diese Seite, mehrere Seiten, ganzes Dokument, Automodus, Leistungsmodus",
      "Alle Dokumente auf einmal durchsuchen",
      "Alle Lesezeichen, alle markierten Texte",
      "Minimap",
    ],
  },
  faq: {
    items: [
      {
        question: "Wann kann ich Pro kaufen?",
        answer: "Notes ist noch im Betatest, die Kauffunktion entsteht gerade und ist bald verfügbar. Bis dahin kannst du alle Funktionen mit der Testversion ausprobieren.",
      },
      {
        question: "Ist Pro ein Abo?",
        answer: "Nein. Pro ist ein Einmalkauf, und Updates nach dem Kauf sind inklusive.",
      },
      {
        question: "Auf wie vielen PCs kann ich Pro nutzen?",
        answer: "Ein Schlüssel aktiviert bis zu 3 Geräte. Internet brauchst du nur für die Aktivierung, danach funktioniert die App offline.",
      },
      {
        question: "Was passiert mit meinen Dokumenten nach Ablauf der Testversion?",
        answer: "Deine Dokumente und Notizen werden nicht gelöscht. Du kannst sie weiterhin öffnen, lesen, beschreiben und mit Handschrift als PDF exportieren.",
      },
      {
        question: "Kann ich die Testversion neu starten?",
        answer: "Nein. Die Testversion gilt einmal pro Gerät, und die Installation einer neuen Version verlängert sie nicht. Wird das Gerätedatum zurückgestellt, endet die Testversion sofort.",
      },
      {
        question: "Kann ein PC, auf dem die Beta lief, die Testversion nutzen?",
        answer: "Ja. Mit der Installation von v1.0.0 beginnt eine neue 30-Tage-Testversion.",
      },
    ],
  },
};

export default pricing;
