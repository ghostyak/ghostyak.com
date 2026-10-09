import type { Dictionary } from "@/i18n/get-dictionary";

// Translation of the Korean source approved on 2026-10-09.
const notes: Dictionary["notes"] = {
  metadataTitle: "Ghostyak Notes | App di appunti per Windows per scrivere sui PDF e trovare tutto subito",
  cardDescription: "Un’app di appunti per Windows per scrivere sui PDF con penna e tastiera e trovare ciò che hai letto in tutti i tuoi documenti.",
  description: "Scrivi sui PDF con penna e tastiera e trova ciò che hai letto in tutti i tuoi documenti.",
  featuredEyebrow: "Novità",
  betaBadge: "Beta",
  trialBadge: "Tutte le funzioni per 14 giorni",
  downloadAction: "Scarica per Windows x64",
  featuresAction: "Vedi le funzioni",
  heroNote: "È una versione beta. Puoi usare tutte le funzioni senza limiti per 14 giorni dal giorno del primo avvio.",
  screenshots: {
    annotate: { alt: "Ghostyak Notes con un manuale in PDF, testo evidenziato e appunti scritti a mano a margine", caption: "Scrivere su un PDF · Interfaccia in coreano" },
    pen: { alt: "Impostazioni della penna di Ghostyak Notes con tre slot colore, una tavolozza e tre livelli di spessore", caption: "Impostazioni della penna · Colore e spessore" },
    search: { alt: "Ricerca nella libreria di Ghostyak Notes per una parola coreana, con le pagine trovate in due documenti e le relative anteprime", caption: "Cerca in tutti i documenti" },
    library: { alt: "Libreria di Ghostyak Notes con dieci documenti in una griglia di copertine e cartelle e preferiti a sinistra", caption: "Libreria · Cartelle e griglia di copertine" },
    pages: { alt: "Panoramica delle pagine di Ghostyak Notes con tutte le pagine di un documento di 24 pagine in griglia e i pulsanti per spostare, duplicare e ruotare", caption: "Panoramica delle pagine" },
    spread: { alt: "Vista a due pagine di Ghostyak Notes con le pagine 4 e 5 annotate affiancate", caption: "Vista a due pagine" },
  },
  showcase: {
    eyebrow: "Funzioni principali",
    title: "Leggi, scrivi e trova,\ntutto in un’unica app.",
    description: "Manuali e dispense, relazioni e articoli. Importa un PDF, scrivici sopra direttamente e ritrova in seguito la pagina che ti serve.",
    items: {
      pen: {
        eyebrow: "Scrittura",
        title: "Penna, evidenziatore, gomma.\nColori e spessore come vuoi tu.",
        description: "Imposta tre colori preferiti e tre spessori per la penna e per l’evidenziatore e passa dall’uno all’altro all’istante. Ciò che scrivi viene salvato automaticamente mentre scrivi.",
        points: ["Penna, evidenziatore, gomma e selezione con lazo", "Linee, frecce, rettangoli, ellissi e immagini", "Annulla e ripeti"],
      },
      search: {
        eyebrow: "Ricerca nella libreria",
        title: "Non ricordi in quale libro era?\nLo trovi con una sola ricerca.",
        description: "Premi Ctrl+Maiusc+F per cercare nel testo di tutti i documenti della libreria. I risultati sono raggruppati per documento con numero di pagina e anteprima, e con Invio apri subito la pagina.",
        points: ["Cerca in tutti i documenti (Ctrl+Maiusc+F)", "Cerca nel documento (Ctrl+F)", "Spostati con i segnalibri e l’indice del PDF"],
      },
      library: {
        eyebrow: "Libreria",
        title: "Organizza manuali e appunti\ncome su uno scaffale.",
        description: "Importa PDF o crea nuove note e dividili in cartelle. Ogni copertina mostra fin dove hai letto, e puoi aprire più documenti in schede.",
        points: ["Cartelle, preferiti e documenti recenti", "Griglia di copertine ed elenco, con ordinamento", "I documenti eliminati restano nel cestino"],
      },
      pages: {
        eyebrow: "Panoramica delle pagine",
        title: "Sposta, aggiungi\ne ruota le pagine.",
        description: "Disponi tutte le pagine di un documento in un’unica schermata per riordinarle, duplicarle, eliminarle o ruotarle. Puoi anche aggiungere pagine vuote o inserire pagine da un altro PDF.",
        points: ["Mostra solo le pagine con segnalibro o con appunti", "Pagine vuote: bianche, a righe, a quadretti o puntinate", "Anche le modifiche alle pagine si possono annullare"],
      },
      spread: {
        eyebrow: "Visualizzazione",
        title: "Una pagina alla volta,\no due come in un libro.",
        description: "Passa dalla vista a pagina singola a quella a due pagine e adatta lo zoom alla larghezza o all’altezza. Anche nei documenti lunghi, la barra laterale ti porta subito alla pagina che vuoi.",
        points: ["Vista a pagina singola e a due pagine", "Adatta alla larghezza, all’altezza e zoom", "Barra laterale per pagine, pagine annotate, testo contrassegnato, segnalibri e indice"],
      },
    },
  },
  more: {
    eyebrow: "Altre funzioni",
    title: "Gli strumenti che ti servono per studiare e lavorare.",
    items: [
      { title: "Caselle di testo", description: "Scrivi con la tastiera direttamente sulla pagina. Scegli tra caratteri senza grazie, con grazie, calligrafici e a spaziatura fissa." },
      { title: "Contrassegna il testo", description: "Seleziona il testo di un PDF per evidenziarlo, sottolinearlo o barrarlo, e copialo." },
      { title: "Segnalibri", description: "Aggiungi un segnalibro alle pagine importanti e raggiungile dall’elenco." },
      { title: "Sbircia", description: "Fai clic su un appunto o su una casella di testo per renderli traslucidi per un momento e vedere il testo sottostante." },
      { title: "Salvataggio automatico", description: "Non c’è un pulsante Salva. Ciò che scrivi viene salvato nel file del documento mentre scrivi." },
      { title: "Scorciatoie da tastiera", description: "Scegli gli strumenti, cerca e cambia pagina con le scorciatoie." },
    ],
  },
  privacy: {
    eyebrow: "Salvato sul tuo PC",
    title: "I tuoi documenti restano sul tuo PC.",
    description: "I documenti vengono salvati come file nella cartella «Ghostyak Notes», all’interno della tua cartella Documenti. Non servono un account né una connessione a Internet, e i file PDF originali che importi non vengono modificati.",
  },
  beta: {
    eyebrow: "Informazioni sulla beta",
    title: "14 giorni,\ntutte le funzioni, senza limiti.",
    description: "Il programma di installazione disponibile ora è una versione beta. Il periodo di utilizzo parte dal giorno in cui avvii l’app per la prima volta.",
    steps: [
      { title: "Tutte le funzioni per 14 giorni", description: "Per 14 giorni dal primo avvio puoi usare tutte le funzioni, comprese la scrittura, la ricerca nella libreria e la modifica delle pagine." },
      { title: "Poi sola lettura", description: "Al termine del periodo di utilizzo puoi solo aprire e leggere i documenti. La scrittura e la ricerca nella libreria non sono disponibili." },
      { title: "Altri 14 giorni con la versione successiva", description: "Installa la versione successiva per usarla per altri 14 giorni." },
    ],
    note: "I tuoi documenti e appunti non vengono eliminati al termine del periodo.",
  },
  faq: {
    title: "Domande frequenti",
    items: [
      { question: "Per quanto tempo posso usare la beta?", answer: "Puoi usare tutte le funzioni senza limiti per 14 giorni dal giorno in cui avvii l’app per la prima volta. Al primo avvio l’app ti indica la data in cui termina il periodo di utilizzo." },
      { question: "Cosa succede dopo 14 giorni?", answer: "Puoi ancora aprire e leggere i documenti e cercare all’interno di un documento, ma non puoi scrivere né cercare in tutti i documenti. I tuoi documenti e appunti non vengono eliminati, e installando la versione successiva hai altri 14 giorni." },
      { question: "Dove vengono salvati i miei documenti?", answer: "Nella cartella «Ghostyak Notes», all’interno della tua cartella Documenti. Puoi aprirla con «문서 폴더 열기» (Apri la cartella dei documenti), in basso a sinistra nella libreria." },
      { question: "La ricerca funziona anche sui PDF scansionati?", answer: "Cerca nel testo dei PDF che contengono informazioni di testo. Il riconoscimento del testo (OCR) per i PDF composti solo da immagini scansionate non è ancora supportato." },
      { question: "Posso usarla senza penna?", answer: "Sì. Puoi scrivere con il mouse e digitare nelle caselle di testo con la tastiera." },
      { question: "In che lingua è disponibile l’app?", answer: "Al momento l’interfaccia dell’app è disponibile in coreano. Altre lingue saranno disponibili a breve." },
      { question: "Cosa serve per usarla?", answer: "È per Windows a 64 bit (x64). Se Microsoft Edge WebView2 Runtime non è presente, il programma di installazione lo scarica e lo installa." },
    ],
  },
  download: {
    title: "Scaricala e\nimporta il tuo primo PDF.",
    description: "Windows x64 · Beta · Tutte le funzioni per 14 giorni",
  },
};

export default notes;
