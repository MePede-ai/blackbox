---
titulo: "Antigravity ganha /swarm, um time de agentes de código que se coordena num mural"
linhaFina: "O comando do Google divide uma tarefa entre vários agentes, cada um com seu escopo, e põe um verificador para revisar e testar o que os outros fizeram."
data: 2026-11-10
leitura: 2
assunto: Agentes
origem: Google
imagem:
  src: /images/banco/programador-monitores.jpg
  alt: "Pessoa de costas trabalhando diante de vários monitores com código, num quarto escuro iluminado por luz roxa."
em30segundos:
  - "O /swarm chegou em prévia no Antigravity, ambiente de programação com agentes do Google, junto com o Gemini 4 Carbon, em 10 de novembro."
  - "A conversa principal vira coordenadora, divide o trabalho, cria agentes trabalhadores e um verificador para cada dois a quatro deles."
  - "Exige plano Google AI Pro ou Ultra e consome cota bem mais rápido que uma conversa normal."
porQueImporta: "Times de agentes com papéis separados viraram padrão nas ferramentas de código. O /swarm põe esse modelo dentro do Antigravity, com revisão embutida."
fontes:
  - nome: Google Antigravity
    detalhe: "documentação do /swarm"
    url: https://antigravity.google/docs/swarm
  - nome: Apidog
    detalhe: "nov 2026"
    url: https://apidog.com/blog/google-antigravity-swarm/
tags:
  - Agentes de código
  - Google
  - Antigravity
---

## Como funciona

Ao chamar /swarm, a conversa atual passa a coordenar o trabalho e não escreve código. Ela cria trabalhadores com nomes como @parser ou @docs, cada um com contexto limpo e uma descrição do que é dele, do que não pode tocar e do que conta como pronto. Um @verifier revisa as mudanças, roda testes e devolve problemas a quem escreveu. Toda a conversa entre eles passa por um mural compartilhado.

## Quando usar

A documentação indica o /swarm para trabalhos que se dividem bem entre arquivos, pacotes ou perguntas separadas, ou quando vale ter um segundo agente revisando e testando. Trabalhadores ociosos ficam parados no mural sem gastar tokens, e um @monitor só entra em ação se o time travar.

## Modelos e custo

Por padrão, todos usam o mesmo modelo da conversa, mas dá para trocar o modelo de um trabalhador. Na apresentação, o Google pôs o Gemini 4 Carbon como líder. A própria documentação avisa que cada trabalhador é um agente separado, então a cota acaba bem mais rápido.
