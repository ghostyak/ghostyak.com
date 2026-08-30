import type { Dictionary } from "@/i18n/get-dictionary";

const fr: Dictionary = {
  metadata: {
    site: { title: "GhostYak | Des logiciels Windows pour un quotidien organisé", titleTemplate: "%s | GhostYak", description: "GhostYak crée des logiciels qui simplifient et améliorent votre espace de travail Windows au quotidien." },
    boxes: { title: "Boxes", openGraphTitle: "GhostYak Boxes | Outil d’organisation du bureau Windows" },
    boxesDownload: { title: "Télécharger Boxes" },
    blog: { title: "Blog", description: "Les actualités produits et les récits de développement de GhostYak." },
  },
  header: { homeLabel: "Accueil de GhostYak", navigationLabel: "Menu principal", language: "Choisir la langue", products: "Produits", blog: "Blog" },
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
    products: { eyebrow: "GHOSTYAK SOFTWARE", heading: "Produits disponibles maintenant", intro: "Nous nous concentrons sur les petits désagréments du quotidien plutôt que d’ajouter de la complexité.", freeBadge: "Gratuit", viewAction: "Découvrir le produit" },
    blog: { eyebrow: "BLOG", heading: "Les coulisses de nos créations", intro: "Retrouvez les actualités produits et les récits de développement sur le blog GhostYak.", viewAction: "Voir le blog" },
  },
  boxes: {
    description: "Un outil de bureau qui organise les fichiers, dossiers et raccourcis du bureau Windows dans des boîtes flexibles.",
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
