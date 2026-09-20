---
title: "CSV Search Engine chegou: a ferramenta de pesquisa de que precisávamos"
description: "Conheça o CSV Search Engine, um app DFIR em Rust criado a partir de dificuldades com dependências de instalação e erros de parsing de CSV no Timeline Explorer."
publishedAt: "2026-09-20"
translationKey: "csv-search-engine-launch"
sourceRevision: 1
---

**O CSV Search Engine já está disponível.** É um aplicativo para Windows criado para pesquisar grandes conjuntos de dados CSV e Excel em trabalhos de perícia digital e resposta a incidentes (DFIR).

## Por que o criamos

O ponto de partida foram dificuldades que encontramos ao usar o Timeline Explorer. Era necessário preparar as dependências de instalação e, às vezes, surgiam erros de parsing de CSV durante o trabalho. Queríamos reduzir as interrupções em que examinar dados dava lugar à configuração de ferramentas ou à resolução de erros.

Essa experiência nos levou a criar a ferramenta de pesquisa de que precisávamos. Foi assim que o CSV Search Engine começou.

## Uma ferramenta de pesquisa feita em Rust

O aplicativo foi escrito em **Rust**. Ele permite abrir arquivos CSV e Excel, pesquisar por coluna, ordenar linhas e agrupar valores iguais. O foco foi encontrar as informações necessárias nos dados em análise.

Na página do produto, você pode ver capturas reais e baixar o instalador para Windows.

[Conheça o CSV Search Engine](/pt/product/csv-search-engine)

[Veja o repositório no GitHub](https://github.com/ghostyak/csv-search-engine)

