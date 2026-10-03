---
title: "Boxes-Leistungsoptimierung: v0.4.1 erscheint in Kürze"
description: "Damit Boxes schneller und ressourcenschonender läuft, haben wir die Leistung mit Fokus auf die Desktop-Organisation optimiert. Die optimierte Version v0.4.1 erscheint in Kürze."
publishedAt: "2026-10-03"
translationKey: "boxes-performance-update"
sourceRevision: 1
image: "/images/boxes/ghostyak-boxes-1920x1080.png"
imageAlt: "Windows-Desktop mit Boxen für Apps, Fotos, Musik und Projekte, einer Downloads-Box in der Listenansicht und zwei eingeklappten Boxen"
---

**Boxes v0.4.1 erscheint in Kürze.** Diese Version konzentriert sich auf die Leistung, damit Boxes schneller und ressourcenschonender läuft.

## Warum wir optimiert haben

Ein Desktop-Organizer ist der erste Arbeitsbereich, den du bei jedem Start deines PCs siehst. Frühere Versionen haben Boxen mit einer Webansicht (WebView2) dargestellt. Dadurch erschienen Boxen direkt nach der Anmeldung immer wieder verzögert, und auf Monitoren mit unterschiedlicher Skalierung wurden sie fehlerhaft angezeigt.

## Was sich ändert

- **Boxen werden direkt auf den Desktop gezeichnet.** Wir haben Boxes neu entwickelt, sodass Boxen und Symbole mit Windows-Grafikfunktionen (DirectComposition und Direct2D) statt mit einer Webansicht gezeichnet werden.
- **Menüs und Einstellungen nutzen jetzt die native Windows-Oberfläche.** Box-Menüs, das Einstellungsfenster und das Infobereichsmenü öffnen sich als Standardmenüs und -fenster von Windows und laufen dadurch ressourcenschonender.
- **Fokus auf Desktop-Organisation.** Aus Leistungsgründen wurden ab v0.4 alle Widget-Funktionen wie Fotobetrachter und Uhren entfernt. Wenn du Widgets genutzt hast, bitten wir um dein Verständnis.

## Veröffentlichung

v0.4.1 steht über GitHub Releases und die Boxes-Produktseite bereit, sobald die Version fertig ist. Das Ordnen von Dateien, Ordnern und App-Verknüpfungen in Boxen bleibt für private, geschäftliche und berufliche Nutzung kostenlos.

Wenn ein Problem auftritt oder du Verbesserungsmöglichkeiten siehst, teile uns bitte deine Windows- und Boxes-Version sowie die Situation mit, in der das Problem aufgetreten ist.

[Boxes entdecken](/de/product/boxes)

[Neueste Version ansehen](https://github.com/ghostyak/boxes/releases/latest)

[Problem melden oder Feedback geben](https://github.com/ghostyak/boxes/issues)
