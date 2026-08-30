import type { Dictionary } from "@/i18n/get-dictionary";

const es: Dictionary = {
  metadata: {
    site: { title: "GhostYak | Software de Windows para organizar tu día a día", titleTemplate: "%s | GhostYak", description: "GhostYak crea software que simplifica y mejora tu espacio de trabajo diario en Windows." },
    boxes: { title: "Boxes", openGraphTitle: "GhostYak Boxes | Organizador de escritorio para Windows" },
    boxesDownload: { title: "Descargar Boxes" },
    blog: { title: "Blog", description: "Noticias de productos e historias de desarrollo de GhostYak." },
  },
  header: { homeLabel: "Inicio de GhostYak", navigationLabel: "Menú principal", language: "Elegir idioma", products: "Productos", blog: "Blog" },
  footer: { description: "Software que simplifica tu espacio de trabajo diario en Windows.", navigationLabel: "Menú del pie de página", blog: "Blog" },
  carousel: { slideLabel: "Ver pantalla {index}", pauseLabel: "Pausar rotación automática", playLabel: "Reanudar rotación automática", pause: "Pausar", play: "Reproducir" },
  home: {
    screenReaderTitle: "Software de GhostYak",
    hero: {
      regionLabel: "Novedades de GhostYak", controlsLabel: "Elegir una pantalla principal",
      slides: [
        { eyebrow: "GHOSTYAK BOXES", title: "Haz que tu escritorio vuelva a ser un espacio de trabajo.", description: "Reúne archivos y accesos directos dispersos en cajas según su finalidad y ordénalos de un vistazo.", actionLabel: "Explorar el producto", imageAlt: "Pantalla de demostración 1 de Boxes" },
        { eyebrow: "DESKTOP, ORGANIZED", title: "Encuentra antes los archivos que necesitas.", description: "Separa el trabajo, los proyectos y las herramientas frecuentes a tu manera y ábrelos cuando los necesites.", actionLabel: "Explorar el producto", imageAlt: "Pantalla de demostración 2 de Boxes" },
      ],
    },
    products: { eyebrow: "GHOSTYAK SOFTWARE", heading: "Productos disponibles ahora", intro: "Nos centramos en resolver las pequeñas molestias diarias, no en añadir complejidad.", freeBadge: "Gratis", viewAction: "Explorar el producto" },
    blog: { eyebrow: "BLOG", heading: "Notas sobre lo que estamos creando", intro: "Descubre noticias de productos e historias de desarrollo en el blog de GhostYak.", viewAction: "Ver el blog" },
  },
  boxes: {
    description: "Una herramienta de escritorio que organiza archivos, carpetas y accesos directos del escritorio de Windows en cajas flexibles.",
    tagline: "Ordena un escritorio disperso de un vistazo.", downloadAction: "Descarga gratuita", screenshotAlts: ["Pantalla de demostración 1 de Boxes", "Pantalla de demostración 2 de Boxes"],
    carousel: { regionLabel: "Vista previa de Boxes", controlsLabel: "Elegir una pantalla del producto" },
    features: {
      label: "FUNCIONES PRINCIPALES", heading: "Solo lo esencial para mantener el orden.",
      items: [
        { title: "Organiza de un vistazo", description: "Agrupa archivos, carpetas y accesos directos relacionados en cajas para encontrar rápidamente lo que necesitas." },
        { title: "Adaptado a tu forma de trabajar", description: "Mueve y cambia el tamaño de las cajas libremente, y pliégalas cuando necesites más espacio en el escritorio." },
        { title: "Los archivos originales no se mueven", description: "Organiza mediante accesos directos sin mover los originales y conserva intacta la estructura de carpetas existente." },
      ],
    },
    availabilityNotice: "Actualmente solo está disponible la versión gratuita. La edición comercial se anunciará por separado cuando esté lista.",
    download: { breadcrumbLabel: "Ruta de navegación", breadcrumbCurrent: "Descargar", waitNotice: "Mantén esta página abierta hasta que el navegador empiece a descargar el instalador.", fileInfoLabel: "Información del instalador", version: "Versión {version}", fileSize: "Aprox. 3,3 MB", requirement: "Requiere Microsoft Edge WebView2 Runtime", countdown: "La descarga comenzará en {seconds} segundos.", starting: "Iniciando la descarga.", help: "¿La descarga no comenzó automáticamente?", directAction: "Descargar el instalador directamente" },
  },
  blog: { eyebrow: "GHOSTYAK BLOG", heading: "Blog", intro: "Noticias de productos y aprendizajes de nuestro proceso de desarrollo.", readMore: "Leer artículo", breadcrumbLabel: "Ruta de navegación", breadcrumbHome: "Blog" },
};

export default es;
