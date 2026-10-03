---
title: "Otimização de desempenho do Boxes: a v0.4.1 chega em breve"
description: "Otimizamos o desempenho do Boxes, com foco na organização da área de trabalho, para que ele fique mais rápido e leve. A v0.4.1 otimizada chega em breve."
publishedAt: "2026-10-03"
translationKey: "boxes-performance-update"
sourceRevision: 1
image: "/images/boxes/ghostyak-boxes-1920x1080.png"
imageAlt: "Área de trabalho do Windows com caixas de aplicativos, fotos, música e projetos, uma caixa de Downloads em modo de lista e duas caixas recolhidas"
---

**O Boxes v0.4.1 chega em breve.** Esta versão se concentra no desempenho para que o Boxes fique mais rápido e leve.

## Por que otimizamos

Um organizador de área de trabalho é o primeiro espaço de trabalho que você vê sempre que liga o PC. As versões anteriores desenhavam as caixas com uma visualização web (WebView2), o que fazia com que, repetidamente, as caixas aparecessem com atraso logo após o login e fossem exibidas de forma incorreta em monitores com escalas diferentes.

## O que muda

- **As caixas são desenhadas diretamente na área de trabalho.** Reconstruímos o Boxes para desenhar caixas e ícones com os recursos gráficos do Windows (DirectComposition e Direct2D) em vez de uma visualização web.
- **Menus e configurações agora usam a interface nativa do Windows.** Os menus das caixas, a janela de configurações e o menu da bandeja abrem como menus e janelas padrão do Windows, com funcionamento mais leve.
- **Foco na organização da área de trabalho.** Por desempenho, todos os recursos de widgets, como o visualizador de fotos e os relógios, foram removidos a partir da v0.4. Se você usava widgets, agradecemos a compreensão.

## Lançamento

A v0.4.1 estará disponível no GitHub Releases e na página do produto Boxes assim que estiver pronta. Organizar arquivos, pastas e atalhos de aplicativos em caixas continua gratuito para uso pessoal, empresarial e profissional.

Se você encontrar um problema ou algo a melhorar, informe suas versões do Windows e do Boxes e o que estava acontecendo quando o problema ocorreu.

[Conhecer o Boxes](/pt/product/boxes)

[Ver a versão mais recente](https://github.com/ghostyak/boxes/releases/latest)

[Relatar um problema ou enviar feedback](https://github.com/ghostyak/boxes/issues)
