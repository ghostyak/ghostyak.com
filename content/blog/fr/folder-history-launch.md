---
title: "Folder History est disponible : l’app Windows gratuite pour rouvrir les dossiers récemment visités dans l’Explorateur"
description: "Vous ne vous souvenez plus du dossier dans lequel vous travailliez il y a quelques jours ? Folder History enregistre automatiquement les dossiers visités dans l’Explorateur de fichiers Windows pour les rouvrir depuis la zone de notification. Gratuitement."
publishedAt: "2026-09-24"
translationKey: "folder-history-launch"
sourceRevision: 1
image: "/images/folder-history/folder-history-main.png"
imageAlt: "Liste des visites récentes de Folder History affichant noms de dossiers, chemins et date de dernière visite, du plus récent au plus ancien"
---

**Folder History est désormais disponible.** Cette app Windows gratuite enregistre automatiquement les dossiers que vous visitez dans l’Explorateur de fichiers Windows. Vous les retrouvez ensuite dans la zone de notification, classés par visite la plus récente, et vous les rouvrez aussitôt.

![Liste des visites récentes de Folder History](/images/folder-history/folder-history-main.png)

## Où était ce dossier que je venais d’ouvrir ?

Quand on passe d’un sous-dossier à l’autre dans un dossier de projet, on ne sait plus toujours, quelques jours plus tard, où l’on se trouvait exactement. On finit par remonter le chemin à la main ou par chercher à se rappeler le nom du dossier.

Nous avons créé Folder History pour ce moment-là. L’app enregistre les dossiers ouverts dans l’Explorateur à l’intérieur des dossiers que vous choisissez : plus besoin de compter sur votre mémoire, il suffit de les rouvrir depuis vos visites récentes.

## Comment rouvrir les dossiers récemment visités

1. **Ajoutez un dossier surveillé.** Choisissez le dossier à enregistrer, par exemple `D:\Work`. Ce dossier et ses sous-dossiers constituent la zone d’enregistrement.
2. **Utilisez l’Explorateur comme d’habitude.** Quand vous ouvrez un dossier dans l’Explorateur de fichiers Windows, l’heure de la dernière visite est enregistrée automatiquement.
3. **Rouvrez-le depuis la zone de notification.** Double-cliquez sur l’icône de la zone de notification : les dossiers récemment visités s’affichent dans l’ordre. Double-cliquez sur un dossier de la liste ou appuyez sur Entrée pour le rouvrir dans l’Explorateur.

Le X de la fenêtre la masque seulement, et l’enregistrement continue. Pour quitter complètement, faites un clic droit sur l’icône de la zone de notification et choisissez Quitter.

## Fonctionnalités principales

- **Recherche et tri** : recherchez par nom de dossier ou par chemin (Ctrl+F), et triez par dossier, chemin ou dernière visite.
- **Épingler en haut** : épinglez les dossiers que vous ouvrez souvent pour les garder en haut de la liste.
- **Règles d’exclusion** : saisissez, un par ligne, les noms de dossiers à ne pas enregistrer, comme `node_modules` ou `.git`. Vous pouvez utiliser `*` et `?`.
- **Corbeille et restauration** : les entrées supprimées sont conservées dans la corbeille et peuvent être restaurées avec leur heure de visite d’origine.
- **Durée de conservation** : conservez l’historique sans limite ou nettoyez-le automatiquement après 1, 3, 6 ou 12 mois.
- **Copie du chemin** : copiez le chemin complet d’un dossier avec le bouton de copie de la ligne ou avec Ctrl+C.
- **Thème et lancement automatique** : choisissez le thème du système, clair ou sombre, et activez le lancement à l’ouverture de session Windows dans les paramètres. Le lancement automatique est désactivé par défaut.

![Éditeur de règles d’exclusion de Folder History](/images/folder-history/folder-history-ignore-rule.png)

## Où l’historique des visites est-il stocké ?

L’historique des visites et les paramètres sont stockés dans les données locales de l’application sur votre PC. Aucun serveur ni compte n’est nécessaire. Supprimer des entrées ne touche pas à vos dossiers et fichiers réels.

## Quelles visites de dossiers sont enregistrées ?

Folder History enregistre l’ouverture d’un dossier situé dans un dossier surveillé avec l’Explorateur de fichiers Windows, ou le retour à ce dossier depuis une autre fenêtre ou un autre onglet. La navigation dans d’autres gestionnaires de fichiers ou dans les boîtes de dialogue d’ouverture de fichiers, ainsi que les modifications de fichiers, ne sont pas enregistrées comme des visites.

## Configuration requise et téléchargement gratuit

Folder History est gratuit et fonctionne sous Windows 11 x64. Le programme d’installation s’installe pour le compte utilisateur actuel, sans droits d’administrateur, et installe WebView2 Runtime pendant l’installation s’il est absent.

La page du produit présente des captures réelles et les questions fréquentes, et propose le programme d’installation.

[Découvrir Folder History](/fr/product/folder-history)

[Voir le dépôt GitHub](https://github.com/ghostyak/folder-history)
