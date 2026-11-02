import type { Dictionary } from "@/i18n/get-dictionary";

// Translation of the Korean source of 2026-11-02.
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
      points: [
        "Escreva em PDFs com caneta, marca-texto e caixas de texto",
        "Pesquise em todos os documentos de uma vez",
        "Edite páginas, crie sumários, combine documentos",
        "Reconhecimento de texto em páginas digitalizadas (OCR)",
        "Exporte para PDF com a escrita e imprima",
        "Ao terminar, a escrita continua disponível",
      ],
    },
    pro: {
      name: "Pro",
      tagline: "Sem limite de tempo",
      status: "Em breve",
      priceUnit: "USD · Compra única",
      action: "Compra disponível em breve",
      note: "O Notes ainda está em teste beta e o recurso de compra está em construção. Enquanto isso, teste todos os recursos com a versão de teste.",
      points: [
        "OCR, modo automático, modo de desempenho",
        "Pesquisar em todos os documentos",
        "Todos os marcadores, todo o texto marcado, minimapa",
        "Uma chave ativa até 3 dispositivos",
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
        question: "Quando poderei comprar o Pro?",
        answer: "O Notes ainda está em teste beta, por isso o recurso de compra está em construção e estará disponível em breve. Até lá, você pode testar todos os recursos com a versão de teste.",
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
