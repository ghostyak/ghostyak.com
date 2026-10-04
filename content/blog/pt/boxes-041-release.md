---
title: "O Boxes v0.4.1 já está disponível"
description: "Mais rápido e leve, o Boxes v0.4.1 já está disponível. Ele é instalado sem WebView2 nem permissão de administrador e traz caixas ao vivo, que mostram uma pasta como ela é, e uma exibição própria para cada caixa."
publishedAt: "2026-10-04"
translationKey: "boxes-041-release"
sourceRevision: 1
image: "/images/boxes/ghostyak-boxes-1920x1080.png"
imageAlt: "Área de trabalho do Windows com caixas de aplicativos, fotos, música e projetos, uma caixa de Downloads em modo de lista e duas caixas recolhidas"
---

**O Boxes v0.4.1 já está disponível.** Esta é a versão com otimização de desempenho que anunciamos no [nosso post anterior](/pt/blog/boxes-performance-update). Você pode baixá-la na página do produto Boxes e no GitHub Releases.

## Uma instalação mais leve

- **Não precisa de WebView2.** Refizemos as caixas, os menus, a janela de configurações e a bandeja com recursos nativos do Windows.
- **Não precisa de permissão de administrador.** Por padrão, o Boxes é instalado apenas para o usuário atual.
- O instalador é para Windows 10/11 de 64 bits (x64).

## Novidades

### Caixas ao vivo

Uma caixa ao vivo mostra o conteúdo de uma pasta como ela é. Clique com o botão direito em uma pasta dentro de uma caixa ou no Explorador de Arquivos do Windows e escolha **Abrir esta pasta como caixa ao vivo**. No Explorador de Arquivos do Windows 11, o comando fica em **Mostrar mais opções**.

Quando arquivos são adicionados ou excluídos na pasta, a caixa é atualizada na hora. As caixas ao vivo servem apenas para visualização, então o Boxes nunca move nem exclui os arquivos da pasta.

### Uma exibição para cada caixa

Com os botões da barra de status, na parte de baixo da caixa, você escolhe a exibição **Detalhes, Ícones ou Ícones grandes** para cada caixa. A exibição Detalhes mostra a data de modificação, o tipo e o tamanho, e você pode ordenar clicando no cabeçalho de uma coluna. À esquerda da barra de status aparece o número de itens.

### Avisos de atualização

Quando sai uma nova versão, o Boxes avisa você com uma notificação do Windows e no menu da bandeja. Ele não baixa nem instala atualizações automaticamente.

## Antes de instalar

- O instalador ainda não tem assinatura de código, então na primeira execução pode aparecer o aviso **O Windows protegeu o computador**. Clique em **Mais informações** e depois em **Executar assim mesmo**.
- As caixas criadas na versão anterior são importadas automaticamente na primeira vez que você abre o aplicativo.
- Os recursos de widgets, como o visualizador de fotos e o relógio, foram removidos a partir da v0.4.

Organizar atalhos de arquivos, pastas e aplicativos em caixas continua gratuito para uso pessoal, empresarial e profissional. Se tiver algum problema, informe a versão do Windows e do Boxes e o que aconteceu.

[Baixar o Boxes](/pt/product/boxes#download)

[Ver a versão v0.4.1](https://github.com/ghostyak/boxes/releases/tag/v0.4.1)

[Relatar um problema ou enviar feedback](https://github.com/ghostyak/boxes/issues)
