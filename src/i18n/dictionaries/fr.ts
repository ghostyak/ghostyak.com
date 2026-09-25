import landing from "@/i18n/landing/fr";
import type { Dictionary } from "@/i18n/get-dictionary";

const fr: Dictionary = {
  landing,
  share: {
    heading: "Si cela vous aide, partagez cette page",
    copyLink: "Copier le lien",
    copied: "Lien copié",
    copyFailed: "Impossible de copier automatiquement. Copiez l’adresse ci-dessous.",
    copyField: "Adresse de la page à partager",
    x: "Partager sur X",
    facebook: "Partager sur Facebook",
    linkedin: "Partager sur LinkedIn",
    instagram: "Partager sur Instagram",
    threads: "Partager sur Threads",
  },
  csvSearch: {
    downloadAction: "Télécharger pour Windows",
    "category": "Investigation numérique",
    "description": "Recherchez dans de volumineux fichiers CSV et Excel, au même endroit.",
    "repositoryAction": "Voir sur GitHub",
    "screenshots": [
      {
        "alt": "Écran d’accueil de CSV Search Engine pour ouvrir des fichiers CSV et Excel",
        "caption": "Ouvrir un fichier · Interface en coréen"
      },
      {
        "alt": "CSV Search Engine affichant des données MFT, des champs de recherche par colonne et des lignes",
        "caption": "Vue des données MFT · Interface en coréen"
      }
    ],
    "metadataTitle": "CSV Search Engine | Outil DFIR pour rechercher dans de gros fichiers CSV et Excel",
    "licenseBadge": "Gratuit pour un usage non commercial",
    "howToAction": "Mode d’emploi",
    "workflow": {
      "eyebrow": "Mode d’emploi",
      "title": "Ouvrez un fichier et\ncherchez directement sous les en-têtes.",
      "description": "Filtrez les gros fichiers CSV ou Excel exportés par vos outils forensiques avec des conditions par colonne pour ne garder que les lignes utiles.",
      "steps": [
        {
          "title": "Ouvrir un fichier",
          "description": "Choisissez un fichier CSV, XLS ou XLSX avec Fichier → Ouvrir (Ctrl+O), ou faites-le glisser dans la fenêtre."
        },
        {
          "title": "Rechercher par colonne",
          "description": "Saisissez une condition dans le champ de recherche sous l’en-tête d’une colonne et appuyez sur Entrée. Avec des conditions dans plusieurs colonnes, seules les lignes qui les remplissent toutes s’affichent."
        },
        {
          "title": "Trier et voir le détail",
          "description": "Cliquez sur un en-tête pour trier, sélectionnez une ligne et ouvrez le détail de la ligne pour voir la valeur de chaque colonne."
        }
      ]
    },
    "features": {
      "eyebrow": "Fonctionnalités principales",
      "title": "Trouvez, filtrez, regroupez.",
      "items": [
        {
          "title": "Recherche et filtres par colonne",
          "description": "Trouvez des lignes avec les conditions contient, exclut, correspondance exacte, commence ou se termine par, vide et non vide."
        },
        {
          "title": "Plages de nombres et de dates",
          "description": "Comparez nombres et dates avec supérieur à, au moins, inférieur à, au plus et entre. Exemple : 2026-09-01 .. 2026-09-20"
        },
        {
          "title": "Tri et regroupement",
          "description": "Cliquez sur un en-tête pour trier, et faites glisser des colonnes dans les groupes de champs pour regrouper les valeurs identiques sur huit niveaux maximum."
        },
        {
          "title": "Navigation dans le tableau",
          "description": "Défilement continu, colonnes masquables, largeurs ajustables et détail des lignes facilitent l’exploration des tableaux larges."
        },
        {
          "title": "Prise en charge de CSV et Excel",
          "description": "Ouvrez des fichiers CSV, XLS et XLSX et passez d’un onglet de feuille à l’autre. Excel n’a pas besoin d’être installé."
        },
        {
          "title": "Langues et encodages",
          "description": "Interface en coréen, anglais, japonais et chinois, avec détection automatique des encodages CSV comme UTF-8, CP949 et Shift_JIS."
        }
      ]
    },
    "privacy": {
      "eyebrow": "Analyse hors ligne",
      "title": "Vos originaux restent intacts, l’analyse reste sur votre PC.",
      "description": "L’app ne modifie pas vos fichiers d’origine et ne les envoie nulle part. Elle fonctionne sans connexion Internet ni compte, sans requête réseau automatique ni collecte de données d’utilisation."
    },
    "faq": {
      "title": "Questions fréquentes",
      "items": [
        {
          "question": "Est-il gratuit ?",
          "answer": "Pour un usage non commercial, toutes les fonctionnalités sont gratuites, sans limite de durée ni d’utilisation. L’usage pour des travaux commerciaux, comme les activités internes d’une entreprise ou l’analyse forensique payante, est interdit. Les conditions d’utilisation figurent aussi dans l’app, sous Aide → À propos."
        },
        {
          "question": "Quels fichiers peut-il ouvrir ?",
          "answer": "Il ouvre les fichiers CSV, XLS et XLSX. Les fichiers XLS sont pris en charge jusqu’à 32 Mio ; la mise en forme Excel, les graphiques, l’exécution des macros et le recalcul des formules ne sont pas pris en charge."
        },
        {
          "question": "Les caractères de mon CSV s’affichent mal.",
          "answer": "Par défaut, l’encodage est détecté automatiquement. Si des caractères s’affichent mal, choisissez l’encodage adapté dans Paramètres → Encodage CSV, puis rouvrez le fichier."
        },
        {
          "question": "Puis-je modifier ou exporter des données ?",
          "answer": "C’est un outil de consultation et de recherche. La modification des données et l’export des résultats ne sont pas encore pris en charge."
        },
        {
          "question": "Combien de temps pour les gros fichiers ?",
          "answer": "À la première ouverture d’un fichier ou lors d’une recherche dans une nouvelle colonne, la création de l’index de recherche peut prendre du temps, et il faut de l’espace disque libre pour le cache. Le temps de traitement dépend du contenu du fichier et de votre PC ; les performances sur des CSV de 10 Gio ou plus n’ont pas encore été entièrement vérifiées."
        },
        {
          "question": "De quoi ai-je besoin ?",
          "answer": "Il est destiné à Windows 64 bits. Lancez le programme d’installation, puis ouvrez CSV Search Engine depuis le menu Démarrer."
        }
      ]
    },
    "download": {
      "title": "Téléchargez-le et\nouvrez votre premier fichier.",
      "description": "Windows 64 bits · Gratuit pour un usage non commercial"
    }
  },
  productCategories: { windowsProductivity: "Productivité Windows", webApps: "Applications web" },
  "folderHistory": {
    "metadataTitle": "Folder History | L’app Windows pour rouvrir les dossiers récemment visités",
    "cardDescription": "Une app Windows qui enregistre les dossiers visités dans l’Explorateur de fichiers pour les rouvrir directement depuis la zone de notification.",
    "description": "Enregistrez les dossiers visités dans l’Explorateur de fichiers et rouvrez-les directement depuis la zone de notification.",
    "downloadAction": "Télécharger pour Windows x64",
    "arm64DownloadAction": "Télécharger pour Windows ARM64",
    "howToAction": "Mode d’emploi",
    "screenshots": [
      {
        "alt": "Liste des visites récentes de Folder History affichant noms de dossiers, chemins et date de dernière visite, du plus récent au plus ancien",
        "caption": "Visites récentes · Interface en coréen"
      },
      {
        "alt": "Éditeur de règles d’exclusion de Folder History contenant node_modules et .next",
        "caption": "Modification des règles d’exclusion"
      },
      {
        "alt": "Paramètres de Folder History pour le thème, le lancement à l’ouverture de session Windows et la conservation de l’historique",
        "caption": "Paramètres · Thème, lancement automatique, conservation"
      }
    ],
    "workflow": {
      "eyebrow": "Mode d’emploi",
      "title": "Ne cherchez plus vos dossiers.\nRouvrez-les depuis vos visites récentes.",
      "description": "Quand vous ne vous souvenez plus où vous travailliez il y a quelques jours, double-cliquez sur l’icône de la zone de notification : les dossiers récemment visités s’affichent dans l’ordre.",
      "steps": [
        {
          "title": "Ajouter un dossier surveillé",
          "description": "Choisissez le dossier à enregistrer. Ce dossier et ses sous-dossiers constituent la zone d’enregistrement."
        },
        {
          "title": "Utiliser l’Explorateur comme d’habitude",
          "description": "Quand vous ouvrez un dossier dans l’Explorateur de fichiers Windows, l’heure de la dernière visite est enregistrée automatiquement."
        },
        {
          "title": "Rouvrir depuis la zone de notification",
          "description": "Double-cliquez sur l’icône de la zone de notification, puis double-cliquez sur un dossier de la liste ou appuyez sur Entrée pour le rouvrir dans l’Explorateur."
        }
      ]
    },
    "features": {
      "eyebrow": "Fonctionnalités principales",
      "title": "Seulement les dossiers utiles, à votre façon.",
      "items": [
        {
          "title": "Recherche et tri",
          "description": "Recherchez par nom de dossier ou par chemin (Ctrl+F), et triez par dossier, chemin ou dernière visite."
        },
        {
          "title": "Épingler en haut",
          "description": "Épinglez les dossiers que vous ouvrez souvent pour les garder en haut de la liste."
        },
        {
          "title": "Règles d’exclusion",
          "description": "Saisissez, un par ligne, les noms de dossiers à ne pas enregistrer, comme node_modules ou .git. Vous pouvez utiliser * et ?."
        },
        {
          "title": "Corbeille et restauration",
          "description": "Les entrées supprimées sont conservées dans la corbeille et peuvent être restaurées avec leur heure de visite d’origine."
        },
        {
          "title": "Durée de conservation",
          "description": "Conservez l’historique sans limite ou nettoyez-le automatiquement après 1, 3, 6 ou 12 mois."
        },
        {
          "title": "Copie du chemin",
          "description": "Copiez le chemin complet d’un dossier avec le bouton de copie de la ligne ou avec Ctrl+C."
        }
      ]
    },
    "privacy": {
      "eyebrow": "Stocké sur votre PC",
      "title": "Votre historique reste sur votre PC.",
      "description": "L’historique des visites et les paramètres sont stockés dans les données locales de l’application sur votre PC, sans serveur ni compte. Supprimer des entrées ne touche pas à vos dossiers et fichiers réels."
    },
    "faq": {
      "title": "Questions fréquentes",
      "items": [
        {
          "question": "Quelles visites de dossiers sont enregistrées ?",
          "answer": "Folder History enregistre l’ouverture d’un dossier situé dans un dossier surveillé avec l’Explorateur de fichiers Windows, ou le retour à ce dossier depuis une autre fenêtre ou un autre onglet. La navigation dans d’autres gestionnaires de fichiers ou dans les boîtes de dialogue d’ouverture de fichiers, ainsi que les modifications de fichiers, ne sont pas enregistrées comme des visites."
        },
        {
          "question": "Est-ce gratuit ?",
          "answer": "Oui, vous pouvez l’utiliser gratuitement."
        },
        {
          "question": "L’enregistrement s’arrête-t-il quand je ferme la fenêtre ?",
          "answer": "Non. Le X de la fenêtre la masque seulement, et l’enregistrement continue. Pour quitter complètement, faites un clic droit sur l’icône de la zone de notification et choisissez Quitter."
        },
        {
          "question": "Peut-il se lancer automatiquement au démarrage de Windows ?",
          "answer": "Activez « Lancer à l’ouverture de session Windows » dans les paramètres. L’option est désactivée par défaut."
        },
        {
          "question": "De quoi ai-je besoin ?",
          "answer": "Folder History fonctionne sous Windows 11 x64 ou ARM64. Le programme d’installation s’installe pour le compte utilisateur actuel, sans droits d’administrateur, et installe WebView2 Runtime pendant l’installation s’il est absent."
        }
      ]
    },
    "download": {
      "title": "Téléchargez-le et\najoutez votre premier dossier surveillé.",
      "description": "Windows 11 x64 / ARM64 · Installation sans droits d’administrateur"
    }
  },
  worldClock: {
  "badge": "Nouveau · Widget d’horloge mondiale",
  "title": "L’heure du monde, sur votre bureau.",
  "description": "Le matin à Séoul, l’aube à Londres, la nuit à New York. Comparez les heures et les dates de plusieurs villes avec l’horloge mondiale de Boxes. Organisez aussi vos fichiers et raccourcis sur le même bureau.",
  "widgetTitle": "Horloge mondiale",
  "previewCaption": "Aperçu du widget d’horloge mondiale · Les heures sont des exemples.",
  "cities": [
    "Séoul",
    "Londres",
    "San Francisco",
    "New York",
    "Vancouver"
  ],
  "heading": "Plusieurs fuseaux horaires. Un seul espace de travail.",
  "intro": "Avant de contacter un collègue à l’étranger ou d’appeler votre famille au loin, consultez leur heure locale sur votre bureau.",
  "benefits": [
    {
      "title": "Des villes côte à côte",
      "description": "Comparez d’un coup d’œil les heures des villes que vous consultez souvent."
    },
    {
      "title": "Dates et décalages horaires",
      "description": "Repérez les régions où la date diffère grâce à la date et au décalage UTC de chaque ville."
    },
    {
      "title": "Organisation et widgets réunis",
      "description": "Rassemblez fichiers, raccourcis et horloge mondiale dans votre espace de travail."
    }
  ]
},
  metadata: {
    site: { title: "GhostYak | Des logiciels Windows pour un quotidien organisé", titleTemplate: "%s | GhostYak", description: "GhostYak crée des logiciels qui simplifient et améliorent votre espace de travail Windows au quotidien." },
    boxes: { title: "Boxes", openGraphTitle: "GhostYak Boxes | Outil d’organisation du bureau Windows" },
    boxesDownload: { title: "Télécharger Boxes" },
    blog: { title: "Blog", description: "Les actualités produits et les récits de développement de GhostYak." },
  },
  header: { homeLabel: "Accueil de GhostYak", navigationLabel: "Menu principal", language: "Choisir la langue", products: "Produits", blog: "Blog", support: "Soutenir" },
  supportPage: {
    metadataTitle: "Soutenir GhostYak",
    title: "Soutenez GhostYak",
    description: "La plupart des outils Windows et des applications web de GhostYak sont gratuits. Votre soutien sert à continuer de les développer et de les améliorer.",
    methodsAction: "Voir comment soutenir",
    productsAction: "Découvrir les produits",
    methods: { eyebrow: "Comment soutenir", title: "Soutenez de la manière qui vous convient", description: "Les deux options passent par une page de soutien externe qui s’ouvre dans un nouvel onglet.", action: "Soutenir sur {name}", items: { buyMeACoffee: "Service de soutien international qui permet de contribuer par carte en quelques étapes. Facile à utiliser partout dans le monde.", ctee: "Plateforme coréenne de soutien aux créateurs qui accepte les moyens de paiement coréens." } },
    uses: { eyebrow: "À quoi sert le soutien", title: "Votre soutien fait vivre les produits", items: [{ title: "Nouvelles fonctionnalités et nouveaux produits", description: "Libère du temps pour créer des fonctionnalités issues des retours des utilisateurs et de nouveaux outils." }, { title: "Maintenance", description: "Garde stables les produits que vous utilisez grâce à la compatibilité avec les mises à jour de Windows et aux corrections de bugs." }, { title: "Services web", description: "Couvre les frais de fonctionnement des applications web comme Clock et OSINTS, ainsi que de ce site." }] },
    other: {
      eyebrow: "Autres façons d’aider",
      title: "Vous pouvez aider sans faire de don",
      share: { title: "En parler autour de vous", description: "Recommandez un produit GhostYak qui vous a été utile à ceux qui en ont besoin." },
      feedback: { title: "Donner votre avis", description: "Signalez des problèmes ou partagez des idées d’amélioration sur GitHub.", action: "Ouvrir GitHub" },
      follow: { title: "Partager les nouvelles", description: "Suivez GhostYak sur Instagram et Threads et partagez ses actualités." },
    },
    thanks: { title: "Merci", description: "Merci d’utiliser et de soutenir GhostYak. Nous vous le rendrons avec de meilleurs outils." },
  },
  footer: { description: "Des logiciels qui simplifient votre espace de travail Windows au quotidien.", navigationLabel: "Menu de pied de page", blog: "Blog" },
  carousel: { slideLabel: "Afficher l’écran {index}", pauseLabel: "Suspendre la rotation automatique", playLabel: "Reprendre la rotation automatique", pause: "Pause", play: "Lecture" },
  home: {
    screenReaderTitle: "Logiciels GhostYak",
    hero: {
      regionLabel: "À la une chez GhostYak", controlsLabel: "Choisir un écran principal",
      slides: [
        { eyebrow: "GHOSTYAK BOXES", title: "Faites de votre bureau un véritable espace de travail.", description: "Regroupez les fichiers et raccourcis dispersés dans des boîtes adaptées à leur usage et organisez-les d’un coup d’œil.", actionLabel: "Découvrir le produit", imageAlt: "Écran de démonstration 1 de Boxes" },
        { eyebrow: "DESKTOP, ORGANIZED", title: "Trouvez plus vite les fichiers dont vous avez besoin.", description: "Classez le travail, les projets et les outils fréquents à votre façon, puis ouvrez-les dès que nécessaire.", actionLabel: "Découvrir le produit", imageAlt: "Écran de démonstration 2 de Boxes" },
      ],
    },
    products: { eyebrow: "GHOSTYAK SOFTWARE", heading: "Nous créons de petits outils pour tous les jours", intro: "De l’organisation du bureau à la gestion du temps, jusqu’aux enquêtes OSINT et forensiques. Plutôt que d’accumuler les fonctionnalités, nous nous attachons à bien résoudre un désagrément fréquent.", freeBadge: "Gratuit", viewAction: "Découvrir le produit", webBadge: "Web", clockDescription: "Un outil pour l’heure actuelle, l’horloge mondiale, les alarmes, le minuteur, le Pomodoro et le chronomètre, directement dans le navigateur, sans installation.", osintsDescription: "Recherchez et analysez adresses IP, domaines et plus encore au même endroit, sans passer d’un site OSINT à l’autre.", webAction: "Ouvrir le site", clockPreviewLabel: "Aperçu de Clock" },
    blog: { eyebrow: "BLOG", heading: "Nous racontons comment nous créons", intro: "Les nouveautés produits et fonctionnalités, ainsi que les problèmes rencontrés en développement et la façon dont nous les avons résolus.", viewAction: "Voir le blog" },
  },
  boxes: {
    description: "Laissez vos fichiers dans leurs dossiers d’origine et regroupez-les sur le bureau dans des boîtes par tâche. Les fonctions de base sont gratuites, y compris en entreprise.",
    tagline: "Organisez un bureau dispersé d’un coup d’œil.", downloadAction: "Téléchargement gratuit", screenshotAlts: ["Écran de démonstration 1 de Boxes", "Écran de démonstration 2 de Boxes"],
    carousel: { regionLabel: "Aperçu de Boxes", controlsLabel: "Choisir un écran du produit" },
    features: {
      label: "FONCTIONNALITÉS CLÉS", heading: "L’essentiel pour rester organisé.",
      items: [
        { title: "Tout organiser d’un coup d’œil", description: "Regroupez les fichiers, dossiers et raccourcis associés dans des boîtes pour retrouver rapidement ce dont vous avez besoin." },
        { title: "Adapté à votre façon de travailler", description: "Déplacez et redimensionnez librement les boîtes, puis repliez-les lorsque vous avez besoin de plus d’espace sur le bureau." },
        { title: "Les fichiers d’origine restent en place", description: "Organisez avec des raccourcis sans déplacer les originaux et conservez intacte la structure de dossiers existante." },
      ],
    },
    availabilityNotice: "Seule la version gratuite est disponible actuellement. Une édition commerciale sera annoncée séparément lorsqu’elle sera prête.",
    download: { breadcrumbLabel: "Fil d’Ariane", breadcrumbCurrent: "Téléchargement", waitNotice: "Gardez cette page ouverte jusqu’à ce que votre navigateur commence à télécharger le programme d’installation.", fileInfoLabel: "Informations sur le programme d’installation", version: "Version {version}", fileSize: "Environ 3,3 Mo", requirement: "Nécessite Microsoft Edge WebView2 Runtime", countdown: "Votre téléchargement commencera dans {seconds} secondes.", starting: "Démarrage du téléchargement.", help: "Le téléchargement n’a pas démarré automatiquement ?", directAction: "Télécharger directement le programme d’installation" },
  },
  blog: { eyebrow: "GHOSTYAK BLOG", heading: "Blog", intro: "Les actualités produits et les enseignements tirés de notre processus de développement.", readMore: "Lire l’article", breadcrumbLabel: "Fil d’Ariane", breadcrumbHome: "Blog" },
};

export default fr;
