import type { Dictionary } from "@/i18n/get-dictionary";

// Translation of the Korean source of 2026-11-01.
const pricing: Dictionary["pricing"] = {
  eyebrow: "Prezzi",
  title: "Provalo 30 giorni,\npoi continua con Pro.",
  description: "Per 30 giorni la versione di prova è identica a Pro. Per continuare a scrivere e cercare nella libreria dopo la scadenza, basta Pro.",
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
        "Solo lettura alla scadenza; documenti e appunti restano",
      ],
    },
    pro: {
      name: "Pro",
      tagline: "Senza limiti di tempo",
      status: "Prossimamente",
      priceUnit: "USD · Acquisto una tantum",
      action: "Acquisto disponibile a breve",
      note: "Notes è ancora in beta test e la funzione di acquisto è in costruzione. Nel frattempo prova tutte le funzioni con la versione di prova.",
      points: [
        "Scrittura e ricerca nella libreria senza limiti di tempo",
        "Una chiave attiva fino a 3 dispositivi",
        "Funziona senza Internet dopo l’attivazione",
        "La versione acquistata resta utilizzabile",
      ],
    },
  },
  footnote: "*Alla scadenza della versione di prova puoi solo aprire e leggere i documenti. I tuoi documenti e appunti non vengono eliminati e puoi esportarli in PDF con la scrittura.",
  compare: {
    eyebrow: "Confronto delle funzioni",
    title: "Prova di 30 giorni e Pro: che cosa cambia?",
    description: "Per 30 giorni è uguale a Pro. Alla scadenza passa alla sola lettura e i tuoi documenti e appunti restano intatti.",
    feature: "Funzione",
    during: "30 giorni",
    after: "Dopo",
    available: "Disponibile",
    unavailable: "Non disponibile",
    readGroup: "Leggere · Cercare · Esportare",
    writeGroup: "Scrivere · Organizzare · Ricerca nella libreria",
    readFeatures: [
      "Leggere documenti, vedere gli appunti esistenti, selezionare e copiare testo",
      "Cercare in un documento, accesso rapido, andare a segnalibri e indice",
      "Importare PDF, organizzare documenti",
      "Esportare in PDF (con la scrittura), stampare",
      "Riconoscimento del testo nelle pagine scansionate (OCR)",
      "Consultare il dizionario",
    ],
    writeFeatures: [
      "Scrivere, evidenziare testo, aggiungere segnalibri, modificare pagine, annullare",
      "Nuova nota, unire documenti",
      "Cercare in tutti i documenti",
    ],
  },
  faq: {
    items: [
      {
        question: "Quando potrò acquistare Pro?",
        answer: "Notes è ancora in beta test, quindi la funzione di acquisto è in costruzione e sarà disponibile a breve. Nel frattempo puoi provare tutte le funzioni con la versione di prova e, dopo 30 giorni, installare una nuova versione ti dà altri 30 giorni.",
      },
      {
        question: "Pro è un abbonamento?",
        answer: "No. È un acquisto una tantum. Puoi continuare a usare la versione acquistata; l’aggiornamento a una nuova versione principale è a pagamento.",
      },
      {
        question: "Su quanti PC posso usare Pro?",
        answer: "Una chiave attiva fino a 3 dispositivi. Internet serve solo per l’attivazione; dopo funziona offline.",
      },
      {
        question: "Che fine fanno i miei documenti alla scadenza della prova?",
        answer: "I tuoi documenti e appunti non vengono eliminati. Puoi continuare ad aprirli, leggerli ed esportarli in PDF con la scrittura.",
      },
      {
        question: "Posso riavviare la versione di prova?",
        answer: "Durante il beta test, installare una nuova versione dopo i 30 giorni avvia un’altra prova di 30 giorni. Riportare indietro la data del dispositivo la termina subito.",
      },
      {
        question: "Un PC che usava la beta può usare la versione di prova?",
        answer: "Sì. Installando la v1.0.0 inizia una nuova prova di 30 giorni.",
      },
    ],
  },
};

export default pricing;
