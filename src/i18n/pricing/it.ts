import type { Dictionary } from "@/i18n/get-dictionary";

// Translation of the Korean source of 2026-11-02.
const pricing: Dictionary["pricing"] = {
  eyebrow: "Prezzi",
  title: "Provalo 30 giorni,\npoi continua con Pro.",
  description: "Per 30 giorni la versione di prova è identica a Pro. Dopo la scadenza puoi continuare a scrivere; l’OCR e la ricerca nella libreria restano in Pro.",
  plans: {
    label: "Versione di prova e Pro",
    includes: "Tutto ciò che offre la versione di prova, più:",
    trial: {
      name: "Versione di prova",
      tagline: "Prima provalo",
      price: "30 giorni",
      priceUnit: "Dal giorno del primo avvio",
      points: [
        "Scrivi sui PDF con penna, evidenziatore e caselle di testo",
        "Cerca in tutti i documenti in una volta",
        "Modifica le pagine, crea indici, unisci documenti",
        "Riconoscimento del testo nelle pagine scansionate (OCR)",
        "Esporta in PDF con la scrittura e stampa",
        "Alla scadenza resta la scrittura",
      ],
    },
    pro: {
      name: "Pro",
      tagline: "Senza limiti di tempo",
      priceUnit: "USD · Acquisto una tantum",
      action: "Acquista Pro",
      note: "Dopo l’acquisto ti inviamo una chiave di licenza via e-mail. Incollala in Settings → License nell’app.",
      points: [
        "OCR, modalità automatica, modalità prestazioni",
        "Cercare in tutti i documenti",
        "Tutti i segnalibri, tutto il testo marcato, minimappa",
        "Una chiave attiva fino a 3 dispositivi",
        "Funziona senza Internet dopo l’attivazione",
        "Aggiornamenti inclusi",
      ],
    },
  },
  footnote: "*Alla scadenza della versione di prova non sono più disponibili solo l’OCR, la modalità automatica, la modalità prestazioni, la ricerca nella libreria, tutti i segnalibri, tutto il testo marcato e la minimappa. I tuoi documenti, gli appunti e il testo già riconosciuto restano.",
  compare: {
    eyebrow: "Confronto delle funzioni",
    title: "Prova di 30 giorni e Pro: che cosa cambia?",
    description: "Per 30 giorni puoi usare tutte le funzioni di Pro. Alla scadenza si disattivano l’OCR e la ricerca nella libreria, ma puoi continuare a scrivere.",
    feature: "Funzione",
    during: "30 giorni",
    after: "Dopo",
    available: "Disponibile",
    unavailable: "Non disponibile",
    readGroup: "Leggere · Cercare · Esportare",
    writeGroup: "Scrivere · Organizzare",
    proGroup: "Riconoscimento del testo · Ricerca nella libreria",
    readFeatures: [
      "Leggere documenti, vedere gli appunti esistenti, selezionare e copiare testo",
      "Cercare in un documento, accesso rapido, andare a segnalibri e indice",
      "Importare PDF, organizzare documenti",
      "Esportare in PDF (con la scrittura), stampare",
      "Cercare e copiare il testo già riconosciuto",
      "Consultare il dizionario",
    ],
    writeFeatures: [
      "Scrivere, evidenziare testo, aggiungere segnalibri, modificare pagine",
      "Nuova nota, unire documenti",
    ],
    proFeatures: [
      "OCR: questa pagina, più pagine, intero documento, modalità automatica, modalità prestazioni",
      "Cercare in tutti i documenti in una volta",
      "Tutti i segnalibri, tutto il testo marcato",
      "Minimappa",
    ],
  },
  faq: {
    items: [
      {
        question: "Come acquisto Pro?",
        answer: "Paga con il pulsante Acquista Pro in questa pagina e ti invieremo via e-mail una chiave di licenza e un link per il download.",
      },
      {
        question: "Pro è un abbonamento?",
        answer: "No. È un acquisto una tantum e gli aggiornamenti successivi all’acquisto sono inclusi.",
      },
      {
        question: "Su quanti PC posso usare Pro?",
        answer: "Una chiave attiva fino a 3 dispositivi. Internet serve solo per l’attivazione; dopo funziona offline.",
      },
      {
        question: "Che fine fanno i miei documenti alla scadenza della prova?",
        answer: "I tuoi documenti e appunti non vengono eliminati. Puoi continuare ad aprirli, leggerli, scriverci sopra ed esportarli in PDF con la scrittura.",
      },
      {
        question: "Posso riavviare la versione di prova?",
        answer: "No. La versione di prova è una per dispositivo e installare una nuova versione non la prolunga. Riportare indietro la data del dispositivo termina subito la prova.",
      },
      {
        question: "Un PC che usava la beta può usare la versione di prova?",
        answer: "Sì. Installando la v1.0.0 inizia una nuova prova di 30 giorni.",
      },
    ],
  },
};

export default pricing;
