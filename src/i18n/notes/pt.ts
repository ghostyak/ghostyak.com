import type { Dictionary } from "@/i18n/get-dictionary";

// Translation of the Korean source approved on 2026-10-09.
const notes: Dictionary["notes"] = {
  metadataTitle: "Ghostyak Notes | App de notas para Windows para escrever em PDFs e encontrar tudo rápido",
  cardDescription: "Um app de notas para Windows para escrever em PDFs com caneta e teclado e encontrar o que você leu em todos os seus documentos.",
  description: "Escreva em PDFs com caneta e teclado e encontre o que você leu em todos os seus documentos.",
  featuredEyebrow: "Novo",
  betaBadge: "Beta",
  trialBadge: "Todos os recursos por 14 dias",
  downloadAction: "Baixar para Windows x64",
  featuresAction: "Ver recursos",
  heroNote: "Esta é uma versão beta. Você pode usar todos os recursos sem restrições por 14 dias a partir do dia em que abrir o app pela primeira vez.",
  screenshots: {
    annotate: { alt: "Ghostyak Notes mostrando um livro didático em PDF com texto destacado e anotações à mão na margem", caption: "Escrevendo em um PDF · Interface em coreano" },
    pen: { alt: "Configurações da caneta do Ghostyak Notes com três espaços de cor, uma paleta de cores e três níveis de espessura", caption: "Configurações da caneta · Cor e espessura" },
    search: { alt: "Busca na biblioteca do Ghostyak Notes por uma palavra em coreano, com as páginas encontradas em dois documentos e suas prévias", caption: "Buscar em todos os documentos" },
    library: { alt: "Biblioteca do Ghostyak Notes mostrando dez documentos em uma grade de capas, com pastas e favoritos à esquerda", caption: "Biblioteca · Pastas e grade de capas" },
    pages: { alt: "Visão geral de páginas do Ghostyak Notes mostrando todas as páginas de um documento de 24 páginas em grade, com botões para mover, duplicar e girar", caption: "Visão geral de páginas" },
    spread: { alt: "Visualização em duas páginas do Ghostyak Notes com as páginas 4 e 5 anotadas lado a lado", caption: "Visualização em duas páginas" },
  },
  showcase: {
    eyebrow: "Principais recursos",
    title: "Leia, escreva e encontre,\ntudo em um só app.",
    description: "Livros didáticos e materiais de aula, relatórios e artigos. Importe um PDF, escreva direto nele e encontre depois a página de que você precisa.",
    items: {
      pen: {
        eyebrow: "Escrita",
        title: "Caneta, marca-texto e borracha.\nCores e espessura do seu jeito.",
        description: "Defina três cores favoritas e três espessuras para a caneta e para o marca-texto e alterne entre elas na hora. O que você escreve é salvo automaticamente enquanto escreve.",
        points: ["Caneta, marca-texto, borracha e seleção com laço", "Linhas, setas, retângulos, elipses e imagens", "Desfazer e refazer"],
      },
      search: {
        eyebrow: "Busca na biblioteca",
        title: "Não lembra em qual livro estava?\nEncontre com uma única busca.",
        description: "Pressione Ctrl+Shift+F para buscar no texto de todos os documentos da sua biblioteca. Os resultados são agrupados por documento, com número da página e prévia, e Enter abre a página.",
        points: ["Buscar em todos os documentos (Ctrl+Shift+F)", "Buscar no documento (Ctrl+F)", "Ir com marcadores e o sumário do PDF"],
      },
      library: {
        eyebrow: "Biblioteca",
        title: "Organize livros e notas\ncomo em uma estante.",
        description: "Importe PDFs ou crie novas notas e separe tudo em pastas. Cada capa mostra até onde você leu, e você pode abrir vários documentos em abas.",
        points: ["Pastas, favoritos e documentos recentes", "Grade de capas e lista, com ordenação", "Documentos excluídos ficam na lixeira"],
      },
      pages: {
        eyebrow: "Visão geral de páginas",
        title: "Mova, adicione\ne gire páginas.",
        description: "Abra todas as páginas de um documento em uma única tela para reordenar, duplicar, excluir ou girar. Você também pode adicionar páginas em branco ou inserir páginas de outro PDF.",
        points: ["Ver apenas páginas com marcador ou com anotações", "Páginas em branco lisas, pautadas, quadriculadas ou pontilhadas", "A edição de páginas também pode ser desfeita"],
      },
      spread: {
        eyebrow: "Visualização",
        title: "Uma página por vez,\nou duas como em um livro.",
        description: "Alterne entre a visualização de uma página e a de duas páginas e ajuste o zoom à largura ou à altura. Mesmo em documentos longos, a barra lateral leva você direto à página desejada.",
        points: ["Visualização de uma e de duas páginas", "Ajustar à largura, ajustar à altura e zoom", "Barra lateral de páginas, páginas anotadas, texto marcado, marcadores e sumário"],
      },
    },
  },
  more: {
    eyebrow: "Mais recursos",
    title: "As ferramentas de que você precisa para estudar e trabalhar.",
    items: [
      { title: "Caixas de texto", description: "Digite diretamente na página. Escolha entre fontes sem serifa, com serifa, manuscrita e monoespaçada." },
      { title: "Marcar texto", description: "Selecione o texto de um PDF para destacar, sublinhar ou tachar, e copie-o." },
      { title: "Marcadores", description: "Marque páginas importantes e vá até elas pela lista." },
      { title: "Espiar", description: "Clique em uma anotação ou caixa de texto para deixá-la translúcida por um instante e ver o texto que está embaixo." },
      { title: "Salvamento automático", description: "Não há botão de salvar. O que você escreve é salvo no arquivo do documento enquanto escreve." },
      { title: "Atalhos de teclado", description: "Escolha ferramentas, busque e mude de página com atalhos." },
    ],
  },
  privacy: {
    eyebrow: "Salvo no seu PC",
    title: "Seus documentos ficam no seu PC.",
    description: "Os documentos são salvos como arquivos na pasta “Ghostyak Notes”, dentro da sua pasta Documentos. Você não precisa de conta nem de conexão com a internet, e os arquivos PDF originais que você importa não são alterados.",
  },
  beta: {
    eyebrow: "Sobre a versão beta",
    title: "14 dias,\ntodos os recursos, sem restrições.",
    description: "O instalador disponível agora é uma versão beta. O período de uso começa no dia em que você abre o app pela primeira vez.",
    steps: [
      { title: "Todos os recursos por 14 dias", description: "Por 14 dias a partir da primeira abertura, você pode usar todos os recursos, incluindo escrita, busca na biblioteca e edição de páginas." },
      { title: "Depois, somente leitura", description: "Quando o período de uso termina, você só pode abrir e ler documentos. A escrita e a busca na biblioteca ficam indisponíveis." },
      { title: "Mais 14 dias com a próxima versão", description: "Instale a próxima versão para usar por mais 14 dias." },
    ],
    note: "Seus documentos e anotações não são excluídos quando o período termina.",
  },
  faq: {
    title: "Perguntas frequentes",
    items: [
      { question: "Por quanto tempo posso usar a versão beta?", answer: "Você pode usar todos os recursos sem restrições por 14 dias a partir do dia em que abrir o app pela primeira vez. Na primeira abertura, o app informa a data em que o período de uso termina." },
      { question: "O que acontece depois de 14 dias?", answer: "Você ainda pode abrir e ler documentos e buscar dentro de um documento, mas não pode escrever nem buscar em todos os documentos. Seus documentos e anotações não são excluídos, e ao instalar a próxima versão você ganha mais 14 dias." },
      { question: "Onde meus documentos ficam salvos?", answer: "Na pasta “Ghostyak Notes”, dentro da sua pasta Documentos. Você pode abri-la com “문서 폴더 열기” (Abrir pasta de documentos), no canto inferior esquerdo da biblioteca." },
      { question: "A busca funciona em PDFs digitalizados?", answer: "Ela busca no texto de PDFs que contêm informações de texto. O reconhecimento de texto (OCR) para PDFs formados apenas por imagens digitalizadas ainda não é compatível." },
      { question: "Posso usar sem caneta?", answer: "Sim. Você pode escrever com o mouse e digitar em caixas de texto com o teclado." },
      { question: "Em que idioma o app está disponível?", answer: "No momento, a interface do app está disponível em coreano. Outros idiomas serão oferecidos em breve." },
      { question: "O que é necessário para usar?", answer: "O app é para Windows de 64 bits (x64). Se o Microsoft Edge WebView2 Runtime não estiver presente, o instalador faz o download e a instalação." },
    ],
  },
  download: {
    title: "Baixe o app e\nimporte seu primeiro PDF.",
    description: "Windows x64 · Beta · Todos os recursos por 14 dias",
  },
};

export default notes;
