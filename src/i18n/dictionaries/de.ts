import landing from "@/i18n/landing/de";
import type { Dictionary } from "@/i18n/get-dictionary";

const de: Dictionary = {
  landing,
  csvSearch: {
    downloadAction: "Für Windows herunterladen",
    "category": "Digitale Forensik",
    "description": "Große CSV- und Excel-Dateien durchsuchen. Alles an einem Ort.",
    "repositoryAction": "Auf GitHub ansehen",
    "screenshots": [
      {
        "alt": "Startansicht von CSV Search Engine zum Öffnen von CSV- und Excel-Dateien",
        "caption": "Datei öffnen · Koreanische Oberfläche"
      },
      {
        "alt": "CSV Search Engine mit MFT-Daten, Suchfeldern für einzelne Spalten und Datenzeilen",
        "caption": "MFT-Datenansicht · Koreanische Oberfläche"
      }
    ]
  },
  worldClock: {
  "badge": "Neu · Weltuhr-Widget",
  "title": "Die Zeit der Welt, direkt auf deinem Desktop.",
  "description": "Vormittag in Seoul, früher Morgen in London, Nacht in New York. Vergleiche Uhrzeit und Datum mehrerer Städte mit der Weltuhr von Boxes. Organisiere auch Dateien und Verknüpfungen auf demselben Desktop.",
  "widgetTitle": "Weltuhr",
  "previewCaption": "Vorschau des Weltuhr-Widgets · Die Uhrzeiten sind Beispiele.",
  "cities": [
    "Seoul",
    "London",
    "San Francisco",
    "New York",
    "Vancouver"
  ],
  "heading": "Verschiedene Zeitzonen. Ein Arbeitsbereich.",
  "intro": "Bevor du Kollegen im Ausland kontaktierst oder weit entfernte Familie anrufst: Prüfe ihre Ortszeit auf deinem Desktop.",
  "benefits": [
    {
      "title": "Städte nebeneinander",
      "description": "Vergleiche die Uhrzeiten häufig benötigter Städte auf einen Blick."
    },
    {
      "title": "Datum und Zeitunterschiede",
      "description": "Erkenne Regionen mit einem anderen Datum anhand des Datums und UTC-Versatzes jeder Stadt."
    },
    {
      "title": "Ordnung und Widgets vereint",
      "description": "Versammle Dateien, Verknüpfungen und die Weltuhr in deinem Arbeitsbereich."
    }
  ]
},
  metadata: {
    site: { title: "GhostYak | Windows-Software für einen organisierten Alltag", titleTemplate: "%s | GhostYak", description: "GhostYak entwickelt Software, die den täglichen Windows-Arbeitsbereich einfacher und komfortabler macht." },
    boxes: { title: "Boxes", openGraphTitle: "GhostYak Boxes | Desktop-Organisation für Windows" },
    boxesDownload: { title: "Boxes herunterladen" },
    blog: { title: "Blog", description: "Produktneuigkeiten und Entwicklungsgeschichten von GhostYak." },
  },
  header: { homeLabel: "GhostYak-Startseite", navigationLabel: "Hauptmenü", language: "Sprache wählen", products: "Produkte", blog: "Blog" },
  footer: { description: "Software, die den täglichen Windows-Arbeitsbereich einfacher macht.", navigationLabel: "Fußzeilenmenü", blog: "Blog" },
  carousel: { slideLabel: "Ansicht {index} anzeigen", pauseLabel: "Automatischen Wechsel anhalten", playLabel: "Automatischen Wechsel fortsetzen", pause: "Pause", play: "Abspielen" },
  home: {
    screenReaderTitle: "GhostYak-Software",
    hero: {
      regionLabel: "Neuigkeiten von GhostYak", controlsLabel: "Hero-Ansicht auswählen",
      slides: [
        { eyebrow: "GHOSTYAK BOXES", title: "Mach deinen Desktop wieder zum Arbeitsplatz.", description: "Sammle verstreute Dateien und Verknüpfungen in zweckmäßigen Boxen und schaffe Ordnung auf einen Blick.", actionLabel: "Produkt ansehen", imageAlt: "Boxes-Demoansicht 1" },
        { eyebrow: "DESKTOP, ORGANIZED", title: "Finde benötigte Dateien schneller.", description: "Ordne Arbeit, Projekte und häufig verwendete Werkzeuge auf deine Weise und öffne sie genau dann, wenn du sie brauchst.", actionLabel: "Produkt ansehen", imageAlt: "Boxes-Demoansicht 2" },
      ],
    },
    products: { eyebrow: "GHOSTYAK SOFTWARE", heading: "Wir bauen kleine Werkzeuge für jeden Tag", intro: "Vom Aufräumen des Desktops über Zeitmanagement bis zu OSINT- und Forensik-Untersuchungen. Statt immer mehr Funktionen hinzuzufügen, lösen wir lieber ein häufiges Ärgernis richtig.", freeBadge: "Kostenlos", viewAction: "Produkt ansehen", webBadge: "Web", clockDescription: "Ein Zeitwerkzeug mit aktueller Uhrzeit, Weltuhr, Wecker, Timer, Pomodoro und Stoppuhr, direkt im Browser und ohne Installation.", osintsDescription: "Durchsuche und analysiere IP-Adressen, Domains und mehr an einem Ort, ohne zwischen OSINT-Seiten zu wechseln.", webAction: "Website öffnen", clockPreviewLabel: "Vorschau von Clock" },
    blog: { eyebrow: "BLOG", heading: "Wir halten fest, wie wir bauen", intro: "Neuigkeiten zu Produkten und Funktionen sowie Probleme aus der Entwicklung und wie wir sie gelöst haben.", viewAction: "Zum Blog" },
  },
  boxes: {
    description: "Lass deine Dateien in ihren ursprünglichen Ordnern und sammle sie auf dem Desktop in Boxen pro Aufgabe. Die Grundfunktionen sind kostenlos, auch im Unternehmen.",
    tagline: "Ordne einen unübersichtlichen Desktop auf einen Blick.", downloadAction: "Kostenlos herunterladen", screenshotAlts: ["Boxes-Demoansicht 1", "Boxes-Demoansicht 2"],
    carousel: { regionLabel: "Boxes-Vorschau", controlsLabel: "Produktansicht auswählen" },
    features: {
      label: "WICHTIGE FUNKTIONEN", heading: "Alles Wesentliche für mehr Ordnung.",
      items: [
        { title: "Auf einen Blick organisiert", description: "Fasse zusammengehörige Dateien, Ordner und Verknüpfungen in Boxen zusammen und finde schnell, was du brauchst." },
        { title: "Passend zu deiner Arbeitsweise", description: "Verschiebe und skaliere Boxen frei und klappe sie ein, wenn du mehr Platz auf dem Desktop brauchst." },
        { title: "Originaldateien bleiben unverändert", description: "Organisiere mit Verknüpfungen, ohne Originale zu verschieben, und behalte deine bestehende Ordnerstruktur bei." },
      ],
    },
    availabilityNotice: "Derzeit ist nur die kostenlose Version verfügbar. Eine kommerzielle Edition wird angekündigt, sobald sie bereit ist.",
    download: { breadcrumbLabel: "Brotkrümelnavigation", breadcrumbCurrent: "Download", waitNotice: "Lass diese Seite geöffnet, bis dein Browser den Download des Installationsprogramms startet.", fileInfoLabel: "Informationen zum Installationsprogramm", version: "Version {version}", fileSize: "Ca. 3,3 MB", requirement: "Microsoft Edge WebView2 Runtime erforderlich", countdown: "Der Download startet in {seconds} Sekunden.", starting: "Download wird gestartet.", help: "Der Download wurde nicht automatisch gestartet?", directAction: "Installationsprogramm direkt herunterladen" },
  },
  blog: { eyebrow: "GHOSTYAK BLOG", heading: "Blog", intro: "Produktneuigkeiten und Erkenntnisse aus unserem Entwicklungsprozess.", readMore: "Artikel lesen", breadcrumbLabel: "Brotkrümelnavigation", breadcrumbHome: "Blog" },
};

export default de;
