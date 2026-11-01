import type { Dictionary } from "@/i18n/get-dictionary";

// Translation of the Korean source, including the trial and Pro terms of 2026-10-31.
const notes: Dictionary["notes"] = {
  metadataTitle: "Ghostyak Notes | PDF-Notiz-App für Windows",
  metadataDescription: "Eine Notiz-App für Windows: Schreibe mit Stift und Tastatur auf PDFs und finde Gelesenes in all deinen Dokumenten. Teste alle Funktionen 30 Tage lang.",
  heroTitle: "Ghostyak Notes: auf PDFs schreiben,\nalles schnell finden",
  featuredAction: "PDF-Notiz-App entdecken",
  cardDescription: "Eine Notiz-App für Windows: Schreibe mit Stift und Tastatur auf PDFs und finde Gelesenes in all deinen Dokumenten.",
  description: "Schreibe mit Stift und Tastatur auf PDFs und finde Gelesenes sofort in all deinen Dokumenten.",
  featuredEyebrow: "Neu",
  trialBadge: "30 Tage lang alle Funktionen",
  downloadAction: "Windows x64 herunterladen",
  featuresAction: "Funktionen ansehen",
  pricingAction: "Testversion und Pro vergleichen",
  heroNote: "Dies ist eine 30-Tage-Testversion. Ab dem ersten Start kannst du 30 Tage lang alle Funktionen ohne Einschränkungen nutzen.",
  screenshots: {
    annotate: { alt: "Ghostyak Notes mit einem PDF-Lehrbuch, markiertem Text und handschriftlichen Notizen am Rand", caption: "Auf einem PDF schreiben · Koreanische Oberfläche" },
    pen: { alt: "Stifteinstellungen von Ghostyak Notes mit drei Farbplätzen, einer Farbpalette und drei Strichstärken", caption: "Stifteinstellungen · Farbe und Stärke" },
    search: { alt: "Bibliothekssuche von Ghostyak Notes nach einem koreanischen Wort mit den gefundenen Seiten aus zwei Dokumenten samt Vorschau", caption: "In allen Dokumenten suchen" },
    library: { alt: "Bibliothek von Ghostyak Notes mit zehn Dokumenten als Cover-Raster sowie Ordnern und Favoriten auf der linken Seite", caption: "Bibliothek · Ordner und Cover-Raster" },
    pages: { alt: "Seitenübersicht von Ghostyak Notes mit allen Seiten eines 24-seitigen Dokuments im Raster und Schaltflächen zum Verschieben, Duplizieren und Drehen", caption: "Seitenübersicht" },
    spread: { alt: "Zweiseitenansicht von Ghostyak Notes mit den beschriebenen Seiten 4 und 5 nebeneinander", caption: "Zweiseitenansicht" },
  },
  showcase: {
    eyebrow: "Wichtige Funktionen",
    title: "PDFs lesen, beschreiben und durchsuchen –\nalles in einer App.",
    description: "Lehrbücher und Vorlesungsunterlagen, Berichte und Fachartikel. Importiere ein PDF, schreibe direkt darauf und finde später die Seite wieder, die du brauchst.",
    items: {
      pen: {
        eyebrow: "Schreiben",
        title: "Stift, Textmarker, Radierer.\nFarbe und Stärke nach deinem Geschmack.",
        description: "Lege für Stift und Textmarker jeweils drei Lieblingsfarben und drei Strichstärken fest und wechsle sofort zwischen ihnen. Was du schreibst, wird dabei automatisch gespeichert.",
        points: ["Stift, Textmarker, Radierer und Lasso-Auswahl", "Linien, Pfeile, Rechtecke, Ellipsen und Bilder", "Rückgängig und Wiederholen"],
      },
      search: {
        eyebrow: "Bibliothekssuche",
        title: "Nicht sicher, in welchem Buch es stand?\nEine Suche genügt.",
        description: "Mit Strg+Umschalt+F durchsuchst du den Text aller Dokumente in deiner Bibliothek. Die Ergebnisse sind nach Dokument gruppiert und zeigen Seitenzahl und Vorschau; mit Enter öffnest du die Seite.",
        points: ["In allen Dokumenten suchen (Strg+Umschalt+F)", "Im Dokument suchen (Strg+F)", "Mit Lesezeichen und dem PDF-Inhaltsverzeichnis springen"],
      },
      library: {
        eyebrow: "Bibliothek",
        title: "Ordne Lehrbücher und Notizen\nwie in einem Bücherregal.",
        description: "Importiere PDFs oder erstelle neue Notizen und sortiere sie in Ordner. Jedes Cover zeigt, wie weit du gelesen hast, und du kannst mehrere Dokumente in Tabs öffnen.",
        points: ["Ordner, Favoriten und zuletzt geöffnete Dokumente", "Cover-Raster und Listenansicht mit Sortierung", "Gelöschte Dokumente bleiben im Papierkorb"],
      },
      pages: {
        eyebrow: "Seitenübersicht",
        title: "Seiten verschieben,\nhinzufügen und drehen.",
        description: "Breite alle Seiten eines Dokuments auf einem Bildschirm aus, um sie neu anzuordnen, zu duplizieren, zu löschen oder zu drehen. Du kannst auch leere Seiten hinzufügen oder Seiten aus einem anderen PDF einfügen.",
        points: ["Nur Seiten mit Lesezeichen oder Notizen anzeigen", "Leere Seiten: blanko, liniert, kariert oder gepunktet", "Auch Seitenbearbeitungen lassen sich rückgängig machen"],
      },
      spread: {
        eyebrow: "Ansicht",
        title: "Seite für Seite –\noder zwei wie in einem Buch.",
        description: "Wechsle zwischen Einzelseiten- und Zweiseitenansicht und zoome auf Seitenbreite oder Seitenhöhe. Auch in langen Dokumenten bringt dich die Seitenleiste direkt zur gewünschten Seite.",
        points: ["Einzelseiten- und Zweiseitenansicht", "An Breite oder Höhe anpassen und zoomen", "Seitenleiste für Seiten, beschriebene Seiten, markierten Text, Lesezeichen und Inhaltsverzeichnis"],
      },
    },
  },
  more: {
    eyebrow: "Weitere Funktionen",
    title: "Die Werkzeuge, die du zum Lernen und Arbeiten brauchst.",
    items: [
      { title: "Textfelder", description: "Tippe direkt auf der Seite. Wähle zwischen serifenloser Schrift, Serifenschrift, Handschrift und Festbreitenschrift." },
      { title: "Text markieren", description: "Wähle Text in einem PDF aus, um ihn hervorzuheben, zu unterstreichen oder durchzustreichen, und kopiere ihn." },
      { title: "Lesezeichen", description: "Setze Lesezeichen auf wichtige Seiten und springe über die Liste direkt dorthin." },
      { title: "Durchblick", description: "Klicke auf Handschrift oder ein Textfeld, um es kurz durchscheinend zu machen und den Text darunter zu sehen." },
      { title: "Automatisches Speichern", description: "Es gibt keine Schaltfläche zum Speichern. Was du schreibst, wird laufend in der Dokumentdatei gespeichert." },
      { title: "Tastenkürzel", description: "Wähle Werkzeuge, suche und wechsle Seiten per Tastenkürzel." },
    ],
  },
  privacy: {
    eyebrow: "Auf deinem PC gespeichert",
    title: "Deine PDFs und Notizen bleiben nur auf deinem PC.",
    description: "Dokumente werden als Dateien im Ordner „Ghostyak Notes“ in deinem Ordner „Dokumente“ gespeichert. Du brauchst weder ein Konto noch eine Internetverbindung, und die importierten Original-PDF-Dateien werden nicht verändert.",
  },
  faq: {
    title: "Häufig gestellte Fragen",
    items: [
      { question: "Wie lange kann ich die Testversion nutzen?", answer: "Ab dem ersten Start der App kannst du 30 Tage lang alle Funktionen ohne Einschränkungen nutzen. Beim ersten Start zeigt dir die App das Enddatum an." },
      { question: "Was passiert nach 30 Tagen?", answer: "Du kannst Dokumente weiterhin öffnen, lesen und in ihnen suchen, aber Schreiben und die Suche in allen Dokumenten sind nicht mehr verfügbar. Deine Dokumente und Notizen werden nicht gelöscht. Für die weitere Nutzung brauchst du Pro; der Kauf ist bald möglich." },
      { question: "Wo werden meine Dokumente gespeichert?", answer: "Im Ordner „Ghostyak Notes“ in deinem Ordner „Dokumente“. Du kannst ihn über „문서 폴더 열기“ (Dokumentordner öffnen) unten links in der Bibliothek öffnen." },
      { question: "Werden auch gescannte PDFs durchsucht?", answer: "Ja. Bei gescannten PDFs ohne Textinformationen erkennt die App den Text (OCR), sodass du ihn durchsuchen kannst. Die Erkennung findet auf deinem eigenen PC statt, und die Suche in Handschrift wird noch nicht unterstützt." },
      { question: "Kann ich auch ohne Stift-Tablett mit der Maus auf PDFs schreiben?", answer: "Ja. Du kannst mit der Maus schreiben und mit der Tastatur in Textfelder tippen." },
      { question: "In welcher Sprache ist die App verfügbar?", answer: "Die Oberfläche der App ist derzeit auf Koreanisch verfügbar. Weitere Sprachen folgen in Kürze." },
      { question: "Auf welchem Windows läuft die App?", answer: "Die App ist für 64-Bit-Windows (x64). Wenn Microsoft Edge WebView2 Runtime fehlt, lädt das Installationsprogramm sie herunter und installiert sie." },
    ],
  },
  download: {
    title: "Lade die App herunter und\nimportiere dein erstes PDF.",
    description: "Windows x64 · Testversion · 30 Tage lang alle Funktionen",
  },
};

export default notes;
