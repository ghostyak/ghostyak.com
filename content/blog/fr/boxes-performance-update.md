---
title: "Optimisation des performances de Boxes : la v0.4.1 arrive bientôt"
description: "Nous avons optimisé les performances de Boxes, en nous concentrant sur l’organisation du bureau, pour le rendre plus rapide et plus léger. La v0.4.1 optimisée sortira bientôt."
publishedAt: "2026-10-03"
translationKey: "boxes-performance-update"
sourceRevision: 1
image: "/images/boxes/ghostyak-boxes-1920x1080.png"
imageAlt: "Bureau Windows avec des boîtes Applications, Photos, Musique et Projets, une boîte Téléchargements en vue liste et deux boîtes repliées"
---

**Boxes v0.4.1 sortira bientôt.** Cette version se concentre sur les performances afin que Boxes soit plus rapide et plus léger.

## Pourquoi optimiser

Un outil d’organisation du bureau est le premier espace de travail que vous voyez chaque fois que vous allumez votre PC. Les versions précédentes affichaient les boîtes avec une vue web (WebView2), ce qui provoquait régulièrement un affichage tardif des boîtes juste après la connexion et des décalages sur les écrans dont la mise à l’échelle diffère.

## Ce qui change

- **Les boîtes sont dessinées directement sur le bureau.** Nous avons reconstruit Boxes pour dessiner les boîtes et les icônes avec les fonctions graphiques de Windows (DirectComposition et Direct2D) plutôt qu’avec une vue web.
- **Les menus et les paramètres utilisent désormais l’interface native de Windows.** Les menus des boîtes, la fenêtre des paramètres et le menu de la zone de notification s’ouvrent sous forme de menus et de fenêtres standard de Windows, pour un fonctionnement plus léger.
- **L’accent sur l’organisation du bureau.** Pour des raisons de performances, toutes les fonctions de widgets, comme la visionneuse de photos et les horloges, ont été retirées à partir de la v0.4. Si vous utilisiez des widgets, merci de votre compréhension.

## Sortie

La v0.4.1 sera disponible sur GitHub Releases et sur la page produit de Boxes dès qu’elle sera prête. L’organisation des fichiers, dossiers et raccourcis d’applications dans des boîtes reste gratuite pour un usage personnel, en entreprise ou professionnel.

Si vous rencontrez un problème ou voyez un point à améliorer, indiquez-nous vos versions de Windows et de Boxes ainsi que la situation dans laquelle le problème est survenu.

[Découvrir Boxes](/fr/product/boxes)

[Voir la dernière version](https://github.com/ghostyak/boxes/releases/latest)

[Signaler un problème ou donner votre avis](https://github.com/ghostyak/boxes/issues)
