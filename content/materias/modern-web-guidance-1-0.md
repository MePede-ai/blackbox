---
titulo: "Modern Web Guidance 1.0: o time do Chrome ensina agentes de código a usar o navegador moderno"
linhaFina: "O pacote aberto de skills orienta o agente a preferir recursos nativos de HTML, CSS e JavaScript em vez de reinventar com código próprio."
data: 2026-11-10
leitura: 2
assunto: Ferramentas
origem: Chrome for Developers
imagem:
  src: /images/banco/mesa-cursor.jpg
  alt: "Mesa escura com um monitor cheio de janelas e um cursor em destaque, ao lado de uma cadeira de escritório."
em30segundos:
  - "A versão 1.0 saiu em 10 de novembro, depois de uma prévia no Google I/O, e agora tem apoio de Edge, Firefox e MDN."
  - "O agente busca localmente, entre mais de 200 guias, só o que precisa para a tarefa e diz quais guias usou."
  - "Nos testes do próprio projeto, a taxa de boas práticas subiu de 52% para 91%."
porQueImporta: "Agentes de código costumam repetir padrões antigos da web. Uma referência aberta e mantida pelos navegadores ajuda a gerar sites mais leves e acessíveis."
fontes:
  - nome: Chrome for Developers
    detalhe: "documentação oficial"
    url: https://developer.chrome.com/docs/modern-web-guidance
  - nome: mer.vin
    detalhe: "10 nov 2026"
    url: https://mer.vin/news/modern-web-guidance-1-0-the-agent-skill-that-stops-legacy-web-code/
tags:
  - Agentes de código
  - Web
  - Código aberto
---

## O que é

O Modern Web Guidance é um conjunto de skills para agentes de código que traz guias sobre recursos nativos do navegador, dados de compatibilidade e boas práticas. Quando aparece uma tarefa de front-end, o agente consulta uma ferramenta local, pega só os guias relevantes e confere o próprio código contra eles. Há também um comando que procura padrões antigos num projeto existente.

O código está em Apache 2.0 e os guias em CC-BY 4.0. A instalação cobre Claude Code, Codex, Copilot CLI, Antigravity CLI e Gemini CLI, entre outros.

## Onde instalar

O caminho recomendado é um único comando com npx, e há instaladores específicos para cada agente, incluindo um plugin para o Claude Code. A documentação traz pedidos de exemplo, como trocar tooltips antigos pela Popover API ou montar uma política de segurança de conteúdo sem quebrar o site.

## Os números

Nos testes feitos pelo próprio projeto, com 1.104 execuções, a taxa de boas práticas foi de 52% sem os guias para 91% com eles, e a de acessibilidade, de 56% para 92%. O custo é mais tempo e mais tokens por tarefa. Ainda não há avaliação independente. A telemetria vem ligada por padrão.
