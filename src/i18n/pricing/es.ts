import type { Dictionary } from "@/i18n/get-dictionary";

// Translation of the Korean source of 2026-11-02.
const pricing: Dictionary["pricing"] = {
  eyebrow: "Precios",
  title: "Pruébalo 30 días\ny sigue con Pro.",
  description: "Durante 30 días la versión de prueba es idéntica a Pro. Después puedes seguir escribiendo; el OCR y la búsqueda en la biblioteca quedan en Pro.",
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
        "Al terminar, sigues pudiendo escribir",
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
        "OCR, modo automático, modo de rendimiento",
        "Buscar en todos los documentos",
        "Todos los marcadores, todo el texto marcado, minimapa",
        "Una clave activa hasta 3 dispositivos",
        "Funciona sin internet tras la activación",
        "Actualizaciones incluidas",
      ],
    },
  },
  footnote: "*Cuando termina la prueba, solo dejan de estar disponibles el OCR, el modo automático, el modo de rendimiento, la búsqueda en la biblioteca, todos los marcadores, todo el texto marcado y el minimapa. Tus documentos, tus anotaciones y el texto ya reconocido se conservan.",
  compare: {
    eyebrow: "Comparación de funciones",
    title: "Prueba de 30 días y Pro: ¿qué cambia?",
    description: "Durante 30 días puedes usar todas las funciones de Pro. Al terminar se desactivan el OCR y la búsqueda en la biblioteca, y puedes seguir escribiendo.",
    feature: "Función",
    during: "30 días",
    after: "Después",
    available: "Disponible",
    unavailable: "No disponible",
    readGroup: "Leer · Buscar · Exportar",
    writeGroup: "Escribir · Organizar",
    proGroup: "Reconocimiento de texto · Búsqueda en la biblioteca",
    readFeatures: [
      "Leer documentos, ver anotaciones existentes, seleccionar y copiar texto",
      "Buscar en un documento, acceso rápido, ir a marcadores e índice",
      "Importar PDF, organizar documentos",
      "Exportar a PDF (con la escritura), imprimir",
      "Buscar y copiar texto ya reconocido",
      "Consultar el diccionario",
    ],
    writeFeatures: [
      "Escribir, marcar texto, añadir marcadores, editar páginas",
      "Nueva nota, combinar documentos",
    ],
    proFeatures: [
      "OCR: esta página, varias páginas, documento completo, modo automático, modo de rendimiento",
      "Buscar en todos los documentos a la vez",
      "Todos los marcadores, todo el texto marcado",
      "Minimapa",
    ],
  },
  faq: {
    items: [
      {
        question: "¿Cuándo podré comprar Pro?",
        answer: "Notes sigue en pruebas beta, así que la función de compra está en construcción y estará disponible pronto. Mientras tanto, puedes probar todas las funciones con la versión de prueba.",
      },
      {
        question: "¿Pro es una suscripción?",
        answer: "No. Es un pago único, y las actualizaciones posteriores a la compra están incluidas.",
      },
      {
        question: "¿En cuántos PC puedo usar Pro?",
        answer: "Una clave activa hasta 3 dispositivos. Solo necesitas internet para activarla; después funciona sin conexión.",
      },
      {
        question: "¿Qué pasa con mis documentos cuando termina la prueba?",
        answer: "Tus documentos y anotaciones no se borran. Puedes seguir abriéndolos, leyéndolos, escribiendo en ellos y exportándolos a PDF con la escritura.",
      },
      {
        question: "¿Puedo reiniciar la versión de prueba?",
        answer: "No. La versión de prueba es una vez por dispositivo e instalar una versión nueva no la amplía. Atrasar la fecha del dispositivo termina la prueba de inmediato.",
      },
      {
        question: "¿Un PC que usaba la beta puede usar la versión de prueba?",
        answer: "Sí. Al instalar la v1.0.0 empieza una nueva prueba de 30 días.",
      },
    ],
  },
};

export default pricing;
