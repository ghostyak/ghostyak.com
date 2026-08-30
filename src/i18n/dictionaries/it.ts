import type { Dictionary } from "@/i18n/get-dictionary";

const it: Dictionary = {
  metadata: {
    site: { title: "GhostYak | Software Windows per organizzare il lavoro quotidiano", titleTemplate: "%s | GhostYak", description: "GhostYak crea software che rende più semplice e pratico il tuo spazio di lavoro quotidiano su Windows." },
    boxes: { title: "Boxes", openGraphTitle: "GhostYak Boxes | Organizzatore del desktop Windows" },
    boxesDownload: { title: "Scarica Boxes" },
    blog: { title: "Blog", description: "Novità sui prodotti e storie di sviluppo da GhostYak." },
  },
  header: { homeLabel: "Home di GhostYak", navigationLabel: "Menu principale", language: "Scegli la lingua", products: "Prodotti", blog: "Blog" },
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
    products: { eyebrow: "GHOSTYAK SOFTWARE", heading: "Prodotti disponibili ora", intro: "Ci concentriamo sui piccoli problemi quotidiani, senza aggiungere complessità.", freeBadge: "Gratis", viewAction: "Scopri il prodotto" },
    blog: { eyebrow: "BLOG", heading: "Appunti su ciò che stiamo creando", intro: "Leggi le novità sui prodotti e le storie di sviluppo nel blog di GhostYak.", viewAction: "Vai al blog" },
  },
  boxes: {
    description: "Uno strumento desktop che organizza file, cartelle e collegamenti del desktop Windows in box flessibili.",
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
