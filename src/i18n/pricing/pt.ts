import type { Dictionary } from "@/i18n/get-dictionary";

// Translation of the Korean source of 2026-11-01.
const pricing: Dictionary["pricing"] = {
  eyebrow: "Preços",
  title: "Teste por 30 dias\ne continue com o Pro.",
  description: "Por 30 dias, a versão de teste é idêntica ao Pro. Para continuar escrevendo e pesquisando na sua biblioteca depois disso, basta o Pro.",
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
        "Somente leitura ao terminar; documentos e anotações são mantidos",
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
        "Escrita e busca na biblioteca sem limite de tempo",
        "Uma chave ativa até 3 dispositivos",
        "Funciona sem internet após a ativação",
        "A versão comprada continua sua",
      ],
    },
  },
  footnote: "*Quando o teste termina, você só pode abrir e ler documentos. Seus documentos e anotações não são apagados e podem ser exportados para PDF com a escrita.",
  compare: {
    eyebrow: "Comparação de recursos",
    title: "Teste de 30 dias e Pro: o que muda?",
    description: "Por 30 dias, é igual ao Pro. Quando termina, o app fica somente leitura e seus documentos e anotações continuam como estão.",
    feature: "Recurso",
    during: "30 dias",
    after: "Depois",
    available: "Disponível",
    unavailable: "Indisponível",
    readGroup: "Ler · Pesquisar · Exportar",
    writeGroup: "Escrever · Organizar · Busca na biblioteca",
    readFeatures: [
      "Ler documentos, ver anotações existentes, selecionar e copiar texto",
      "Pesquisar no documento, acesso rápido, ir a marcadores e sumário",
      "Importar PDFs, organizar documentos",
      "Exportar para PDF (com a escrita), imprimir",
      "Reconhecimento de texto em páginas digitalizadas (OCR)",
      "Consultar o dicionário",
    ],
    writeFeatures: [
      "Escrever, marcar texto, adicionar marcadores, editar páginas, desfazer",
      "Nova nota, combinar documentos",
      "Pesquisar em todos os documentos",
    ],
  },
  faq: {
    items: [
      {
        question: "Quando poderei comprar o Pro?",
        answer: "O Notes ainda está em teste beta, por isso o recurso de compra está em construção e estará disponível em breve. Até lá, você pode testar todos os recursos com a versão de teste e, depois dos 30 dias, instalar uma nova versão dá mais 30 dias.",
      },
      {
        question: "O Pro é uma assinatura?",
        answer: "Não. É uma compra única. Você pode continuar usando a versão comprada, e a atualização para uma nova versão principal é paga.",
      },
      {
        question: "Em quantos PCs posso usar o Pro?",
        answer: "Uma chave ativa até 3 dispositivos. Você só precisa de internet para ativar; depois disso, funciona offline.",
      },
      {
        question: "O que acontece com meus documentos quando o teste termina?",
        answer: "Seus documentos e anotações não são apagados. Você ainda pode abri-los, lê-los e exportá-los para PDF com a escrita.",
      },
      {
        question: "Posso reiniciar a versão de teste?",
        answer: "Durante o teste beta, instalar uma nova versão depois dos 30 dias inicia um novo teste de 30 dias. Voltar a data do dispositivo o encerra imediatamente.",
      },
      {
        question: "Um PC que usava a beta pode usar a versão de teste?",
        answer: "Sim. Ao instalar a v1.0.0, começa um novo teste de 30 dias.",
      },
    ],
  },
};

export default pricing;
