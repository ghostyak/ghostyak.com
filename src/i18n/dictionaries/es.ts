import landing from "@/i18n/landing/es";
import type { Dictionary } from "@/i18n/get-dictionary";

const es: Dictionary = {
  landing,
  csvSearch: {
    downloadAction: "Descargar para Windows",
    "category": "Informática forense",
    "description": "Busca en archivos CSV y Excel de gran tamaño, en un solo lugar.",
    "repositoryAction": "Ver en GitHub",
    "screenshots": [
      {
        "alt": "Pantalla inicial de CSV Search Engine para abrir archivos CSV y Excel",
        "caption": "Abrir un archivo · Interfaz en coreano"
      },
      {
        "alt": "CSV Search Engine mostrando datos MFT, campos de búsqueda por columna y filas",
        "caption": "Vista de datos MFT · Interfaz en coreano"
      }
    ],
    "metadataTitle": "CSV Search Engine | Herramienta DFIR para buscar en archivos CSV y Excel grandes",
    "licenseBadge": "Gratis para uso no comercial",
    "howToAction": "Cómo funciona",
    "workflow": {
      "eyebrow": "Cómo funciona",
      "title": "Abre un archivo y\nbusca justo debajo de los encabezados.",
      "description": "Filtra archivos CSV o Excel grandes exportados por herramientas forenses con condiciones por columna y quédate solo con las filas que necesitas.",
      "steps": [
        {
          "title": "Abre un archivo",
          "description": "Elige un archivo CSV, XLS o XLSX con Archivo → Abrir (Ctrl+O) o arrástralo a la ventana."
        },
        {
          "title": "Busca por columna",
          "description": "Escribe una condición en el campo de búsqueda bajo el encabezado de una columna y pulsa Enter. Si escribes en varias columnas, solo se muestran las filas que cumplen todas las condiciones."
        },
        {
          "title": "Ordena y consulta los detalles",
          "description": "Haz clic en un encabezado para ordenar, selecciona una fila y abre Detalles de fila para ver el valor de todas las columnas."
        }
      ]
    },
    "features": {
      "eyebrow": "Funciones principales",
      "title": "Busca, filtra y agrupa.",
      "items": [
        {
          "title": "Búsqueda y filtros por columna",
          "description": "Encuentra filas con condiciones como contiene, excluye, coincidencia exacta, empieza o termina por, vacío y con valor."
        },
        {
          "title": "Rangos de números y fechas",
          "description": "Compara números y fechas con mayor que, al menos, menor que, como máximo y entre. Ejemplo: 2026-09-01 .. 2026-09-20"
        },
        {
          "title": "Orden y agrupación",
          "description": "Haz clic en un encabezado para ordenar y arrastra columnas a Grupos de campos para agrupar valores iguales hasta en ocho niveles."
        },
        {
          "title": "Navegación por la tabla",
          "description": "El desplazamiento continuo, la ocultación de columnas, el ajuste de su ancho y los detalles de fila facilitan explorar tablas anchas."
        },
        {
          "title": "Compatibilidad con CSV y Excel",
          "description": "Abre archivos CSV, XLS y XLSX y cambia entre pestañas de hojas. No hace falta tener Excel instalado."
        },
        {
          "title": "Idiomas y codificaciones",
          "description": "Interfaz en coreano, inglés, japonés y chino, con detección automática de codificaciones CSV como UTF-8, CP949 y Shift_JIS."
        }
      ]
    },
    "privacy": {
      "eyebrow": "Análisis sin conexión",
      "title": "Tus originales, intactos. El análisis, en tu PC.",
      "description": "No modifica ni sube tus archivos originales. Funciona sin conexión a internet ni cuenta, y no hace solicitudes de red automáticas ni recopila datos de uso."
    },
    "faq": {
      "title": "Preguntas frecuentes",
      "items": [
        {
          "question": "¿Es gratis?",
          "answer": "Para uso no comercial, todas las funciones son gratuitas sin límites de tiempo ni de uso. Está prohibido usarlo en trabajos comerciales, como las operaciones internas de una empresa o el análisis forense de pago. También puedes consultar las condiciones de uso en la app, en Ayuda → Acerca de."
        },
        {
          "question": "¿Qué archivos puede abrir?",
          "answer": "Abre archivos CSV, XLS y XLSX. Los archivos XLS se admiten hasta 32 MiB, y no se admiten el formato de Excel, los gráficos, la ejecución de macros ni el recálculo de fórmulas."
        },
        {
          "question": "Los caracteres de mi CSV se ven ilegibles.",
          "answer": "De forma predeterminada, la codificación se detecta automáticamente. Si ves caracteres ilegibles, elige la codificación adecuada en Ajustes → Codificación CSV y vuelve a abrir el archivo."
        },
        {
          "question": "¿Puedo editar o exportar datos?",
          "answer": "Es una herramienta de consulta y búsqueda. Todavía no permite editar datos ni exportar resultados de búsqueda."
        },
        {
          "question": "¿Cuánto tardan los archivos grandes?",
          "answer": "Al abrir un archivo por primera vez o buscar en una columna nueva, puede tardar mientras crea el índice de búsqueda, y necesitas espacio libre en disco para la caché. El tiempo de proceso depende del contenido del archivo y de tu PC, y el rendimiento con CSV de 10 GiB o más aún no se ha verificado por completo."
        },
        {
          "question": "¿Qué necesito para usarlo?",
          "answer": "Es para Windows de 64 bits. Ejecuta el instalador y abre CSV Search Engine desde el menú Inicio."
        }
      ]
    },
    "download": {
      "title": "Descárgalo y\nabre tu primer archivo.",
      "description": "Windows de 64 bits · Gratis para uso no comercial"
    }
  },
  productCategories: { windowsProductivity: "Productividad en Windows", webApps: "Aplicaciones web" },
  "folderHistory": {
    "metadataTitle": "Folder History | App de Windows para volver a abrir carpetas visitadas recientemente",
    "cardDescription": "Una app de Windows que registra las carpetas que visitas en el Explorador de archivos para volver a abrirlas desde la bandeja.",
    "description": "Registra las carpetas que visitas en el Explorador de archivos y vuelve a abrirlas directamente desde la bandeja.",
    "downloadAction": "Descarga gratuita para Windows",
    "howToAction": "Cómo funciona",
    "screenshots": [
      {
        "alt": "Lista de visitas recientes de Folder History con nombres de carpeta, rutas y la hora de la última visita, de la más reciente a la más antigua",
        "caption": "Lista de visitas recientes · Interfaz en coreano"
      },
      {
        "alt": "Editor de reglas de exclusión de Folder History con node_modules y .next",
        "caption": "Edición de reglas de exclusión"
      },
      {
        "alt": "Ajustes de Folder History para el tema, el inicio al iniciar sesión en Windows y la conservación del historial",
        "caption": "Ajustes · Tema, inicio automático y conservación del historial"
      }
    ],
    "workflow": {
      "eyebrow": "Cómo funciona",
      "title": "Deja de buscar carpetas.\nÁbrelas desde tus visitas recientes.",
      "description": "Cuando no recuerdes dónde trabajabas hace unos días, haz doble clic en el icono de la bandeja y verás las carpetas visitadas recientemente, en orden.",
      "steps": [
        {
          "title": "Añade una carpeta vigilada",
          "description": "Elige la carpeta que quieres registrar. Esa carpeta y sus subcarpetas forman el ámbito de registro."
        },
        {
          "title": "Usa el Explorador como siempre",
          "description": "Al abrir una carpeta en el Explorador de archivos de Windows, se registra automáticamente la hora de la última visita."
        },
        {
          "title": "Vuelve a abrirla desde la bandeja",
          "description": "Haz doble clic en el icono de la bandeja y luego en una carpeta de la lista, o pulsa Enter, para abrirla de nuevo en el Explorador."
        }
      ]
    },
    "features": {
      "eyebrow": "Funciones principales",
      "title": "Solo las carpetas que necesitas, a tu manera.",
      "items": [
        {
          "title": "Búsqueda y orden",
          "description": "Busca por nombre de carpeta o ruta (Ctrl+F) y ordena por carpeta, ruta o última visita."
        },
        {
          "title": "Fijar arriba",
          "description": "Fija las carpetas que abres a menudo para mantenerlas al principio de la lista."
        },
        {
          "title": "Reglas de exclusión",
          "description": "Escribe, una por línea, los nombres de carpetas que no quieres registrar, como node_modules o .git. Puedes usar * y ?."
        },
        {
          "title": "Papelera y restauración",
          "description": "Los registros eliminados se guardan en la papelera y puedes restaurarlos con su hora de visita original."
        },
        {
          "title": "Conservación del historial",
          "description": "Conserva el historial sin límite o límpialo automáticamente después de 1, 3, 6 o 12 meses."
        },
        {
          "title": "Copiar ruta",
          "description": "Copia la ruta completa de una carpeta con el botón de copiar de la fila o con Ctrl+C."
        }
      ]
    },
    "privacy": {
      "eyebrow": "Guardado en tu PC",
      "title": "Tu historial se queda en tu PC.",
      "description": "El historial de visitas y los ajustes se guardan en los datos locales de la aplicación en tu PC, sin necesidad de servidor ni cuenta. Borrar registros no afecta a tus carpetas y archivos reales."
    },
    "faq": {
      "title": "Preguntas frecuentes",
      "items": [
        {
          "question": "¿Qué visitas a carpetas se registran?",
          "answer": "Se registra cuando abres una carpeta dentro de una carpeta vigilada con el Explorador de archivos de Windows, o cuando vuelves a esa carpeta desde otra ventana o pestaña. La navegación en otros gestores de archivos o en diálogos para abrir archivos, y los cambios en archivos, no se registran como visitas."
        },
        {
          "question": "¿Es gratis?",
          "answer": "Sí, puedes usarlo gratis."
        },
        {
          "question": "¿Se detiene el registro al cerrar la ventana?",
          "answer": "No. La X de la ventana solo la oculta y el registro continúa. Para salir por completo, haz clic derecho en el icono de la bandeja y elige Salir."
        },
        {
          "question": "¿Puede iniciarse automáticamente con Windows?",
          "answer": "Activa ‘Iniciar al iniciar sesión en Windows’ en los ajustes. Está desactivado de forma predeterminada."
        },
        {
          "question": "¿Qué necesito para usarlo?",
          "answer": "Funciona en Windows 11 x64. El instalador se instala en la cuenta del usuario actual, así que no necesita permisos de administrador, e instala WebView2 Runtime durante la instalación si falta."
        }
      ]
    },
    "download": {
      "title": "Descárgalo y\nañade tu primera carpeta vigilada.",
      "description": "Windows 11 x64 · Se instala sin permisos de administrador"
    }
  },
  worldClock: {
  "badge": "Nuevo · Widget de reloj mundial",
  "title": "La hora del mundo, en tu escritorio.",
  "description": "Mañana en Seúl, madrugada en Londres, noche en Nueva York. Compara las horas y fechas de varias ciudades con el reloj mundial de Boxes. Organiza también tus archivos y accesos directos en el mismo escritorio.",
  "widgetTitle": "Reloj mundial",
  "previewCaption": "Vista previa del widget de reloj mundial · Las horas son ejemplos.",
  "cities": [
    "Seúl",
    "Londres",
    "San Francisco",
    "Nueva York",
    "Vancouver"
  ],
  "heading": "Distintas zonas horarias. Un solo espacio de trabajo.",
  "intro": "Antes de contactar con un colega en el extranjero o llamar a tu familia que está lejos, consulta su hora local en tu escritorio.",
  "benefits": [
    {
      "title": "Ciudades en paralelo",
      "description": "Compara de un vistazo las horas de las ciudades que consultas con frecuencia."
    },
    {
      "title": "Fechas y diferencias horarias",
      "description": "Distingue las regiones con otra fecha mediante la fecha y el desfase UTC de cada ciudad."
    },
    {
      "title": "Organización y widgets juntos",
      "description": "Reúne archivos, accesos directos y el reloj mundial en tu espacio de trabajo."
    }
  ]
},
  metadata: {
    site: { title: "GhostYak | Software de Windows para organizar tu día a día", titleTemplate: "%s | GhostYak", description: "GhostYak crea software que simplifica y mejora tu espacio de trabajo diario en Windows." },
    boxes: { title: "Boxes", openGraphTitle: "GhostYak Boxes | Organizador de escritorio para Windows" },
    boxesDownload: { title: "Descargar Boxes" },
    blog: { title: "Blog", description: "Noticias de productos e historias de desarrollo de GhostYak." },
  },
  header: { homeLabel: "Inicio de GhostYak", navigationLabel: "Menú principal", language: "Elegir idioma", products: "Productos", blog: "Blog", support: "Apoyar" },
  supportPage: {
    metadataTitle: "Apoya a GhostYak",
    title: "Apoya a GhostYak",
    description: "La mayoría de las herramientas para Windows y aplicaciones web de GhostYak son gratuitas. Tu apoyo se destina a seguir creando y mejorando estos productos.",
    methodsAction: "Ver formas de apoyar",
    productsAction: "Ver productos",
    methods: { eyebrow: "Formas de apoyar", title: "Apoya de la forma que prefieras", description: "Ambas opciones se completan en una página externa que se abre en una pestaña nueva.", action: "Apoyar en {name}", items: { buyMeACoffee: "Servicio internacional de apoyo que permite contribuir con tarjeta en pocos pasos. Es fácil de usar desde cualquier país.", ctee: "Plataforma coreana de apoyo a creadores que acepta métodos de pago de Corea." } },
    uses: { eyebrow: "A qué se destina", title: "Tu apoyo mantiene vivos los productos", items: [{ title: "Nuevas funciones y productos", description: "Da tiempo para crear funciones basadas en las opiniones de los usuarios y nuevas herramientas." }, { title: "Mantenimiento", description: "Mantiene estables los productos que usas con compatibilidad con las actualizaciones de Windows y corrección de errores." }, { title: "Servicios web", description: "Cubre los costes de funcionamiento de aplicaciones web como Clock y OSINTS, y de este sitio web." }] },
    other: {
      eyebrow: "Otras formas de ayudar",
      title: "También puedes ayudar sin donar",
      share: { title: "Recomiéndanos", description: "Recomienda un producto de GhostYak que te haya sido útil a quien lo necesite." },
      feedback: { title: "Envía tus comentarios", description: "Informa de problemas o comparte ideas de mejora en GitHub.", action: "Abrir GitHub" },
      follow: { title: "Comparte novedades", description: "Sigue a GhostYak en Instagram y Threads y comparte sus novedades." },
    },
    thanks: { title: "Gracias", description: "Gracias por usar y apoyar GhostYak. Te lo devolveremos con mejores herramientas." },
  },
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
    products: { eyebrow: "GHOSTYAK SOFTWARE", heading: "Creamos pequeñas herramientas para el día a día", intro: "Desde organizar el escritorio y gestionar el tiempo hasta investigaciones OSINT y forenses. En lugar de acumular funciones, nos centramos en resolver bien una molestia que aparece a menudo.", freeBadge: "Gratis", viewAction: "Explorar el producto", webBadge: "Web", clockDescription: "Una herramienta de tiempo con hora actual, reloj mundial, alarmas, temporizador, Pomodoro y cronómetro, lista para usar en el navegador sin instalar nada.", osintsDescription: "Busca y analiza direcciones IP, dominios y más en un solo lugar, sin ir de un sitio OSINT a otro.", webAction: "Abrir sitio web", clockPreviewLabel: "Vista previa de Clock" },
    blog: { eyebrow: "BLOG", heading: "Contamos cómo lo hacemos", intro: "Novedades sobre productos y funciones, y los problemas que encontramos al desarrollarlos y cómo los resolvimos.", viewAction: "Ver el blog" },
  },
  boxes: {
    description: "Deja tus archivos en sus carpetas originales y agrúpalos en cajas por tarea en el escritorio. Las funciones básicas son gratuitas, también en la empresa.",
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
