---
title: "Boxes v0.4.1 est disponible"
description: "Plus rapide et plus léger, Boxes v0.4.1 est disponible. Il s’installe sans WebView2 ni droits d’administrateur et ajoute les boîtes en direct, qui affichent un dossier tel quel, ainsi qu’un affichage propre à chaque boîte."
publishedAt: "2026-10-04"
translationKey: "boxes-041-release"
sourceRevision: 1
image: "/images/boxes/ghostyak-boxes-1920x1080.png"
imageAlt: "Bureau Windows avec des boîtes Applications, Photos, Musique et Projets, une boîte Téléchargements en vue liste et deux boîtes repliées"
---

**Boxes v0.4.1 est disponible.** C’est la version optimisée annoncée dans [notre précédent article](/fr/blog/boxes-performance-update). Vous pouvez la télécharger depuis la page produit de Boxes et sur GitHub Releases.

## Une installation plus légère

- **WebView2 n’est plus nécessaire.** Nous avons reconstruit les boîtes, les menus, la fenêtre des paramètres et la zone de notification avec les fonctions natives de Windows.
- **Aucun droit d’administrateur n’est nécessaire.** Par défaut, Boxes s’installe uniquement pour l’utilisateur actuel.
- Le programme d’installation est destiné à Windows 10/11 64 bits (x64).

## Nouveautés

### Boîtes en direct

Une boîte en direct affiche le contenu d’un dossier tel quel. Faites un clic droit sur un dossier dans une boîte ou dans l’Explorateur de fichiers Windows, puis choisissez **Ouvrir ce dossier comme boîte en direct**. Dans l’Explorateur de fichiers de Windows 11, la commande se trouve sous **Afficher d’autres options**.

Lorsque des fichiers sont ajoutés au dossier ou supprimés, la boîte se met à jour aussitôt. Les boîtes en direct servent uniquement à l’affichage : Boxes ne déplace ni ne supprime jamais les fichiers du dossier.

### Un affichage pour chaque boîte

Les boutons de la barre d’état, en bas de chaque boîte, permettent de choisir l’affichage **Détails, Icônes ou Grandes icônes** boîte par boîte. L’affichage Détails indique la date de modification, le type et la taille, et un clic sur un en-tête de colonne trie la liste. La partie gauche de la barre d’état indique le nombre d’éléments.

### Notifications de mise à jour

Lorsqu’une nouvelle version sort, Boxes vous prévient par une notification Windows et dans le menu de la zone de notification. Il ne télécharge ni n’installe les mises à jour automatiquement.

## Avant d’installer

- Le programme d’installation n’est pas encore signé. Au premier lancement, l’avertissement **Windows a protégé votre ordinateur** peut donc s’afficher. Cliquez sur **Informations complémentaires**, puis sur **Exécuter quand même**.
- Les boîtes créées dans la version précédente sont importées automatiquement au premier lancement.
- Les widgets, comme la visionneuse de photos et l’horloge, ont été retirés à partir de la v0.4.

Ranger des raccourcis de fichiers, de dossiers et d’applications dans des boîtes reste gratuit pour un usage personnel, professionnel ou en entreprise. En cas de problème, indiquez-nous vos versions de Windows et de Boxes ainsi que les circonstances.

[Télécharger Boxes](/fr/product/boxes#download)

[Voir la version v0.4.1](https://github.com/ghostyak/boxes/releases/tag/v0.4.1)

[Signaler un problème ou donner votre avis](https://github.com/ghostyak/boxes/issues)
