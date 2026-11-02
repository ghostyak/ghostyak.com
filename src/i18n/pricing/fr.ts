import type { Dictionary } from "@/i18n/get-dictionary";

// Translation of the Korean source of 2026-11-02.
const pricing: Dictionary["pricing"] = {
  eyebrow: "Tarifs",
  title: "Essayez 30 jours,\npuis continuez avec Pro.",
  description: "Pendant 30 jours, la version d’essai est identique à Pro. Ensuite, vous pouvez continuer à écrire ; l’OCR et la recherche dans la bibliothèque sont réservés à Pro.",
  plans: {
    label: "Version d’essai et Pro",
    includes: "Tout ce que contient la version d’essai, plus :",
    trial: {
      name: "Version d’essai",
      tagline: "Essayer d’abord",
      price: "30 jours",
      priceUnit: "À compter du premier lancement",
      points: [
        "Écrire sur les PDF au stylo, au surligneur et en zones de texte",
        "Rechercher dans tous les documents à la fois",
        "Modifier les pages, créer des tables des matières, fusionner des documents",
        "Reconnaissance de texte des pages numérisées (OCR)",
        "Exporter en PDF avec l’écriture manuscrite et imprimer",
        "Ensuite, l’écriture reste disponible",
      ],
    },
    pro: {
      name: "Pro",
      tagline: "Sans limite de durée",
      status: "Bientôt disponible",
      priceUnit: "USD · Achat unique",
      action: "Achat bientôt disponible",
      note: "Notes est encore en bêta-test et la fonction d’achat est en construction. En attendant, essayez toutes les fonctionnalités avec la version d’essai.",
      points: [
        "OCR, mode automatique, mode performance",
        "Rechercher dans tous les documents",
        "Tous les signets, tout le texte marqué, mini-carte",
        "Une clé active jusqu’à 3 appareils",
        "Fonctionne sans Internet après l’activation",
        "Mises à jour incluses",
      ],
    },
  },
  footnote: "*À la fin de la version d’essai, seuls l’OCR, le mode automatique, le mode performance, la recherche dans la bibliothèque, tous les signets, tout le texte marqué et la mini-carte ne sont plus disponibles. Vos documents, vos annotations et le texte déjà reconnu sont conservés.",
  compare: {
    eyebrow: "Comparaison des fonctionnalités",
    title: "Essai de 30 jours et Pro : qu’est-ce qui change ?",
    description: "Pendant 30 jours, vous pouvez utiliser toutes les fonctionnalités de Pro. Ensuite, l’OCR et la recherche dans la bibliothèque sont désactivés, mais vous pouvez continuer à écrire.",
    feature: "Fonctionnalité",
    during: "30 jours",
    after: "Ensuite",
    available: "Disponible",
    unavailable: "Non disponible",
    readGroup: "Lire · Rechercher · Exporter",
    writeGroup: "Écrire · Organiser",
    proGroup: "Reconnaissance de texte · Recherche dans la bibliothèque",
    readFeatures: [
      "Lire les documents, voir les annotations existantes, sélectionner et copier du texte",
      "Rechercher dans un document, accès rapide, aller aux signets et à la table des matières",
      "Importer des PDF, organiser les documents",
      "Exporter en PDF (avec l’écriture manuscrite), imprimer",
      "Rechercher et copier le texte déjà reconnu",
      "Consulter le dictionnaire",
    ],
    writeFeatures: [
      "Écrire, marquer du texte, ajouter des signets, modifier les pages",
      "Nouvelle note, fusion de documents",
    ],
    proFeatures: [
      "OCR : cette page, plusieurs pages, document entier",
      "Mode automatique de la reconnaissance de texte (OCR), mode performance",
      "Rechercher dans tous les documents à la fois",
      "Tous les signets, tout le texte marqué",
      "Mini-carte",
    ],
  },
  faq: {
    items: [
      {
        question: "Quand pourrai-je acheter Pro ?",
        answer: "Notes est encore en bêta-test : la fonction d’achat est en construction et sera bientôt disponible. En attendant, vous pouvez essayer toutes les fonctionnalités avec la version d’essai.",
      },
      {
        question: "Pro est-il un abonnement ?",
        answer: "Non. Il s’agit d’un achat unique, et les mises à jour après l’achat sont incluses.",
      },
      {
        question: "Sur combien de PC puis-je utiliser Pro ?",
        answer: "Une clé active jusqu’à 3 appareils. Internet n’est nécessaire que pour l’activation ; ensuite, l’application fonctionne hors ligne.",
      },
      {
        question: "Que deviennent mes documents à la fin de la version d’essai ?",
        answer: "Vos documents et annotations ne sont pas supprimés. Vous pouvez toujours les ouvrir, les lire, y écrire et les exporter en PDF avec l’écriture manuscrite.",
      },
      {
        question: "Puis-je relancer la version d’essai ?",
        answer: "Non. La version d’essai est limitée à une fois par appareil et installer une nouvelle version ne la prolonge pas. Reculer la date de l’appareil met fin immédiatement à la version d’essai.",
      },
      {
        question: "Un PC qui utilisait la bêta peut-il bénéficier de la version d’essai ?",
        answer: "Oui. L’installation de la v1.0.0 démarre une nouvelle version d’essai de 30 jours.",
      },
    ],
  },
};

export default pricing;
