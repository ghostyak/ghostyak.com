import type { Dictionary } from "@/i18n/get-dictionary";

// Translation of the Korean source approved on 2026-10-09.
const notes: Dictionary["notes"] = {
  metadataTitle: "Ghostyak Notes | App de notas para Windows para escribir sobre PDF y encontrarlo todo al instante",
  cardDescription: "Una app de notas para Windows para escribir sobre PDF con lápiz y teclado, y encontrar lo que has leído en todos tus documentos.",
  description: "Escribe sobre tus PDF con lápiz y teclado, y encuentra lo que has leído en todos tus documentos.",
  featuredEyebrow: "Nuevo",
  betaBadge: "Beta",
  trialBadge: "Todas las funciones durante 14 días",
  downloadAction: "Descargar para Windows x64",
  featuresAction: "Ver funciones",
  heroNote: "Es una versión beta. Puedes usar todas las funciones sin límites durante 14 días desde el día en que la abres por primera vez.",
  screenshots: {
    annotate: { alt: "Ghostyak Notes con un libro de texto en PDF, texto resaltado y notas manuscritas en el margen", caption: "Escribir sobre un PDF · Interfaz en coreano" },
    pen: { alt: "Ajustes del lápiz de Ghostyak Notes con tres espacios de color, una paleta de colores y tres niveles de grosor", caption: "Ajustes del lápiz · Color y grosor" },
    search: { alt: "Búsqueda en la biblioteca de Ghostyak Notes para una palabra en coreano, con las páginas encontradas en dos documentos y sus vistas previas", caption: "Buscar en todos los documentos" },
    library: { alt: "Biblioteca de Ghostyak Notes con diez documentos en una cuadrícula de portadas y carpetas y favoritos a la izquierda", caption: "Biblioteca · Carpetas y cuadrícula de portadas" },
    pages: { alt: "Vista general de páginas de Ghostyak Notes con todas las páginas de un documento de 24 páginas en cuadrícula y botones para mover, duplicar y girar", caption: "Vista general de páginas" },
    spread: { alt: "Vista de dos páginas de Ghostyak Notes con las páginas 4 y 5 anotadas una junto a la otra", caption: "Vista de dos páginas" },
  },
  showcase: {
    eyebrow: "Funciones principales",
    title: "Lee, escribe y encuentra,\ntodo en una sola app.",
    description: "Libros de texto y apuntes de clase, informes y artículos. Importa un PDF, escribe directamente sobre él y encuentra después la página que necesitas.",
    items: {
      pen: {
        eyebrow: "Escritura",
        title: "Lápiz, resaltador y borrador.\nColores y grosor a tu gusto.",
        description: "Define tres colores favoritos y tres grosores para el lápiz y para el resaltador, y cambia entre ellos al instante. Lo que escribes se guarda automáticamente sobre la marcha.",
        points: ["Lápiz, resaltador, borrador y selección con lazo", "Líneas, flechas, rectángulos, elipses e imágenes", "Deshacer y rehacer"],
      },
      search: {
        eyebrow: "Búsqueda en la biblioteca",
        title: "¿No recuerdas en qué libro estaba?\nEncuéntralo con una sola búsqueda.",
        description: "Pulsa Ctrl+Mayús+F para buscar en el texto de todos los documentos de tu biblioteca. Los resultados se agrupan por documento con número de página y vista previa, y con Enter abres esa página.",
        points: ["Buscar en todos los documentos (Ctrl+Mayús+F)", "Buscar en el documento (Ctrl+F)", "Ir con marcadores y el índice del PDF"],
      },
      library: {
        eyebrow: "Biblioteca",
        title: "Organiza libros y notas\ncomo en una estantería.",
        description: "Importa PDF o crea notas nuevas y repártelos en carpetas. Cada portada muestra hasta dónde has leído, y puedes abrir varios documentos en pestañas.",
        points: ["Carpetas, favoritos y documentos recientes", "Cuadrícula de portadas y lista, con ordenación", "Los documentos eliminados se conservan en la papelera"],
      },
      pages: {
        eyebrow: "Vista general de páginas",
        title: "Mueve, añade\ny gira páginas.",
        description: "Despliega todas las páginas de un documento en una pantalla para reordenarlas, duplicarlas, eliminarlas o girarlas. También puedes añadir páginas en blanco o insertar páginas de otro PDF.",
        points: ["Ver solo las páginas con marcador o con notas", "Páginas en blanco lisas, rayadas, cuadriculadas o punteadas", "La edición de páginas también se puede deshacer"],
      },
      spread: {
        eyebrow: "Vista",
        title: "Una página cada vez,\no dos como en un libro.",
        description: "Alterna entre la vista de una página y la de dos páginas, y ajusta el zoom al ancho o al alto. Incluso en documentos largos, la barra lateral te lleva directamente a la página que quieres.",
        points: ["Vistas de una y de dos páginas", "Ajustar al ancho, ajustar al alto y zoom", "Barra lateral de páginas, páginas con notas, texto marcado, marcadores e índice"],
      },
    },
  },
  more: {
    eyebrow: "Más funciones",
    title: "Las herramientas que necesitas para estudiar y trabajar.",
    items: [
      { title: "Cuadros de texto", description: "Escribe con el teclado directamente sobre la página. Elige entre fuentes sans serif, serif, manuscrita y monoespaciada." },
      { title: "Marcar texto", description: "Selecciona texto de un PDF para resaltarlo, subrayarlo o tacharlo, y cópialo." },
      { title: "Marcadores", description: "Marca las páginas importantes y ve a ellas desde la lista." },
      { title: "Entrever", description: "Haz clic en una anotación o un cuadro de texto para volverlo translúcido un momento y ver el texto que hay debajo." },
      { title: "Guardado automático", description: "No hay botón de guardar. Lo que escribes se guarda en el archivo del documento sobre la marcha." },
      { title: "Atajos de teclado", description: "Elige herramientas, busca y cambia de página con atajos." },
    ],
  },
  privacy: {
    eyebrow: "Guardado en tu PC",
    title: "Tus documentos están en tu PC.",
    description: "Los documentos se guardan como archivos en la carpeta «Ghostyak Notes», dentro de tu carpeta Documentos. No necesitas una cuenta ni conexión a internet, y los archivos PDF originales que importas no se modifican.",
  },
  beta: {
    eyebrow: "Sobre la beta",
    title: "14 días,\ntodas las funciones, sin límites.",
    description: "El instalador disponible ahora es una versión beta. El periodo de uso empieza el día en que abres la app por primera vez.",
    steps: [
      { title: "Todas las funciones durante 14 días", description: "Durante 14 días desde el primer inicio puedes usar todas las funciones, incluidas la escritura, la búsqueda en la biblioteca y la edición de páginas." },
      { title: "Después, solo lectura", description: "Cuando termina el periodo de uso, solo puedes abrir y leer documentos. La escritura y la búsqueda en la biblioteca no están disponibles." },
      { title: "14 días más con la siguiente versión", description: "Instala la siguiente versión para usarla 14 días más." },
    ],
    note: "Tus documentos y anotaciones no se eliminan cuando termina el periodo.",
  },
  faq: {
    title: "Preguntas frecuentes",
    items: [
      { question: "¿Cuánto tiempo puedo usar la beta?", answer: "Puedes usar todas las funciones sin límites durante 14 días desde el día en que abres la app por primera vez. En el primer inicio, la app te indica la fecha en que termina el periodo de uso." },
      { question: "¿Qué pasa después de 14 días?", answer: "Puedes seguir abriendo y leyendo documentos y buscar dentro de un documento, pero no puedes escribir ni buscar en todos los documentos. Tus documentos y anotaciones no se eliminan, y al instalar la siguiente versión tienes 14 días más." },
      { question: "¿Dónde se guardan mis documentos?", answer: "En la carpeta «Ghostyak Notes», dentro de tu carpeta Documentos. Puedes abrirla con «문서 폴더 열기» (Abrir carpeta de documentos), abajo a la izquierda en la biblioteca." },
      { question: "¿También busca en PDF escaneados?", answer: "Busca en el texto de los PDF que contienen información de texto. El reconocimiento de texto (OCR) para PDF formados solo por imágenes escaneadas aún no es compatible." },
      { question: "¿Puedo usarla sin lápiz?", answer: "Sí. Puedes escribir con el ratón y teclear en cuadros de texto con el teclado." },
      { question: "¿En qué idioma está la app?", answer: "Actualmente la interfaz de la app está disponible en coreano. Pronto habrá más idiomas." },
      { question: "¿Qué necesito para usarla?", answer: "Es para Windows de 64 bits (x64). Si falta Microsoft Edge WebView2 Runtime, el instalador lo descarga e instala." },
    ],
  },
  download: {
    title: "Descárgala e\nimporta tu primer PDF.",
    description: "Windows x64 · Beta · Todas las funciones durante 14 días",
  },
};

export default notes;
