import type { Dictionary } from "@/i18n/get-dictionary";

// Translation of the Korean source of 2026-11-01.
const pricing: Dictionary["pricing"] = {
  eyebrow: "Tarifs",
  title: "Essayez 30 jours,\npuis continuez avec Pro.",
  description: "Pendant 30 jours, la version d’essai est identique à Pro. Pour continuer à écrire et à rechercher dans votre bibliothèque ensuite, Pro suffit.",
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
        "Lecture seule à la fin ; documents et annotations conservés",
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
        "Écriture et recherche dans la bibliothèque sans limite de durée",
        "Une clé active jusqu’à 3 appareils",
        "Fonctionne sans Internet après l’activation",
        "La version achetée reste utilisable",
      ],
    },
  },
  footnote: "*À la fin de la version d’essai, vous pouvez seulement ouvrir et lire vos documents. Vos documents et annotations ne sont pas supprimés et peuvent être exportés en PDF avec l’écriture manuscrite.",
  compare: {
    eyebrow: "Comparaison des fonctionnalités",
    title: "Essai de 30 jours et Pro : qu’est-ce qui change ?",
    description: "Pendant 30 jours, la version d’essai équivaut à Pro. Ensuite, l’application passe en lecture seule et vos documents et annotations restent intacts.",
    feature: "Fonctionnalité",
    during: "30 jours",
    after: "Ensuite",
    available: "Disponible",
    unavailable: "Non disponible",
    readGroup: "Lire · Rechercher · Exporter",
    writeGroup: "Écrire · Organiser · Recherche dans la bibliothèque",
    readFeatures: [
      "Lire les documents, voir les annotations existantes, sélectionner et copier du texte",
      "Rechercher dans un document, accès rapide, aller aux signets et à la table des matières",
      "Importer des PDF, organiser les documents",
      "Exporter en PDF (avec l’écriture manuscrite), imprimer",
      "Reconnaissance de texte des pages numérisées (OCR)",
      "Consulter le dictionnaire",
    ],
    writeFeatures: [
      "Écrire, marquer du texte, ajouter des signets, modifier les pages, annuler",
      "Nouvelle note, fusion de documents",
      "Rechercher dans tous les documents",
    ],
  },
  faq: {
    items: [
      {
        question: "Quand pourrai-je acheter Pro ?",
        answer: "Notes est encore en bêta-test : la fonction d’achat est en construction et sera bientôt disponible. En attendant, vous pouvez essayer toutes les fonctionnalités avec la version d’essai, et après 30 jours, installer une nouvelle version vous donne 30 jours de plus.",
      },
      {
        question: "Pro est-il un abonnement ?",
        answer: "Non. Il s’agit d’un achat unique. Vous pouvez continuer à utiliser la version achetée ; le passage à une nouvelle version majeure est payant.",
      },
      {
        question: "Sur combien de PC puis-je utiliser Pro ?",
        answer: "Une clé active jusqu’à 3 appareils. Internet n’est nécessaire que pour l’activation ; ensuite, l’application fonctionne hors ligne.",
      },
      {
        question: "Que deviennent mes documents à la fin de la version d’essai ?",
        answer: "Vos documents et annotations ne sont pas supprimés. Vous pouvez toujours les ouvrir, les lire et les exporter en PDF avec l’écriture manuscrite.",
      },
      {
        question: "Puis-je relancer la version d’essai ?",
        answer: "Pendant le bêta-test, installer une nouvelle version après les 30 jours relance une version d’essai de 30 jours. Reculer la date de l’appareil y met fin immédiatement.",
      },
      {
        question: "Un PC qui utilisait la bêta peut-il bénéficier de la version d’essai ?",
        answer: "Oui. L’installation de la v1.0.0 démarre une nouvelle version d’essai de 30 jours.",
      },
    ],
  },
};

export default pricing;
