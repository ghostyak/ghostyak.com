import landing from "@/i18n/landing/pt";
import type { Dictionary } from "@/i18n/get-dictionary";

const pt: Dictionary = {
  landing,
  worldClock: {
  "badge": "Novo · Widget de relógio mundial",
  "title": "A hora do mundo, na sua área de trabalho.",
  "description": "Manhã em Seul, madrugada em Londres, noite em Nova York. Compare horários e datas de várias cidades com o relógio mundial do Boxes. Organize também arquivos e atalhos na mesma área de trabalho.",
  "widgetTitle": "Relógio mundial",
  "previewCaption": "Prévia do widget de relógio mundial · Os horários são exemplos.",
  "cities": [
    "Seul",
    "Londres",
    "São Francisco",
    "Nova York",
    "Vancouver"
  ],
  "heading": "Fusos diferentes. Um só espaço de trabalho.",
  "intro": "Antes de falar com um colega no exterior ou ligar para familiares distantes, confira o horário local deles na sua área de trabalho.",
  "benefits": [
    {
      "title": "Cidades lado a lado",
      "description": "Compare rapidamente os horários das cidades que você consulta com frequência."
    },
    {
      "title": "Datas e diferenças de horário",
      "description": "Identifique regiões com datas diferentes pela data e pelo deslocamento UTC de cada cidade."
    },
    {
      "title": "Organização e widgets juntos",
      "description": "Reúna arquivos, atalhos e o relógio mundial no seu espaço de trabalho."
    }
  ]
},
  metadata: {
    site: { title: "GhostYak | Software para organizar seu dia a dia no Windows", titleTemplate: "%s | GhostYak", description: "A GhostYak cria software que torna seu espaço de trabalho diário no Windows mais simples e prático." },
    boxes: { title: "Boxes", openGraphTitle: "GhostYak Boxes | Organizador da área de trabalho do Windows" },
    boxesDownload: { title: "Baixar o Boxes" },
    blog: { title: "Blog", description: "Novidades de produtos e histórias de desenvolvimento da GhostYak." },
  },
  header: { homeLabel: "Página inicial da GhostYak", navigationLabel: "Menu principal", language: "Escolher idioma", products: "Produtos", blog: "Blog" },
  footer: { description: "Software que simplifica seu espaço de trabalho diário no Windows.", navigationLabel: "Menu do rodapé", blog: "Blog" },
  carousel: { slideLabel: "Ver tela {index}", pauseLabel: "Pausar rotação automática", playLabel: "Retomar rotação automática", pause: "Pausar", play: "Reproduzir" },
  home: {
    screenReaderTitle: "Software GhostYak",
    hero: {
      regionLabel: "Destaques da GhostYak", controlsLabel: "Escolher uma tela principal",
      slides: [
        { eyebrow: "GHOSTYAK BOXES", title: "Transforme sua área de trabalho em um espaço produtivo novamente.", description: "Reúna arquivos e atalhos espalhados em caixas de acordo com a finalidade e organize tudo de relance.", actionLabel: "Conhecer o produto", imageAlt: "Tela de demonstração 1 do Boxes" },
        { eyebrow: "DESKTOP, ORGANIZED", title: "Encontre os arquivos de que precisa mais rápido.", description: "Separe trabalho, projetos e ferramentas frequentes do seu jeito e abra tudo quando precisar.", actionLabel: "Conhecer o produto", imageAlt: "Tela de demonstração 2 do Boxes" },
      ],
    },
    products: { eyebrow: "GHOSTYAK SOFTWARE", heading: "Produtos disponíveis agora", intro: "Nosso foco é resolver os pequenos incômodos do dia a dia, não adicionar complexidade.", freeBadge: "Grátis", viewAction: "Conhecer o produto" },
    blog: { eyebrow: "BLOG", heading: "Registros do que estamos criando", intro: "Confira novidades de produtos e histórias de desenvolvimento no blog da GhostYak.", viewAction: "Ver o blog" },
  },
  boxes: {
    description: "Uma ferramenta que organiza arquivos, pastas e atalhos da área de trabalho do Windows em caixas flexíveis.",
    tagline: "Organize uma área de trabalho espalhada de relance.", downloadAction: "Download gratuito", screenshotAlts: ["Tela de demonstração 1 do Boxes", "Tela de demonstração 2 do Boxes"],
    carousel: { regionLabel: "Prévia do Boxes", controlsLabel: "Escolher uma tela do produto" },
    features: {
      label: "PRINCIPAIS RECURSOS", heading: "Só o essencial para manter tudo organizado.",
      items: [
        { title: "Organize tudo de relance", description: "Agrupe arquivos, pastas e atalhos relacionados em caixas para encontrar rapidamente o que você precisa." },
        { title: "Do seu jeito de trabalhar", description: "Mova e redimensione as caixas livremente e recolha-as quando precisar de mais espaço na área de trabalho." },
        { title: "Os arquivos originais ficam no lugar", description: "Organize usando atalhos sem mover os originais e mantenha intacta a estrutura de pastas existente." },
      ],
    },
    availabilityNotice: "No momento, apenas a versão gratuita está disponível. Uma edição comercial será anunciada separadamente quando estiver pronta.",
    download: { breadcrumbLabel: "Navegação estrutural", breadcrumbCurrent: "Download", waitNotice: "Mantenha esta página aberta até o navegador começar a baixar o instalador.", fileInfoLabel: "Informações do instalador", version: "Versão {version}", fileSize: "Cerca de 3,3 MB", requirement: "Requer o Microsoft Edge WebView2 Runtime", countdown: "O download começará em {seconds} segundos.", starting: "Iniciando o download.", help: "O download não começou automaticamente?", directAction: "Baixar o instalador diretamente" },
  },
  blog: { eyebrow: "GHOSTYAK BLOG", heading: "Blog", intro: "Novidades de produtos e aprendizados do nosso processo de desenvolvimento.", readMore: "Ler artigo", breadcrumbLabel: "Navegação estrutural", breadcrumbHome: "Blog" },
};

export default pt;
