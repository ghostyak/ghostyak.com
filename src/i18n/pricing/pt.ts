import type { Dictionary } from "@/i18n/get-dictionary";

// Translation of the Korean source of 2026-11-02, with the plan card points of 2026-11-06.
const pricing: Dictionary["pricing"] = {
  eyebrow: "Preços",
  title: "Teste por 30 dias\ne continue com o Pro.",
  description: "Por 30 dias, a versão de teste é idêntica ao Pro. Depois disso, você pode continuar escrevendo; o OCR e a busca na biblioteca ficam no Pro.",
  plans: {
    label: "Versão de teste e Pro",
    includes: "Tudo da versão de teste, e mais:",
    trial: {
      name: "Versão de teste",
      tagline: "Experimente primeiro",
      price: "30 dias",
      priceUnit: "A partir da primeira abertura",
      lead: "Grátis mesmo depois de 30 dias:",
      points: [
        "Escreva em PDFs com caneta, marca-texto e caixas de texto",
        "Edite páginas, crie notas e sumários, combine documentos",
        "Pesquise dentro de um documento e encontre e copie o texto já reconhecido",
        "Exporte para PDF com a escrita e imprima",
        "Todos os recursos Pro nos primeiros 30 dias",
      ],
    },
    pro: {
      name: "Pro",
      tagline: "Sem limite de tempo",
      priceUnit: "USD · Compra única",
      action: "Comprar Pro",
      note: "Após a compra, enviamos uma chave de licença por e-mail. Cole-a em Settings → License no aplicativo.",
      points: [
        "Reconhecimento de texto (OCR): esta página, documento inteiro, modo automático, modo de desempenho",
        "Pesquise em todos os documentos de uma vez",
        "Todos os marcadores, todo o texto marcado, minimapa",
        "Ative até 3 PCs com Windows com uma chave",
        "Funciona sem internet após a ativação",
        "Atualizações incluídas",
      ],
    },
  },
  footnote: "*Quando o teste termina, só deixam de estar disponíveis o OCR, o modo automático, o modo de desempenho, a busca na biblioteca, todos os marcadores, todo o texto marcado e o minimapa. Seus documentos, suas anotações e o texto já reconhecido são mantidos.",
  compare: {
    eyebrow: "Comparação de recursos",
    title: "Teste de 30 dias e Pro: o que muda?",
    description: "Por 30 dias, você pode usar todos os recursos do Pro. Quando termina, o OCR e a busca na biblioteca são desativados, mas você pode continuar escrevendo.",
    feature: "Recurso",
    during: "30 dias",
    after: "Depois",
    available: "Disponível",
    unavailable: "Indisponível",
    readGroup: "Ler · Pesquisar · Exportar",
    writeGroup: "Escrever · Organizar",
    proGroup: "Reconhecimento de texto · Busca na biblioteca",
    readFeatures: [
      "Ler documentos, ver anotações existentes, selecionar e copiar texto",
      "Pesquisar no documento, acesso rápido, ir a marcadores e sumário",
      "Importar PDFs, organizar documentos",
      "Exportar para PDF (com a escrita), imprimir",
      "Pesquisar e copiar texto já reconhecido",
      "Consultar o dicionário",
    ],
    writeFeatures: [
      "Escrever, marcar texto, adicionar marcadores, editar páginas",
      "Nova nota, combinar documentos",
    ],
    proFeatures: [
      "OCR: esta página, várias páginas, documento inteiro, modo automático, modo de desempenho",
      "Pesquisar em todos os documentos de uma vez",
      "Todos os marcadores, todo o texto marcado",
      "Minimapa",
    ],
  },
  faq: {
    items: [
      {
        question: "Como compro o Pro?",
        answer: "Pague pelo botão Comprar Pro nesta página e enviaremos por e-mail uma chave de licença e um link de download.",
      },
      {
        question: "O Pro é uma assinatura?",
        answer: "Não. É uma compra única, e as atualizações após a compra estão incluídas.",
      },
      {
        question: "Em quantos PCs posso usar o Pro?",
        answer: "Uma chave ativa até 3 dispositivos. Você só precisa de internet para ativar; depois disso, funciona offline.",
      },
      {
        question: "O que acontece com meus documentos quando o teste termina?",
        answer: "Seus documentos e anotações não são apagados. Você ainda pode abri-los, lê-los, escrever neles e exportá-los para PDF com a escrita.",
      },
      {
        question: "Posso reiniciar a versão de teste?",
        answer: "Não. A versão de teste é uma vez por dispositivo, e instalar uma nova versão não a prolonga. Atrasar a data do dispositivo encerra o teste imediatamente.",
      },
      {
        question: "Um PC que usava a beta pode usar a versão de teste?",
        answer: "Sim. Ao instalar a v1.0.0, começa um novo teste de 30 dias.",
      },
    ],
  },
};

export default pricing;
