import type { Dictionary } from "@/i18n/get-dictionary";

// Translation of the Korean source approved on 2026-09-07, revised 2026-10-03.
const landing: Dictionary["landing"] = {
  "metadata": {
    "title": "GhostYak Boxes | Organisez gratuitement votre bureau Windows",
    "description": "Regroupez fichiers, dossiers et raccourcis d’applications dans des boîtes sans déplacer les originaux. Les fonctions de base sont gratuites pour un usage personnel, en entreprise et professionnel sous Windows."
  },
  "brand": "GhostYak Boxes",
  "skip": "Aller au contenu",
  "actions": {
    "download": "Télécharger pour Windows x64",
    "arm64Download": "Télécharger pour Windows ARM64",
    "install": "Guide d’installation",
    "viewScreenshot": "Agrandir la capture",
    "alternativeTo": "Découvrir sur AlternativeTo",
    "release": "Dernière version et nouveautés",
    "feedback": "Signaler un problème ou donner un avis",
    "copy": "Copier le lien pour l’ouvrir sur PC",
    "copied": "Lien copié",
    "copyFailed": "Sélectionnez et copiez l’adresse ci-dessous.",
    "copyField": "Adresse du site officiel à ouvrir sur PC"
  },
  "hero": {
    "title": [
      "Vos fichiers restent.",
      "Votre bureau,",
      "à votre façon."
    ],
    "platform": "Windows 10/11 · 64 bits",
    "mediaAlt": "Bureau Windows avec des boîtes Applications, Photos, Musique et Projets, une boîte Téléchargements en vue liste et deux boîtes repliées",
    "caption": "Un bureau organisé avec une boîte par tâche",
  },
  "workflow": {
    "eyebrow": "Organisez selon votre travail",
    "title": "Stockez dans des dossiers.\nTravaillez depuis des boîtes.",
    "description": "Dossiers de projets, documents et applications courantes : réunissez des éléments de différents emplacements autour de votre tâche du moment.",
    "originalLabel": "Dossiers existants",
    "originalItems": [
      "Documents / Proposition",
      "Projets / Maquette",
      "Partage / Planning"
    ],
    "boxItems": [
      "Proposition",
      "Maquette",
      "Planning"
    ],
    "connection": "Reliés par des raccourcis",
    "boxLabel": "Projet en cours",
    "result": "Schéma du fonctionnement",
    "steps": [
      {
        "title": "Créez une boîte par glisser droit",
        "description": "Faites glisser le bouton droit de la souris sur une zone vide du bureau pour créer une boîte de la taille souhaitée."
      },
      {
        "title": "Glissez-y des fichiers et des dossiers",
        "description": "Faites glisser les éléments nécessaires dans une boîte. Un même élément peut être lié à plusieurs boîtes."
      },
      {
        "title": "Déplacez, redimensionnez et repliez",
        "description": "Faites glisser la barre de titre pour déplacer la boîte et ses bords pour la redimensionner. Double-cliquez sur une zone vide de la barre de titre pour la replier."
      }
    ],
    "extras": [
      "Verrouillez la disposition pour éviter les déplacements involontaires",
      "Restaurez positions et tailles selon la configuration des écrans"
    ]
  },
  "free": {
    "eyebrow": "Fonctions gratuites disponibles aujourd’hui",
    "title": "Gratuit chez vous et au travail.",
    "description": "Utilisez Boxes gratuitement à titre personnel, en entreprise ou pour votre travail. Aucun compte ni moyen de paiement à enregistrer.",
    "currentTitle": "Organisation du bureau",
    "price": "Gratuit",
    "currentDescription": "Aucune limite de boîtes, d’éléments ou de durée d’utilisation.",
    "currentFeatures": [
      "Organiser fichiers, dossiers et raccourcis d’applications",
      "Déplacer, redimensionner, replier et verrouiller les boîtes",
      "Restaurer la disposition selon les écrans",
      "Usage personnel, en entreprise et professionnel"
    ],
    "plannedNote": "Nous prévoyons de proposer la synchronisation comme fonction payante à l’avenir. Le détail des fonctions, les tarifs et les dates seront annoncés ultérieurement."
  },
  "faq": {
    "title": "Avant l’installation",
    "items": [
      {
        "question": "Est-ce gratuit aussi au travail ?",
        "answer": "Oui. Les fonctions d’organisation du bureau actuellement disponibles sont gratuites pour un usage personnel, en entreprise ou professionnel. Il n’y a pas de période d’essai au terme de laquelle il faut payer."
      },
      {
        "question": "Que deviennent mes icônes de bureau et mes fichiers originaux ?",
        "answer": "Glisser un élément dans une boîte crée un lien vers son chemin. Les icônes et fichiers d’origine restent en place ; retirer un élément d’une boîte ne supprime pas l’original. Double-cliquez sur une zone vide du bureau pour masquer ou réafficher toutes les icônes existantes."
      },
      {
        "question": "Pour quelles tâches Boxes convient-il comme alternative à Fences ?",
        "answer": "Boxes convient pour regrouper les fichiers et applications de différents dossiers dans des boîtes par tâche. Vous pouvez lier un élément à plusieurs boîtes, les replier ou les verrouiller et mémoriser la disposition selon les écrans. Si Fences est aussi installé, les fonctions de double-clic de Boxes sont désactivées par défaut pour éviter les conflits."
      },
      {
        "question": "Comment l’installer ?",
        "answer": "Exécutez l’installateur sous Windows 10/11 64 bits et suivez les instructions. Ni droits administrateur ni WebView2 ne sont nécessaires. Avec les options par défaut, Boxes démarre automatiquement à la fin.",
        "link": "install"
      },
      {
        "question": "La synchronisation est-elle déjà disponible ?",
        "answer": "Pas encore. Elle est prévue comme fonction payante. Les détails et le calendrier de sortie seront annoncés ultérieurement."
      },
      {
        "question": "Où signaler un problème ou donner mon avis ?",
        "answer": "Utilisez le lien de signalement et de retour sur GitHub. Indiquez vos versions de Windows et de Boxes, ainsi que les circonstances du problème.",
        "link": "feedback"
      }
    ]
  },
  "download": {
    "title": "Téléchargez et créez\nvotre première boîte.",
    "description": "Windows 10/11 · 64 bits · Installation sans droits administrateur",
    "steps": [
      {
        "title": "Lancez l’installateur",
        "description": "Exécutez le fichier GhostyakBoxes-x64-setup.exe téléchargé et suivez les instructions d’installation."
      },
      {
        "title": "Démarrage automatique après l’installation",
        "description": "Laissez l’option de lancement de Ghostyak Boxes cochée sur l’écran final et terminez l’installation. Boxes démarrera automatiquement."
      },
      {
        "title": "Créez votre première boîte",
        "description": "Faites glisser le bouton droit sur une zone vide du bureau pour créer une boîte, puis glissez-y les fichiers ou dossiers nécessaires."
      }
    ],
    "help": {
      "title": "Boxes ne démarre pas après l’installation ?",
      "launch": "Si vous avez décoché l’option de lancement sur l’écran final, ouvrez Ghostyak Boxes depuis le menu Démarrer.",
      "feedback": "Si le problème persiste, indiquez vos versions de Windows et de Boxes ainsi que le message d’erreur."
    },
    "source": "Installateur officiel · GitHub Releases"
  },
  "footer": {
    "description": "Les originaux restent à leur place. Votre espace de travail, à votre façon.",
    "navigation": "En savoir plus",
    "blog": "Blog",
    "copyright": "© 2026 GhostYak"
  }
};

export default landing;
