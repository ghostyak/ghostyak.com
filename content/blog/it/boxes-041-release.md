---
title: "Boxes v0.4.1 è disponibile"
description: "Più veloce e leggero, Boxes v0.4.1 è disponibile. Si installa senza WebView2 né permessi di amministratore e aggiunge le scatole live, che mostrano una cartella così com’è, e una visualizzazione per ogni riquadro."
publishedAt: "2026-10-04"
translationKey: "boxes-041-release"
sourceRevision: 1
image: "/images/boxes/ghostyak-boxes-1920x1080.png"
imageAlt: "Desktop di Windows con riquadri per app, foto, musica e progetti, un riquadro Download in visualizzazione elenco e due riquadri compressi"
---

**Boxes v0.4.1 è disponibile.** È la versione con le ottimizzazioni delle prestazioni annunciata nel [nostro articolo precedente](/it/blog/boxes-performance-update). Puoi scaricarla dalla pagina del prodotto Boxes e da GitHub Releases.

## Un’installazione più leggera

- **WebView2 non serve più.** Abbiamo ricostruito riquadri, menu, finestra delle impostazioni e area di notifica con le funzioni native di Windows.
- **Non servono permessi di amministratore.** Per impostazione predefinita, Boxes si installa solo per l’utente corrente.
- Il programma di installazione è per Windows 10/11 a 64 bit (x64).

## Novità

### Scatole live

Una scatola live mostra il contenuto di una cartella così com’è. Fai clic con il pulsante destro su una cartella in un riquadro o in Esplora file di Windows e scegli **Apri questa cartella come scatola live**. In Esplora file di Windows 11 il comando si trova in **Mostra altre opzioni**.

Quando nella cartella vengono aggiunti o eliminati file, il riquadro si aggiorna subito. Le scatole live servono solo alla visualizzazione, quindi Boxes non sposta né elimina mai i file della cartella.

### Una visualizzazione per ogni riquadro

Con i pulsanti della barra di stato, in fondo al riquadro, puoi scegliere per ogni riquadro la visualizzazione **Dettagli, Icone o Icone grandi**. La visualizzazione Dettagli mostra data di modifica, tipo e dimensione, e puoi ordinare facendo clic sull’intestazione di una colonna. A sinistra della barra di stato compare il numero di elementi.

### Notifiche di aggiornamento

Quando esce una nuova versione, Boxes ti avvisa con una notifica di Windows e nel menu dell’area di notifica. Non scarica né installa gli aggiornamenti automaticamente.

## Prima di installare

- Il programma di installazione non ha ancora la firma del codice, quindi al primo avvio può comparire l’avviso **PC protetto da Windows**. Fai clic su **Ulteriori informazioni** e poi su **Esegui comunque**.
- I riquadri creati nella versione precedente vengono importati automaticamente al primo avvio.
- Le funzioni widget, come il visualizzatore di foto e l’orologio, sono state rimosse a partire dalla v0.4.

Organizzare in riquadri i collegamenti a file, cartelle e app resta gratuito per uso personale, aziendale e professionale. Se riscontri un problema, indicaci la versione di Windows e di Boxes e cosa è successo.

[Scarica Boxes](/it/product/boxes#download)

[Vedi la versione v0.4.1](https://github.com/ghostyak/boxes/releases/tag/v0.4.1)

[Segnala un problema o invia un feedback](https://github.com/ghostyak/boxes/issues)
