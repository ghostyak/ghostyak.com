import landing from "@/i18n/landing/de";
import type { Dictionary } from "@/i18n/get-dictionary";

const de: Dictionary = {
  landing,
  share: {
    heading: "Wenn es hilfreich ist, teile es gern",
    copyLink: "Link kopieren",
    copied: "Link kopiert",
    copyFailed: "Der Link konnte nicht automatisch kopiert werden. Kopiere die Adresse unten.",
    copyField: "Seitenadresse zum Teilen",
    x: "Auf X teilen",
    facebook: "Auf Facebook teilen",
    linkedin: "Auf LinkedIn teilen",
    instagram: "Auf Instagram teilen",
    threads: "Auf Threads teilen",
  },
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
    ],
    "metadataTitle": "CSV Search Engine | DFIR-Werkzeug zum Durchsuchen großer CSV- und Excel-Dateien",
    "licenseBadge": "Kostenlos für nicht kommerzielle Nutzung",
    "howToAction": "So funktioniert’s",
    "workflow": {
      "eyebrow": "So funktioniert’s",
      "title": "Datei öffnen und\ndirekt unter den Spaltenköpfen suchen.",
      "description": "Filtere große CSV- oder Excel-Dateien aus Forensik-Werkzeugen mit Bedingungen pro Spalte auf genau die Zeilen, die du brauchst.",
      "steps": [
        {
          "title": "Datei öffnen",
          "description": "Wähle über Datei → Öffnen (Strg+O) eine CSV-, XLS- oder XLSX-Datei aus oder ziehe sie ins Fenster."
        },
        {
          "title": "Pro Spalte suchen",
          "description": "Gib im Suchfeld unter einem Spaltenkopf eine Bedingung ein und drücke Enter. Bei Eingaben in mehreren Spalten werden nur Zeilen angezeigt, die alle Bedingungen erfüllen."
        },
        {
          "title": "Sortieren und Details ansehen",
          "description": "Klicke auf einen Spaltenkopf zum Sortieren, wähle eine Zeile aus und öffne die Zeilendetails, um die Werte aller Spalten zu sehen."
        }
      ]
    },
    "features": {
      "eyebrow": "Wichtige Funktionen",
      "title": "Finden, eingrenzen, gruppieren.",
      "items": [
        {
          "title": "Suche und Filter pro Spalte",
          "description": "Finde Zeilen mit Bedingungen wie enthält, schließt aus, exakt gleich, beginnt oder endet mit, leer und nicht leer."
        },
        {
          "title": "Zahlen- und Datumsbereiche",
          "description": "Vergleiche Zahlen und Daten mit größer als, mindestens, kleiner als, höchstens und zwischen. Beispiel: 2026-09-01 .. 2026-09-20"
        },
        {
          "title": "Sortieren und Gruppieren",
          "description": "Sortiere per Klick auf den Spaltenkopf und ziehe Spalten in die Feldgruppen, um gleiche Werte in bis zu acht Ebenen zu gruppieren."
        },
        {
          "title": "Tabellennavigation",
          "description": "Durchgehendes Scrollen, ausblendbare Spalten, anpassbare Spaltenbreiten und Zeilendetails machen breite Tabellen übersichtlich."
        },
        {
          "title": "CSV- und Excel-Unterstützung",
          "description": "Öffne CSV-, XLS- und XLSX-Dateien und wechsle zwischen Tabellenblättern. Excel muss nicht installiert sein."
        },
        {
          "title": "Sprachen und Kodierungen",
          "description": "Oberfläche auf Koreanisch, Englisch, Japanisch und Chinesisch mit automatischer Erkennung von CSV-Kodierungen wie UTF-8, CP949 und Shift_JIS."
        }
      ]
    },
    "privacy": {
      "eyebrow": "Offline-Analyse",
      "title": "Originale bleiben unverändert, die Analyse bleibt auf deinem PC.",
      "description": "Die App verändert deine Originaldateien nicht und lädt sie nirgends hoch. Sie läuft ohne Internetverbindung und ohne Konto und sendet weder automatische Netzwerkanfragen noch Nutzungsdaten."
    },
    "faq": {
      "title": "Häufige Fragen",
      "items": [
        {
          "question": "Ist die Nutzung kostenlos?",
          "answer": "Für nicht kommerzielle Zwecke sind alle Funktionen ohne zeitliche oder zahlenmäßige Begrenzung kostenlos. Die Nutzung für kommerzielle Arbeit, etwa für interne Aufgaben eines Unternehmens oder bezahlte forensische Analysen, ist untersagt. Die Nutzungsbedingungen findest du auch in der App unter Hilfe → Programminfo."
        },
        {
          "question": "Welche Dateien kann ich öffnen?",
          "answer": "CSV-, XLS- und XLSX-Dateien. XLS-Dateien werden bis 32 MiB unterstützt. Excel-Formatierung, Diagramme, Makroausführung und Neuberechnung von Formeln werden nicht unterstützt."
        },
        {
          "question": "Die Zeichen in meiner CSV-Datei werden falsch angezeigt.",
          "answer": "Standardmäßig wird die Kodierung automatisch erkannt. Werden Zeichen falsch angezeigt, wähle unter Einstellungen → CSV-Kodierung die passende Kodierung und öffne die Datei erneut."
        },
        {
          "question": "Kann ich Daten bearbeiten oder exportieren?",
          "answer": "Es ist ein Werkzeug zum Ansehen und Durchsuchen. Das Bearbeiten von Daten und der Export von Suchergebnissen werden noch nicht unterstützt."
        },
        {
          "question": "Wie lange dauern große Dateien?",
          "answer": "Beim ersten Öffnen einer Datei oder bei der Suche in einer neuen Spalte kann das Erstellen des Suchindex dauern, und du brauchst freien Speicherplatz für den Cache. Die Verarbeitungszeit hängt vom Dateiinhalt und deinem PC ab. Die Leistung bei CSV-Dateien ab 10 GiB ist noch nicht vollständig geprüft."
        },
        {
          "question": "Was brauche ich dafür?",
          "answer": "Die App ist für 64-Bit-Windows. Führe das Installationsprogramm aus und starte CSV Search Engine über das Startmenü."
        }
      ]
    },
    "download": {
      "title": "Herunterladen und\nerste Datei öffnen.",
      "description": "64-Bit-Windows · Kostenlos für nicht kommerzielle Nutzung"
    }
  },
  productCategories: { windowsProductivity: "Windows-Produktivität", webApps: "Web-Apps" },
  "folderHistory": {
    "metadataTitle": "Folder History | Windows-App zum erneuten Öffnen zuletzt besuchter Ordner",
    "cardDescription": "Eine Windows-App, die im Explorer besuchte Ordner aufzeichnet, damit du sie direkt aus dem Infobereich wieder öffnen kannst.",
    "description": "Zeichne die Ordner auf, die du im Explorer besuchst, und öffne sie direkt aus dem Infobereich wieder.",
    "downloadAction": "Kostenlos für Windows x64 herunterladen",
    "arm64DownloadAction": "Kostenlos für Windows ARM64 herunterladen",
    "howToAction": "So funktioniert’s",
    "screenshots": [
      {
        "alt": "Liste der zuletzt besuchten Ordner in Folder History mit Ordnernamen, Pfaden und dem Zeitpunkt des letzten Besuchs, neueste zuerst",
        "caption": "Zuletzt besucht · Koreanische Oberfläche"
      },
      {
        "alt": "Editor für Ausschlussregeln in Folder History mit den Einträgen node_modules und .next",
        "caption": "Ausschlussregeln bearbeiten"
      },
      {
        "alt": "Einstellungen von Folder History für Design, Start bei der Windows-Anmeldung und Aufbewahrung des Verlaufs",
        "caption": "Einstellungen · Design, Autostart, Aufbewahrung"
      }
    ],
    "workflow": {
      "eyebrow": "So funktioniert’s",
      "title": "Nie wieder Ordner suchen.\nÖffne sie aus deinen letzten Besuchen.",
      "description": "Wenn du nicht mehr weißt, wo du vor ein paar Tagen gearbeitet hast, doppelklicke auf das Symbol im Infobereich. Die zuletzt besuchten Ordner erscheinen der Reihe nach.",
      "steps": [
        {
          "title": "Überwachten Ordner hinzufügen",
          "description": "Wähle einen Ordner aus, der aufgezeichnet werden soll. Dieser Ordner und seine Unterordner bilden den Aufzeichnungsbereich."
        },
        {
          "title": "Explorer wie gewohnt nutzen",
          "description": "Wenn du einen Ordner im Windows-Explorer öffnest, wird der Zeitpunkt des letzten Besuchs automatisch aufgezeichnet."
        },
        {
          "title": "Aus dem Infobereich wieder öffnen",
          "description": "Doppelklicke auf das Symbol im Infobereich und dann auf einen Ordner in der Liste oder drücke Enter, um ihn im Explorer wieder zu öffnen."
        }
      ]
    },
    "features": {
      "eyebrow": "Wichtige Funktionen",
      "title": "Nur die Ordner, die du brauchst – so, wie du willst.",
      "items": [
        {
          "title": "Suchen und sortieren",
          "description": "Suche nach Ordnername oder Pfad (Strg+F) und sortiere nach Ordner, Pfad oder letztem Besuch."
        },
        {
          "title": "Oben anheften",
          "description": "Hefte häufig geöffnete Ordner an, damit sie oben in der Liste bleiben."
        },
        {
          "title": "Ausschlussregeln",
          "description": "Trage Ordnernamen, die nicht aufgezeichnet werden sollen, wie node_modules oder .git, jeweils in eine eigene Zeile ein. * und ? sind erlaubt."
        },
        {
          "title": "Papierkorb und Wiederherstellen",
          "description": "Gelöschte Einträge landen im Papierkorb und lassen sich mit dem ursprünglichen Besuchszeitpunkt wiederherstellen."
        },
        {
          "title": "Aufbewahrung des Verlaufs",
          "description": "Bewahre den Verlauf unbegrenzt auf oder lass ihn nach 1, 3, 6 oder 12 Monaten automatisch bereinigen."
        },
        {
          "title": "Pfad kopieren",
          "description": "Kopiere den vollständigen Pfad eines Ordners mit der Kopieren-Schaltfläche der Zeile oder mit Strg+C."
        }
      ]
    },
    "privacy": {
      "eyebrow": "Auf deinem PC gespeichert",
      "title": "Dein Verlauf bleibt auf deinem PC.",
      "description": "Besuchsverlauf und Einstellungen werden in den lokalen App-Daten deines PCs gespeichert. Server oder Konto sind nicht nötig. Wenn du Einträge löschst, bleiben deine echten Ordner und Dateien unverändert."
    },
    "faq": {
      "title": "Häufige Fragen",
      "items": [
        {
          "question": "Welche Ordnerbesuche werden aufgezeichnet?",
          "answer": "Aufgezeichnet wird, wenn du innerhalb eines überwachten Ordners einen Ordner im Windows-Explorer öffnest oder aus einem anderen Fenster oder Tab zu diesem Ordner zurückkehrst. Navigation in anderen Dateimanagern oder in Dialogen zum Öffnen von Dateien sowie Dateiänderungen gelten nicht als Besuche."
        },
        {
          "question": "Ist es kostenlos?",
          "answer": "Ja, du kannst es kostenlos nutzen."
        },
        {
          "question": "Stoppt die Aufzeichnung, wenn ich das Fenster schließe?",
          "answer": "Nein. Das X des Fensters blendet es nur aus, die Aufzeichnung läuft weiter. Um die App ganz zu beenden, klicke mit der rechten Maustaste auf das Symbol im Infobereich und wähle Beenden."
        },
        {
          "question": "Kann die App beim Start von Windows automatisch starten?",
          "answer": "Aktiviere in den Einstellungen ‚Bei Windows-Anmeldung starten‘. Standardmäßig ist die Option ausgeschaltet."
        },
        {
          "question": "Was brauche ich dafür?",
          "answer": "Die App läuft unter Windows 11 x64 oder ARM64. Das Installationsprogramm installiert für das aktuelle Benutzerkonto, daher sind keine Administratorrechte nötig. Fehlt die WebView2 Runtime, wird sie während der Installation mitinstalliert."
        }
      ]
    },
    "download": {
      "title": "Herunterladen und\nersten überwachten Ordner hinzufügen.",
      "description": "Windows 11 x64 / ARM64 · Installation ohne Administratorrechte"
    }
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
  header: { homeLabel: "GhostYak-Startseite", navigationLabel: "Hauptmenü", language: "Sprache wählen", products: "Produkte", blog: "Blog", support: "Unterstützen" },
  supportPage: {
    metadataTitle: "GhostYak unterstützen",
    title: "Unterstütze GhostYak",
    description: "Die meisten Windows-Tools und Web-Apps von GhostYak sind kostenlos. Deine Unterstützung fließt in die Weiterentwicklung und Verbesserung dieser Produkte.",
    methodsAction: "Möglichkeiten ansehen",
    productsAction: "Produkte ansehen",
    methods: { eyebrow: "So kannst du unterstützen", title: "Unterstütze auf dem Weg, der dir passt", description: "Beide Möglichkeiten laufen über eine externe Unterstützungsseite, die sich in einem neuen Tab öffnet.", action: "Auf {name} unterstützen", items: { buyMeACoffee: "Ein internationaler Unterstützungsdienst, über den du in wenigen Schritten per Karte beitragen kannst. Von überall auf der Welt einfach nutzbar.", ctee: "Eine koreanische Plattform zur Unterstützung von Kreativen, die koreanische Zahlungsmethoden akzeptiert." } },
    uses: { eyebrow: "Wofür die Unterstützung verwendet wird", title: "Deine Unterstützung hält die Produkte am Laufen", items: [{ title: "Neue Funktionen und Produkte", description: "Schafft Zeit für Funktionen auf Basis von Nutzerfeedback und für neue Tools." }, { title: "Wartung", description: "Hält die Produkte, die du nutzt, durch Anpassungen an Windows-Updates und Fehlerbehebungen stabil." }, { title: "Betrieb der Webdienste", description: "Deckt die Betriebskosten für Web-Apps wie Clock und OSINTS sowie für diese Website." }] },
    other: {
      eyebrow: "Weitere Möglichkeiten",
      title: "Du kannst auch ohne Spende helfen",
      share: { title: "Weiterempfehlen", description: "Empfiehl ein GhostYak-Produkt, das dir geholfen hat, an Menschen, die es brauchen." },
      feedback: { title: "Feedback senden", description: "Melde Probleme oder teile Verbesserungsideen auf GitHub.", action: "GitHub öffnen" },
      follow: { title: "Neuigkeiten teilen", description: "Folge GhostYak auf Instagram und Threads und teile unsere Neuigkeiten." },
    },
    thanks: { title: "Danke", description: "Danke, dass du GhostYak nutzt und unterstützt. Wir revanchieren uns mit besseren Tools." },
  },
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
