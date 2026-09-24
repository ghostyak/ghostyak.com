---
title: "Folder History chegou: app gratuito para Windows que reabre pastas visitadas recentemente no Explorador"
description: "Não lembra em qual pasta estava trabalhando há alguns dias? O Folder History registra automaticamente as pastas que você visita no Explorador de Arquivos do Windows para você reabri-las direto da bandeja. É gratuito."
publishedAt: "2026-09-24"
translationKey: "folder-history-launch"
sourceRevision: 1
image: "/images/folder-history/folder-history-main.png"
imageAlt: "Lista de visitas recentes do Folder History com nomes de pastas, caminhos e horário da última visita, da mais recente para a mais antiga"
---

**O Folder History já está disponível.** É um app gratuito para Windows que registra automaticamente as pastas que você visita no Explorador de Arquivos do Windows e permite trazê-las de volta pela bandeja do sistema, em ordem de visita mais recente, para reabri-las na hora.

![Lista de visitas recentes do Folder History](/images/folder-history/folder-history-main.png)

## Onde estava aquela pasta que eu acabei de abrir?

Quando você trabalha alternando entre subpastas de um projeto, é comum não lembrar, alguns dias depois, onde exatamente estava. Aí é preciso refazer o caminho clique por clique ou tentar lembrar o nome da pasta.

Criamos o Folder History para esse momento. Ele registra as pastas que você abre no Explorador dentro das pastas escolhidas, então você encontra e abre tudo pelas visitas recentes, sem depender da memória.

## Como reabrir pastas visitadas recentemente

1. **Adicione uma pasta monitorada.** Escolha a pasta que deseja registrar, por exemplo `D:\Work`. Ela e suas subpastas formam o escopo do registro.
2. **Use o Explorador como sempre.** Quando você abre uma pasta no Explorador de Arquivos do Windows, o horário da última visita é registrado automaticamente.
3. **Reabra pela bandeja.** Clique duas vezes no ícone da bandeja para ver as pastas visitadas recentemente, em ordem. Clique duas vezes em uma pasta da lista ou pressione Enter para reabri-la no Explorador.

O X da janela apenas a oculta, e o registro continua. Para sair completamente, clique com o botão direito no ícone da bandeja e escolha Sair.

## Principais recursos

- **Busca e ordenação**: pesquise por nome da pasta ou caminho (Ctrl+F) e ordene por pasta, caminho ou última visita.
- **Fixar no topo**: fixe as pastas que você abre com frequência para mantê-las no topo da lista.
- **Regras de exclusão**: digite, uma por linha, os nomes de pastas que não devem ser registradas, como `node_modules` ou `.git`. Você pode usar `*` e `?`.
- **Lixeira e restauração**: registros excluídos ficam na lixeira e podem ser restaurados com o horário original da visita.
- **Retenção do histórico**: mantenha o histórico sem limite ou limpe-o automaticamente após 1, 3, 6 ou 12 meses.
- **Copiar caminho**: copie o caminho completo de uma pasta com o botão de copiar da linha ou com Ctrl+C.
- **Tema e início automático**: escolha o tema do sistema, claro ou escuro, e ative a opção de iniciar ao entrar no Windows nas configurações. O início automático vem desativado por padrão.

![Editor de regras de exclusão do Folder History](/images/folder-history/folder-history-ignore-rule.png)

## Onde o histórico de visitas fica salvo?

O histórico de visitas e as configurações ficam nos dados locais do app no seu PC. Não é preciso servidor nem conta. Excluir registros não afeta suas pastas e arquivos reais.

## Quais visitas a pastas são registradas?

São registradas as aberturas de pastas dentro de uma pasta monitorada pelo Explorador de Arquivos do Windows e os retornos a essa pasta a partir de outra janela ou aba. A navegação em outros gerenciadores de arquivos ou em caixas de diálogo de abrir arquivo, assim como alterações em arquivos, não é registrada como visita.

## Requisitos e download gratuito

O Folder History é gratuito e funciona no Windows 11 x64. O instalador instala para a conta do usuário atual, então não exige permissão de administrador, e instala o WebView2 Runtime durante a instalação se ele estiver ausente.

Na página do produto você vê telas reais e perguntas frequentes e pode baixar o instalador.

[Conheça o Folder History](/pt/product/folder-history)

[Ver o repositório no GitHub](https://github.com/ghostyak/folder-history)
