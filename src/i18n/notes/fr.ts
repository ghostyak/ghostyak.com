import type { Dictionary } from "@/i18n/get-dictionary";

// Translation of the Korean source, including the trial and Pro terms of 2026-11-02.
const notes: Dictionary["notes"] = {
  metadataTitle: "Ghostyak Notes | App de notes sur PDF pour Windows",
  metadataDescription: "Une application de notes pour Windows pour écrire sur vos PDF au stylet et au clavier, et retrouver ce que vous avez lu dans tous vos documents. Essayez toutes les fonctionnalités pendant 30 jours.",
  heroTitle: "Ghostyak Notes : écrivez sur vos PDF\net retrouvez tout aussitôt",
  featuredAction: "Découvrir l’application de notes PDF",
  cardDescription: "Une application de notes pour Windows pour écrire sur vos PDF au stylet et au clavier, et retrouver ce que vous avez lu dans tous vos documents.",
  description: "Écrivez sur vos PDF au stylet et au clavier, et retrouvez ce que vous avez lu dans tous vos documents.",
  featuredEyebrow: "Nouveau",
  betaBadge: "Essai de 30 jours",
  trialBadge: "Toutes les fonctionnalités pendant 30 jours",
  downloadAction: "Télécharger pour Windows x64",
  featuresAction: "Voir les fonctionnalités",
  pricingAction: "Comparer la version d’essai et Pro",
  heroNote: "Vous pouvez utiliser toutes les fonctionnalités pendant 30 jours à compter du premier lancement, puis continuer à écrire.",
  screenshots: {
    annotate: { alt: "Ghostyak Notes affichant un manuel PDF avec du texte surligné et des notes manuscrites dans la marge" },
    pen: { alt: "Réglages du stylo de Ghostyak Notes avec trois emplacements de couleur, une palette et trois épaisseurs", caption: "Réglages du stylo · Couleur et épaisseur" },
    search: { alt: "Recherche dans la bibliothèque de Ghostyak Notes pour un mot coréen, avec les pages trouvées dans deux documents et leurs aperçus", caption: "Rechercher dans tous les documents" },
    library: { alt: "Bibliothèque de Ghostyak Notes affichant dix documents en grille de couvertures, avec dossiers et favoris à gauche", caption: "Bibliothèque · Dossiers et grille de couvertures" },
    pages: { alt: "Vue d’ensemble des pages de Ghostyak Notes affichant toutes les pages d’un document de 24 pages en grille, avec des boutons pour déplacer, dupliquer et faire pivoter", caption: "Vue d’ensemble des pages" },
    spread: { alt: "Affichage sur deux pages de Ghostyak Notes avec les pages 4 et 5 annotées côte à côte", caption: "Affichage sur deux pages" },
  },
  video: { playAction: "Regarder la vidéo de présentation", title: "Vidéo de présentation de Ghostyak Notes", posterAlt: "Écran d’ouverture de la vidéo de présentation : l’icône et le nom de Ghostyak Notes sur fond bleu, avec la phrase « Écrivez sur vos PDF, retrouvez tout »", caption: "1 min 29 s · Interface en coréen", watchOnYouTube: "Regarder sur YouTube" },
  showcase: {
    eyebrow: "Fonctionnalités principales",
    title: "Lire, annoter et rechercher dans vos PDF,\ndans une seule application.",
    description: "Manuels et supports de cours, rapports et articles. Importez un PDF, écrivez directement dessus et retrouvez plus tard la page dont vous avez besoin.",
    items: {
      pen: {
        eyebrow: "Écriture",
        title: "Stylo, surligneur, gomme.\nCouleurs et épaisseur à votre goût.",
        description: "Définissez trois emplacements de couleur et d’épaisseur pour le stylo et pour le surligneur, puis passez de l’un à l’autre instantanément. Ce que vous écrivez est enregistré automatiquement au fur et à mesure.",
        points: ["Stylo, surligneur, gomme et sélection au lasso", "Lignes, flèches, rectangles, ellipses et images", "Annuler et rétablir"],
      },
      search: {
        eyebrow: "Recherche dans la bibliothèque",
        title: "Vous ne savez plus dans quel livre c’était ?\nUne seule recherche suffit.",
        description: "Appuyez sur Ctrl+Maj+F pour rechercher dans le texte de tous les documents de votre bibliothèque. Les résultats sont regroupés par document avec le numéro de page et un aperçu, et Entrée ouvre la page.",
        points: ["Rechercher dans tous les documents (Ctrl+Maj+F)", "Rechercher dans le document (Ctrl+F)", "Naviguer avec les signets et le sommaire du PDF"],
      },
      library: {
        eyebrow: "Bibliothèque",
        title: "Rangez manuels et notes\ncomme sur une étagère.",
        description: "Importez des PDF ou créez de nouvelles notes, puis classez-les dans des dossiers. Chaque couverture indique où vous en êtes dans votre lecture, et vous pouvez ouvrir plusieurs documents dans des onglets.",
        points: ["Dossiers, favoris et documents récents", "Grille de couvertures et liste, avec tri", "Les documents supprimés sont conservés dans la corbeille"],
      },
      pages: {
        eyebrow: "Vue d’ensemble des pages",
        title: "Déplacez, ajoutez\net faites pivoter les pages.",
        description: "Affichez toutes les pages d’un document sur un seul écran pour les réorganiser, les dupliquer, les supprimer ou les faire pivoter. Vous pouvez aussi ajouter des pages vierges ou insérer des pages d’un autre PDF.",
        points: ["Afficher uniquement les pages avec signet ou annotées", "Pages vierges : unies, lignées, quadrillées ou à points", "Les modifications de pages peuvent aussi être annulées"],
      },
      spread: {
        eyebrow: "Affichage",
        title: "Une page à la fois,\nou deux comme dans un livre.",
        description: "Passez de l’affichage sur une page à l’affichage sur deux pages, et ajustez le zoom à la largeur ou à la hauteur. Même dans les longs documents, la barre latérale vous mène directement à la page voulue.",
        points: ["Affichage sur une ou deux pages", "Ajuster à la largeur, à la hauteur et zoomer", "Barre latérale : pages, pages annotées, texte marqué, signets et sommaire"],
      },
    },
  },
  more: {
    eyebrow: "Autres fonctionnalités",
    title: "Les outils qu’il vous faut pour étudier et travailler.",
    items: [
      { title: "Zones de texte", description: "Saisissez du texte au clavier directement sur la page. Choisissez entre des polices sans empattement, avec empattement, manuscrite et à chasse fixe." },
      { title: "Marquer le texte", description: "Sélectionnez du texte dans un PDF pour le surligner, le souligner ou le barrer, et copiez-le." },
      { title: "Signets", description: "Ajoutez des signets aux pages importantes et accédez-y depuis la liste." },
      { title: "Translucide", description: "Cliquez sur une annotation ou une zone de texte pour la rendre translucide et voir le texte en dessous." },
      { title: "Enregistrement automatique", description: "Il n’y a pas de bouton Enregistrer. Ce que vous écrivez est enregistré dans le fichier du document au fur et à mesure." },
      { title: "Raccourcis clavier", description: "Choisissez des outils, recherchez et changez de page avec des raccourcis." },
    ],
  },
  privacy: {
    eyebrow: "Stocké sur votre PC",
    title: "Vos PDF et vos annotations restent uniquement sur votre PC.",
    description: "Les documents sont enregistrés sous forme de fichiers dans le dossier « Ghostyak Notes » de votre dossier Documents. Vous n’avez besoin ni de compte ni de connexion Internet, et les fichiers PDF d’origine que vous importez ne sont pas modifiés.",
  },
  faq: {
    title: "Questions fréquentes",
    items: [
      { question: "Combien de temps puis-je utiliser la version d’essai ?", answer: "Vous pouvez utiliser toutes les fonctionnalités sans restriction pendant 30 jours à compter du premier lancement de l’application. La date de fin vous est indiquée au premier lancement." },
      { question: "Que se passe-t-il après 30 jours ?", answer: "Vous pouvez continuer à écrire. L’OCR, le mode automatique, le mode performance, la recherche dans tous les documents, tous les signets, tout le texte marqué et la mini-carte ne sont plus disponibles. Vos documents, vos annotations et le texte déjà reconnu sont conservés. Pro est nécessaire pour ces fonctionnalités." },
      { question: "Où mes documents sont-ils enregistrés ?", answer: "Dans le dossier « Ghostyak Notes » de votre dossier Documents. Vous pouvez l’ouvrir avec « Documents folder » (Ouvrir le dossier des documents), en bas à gauche de la bibliothèque." },
      { question: "La recherche fonctionne-t-elle sur les PDF numérisés ?", answer: "Oui. Pour les PDF numérisés sans informations de texte, l’application reconnaît le texte (OCR) afin que vous puissiez y faire des recherches. La reconnaissance s’effectue sur votre propre PC, et la recherche dans l’écriture manuscrite n’est pas encore prise en charge." },
      { question: "Puis-je écrire sur mes PDF à la souris, sans tablette à stylet ?", answer: "Oui. Vous pouvez écrire à la souris et saisir du texte au clavier dans des zones de texte." },
      { question: "Dans quelle langue l’application est-elle proposée ?", answer: "L’interface de l’application est disponible en coréen et en anglais. Elle s’ouvre dans la langue de votre appareil, ou en anglais pour toute autre langue, et vous pouvez la changer dans les réglages." },
      { question: "Sur quel Windows fonctionne-t-elle ?", answer: "L’application est destinée à Windows 64 bits (x64). Si Microsoft Edge WebView2 Runtime est absent, le programme d’installation le télécharge et l’installe." },
    ],
  },
  download: {
    title: "Téléchargez l’application et\nimportez votre premier PDF.",
    description: "Windows x64 · Toutes les fonctionnalités pendant 30 jours · Pro $29 en achat unique",
  },
};

export default notes;
