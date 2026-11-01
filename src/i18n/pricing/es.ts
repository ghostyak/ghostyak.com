import type { Dictionary } from "@/i18n/get-dictionary";

// Translation of the Korean source of 2026-11-01.
const pricing: Dictionary["pricing"] = {
  eyebrow: "Precios",
  title: "Pruébalo 30 días\ny sigue con Pro.",
  description: "Durante 30 días la versión de prueba es idéntica a Pro. Para seguir escribiendo y buscando en tu biblioteca después, solo necesitas Pro.",
  plans: {
    label: "Versión de prueba y Pro",
    includes: "Todo lo de la versión de prueba, y además:",
    trial: {
      name: "Versión de prueba",
      tagline: "Pruébalo primero",
      price: "30 días",
      priceUnit: "Desde el primer inicio",
      points: [
        "Escribe en PDF con bolígrafo, rotulador y cuadros de texto",
        "Busca en todos los documentos a la vez",
        "Edita páginas, crea índices, combina documentos",
        "Reconocimiento de texto en páginas escaneadas (OCR)",
        "Exporta a PDF con la escritura e imprime",
        "Solo lectura al terminar; documentos y anotaciones se conservan",
      ],
    },
    pro: {
      name: "Pro",
      tagline: "Sin límite de tiempo",
      status: "Próximamente",
      priceUnit: "USD · Pago único",
      action: "Compra disponible pronto",
      note: "Notes sigue en pruebas beta y la función de compra está en construcción. Mientras tanto, prueba todas las funciones con la versión de prueba.",
      points: [
        "Escritura y búsqueda en la biblioteca sin límite de tiempo",
        "Una clave activa hasta 3 dispositivos",
        "Funciona sin internet tras la activación",
        "Conservas la versión comprada",
      ],
    },
  },
  footnote: "*Cuando termina la versión de prueba, solo puedes abrir y leer documentos. Tus documentos y anotaciones no se borran y puedes exportarlos a PDF con la escritura.",
  compare: {
    eyebrow: "Comparación de funciones",
    title: "Prueba de 30 días y Pro: ¿qué cambia?",
    description: "Durante 30 días es igual que Pro. Al terminar pasa a solo lectura y tus documentos y anotaciones se conservan.",
    feature: "Función",
    during: "30 días",
    after: "Después",
    available: "Disponible",
    unavailable: "No disponible",
    readGroup: "Leer · Buscar · Exportar",
    writeGroup: "Escribir · Organizar · Búsqueda en la biblioteca",
    readFeatures: [
      "Leer documentos, ver anotaciones existentes, seleccionar y copiar texto",
      "Buscar en un documento, acceso rápido, ir a marcadores e índice",
      "Importar PDF, organizar documentos",
      "Exportar a PDF (con la escritura), imprimir",
      "Reconocimiento de texto en páginas escaneadas (OCR)",
      "Consultar el diccionario",
    ],
    writeFeatures: [
      "Escribir, marcar texto, añadir marcadores, editar páginas, deshacer",
      "Nueva nota, combinar documentos",
      "Buscar en todos los documentos",
    ],
  },
  faq: {
    items: [
      {
        question: "¿Cuándo podré comprar Pro?",
        answer: "Notes sigue en pruebas beta, así que la función de compra está en construcción y estará disponible pronto. Mientras tanto, puedes probar todas las funciones con la versión de prueba y, pasados los 30 días, instalar una versión nueva te da otros 30 días.",
      },
      {
        question: "¿Pro es una suscripción?",
        answer: "No. Es un pago único. Puedes seguir usando la versión comprada, y actualizar a una versión mayor nueva es de pago.",
      },
      {
        question: "¿En cuántos PC puedo usar Pro?",
        answer: "Una clave activa hasta 3 dispositivos. Solo necesitas internet para activarla; después funciona sin conexión.",
      },
      {
        question: "¿Qué pasa con mis documentos cuando termina la prueba?",
        answer: "Tus documentos y anotaciones no se borran. Puedes seguir abriéndolos, leyéndolos y exportándolos a PDF con la escritura.",
      },
      {
        question: "¿Puedo reiniciar la versión de prueba?",
        answer: "Durante la beta, instalar una versión nueva pasados los 30 días inicia otra prueba de 30 días. Retrasar la fecha del dispositivo la termina de inmediato.",
      },
      {
        question: "¿Un PC que usaba la beta puede usar la versión de prueba?",
        answer: "Sí. Al instalar la v1.0.0 empieza una nueva prueba de 30 días.",
      },
    ],
  },
};

export default pricing;
