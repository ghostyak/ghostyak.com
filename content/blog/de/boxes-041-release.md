---
title: "Boxes v0.4.1 ist jetzt verfügbar"
description: "Schneller und ressourcenschonender: Boxes v0.4.1 ist da. Die Installation kommt ohne WebView2 und Administratorrechte aus, neu sind Live-Boxen, die einen Ordner direkt anzeigen, und eine eigene Ansicht für jede Box."
publishedAt: "2026-10-04"
translationKey: "boxes-041-release"
sourceRevision: 1
image: "/images/boxes/ghostyak-boxes-1920x1080.png"
imageAlt: "Windows-Desktop mit Boxen für Apps, Fotos, Musik und Projekte, einer Downloads-Box in der Listenansicht und zwei eingeklappten Boxen"
---

**Boxes v0.4.1 ist jetzt verfügbar.** Das ist die Version mit Leistungsoptimierung, die wir in [unserem letzten Beitrag](/de/blog/boxes-performance-update) angekündigt haben. Du kannst sie auf der Boxes-Produktseite und bei GitHub Releases herunterladen.

## Schlankere Installation

- **Kein WebView2 nötig.** Boxen, Menüs, Einstellungsfenster und Infobereich haben wir mit nativen Windows-Funktionen neu gebaut.
- **Keine Administratorrechte nötig.** Standardmäßig wird Boxes nur für das aktuelle Benutzerkonto installiert.
- Das Installationsprogramm ist für Windows 10/11 mit 64 Bit (x64).

## Neue Funktionen

### Live-Boxen

Eine Live-Box zeigt den Inhalt eines Ordners genau so, wie er ist. Klicke mit der rechten Maustaste auf einen Ordner in einer Box oder im Windows-Explorer und wähle **Diesen Ordner als Live-Box öffnen**. Im Explorer von Windows 11 findest du den Befehl unter **Weitere Optionen anzeigen**.

Werden im Ordner Dateien hinzugefügt oder gelöscht, aktualisiert sich die Box sofort. Live-Boxen dienen nur zur Ansicht, daher verschiebt oder löscht Boxes keine Dateien im Ordner.

### Eigene Ansicht für jede Box

Mit den Schaltflächen in der Statusleiste unten in einer Box wählst du für jede Box die Ansicht **Details, Symbole oder Große Symbole**. Die Detailansicht zeigt Änderungsdatum, Typ und Größe, und ein Klick auf eine Spaltenüberschrift sortiert die Liste. Links in der Statusleiste steht die Anzahl der Elemente.

### Update-Benachrichtigungen

Erscheint eine neue Version, informiert dich Boxes per Windows-Benachrichtigung und im Infobereichsmenü. Updates werden nicht automatisch heruntergeladen oder installiert.

## Vor der Installation

- Das Installationsprogramm ist noch nicht code-signiert. Beim ersten Start kann daher die Warnung **Der Computer wurde durch Windows geschützt** erscheinen. Klicke auf **Weitere Informationen** und dann auf **Trotzdem ausführen**.
- Boxen aus der vorherigen Version werden beim ersten Start automatisch übernommen.
- Widget-Funktionen wie Fotoanzeige und Uhr wurden ab v0.4 entfernt.

Das Ordnen von Datei-, Ordner- und App-Verknüpfungen in Boxen bleibt für private, geschäftliche und berufliche Nutzung kostenlos. Falls ein Problem auftritt, teile uns bitte deine Windows- und Boxes-Version und die Umstände mit.

[Boxes herunterladen](/de/product/boxes#download)

[Release v0.4.1 ansehen](https://github.com/ghostyak/boxes/releases/tag/v0.4.1)

[Problem melden oder Feedback geben](https://github.com/ghostyak/boxes/issues)
