---
titulo: "Agentes de código entregam tudo certo em só 1 de cada 4 tarefas reais"
linhaFina: "Um teste da Alibaba com pedidos de mudança de verdade mostra que os agentes fazem quase tudo, mas quase sempre esquecem um detalhe."
data: 2026-11-08
leitura: 3
assunto: Agentes
origem: arXiv · The Decoder
imagem:
  src: /images/banco/mesa-cursor.jpg
  alt: "Mesa escura com um monitor cheio de janelas e um cursor em destaque, ao lado de uma cadeira de escritório."
em30segundos:
  - "Pesquisadores da Alibaba testaram 10 modelos em pedidos reais de mudança em aplicativos web."
  - "O melhor, o GPT-6 Astra, atendeu em média 70% dos requisitos, mas entregou tudo certo em só 26,4% das tarefas."
  - "Mais capacidade de computação ajudou pouco, e o ambiente onde o agente roda mudou o ranking."
porQueImporta: "O agente adianta a maior parte do trabalho, mas alguém ainda precisa conferir o último detalhe. Quem planeja trocar revisão humana por agente deve contar com isso."
fontes:
  - nome: The Decoder
    detalhe: "08 nov 2026"
    url: https://the-decoder.com/ai-coding-agents-still-need-human-cleanup-on-nearly-three-out-of-four-tasks-in-a-real-world-test/
  - nome: arXiv
    detalhe: "artigo do Co-Design Bench"
    url: https://arxiv.org/abs/2610.35138
tags:
  - Agentes
  - Código
  - Benchmarks
---

## O teste

Pesquisadores da Alibaba e de universidades asiáticas montaram o Co-Design Bench, um conjunto de tarefas tiradas de pedidos reais de mudança que já tinham dado trabalho a agentes. Cada tarefa pede para mexer num aplicativo web que já existe, às vezes a partir de imagem, áudio, vídeo ou documento.

Dez modelos foram testados. Um juiz automático usa o aplicativo no navegador, e um segundo juiz confere cada aprovação para pegar resultado falso, como tela de mentira ou valor escrito direto no código.

## O resultado

O melhor colocado, o GPT-6 Astra, cumpriu em média cerca de 70% dos requisitos, mas deixou a tarefa totalmente correta em só 26,4% dos casos. Nas tarefas com imagem, áudio ou vídeo, acertou tudo em 41%. Nas de repositório, em pouco menos de 18%. Claude Opus 5 e Qwen3.8-Max vieram logo atrás, e o Grok 4.6 ficou em último.

A diferença para os testes antigos é grande: no WebCompass-edit, os mesmos tipos de modelo passam de 99%.

## Por que falham

Quase sempre o agente faz a maior parte e esquece um detalhe. O desempenho cai quando a tarefa mistura vários tipos de mudança, como layout, design, interação e conteúdo. Dar mais capacidade de computação ajudou pouco. E o ambiente onde o agente roda mudou os resultados a ponto de inverter posições entre modelos.

O próprio estudo aponta limites: cada tarefa tem um pedido fixo, sem perguntas no meio do caminho, e os juízes automáticos também podem errar.
