import landing from "@/i18n/landing/it";
import type { Dictionary } from "@/i18n/get-dictionary";

const it: Dictionary = {
  landing,
  csvSearch: {
    downloadAction: "Scarica per Windows",
    "category": "Informatica forense",
    "description": "Cerca in file CSV ed Excel di grandi dimensioni, in un unico posto.",
    "repositoryAction": "Vedi su GitHub",
    "screenshots": [
      {
        "alt": "Schermata iniziale di CSV Search Engine per aprire file CSV ed Excel",
        "caption": "Aprire un file · Interfaccia in coreano"
      },
      {
        "alt": "CSV Search Engine con dati MFT, campi di ricerca per colonna e righe",
        "caption": "Vista dei dati MFT · Interfaccia in coreano"
      }
    ],
    "metadataTitle": "CSV Search Engine | Strumento DFIR per cercare in file CSV ed Excel di grandi dimensioni",
    "licenseBadge": "Gratuito per uso non commerciale",
    "howToAction": "Come funziona",
    "workflow": {
      "eyebrow": "Come funziona",
      "title": "Apri un file e\ncerca subito sotto le intestazioni.",
      "description": "Filtra file CSV o Excel di grandi dimensioni esportati dagli strumenti forensi con condizioni per colonna e tieni solo le righe che ti servono.",
      "steps": [
        {
          "title": "Apri un file",
          "description": "Scegli un file CSV, XLS o XLSX da File → Apri (Ctrl+O) oppure trascinalo nella finestra."
        },
        {
          "title": "Cerca per colonna",
          "description": "Scrivi una condizione nel campo di ricerca sotto l’intestazione di una colonna e premi Invio. Con condizioni in più colonne vengono mostrate solo le righe che le soddisfano tutte."
        },
        {
          "title": "Ordina e visualizza i dettagli",
          "description": "Fai clic su un’intestazione per ordinare, seleziona una riga e apri Dettagli riga per vedere il valore di tutte le colonne."
        }
      ]
    },
    "features": {
      "eyebrow": "Funzioni principali",
      "title": "Trova, restringi, raggruppa.",
      "items": [
        {
          "title": "Ricerca e filtri per colonna",
          "description": "Trova le righe con condizioni come contiene, esclude, corrispondenza esatta, inizia o finisce con, vuoto e con valore."
        },
        {
          "title": "Intervalli di numeri e date",
          "description": "Confronta numeri e date con maggiore di, almeno, minore di, al massimo e compreso tra. Esempio: 2026-09-01 .. 2026-09-20"
        },
        {
          "title": "Ordinamento e raggruppamento",
          "description": "Fai clic su un’intestazione per ordinare e trascina le colonne nei Gruppi di campi per raggruppare i valori uguali fino a otto livelli."
        },
        {
          "title": "Navigazione nella tabella",
          "description": "Scorrimento continuo, colonne nascondibili, larghezza regolabile e dettagli riga rendono semplice esplorare tabelle molto ampie."
        },
        {
          "title": "Supporto CSV ed Excel",
          "description": "Apri file CSV, XLS e XLSX e passa da una scheda del foglio all’altra. Non serve avere Excel installato."
        },
        {
          "title": "Lingue e codifiche",
          "description": "Interfaccia in coreano, inglese, giapponese e cinese, con rilevamento automatico delle codifiche CSV come UTF-8, CP949 e Shift_JIS."
        }
      ]
    },
    "privacy": {
      "eyebrow": "Analisi offline",
      "title": "Gli originali restano intatti, l’analisi resta sul tuo PC.",
      "description": "L’app non modifica né carica altrove i file originali. Funziona senza connessione a Internet né account, senza richieste di rete automatiche né raccolta di dati d’uso."
    },
    "faq": {
      "title": "Domande frequenti",
      "items": [
        {
          "question": "È gratuito?",
          "answer": "Per uso non commerciale tutte le funzioni sono gratuite, senza limiti di tempo o di utilizzo. È vietato l’uso per attività commerciali, come le attività interne di un’azienda o le analisi forensi a pagamento. Puoi consultare le condizioni d’uso anche nell’app, in Aiuto → Informazioni."
        },
        {
          "question": "Quali file posso aprire?",
          "answer": "File CSV, XLS e XLSX. I file XLS sono supportati fino a 32 MiB; formattazione di Excel, grafici, esecuzione di macro e ricalcolo delle formule non sono supportati."
        },
        {
          "question": "I caratteri del mio CSV appaiono illeggibili.",
          "answer": "Per impostazione predefinita la codifica viene rilevata automaticamente. Se i caratteri appaiono illeggibili, scegli la codifica corretta in Impostazioni → Codifica CSV e riapri il file."
        },
        {
          "question": "Posso modificare o esportare i dati?",
          "answer": "È uno strumento di consultazione e ricerca. La modifica dei dati e l’esportazione dei risultati non sono ancora supportate."
        },
        {
          "question": "Quanto tempo richiedono i file grandi?",
          "answer": "Alla prima apertura di un file o quando cerchi in una nuova colonna, la creazione dell’indice di ricerca può richiedere tempo ed è necessario spazio libero su disco per la cache. I tempi dipendono dal contenuto del file e dal PC, e le prestazioni con CSV da 10 GiB in su non sono ancora state verificate completamente."
        },
        {
          "question": "Di cosa ho bisogno?",
          "answer": "È per Windows a 64 bit. Esegui il programma di installazione e avvia CSV Search Engine dal menu Start."
        }
      ]
    },
    "download": {
      "title": "Scaricalo e\napri il tuo primo file.",
      "description": "Windows a 64 bit · Gratuito per uso non commerciale"
    }
  },
  productCategories: { windowsProductivity: "Produttività Windows", webApps: "App web" },
  "folderHistory": {
    "metadataTitle": "Folder History | L’app per Windows che riapre le cartelle visitate di recente",
    "cardDescription": "Un’app per Windows che registra le cartelle visitate in Esplora file per riaprirle direttamente dall’area di notifica.",
    "description": "Registra le cartelle che visiti in Esplora file e riaprile direttamente dall’area di notifica.",
    "downloadAction": "Download gratuito per Windows",
    "howToAction": "Come funziona",
    "screenshots": [
      {
        "alt": "Elenco delle visite recenti di Folder History con nomi delle cartelle, percorsi e ora dell’ultima visita, dalla più recente",
        "caption": "Visite recenti · Interfaccia in coreano"
      },
      {
        "alt": "Editor delle regole di esclusione di Folder History con node_modules e .next",
        "caption": "Modifica delle regole di esclusione"
      },
      {
        "alt": "Impostazioni di Folder History per tema, avvio all’accesso a Windows e conservazione della cronologia",
        "caption": "Impostazioni · Tema, avvio automatico, conservazione"
      }
    ],
    "workflow": {
      "eyebrow": "Come funziona",
      "title": "Basta cercare le cartelle.\nAprile dalle visite recenti.",
      "description": "Quando non ricordi dove lavoravi qualche giorno fa, fai doppio clic sull’icona nell’area di notifica: le cartelle visitate di recente compaiono in ordine.",
      "steps": [
        {
          "title": "Aggiungi una cartella monitorata",
          "description": "Scegli la cartella da registrare. La cartella e le sue sottocartelle costituiscono l’ambito di registrazione."
        },
        {
          "title": "Usa Esplora file come sempre",
          "description": "Quando apri una cartella in Esplora file di Windows, l’ora dell’ultima visita viene registrata automaticamente."
        },
        {
          "title": "Riapri dall’area di notifica",
          "description": "Fai doppio clic sull’icona nell’area di notifica, poi fai doppio clic su una cartella dell’elenco o premi Invio per riaprirla in Esplora file."
        }
      ]
    },
    "features": {
      "eyebrow": "Funzioni principali",
      "title": "Solo le cartelle che ti servono, a modo tuo.",
      "items": [
        {
          "title": "Ricerca e ordinamento",
          "description": "Cerca per nome della cartella o percorso (Ctrl+F) e ordina per cartella, percorso o ultima visita."
        },
        {
          "title": "Fissa in alto",
          "description": "Fissa le cartelle che apri spesso per tenerle in cima all’elenco."
        },
        {
          "title": "Regole di esclusione",
          "description": "Scrivi, una per riga, i nomi delle cartelle da non registrare, come node_modules o .git. Puoi usare * e ?."
        },
        {
          "title": "Cestino e ripristino",
          "description": "I record eliminati restano nel cestino e puoi ripristinarli con l’ora di visita originale."
        },
        {
          "title": "Conservazione della cronologia",
          "description": "Conserva la cronologia senza limiti oppure puliscila automaticamente dopo 1, 3, 6 o 12 mesi."
        },
        {
          "title": "Copia percorso",
          "description": "Copia il percorso completo di una cartella con il pulsante di copia della riga o con Ctrl+C."
        }
      ]
    },
    "privacy": {
      "eyebrow": "Salvato sul tuo PC",
      "title": "La cronologia resta sul tuo PC.",
      "description": "La cronologia delle visite e le impostazioni sono salvate nei dati locali dell’app sul tuo PC, senza server né account. Eliminare i record non tocca le cartelle e i file reali."
    },
    "faq": {
      "title": "Domande frequenti",
      "items": [
        {
          "question": "Quali visite alle cartelle vengono registrate?",
          "answer": "Viene registrata l’apertura di una cartella all’interno di una cartella monitorata con Esplora file di Windows, oppure il ritorno a quella cartella da un’altra finestra o scheda. La navigazione in altri file manager o nelle finestre di apertura file e le modifiche ai file non vengono registrate come visite."
        },
        {
          "question": "È gratuito?",
          "answer": "Sì, puoi usarlo gratuitamente."
        },
        {
          "question": "La registrazione si ferma quando chiudo la finestra?",
          "answer": "No. La X della finestra la nasconde soltanto e la registrazione continua. Per uscire del tutto, fai clic destro sull’icona nell’area di notifica e scegli Esci."
        },
        {
          "question": "Può avviarsi automaticamente con Windows?",
          "answer": "Attiva ‘Avvia all’accesso a Windows’ nelle impostazioni. L’opzione è disattivata per impostazione predefinita."
        },
        {
          "question": "Di cosa ho bisogno?",
          "answer": "Funziona su Windows 11 x64. Il programma di installazione installa per l’account utente corrente, quindi non servono diritti di amministratore, e installa WebView2 Runtime durante l’installazione se manca."
        }
      ]
    },
    "download": {
      "title": "Scaricalo e\naggiungi la tua prima cartella monitorata.",
      "description": "Windows 11 x64 · Si installa senza diritti di amministratore"
    }
  },
  worldClock: {
  "badge": "Novità · Widget orologio mondiale",
  "title": "L’ora del mondo, sul tuo desktop.",
  "description": "Mattina a Seul, prime ore a Londra, notte a New York. Confronta orari e date di più città con l’orologio mondiale di Boxes. Organizza anche file e collegamenti sullo stesso desktop.",
  "widgetTitle": "Orologio mondiale",
  "previewCaption": "Anteprima del widget orologio mondiale · Gli orari sono esempi.",
  "cities": [
    "Seul",
    "Londra",
    "San Francisco",
    "New York",
    "Vancouver"
  ],
  "heading": "Fusi orari diversi. Un unico spazio di lavoro.",
  "intro": "Prima di contattare un collega all’estero o chiamare la famiglia lontana, controlla la loro ora locale sul desktop.",
  "benefits": [
    {
      "title": "Città affiancate",
      "description": "Confronta a colpo d’occhio gli orari delle città che consulti più spesso."
    },
    {
      "title": "Date e differenze di orario",
      "description": "Riconosci le regioni con una data diversa grazie alla data e allo scarto UTC di ogni città."
    },
    {
      "title": "Organizzazione e widget insieme",
      "description": "Riunisci file, collegamenti e orologio mondiale nel tuo spazio di lavoro."
    }
  ]
},
  metadata: {
    site: { title: "GhostYak | Software Windows per organizzare il lavoro quotidiano", titleTemplate: "%s | GhostYak", description: "GhostYak crea software che rende più semplice e pratico il tuo spazio di lavoro quotidiano su Windows." },
    boxes: { title: "Boxes", openGraphTitle: "GhostYak Boxes | Organizzatore del desktop Windows" },
    boxesDownload: { title: "Scarica Boxes" },
    blog: { title: "Blog", description: "Novità sui prodotti e storie di sviluppo da GhostYak." },
  },
  header: { homeLabel: "Home di GhostYak", navigationLabel: "Menu principale", language: "Scegli la lingua", products: "Prodotti", blog: "Blog", support: "Sostieni" },
  footer: { description: "Software che semplifica il tuo spazio di lavoro quotidiano su Windows.", navigationLabel: "Menu a piè di pagina", blog: "Blog" },
  carousel: { slideLabel: "Mostra schermata {index}", pauseLabel: "Sospendi rotazione automatica", playLabel: "Riprendi rotazione automatica", pause: "Pausa", play: "Riproduci" },
  home: {
    screenReaderTitle: "Software GhostYak",
    hero: {
      regionLabel: "In evidenza su GhostYak", controlsLabel: "Scegli una schermata principale",
      slides: [
        { eyebrow: "GHOSTYAK BOXES", title: "Trasforma di nuovo il desktop in uno spazio di lavoro.", description: "Raccogli file e collegamenti sparsi in box organizzati per scopo e metti ordine a colpo d’occhio.", actionLabel: "Scopri il prodotto", imageAlt: "Schermata demo 1 di Boxes" },
        { eyebrow: "DESKTOP, ORGANIZED", title: "Trova più velocemente i file che ti servono.", description: "Dividi lavoro, progetti e strumenti usati spesso nel modo che preferisci e aprili quando ne hai bisogno.", actionLabel: "Scopri il prodotto", imageAlt: "Schermata demo 2 di Boxes" },
      ],
    },
    products: { eyebrow: "GHOSTYAK SOFTWARE", heading: "Creiamo piccoli strumenti per ogni giorno", intro: "Dall’organizzazione del desktop e dalla gestione del tempo fino alle indagini OSINT e forensi. Invece di aggiungere funzioni, ci concentriamo sul risolvere bene un fastidio che si incontra spesso.", freeBadge: "Gratis", viewAction: "Scopri il prodotto", webBadge: "Web", clockDescription: "Uno strumento per ora attuale, orologio mondiale, sveglie, timer, Pomodoro e cronometro, direttamente nel browser senza installare nulla.", osintsDescription: "Cerca e analizza indirizzi IP, domini e altro in un unico posto, senza passare da un sito OSINT all’altro.", webAction: "Apri il sito", clockPreviewLabel: "Anteprima di Clock" },
    blog: { eyebrow: "BLOG", heading: "Raccontiamo come creiamo", intro: "Novità su prodotti e funzioni, insieme ai problemi incontrati durante lo sviluppo e a come li abbiamo risolti.", viewAction: "Vai al blog" },
  },
  boxes: {
    description: "Lascia i file nelle cartelle originali e raccoglili sul desktop in box per attività. Le funzioni di base sono gratuite, anche in azienda.",
    tagline: "Organizza un desktop disordinato a colpo d’occhio.", downloadAction: "Download gratuito", screenshotAlts: ["Schermata demo 1 di Boxes", "Schermata demo 2 di Boxes"],
    carousel: { regionLabel: "Anteprima di Boxes", controlsLabel: "Scegli una schermata del prodotto" },
    features: {
      label: "FUNZIONI PRINCIPALI", heading: "Tutto l’essenziale per restare organizzati.",
      items: [
        { title: "Organizza a colpo d’occhio", description: "Raggruppa file, cartelle e collegamenti correlati nei box per trovare rapidamente ciò che ti serve." },
        { title: "Adatto al tuo modo di lavorare", description: "Sposta e ridimensiona liberamente i box e comprimili quando ti serve più spazio sul desktop." },
        { title: "I file originali restano al loro posto", description: "Organizza tramite collegamenti senza spostare gli originali e conserva intatta la struttura delle cartelle esistente." },
      ],
    },
    availabilityNotice: "Al momento è disponibile solo la versione gratuita. L’edizione commerciale verrà annunciata separatamente quando sarà pronta.",
    download: { breadcrumbLabel: "Percorso di navigazione", breadcrumbCurrent: "Download", waitNotice: "Tieni aperta questa pagina finché il browser non avvia il download del programma di installazione.", fileInfoLabel: "Informazioni sul programma di installazione", version: "Versione {version}", fileSize: "Circa 3,3 MB", requirement: "Richiede Microsoft Edge WebView2 Runtime", countdown: "Il download inizierà tra {seconds} secondi.", starting: "Avvio del download.", help: "Il download non è iniziato automaticamente?", directAction: "Scarica direttamente il programma di installazione" },
  },
  blog: { eyebrow: "GHOSTYAK BLOG", heading: "Blog", intro: "Novità sui prodotti e lezioni apprese durante lo sviluppo.", readMore: "Leggi l’articolo", breadcrumbLabel: "Percorso di navigazione", breadcrumbHome: "Blog" },
};

export default it;
