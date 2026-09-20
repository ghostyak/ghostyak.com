---
title: "CSV Search Engine è disponibile: lo strumento di ricerca che ci serviva"
description: "Presentiamo CSV Search Engine, un’app DFIR in Rust nata dalle dipendenze di installazione e dagli errori di parsing CSV incontrati con Timeline Explorer."
publishedAt: "2026-09-20"
translationKey: "csv-search-engine-launch"
sourceRevision: 1
---

**CSV Search Engine è disponibile.** È un’app Windows creata per cercare in grandi insiemi di dati CSV ed Excel durante attività di informatica forense e risposta agli incidenti (DFIR).

## Perché l’abbiamo creata

Il progetto è nato dalle difficoltà incontrate usando Timeline Explorer. Era necessario preparare le dipendenze di installazione e, a volte, durante il lavoro si verificavano errori di parsing CSV. Volevamo ridurre le interruzioni in cui l’esame dei dati lasciava spazio alla configurazione degli strumenti o alla risoluzione degli errori.

Quell’esperienza ci ha portati a costruire lo strumento di ricerca di cui avevamo bisogno. È stato il punto di partenza di CSV Search Engine.

## Uno strumento di ricerca scritto in Rust

L’app è scritta in **Rust**. Permette di aprire file CSV ed Excel, cercare nelle singole colonne, ordinare le righe e raggruppare valori uguali. Ci siamo concentrati sulla ricerca delle informazioni necessarie nei dati da analizzare.

La pagina del prodotto mostra schermate reali e offre il programma di installazione per Windows.

[Scopri CSV Search Engine](/it/product/csv-search-engine)

[Visita il repository GitHub](https://github.com/ghostyak/csv-search-engine)

