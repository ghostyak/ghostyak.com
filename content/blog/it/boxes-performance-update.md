---
title: "Ottimizzazione delle prestazioni di Boxes: la v0.4.1 arriva presto"
description: "Abbiamo ottimizzato le prestazioni di Boxes, concentrandoci sull’organizzazione del desktop, per renderlo più veloce e leggero. La v0.4.1 ottimizzata arriverà presto."
publishedAt: "2026-10-03"
translationKey: "boxes-performance-update"
sourceRevision: 1
image: "/images/boxes/ghostyak-boxes-1920x1080.png"
imageAlt: "Desktop di Windows con riquadri per app, foto, musica e progetti, un riquadro Download in visualizzazione elenco e due riquadri compressi"
---

**Boxes v0.4.1 arriverà presto.** Questa versione si concentra sulle prestazioni, per rendere Boxes più veloce e leggero.

## Perché abbiamo ottimizzato

Uno strumento per organizzare il desktop è il primo spazio di lavoro che vedi ogni volta che accendi il PC. Le versioni precedenti disegnavano i riquadri con una vista web (WebView2): per questo, subito dopo l’accesso, i riquadri comparivano spesso in ritardo e sui monitor con un ridimensionamento diverso venivano visualizzati in modo errato.

## Cosa cambia

- **I riquadri vengono disegnati direttamente sul desktop.** Abbiamo ricostruito Boxes per disegnare riquadri e icone con le funzioni grafiche di Windows (DirectComposition e Direct2D) invece che con una vista web.
- **Menu e impostazioni usano ora l’interfaccia nativa di Windows.** I menu dei riquadri, la finestra delle impostazioni e il menu dell’area di notifica si aprono come menu e finestre standard di Windows e risultano più leggeri.
- **Attenzione all’organizzazione del desktop.** Per le prestazioni, a partire dalla v0.4 sono state rimosse tutte le funzioni widget, come il visualizzatore di foto e gli orologi. Se usavi i widget, ti ringraziamo per la comprensione.

## Rilascio

La v0.4.1 sarà disponibile su GitHub Releases e nella pagina del prodotto Boxes non appena sarà pronta. Organizzare file, cartelle e collegamenti alle app nei riquadri resta gratuito per uso personale, aziendale e lavorativo.

Se riscontri un problema o vedi qualcosa da migliorare, indicaci la tua versione di Windows e di Boxes e cosa stava succedendo quando si è verificato.

[Scopri Boxes](/it/product/boxes)

[Vedi l’ultima versione](https://github.com/ghostyak/boxes/releases/latest)

[Segnala un problema o invia un feedback](https://github.com/ghostyak/boxes/issues)
