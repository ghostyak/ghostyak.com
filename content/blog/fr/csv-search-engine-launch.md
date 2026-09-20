---
title: "CSV Search Engine est disponible : l’outil de recherche dont nous avions besoin"
description: "Découvrez CSV Search Engine, une application DFIR en Rust née des dépendances d’installation et des erreurs de parsing CSV rencontrées avec Timeline Explorer."
publishedAt: "2026-09-20"
translationKey: "csv-search-engine-launch"
sourceRevision: 1
---

**CSV Search Engine est disponible.** Cette application Windows a été conçue pour rechercher dans de volumineux ensembles de données CSV et Excel lors de travaux d’investigation numérique et de réponse aux incidents (DFIR).

## Pourquoi nous l’avons créée

Le projet est né de difficultés rencontrées avec Timeline Explorer. Il fallait préparer les dépendances d’installation, et des erreurs de parsing CSV survenaient parfois pendant le travail. Nous souhaitions réduire ces interruptions où l’analyse des données laissait place à la configuration d’outils ou à la résolution d’erreurs.

Cette expérience nous a amenés à créer l’outil de recherche dont nous avions besoin. C’est ainsi que CSV Search Engine a commencé.

## Un outil de recherche écrit en Rust

L’application est écrite en **Rust**. Elle permet d’ouvrir des fichiers CSV et Excel, de rechercher par colonne, de trier les lignes et de regrouper les valeurs identiques. Nous nous sommes concentrés sur la recherche des informations utiles dans les données à analyser.

La page du produit présente des captures réelles et propose le programme d’installation Windows.

[Découvrir CSV Search Engine](/fr/product/csv-search-engine)

[Voir le dépôt GitHub](https://github.com/ghostyak/csv-search-engine)

