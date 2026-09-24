---
title: "Folder History ist da: kostenlose Windows-App, um zuletzt besuchte Ordner im Explorer wieder zu öffnen"
description: "Du weißt nicht mehr, in welchem Ordner du vor ein paar Tagen gearbeitet hast? Folder History zeichnet die im Windows-Explorer besuchten Ordner automatisch auf, damit du sie direkt aus dem Infobereich wieder öffnen kannst. Kostenlos."
publishedAt: "2026-09-24"
translationKey: "folder-history-launch"
sourceRevision: 1
image: "/images/folder-history/folder-history-main.png"
imageAlt: "Liste der zuletzt besuchten Ordner in Folder History mit Ordnernamen, Pfaden und dem Zeitpunkt des letzten Besuchs, neueste zuerst"
---

**Folder History ist jetzt verfügbar.** Die kostenlose Windows-App zeichnet automatisch die Ordner auf, die du im Windows-Explorer besuchst. Aus dem Infobereich der Taskleiste rufst du sie nach dem letzten Besuch sortiert auf und öffnest sie sofort wieder.

![Liste der zuletzt besuchten Ordner in Folder History](/images/folder-history/folder-history-main.png)

## Wo war noch mal der Ordner, den ich gerade offen hatte?

Wenn du in einem Projektordner zwischen Unterordnern wechselst, weißt du ein paar Tage später oft nicht mehr genau, wo du warst. Dann klickst du dich den Pfad erneut entlang oder versuchst, dich an den Ordnernamen zu erinnern.

Für genau diesen Moment haben wir Folder History gebaut. Die App zeichnet die Ordner auf, die du innerhalb der von dir gewählten Ordner im Explorer öffnest. So findest du sie in deinen letzten Besuchen, statt dich auf dein Gedächtnis zu verlassen.

## So öffnest du zuletzt besuchte Ordner wieder

1. **Überwachten Ordner hinzufügen.** Wähle einen Ordner aus, der aufgezeichnet werden soll, zum Beispiel `D:\Work`. Dieser Ordner und seine Unterordner bilden den Aufzeichnungsbereich.
2. **Explorer wie gewohnt nutzen.** Wenn du einen Ordner im Windows-Explorer öffnest, wird der Zeitpunkt des letzten Besuchs automatisch aufgezeichnet.
3. **Aus dem Infobereich wieder öffnen.** Doppelklicke auf das Symbol im Infobereich, dann erscheinen die zuletzt besuchten Ordner der Reihe nach. Doppelklicke auf einen Ordner in der Liste oder drücke Enter, um ihn im Explorer wieder zu öffnen.

Das X des Fensters blendet es nur aus, die Aufzeichnung läuft weiter. Um die App ganz zu beenden, klicke mit der rechten Maustaste auf das Symbol im Infobereich und wähle Beenden.

## Wichtige Funktionen

- **Suchen und sortieren**: Suche nach Ordnername oder Pfad (Strg+F) und sortiere nach Ordner, Pfad oder letztem Besuch.
- **Oben anheften**: Hefte häufig geöffnete Ordner an, damit sie oben in der Liste bleiben.
- **Ausschlussregeln**: Trage Ordnernamen, die nicht aufgezeichnet werden sollen, wie `node_modules` oder `.git`, jeweils in eine eigene Zeile ein. `*` und `?` sind erlaubt.
- **Papierkorb und Wiederherstellen**: Gelöschte Einträge landen im Papierkorb und lassen sich mit dem ursprünglichen Besuchszeitpunkt wiederherstellen.
- **Aufbewahrung des Verlaufs**: Bewahre den Verlauf unbegrenzt auf oder lass ihn nach 1, 3, 6 oder 12 Monaten automatisch bereinigen.
- **Pfad kopieren**: Kopiere den vollständigen Pfad eines Ordners mit der Kopieren-Schaltfläche der Zeile oder mit Strg+C.
- **Design und Autostart**: Wähle das Systemdesign, hell oder dunkel, und aktiviere in den Einstellungen den Start bei der Windows-Anmeldung. Der Autostart ist standardmäßig ausgeschaltet.

![Editor für Ausschlussregeln in Folder History](/images/folder-history/folder-history-ignore-rule.png)

## Wo wird der Besuchsverlauf gespeichert?

Besuchsverlauf und Einstellungen werden in den lokalen App-Daten deines PCs gespeichert. Server oder Konto sind nicht nötig. Wenn du Einträge löschst, bleiben deine echten Ordner und Dateien unverändert.

## Welche Ordnerbesuche werden aufgezeichnet?

Aufgezeichnet wird, wenn du innerhalb eines überwachten Ordners einen Ordner im Windows-Explorer öffnest oder aus einem anderen Fenster oder Tab zu diesem Ordner zurückkehrst. Navigation in anderen Dateimanagern oder in Dialogen zum Öffnen von Dateien sowie Dateiänderungen gelten nicht als Besuche.

## Systemvoraussetzungen und kostenloser Download

Folder History ist kostenlos und läuft unter Windows 11 x64. Das Installationsprogramm installiert für das aktuelle Benutzerkonto, daher sind keine Administratorrechte nötig. Fehlt die WebView2 Runtime, wird sie während der Installation mitinstalliert.

Auf der Produktseite findest du echte Screenshots und häufige Fragen und kannst das Installationsprogramm herunterladen.

[Folder History ansehen](/de/product/folder-history)

[GitHub-Repository ansehen](https://github.com/ghostyak/folder-history)
