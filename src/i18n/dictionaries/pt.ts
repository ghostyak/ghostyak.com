import landing from "@/i18n/landing/pt";
import type { Dictionary } from "@/i18n/get-dictionary";

const pt: Dictionary = {
  landing,
  share: {
    heading: "Se esta página foi útil para você, compartilhe",
    copyLink: "Copiar link",
    copied: "Link copiado",
    copyFailed: "Não foi possível copiar automaticamente. Copie o endereço abaixo.",
    copyField: "Endereço da página para compartilhar",
    x: "Compartilhar no X",
    facebook: "Compartilhar no Facebook",
    linkedin: "Compartilhar no LinkedIn",
    instagram: "Compartilhar no Instagram",
    threads: "Compartilhar no Threads",
  },
  csvSearch: {
    downloadAction: "Baixar para Windows",
    "category": "Perícia digital",
    "description": "Pesquise em arquivos CSV e Excel grandes, em um só lugar.",
    "repositoryAction": "Ver no GitHub",
    "screenshots": [
      {
        "alt": "Tela inicial do CSV Search Engine para abrir arquivos CSV e Excel",
        "caption": "Abrir arquivo · Interface em coreano"
      },
      {
        "alt": "CSV Search Engine exibindo dados MFT, campos de pesquisa por coluna e linhas",
        "caption": "Visualização de dados MFT · Interface em coreano"
      }
    ],
    "metadataTitle": "CSV Search Engine | Ferramenta DFIR para pesquisar arquivos CSV e Excel grandes",
    "licenseBadge": "Gratuito para uso não comercial",
    "howToAction": "Como funciona",
    "workflow": {
      "eyebrow": "Como funciona",
      "title": "Abra um arquivo e\npesquise logo abaixo dos cabeçalhos.",
      "description": "Filtre arquivos CSV ou Excel grandes exportados por ferramentas forenses com condições por coluna e fique só com as linhas de que precisa.",
      "steps": [
        {
          "title": "Abra um arquivo",
          "description": "Escolha um arquivo CSV, XLS ou XLSX em Arquivo → Abrir (Ctrl+O) ou arraste-o para a janela."
        },
        {
          "title": "Pesquise por coluna",
          "description": "Digite uma condição no campo de pesquisa abaixo do cabeçalho da coluna e pressione Enter. Com condições em várias colunas, só aparecem as linhas que atendem a todas."
        },
        {
          "title": "Ordene e veja os detalhes",
          "description": "Clique no cabeçalho para ordenar, selecione uma linha e abra Detalhes da linha para ver o valor de todas as colunas."
        }
      ]
    },
    "features": {
      "eyebrow": "Principais recursos",
      "title": "Encontre, filtre e agrupe.",
      "items": [
        {
          "title": "Pesquisa e filtros por coluna",
          "description": "Encontre linhas com condições como contém, exclui, igual, começa ou termina com, vazio e com valor."
        },
        {
          "title": "Intervalos de números e datas",
          "description": "Compare números e datas com maior que, pelo menos, menor que, no máximo e entre. Exemplo: 2026-09-01 .. 2026-09-20"
        },
        {
          "title": "Ordenação e agrupamento",
          "description": "Clique no cabeçalho para ordenar e arraste colunas para Grupos de campos para agrupar valores iguais em até oito níveis."
        },
        {
          "title": "Navegação na tabela",
          "description": "Rolagem contínua, ocultação de colunas, ajuste de largura e detalhes da linha facilitam explorar tabelas largas."
        },
        {
          "title": "Suporte a CSV e Excel",
          "description": "Abra arquivos CSV, XLS e XLSX e alterne entre as abas das planilhas. Não é preciso ter o Excel instalado."
        },
        {
          "title": "Idiomas e codificações",
          "description": "Interface em coreano, inglês, japonês e chinês, com detecção automática de codificações CSV como UTF-8, CP949 e Shift_JIS."
        }
      ]
    },
    "privacy": {
      "eyebrow": "Análise offline",
      "title": "Originais intactos, análise no seu PC.",
      "description": "O app não modifica nem envia seus arquivos originais. Funciona sem conexão com a internet nem conta, sem requisições de rede automáticas nem coleta de dados de uso."
    },
    "faq": {
      "title": "Perguntas frequentes",
      "items": [
        {
          "question": "É gratuito?",
          "answer": "Para uso não comercial, todos os recursos são gratuitos, sem limite de tempo ou de uso. É proibido o uso em trabalhos comerciais, como atividades internas de empresas ou análise forense paga. Você também pode ver as condições de uso no app, em Ajuda → Sobre."
        },
        {
          "question": "Quais arquivos posso abrir?",
          "answer": "Arquivos CSV, XLS e XLSX. Arquivos XLS são suportados até 32 MiB, e formatação do Excel, gráficos, execução de macros e recálculo de fórmulas não são suportados."
        },
        {
          "question": "Os caracteres do meu CSV aparecem ilegíveis.",
          "answer": "Por padrão, a codificação é detectada automaticamente. Se os caracteres aparecerem ilegíveis, escolha a codificação correta em Configurações → Codificação CSV e abra o arquivo novamente."
        },
        {
          "question": "Posso editar ou exportar dados?",
          "answer": "É uma ferramenta de consulta e pesquisa. A edição de dados e a exportação de resultados ainda não são suportadas."
        },
        {
          "question": "Quanto tempo levam arquivos grandes?",
          "answer": "Ao abrir um arquivo pela primeira vez ou pesquisar em uma nova coluna, pode levar um tempo para criar o índice de pesquisa, e é preciso espaço livre em disco para o cache. O tempo de processamento depende do conteúdo do arquivo e do seu PC, e o desempenho com CSV de 10 GiB ou mais ainda não foi totalmente verificado."
        },
        {
          "question": "Do que preciso para usar?",
          "answer": "É para Windows de 64 bits. Execute o instalador e abra o CSV Search Engine pelo menu Iniciar."
        }
      ]
    },
    "download": {
      "title": "Baixe e\nabra seu primeiro arquivo.",
      "description": "Windows de 64 bits · Gratuito para uso não comercial"
    }
  },
  productCategories: { windowsProductivity: "Produtividade no Windows", webApps: "Apps web" },
  "folderHistory": {
    "metadataTitle": "Folder History | App para Windows que reabre pastas visitadas recentemente",
    "cardDescription": "Um app para Windows que registra as pastas que você visita no Explorador de Arquivos para reabri-las direto da bandeja.",
    "description": "Registre as pastas que você visita no Explorador de Arquivos e reabra-as direto da bandeja.",
    "downloadAction": "Download gratuito para Windows",
    "howToAction": "Como funciona",
    "screenshots": [
      {
        "alt": "Lista de visitas recentes do Folder History com nomes de pastas, caminhos e horário da última visita, da mais recente para a mais antiga",
        "caption": "Visitas recentes · Interface em coreano"
      },
      {
        "alt": "Editor de regras de exclusão do Folder History com node_modules e .next",
        "caption": "Edição de regras de exclusão"
      },
      {
        "alt": "Configurações do Folder History para tema, iniciar ao entrar no Windows e retenção do histórico",
        "caption": "Configurações · Tema, início automático, retenção"
      }
    ],
    "workflow": {
      "eyebrow": "Como funciona",
      "title": "Pare de procurar pastas.\nAbra direto das visitas recentes.",
      "description": "Quando não lembrar onde estava trabalhando há alguns dias, clique duas vezes no ícone da bandeja para ver as pastas visitadas recentemente, em ordem.",
      "steps": [
        {
          "title": "Adicione uma pasta monitorada",
          "description": "Escolha a pasta que deseja registrar. Ela e suas subpastas formam o escopo do registro."
        },
        {
          "title": "Use o Explorador como sempre",
          "description": "Quando você abre uma pasta no Explorador de Arquivos do Windows, o horário da última visita é registrado automaticamente."
        },
        {
          "title": "Reabra pela bandeja",
          "description": "Clique duas vezes no ícone da bandeja e depois em uma pasta da lista, ou pressione Enter, para reabri-la no Explorador."
        }
      ]
    },
    "features": {
      "eyebrow": "Principais recursos",
      "title": "Só as pastas de que você precisa, do seu jeito.",
      "items": [
        {
          "title": "Busca e ordenação",
          "description": "Pesquise por nome da pasta ou caminho (Ctrl+F) e ordene por pasta, caminho ou última visita."
        },
        {
          "title": "Fixar no topo",
          "description": "Fixe as pastas que você abre com frequência para mantê-las no topo da lista."
        },
        {
          "title": "Regras de exclusão",
          "description": "Digite, uma por linha, os nomes de pastas que não devem ser registradas, como node_modules ou .git. Você pode usar * e ?."
        },
        {
          "title": "Lixeira e restauração",
          "description": "Registros excluídos ficam na lixeira e podem ser restaurados com o horário original da visita."
        },
        {
          "title": "Retenção do histórico",
          "description": "Mantenha o histórico sem limite ou limpe-o automaticamente após 1, 3, 6 ou 12 meses."
        },
        {
          "title": "Copiar caminho",
          "description": "Copie o caminho completo de uma pasta com o botão de copiar da linha ou com Ctrl+C."
        }
      ]
    },
    "privacy": {
      "eyebrow": "Salvo no seu PC",
      "title": "Seu histórico fica só no seu PC.",
      "description": "O histórico de visitas e as configurações ficam nos dados locais do app no seu PC, sem servidor nem conta. Excluir registros não afeta suas pastas e arquivos reais."
    },
    "faq": {
      "title": "Perguntas frequentes",
      "items": [
        {
          "question": "Quais visitas a pastas são registradas?",
          "answer": "São registradas as aberturas de pastas dentro de uma pasta monitorada pelo Explorador de Arquivos do Windows e os retornos a essa pasta a partir de outra janela ou aba. A navegação em outros gerenciadores de arquivos ou em caixas de diálogo de abrir arquivo, assim como alterações em arquivos, não é registrada como visita."
        },
        {
          "question": "É gratuito?",
          "answer": "Sim, você pode usar gratuitamente."
        },
        {
          "question": "O registro para quando fecho a janela?",
          "answer": "Não. O X da janela apenas a oculta, e o registro continua. Para sair completamente, clique com o botão direito no ícone da bandeja e escolha Sair."
        },
        {
          "question": "Ele pode iniciar automaticamente com o Windows?",
          "answer": "Ative ‘Iniciar ao entrar no Windows’ nas configurações. A opção vem desativada por padrão."
        },
        {
          "question": "Do que preciso para usar?",
          "answer": "Funciona no Windows 11 x64. O instalador instala para a conta do usuário atual, então não exige permissão de administrador, e instala o WebView2 Runtime durante a instalação se ele estiver ausente."
        }
      ]
    },
    "download": {
      "title": "Baixe e\nadicione sua primeira pasta monitorada.",
      "description": "Windows 11 x64 · Instala sem permissão de administrador"
    }
  },
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
  header: { homeLabel: "Página inicial da GhostYak", navigationLabel: "Menu principal", language: "Escolher idioma", products: "Produtos", blog: "Blog", support: "Apoiar" },
  supportPage: {
    metadataTitle: "Apoie a GhostYak",
    title: "Apoie a GhostYak",
    description: "A maioria das ferramentas para Windows e dos aplicativos web da GhostYak é gratuita. Seu apoio ajuda a continuar criando e aprimorando esses produtos.",
    methodsAction: "Ver formas de apoiar",
    productsAction: "Ver produtos",
    methods: { eyebrow: "Formas de apoiar", title: "Apoie da forma que preferir", description: "As duas opções são concluídas em uma página de apoio externa, aberta em uma nova aba.", action: "Apoiar no {name}", items: { buyMeACoffee: "Serviço internacional de apoio que permite contribuir com cartão em poucos passos. Fácil de usar de qualquer lugar do mundo.", ctee: "Plataforma coreana de apoio a criadores que aceita meios de pagamento da Coreia." } },
    uses: { eyebrow: "Para onde vai o apoio", title: "Seu apoio mantém os produtos vivos", items: [{ title: "Novos recursos e produtos", description: "Garante tempo para criar recursos baseados no feedback dos usuários e novas ferramentas." }, { title: "Manutenção", description: "Mantém estáveis os produtos que você usa com compatibilidade com as atualizações do Windows e correção de bugs." }, { title: "Serviços web", description: "Cobre os custos de operação de aplicativos web como Clock e OSINTS, e deste site." }] },
    other: {
      eyebrow: "Outras formas de ajudar",
      title: "Você pode ajudar sem doar",
      share: { title: "Indique para outras pessoas", description: "Recomende um produto da GhostYak que foi útil para você a quem precisa dele." },
      feedback: { title: "Envie sua opinião", description: "Relate problemas ou compartilhe ideias de melhoria no GitHub.", action: "Abrir o GitHub" },
      follow: { title: "Compartilhe as novidades", description: "Siga a GhostYak no Instagram e no Threads e compartilhe as novidades." },
    },
    thanks: { title: "Obrigado", description: "Obrigado por usar e apoiar a GhostYak. Vamos retribuir com ferramentas melhores." },
  },
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
    products: { eyebrow: "GHOSTYAK SOFTWARE", heading: "Criamos pequenas ferramentas para o dia a dia", intro: "Da organização da área de trabalho e gestão do tempo a investigações OSINT e forenses. Em vez de acumular recursos, focamos em resolver bem um incômodo que aparece com frequência.", freeBadge: "Grátis", viewAction: "Conhecer o produto", webBadge: "Web", clockDescription: "Uma ferramenta de tempo com hora atual, relógio mundial, alarmes, timer, Pomodoro e cronômetro, direto no navegador, sem instalar nada.", osintsDescription: "Pesquise e analise endereços IP, domínios e mais em um só lugar, sem alternar entre sites de OSINT.", webAction: "Abrir site", clockPreviewLabel: "Prévia do Clock" },
    blog: { eyebrow: "BLOG", heading: "Registramos como criamos", intro: "Novidades de produtos e recursos, além dos problemas que encontramos no desenvolvimento e de como os resolvemos.", viewAction: "Ver o blog" },
  },
  boxes: {
    description: "Mantenha seus arquivos nas pastas originais e reúna-os em caixas por tarefa na área de trabalho. Os recursos básicos são gratuitos, inclusive na empresa.",
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
