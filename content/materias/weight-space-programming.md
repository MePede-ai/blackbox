---
titulo: "Um modelo que lê os pesos de outro e conserta o defeito"
linhaFina: "Pesquisadores dizem que o GPT-6 Astra descobre o que uma rede faz só olhando os números dela. Simon Willison testou em casa e achou o resultado legal, mas exagerado em parte da repercussão."
data: 2026-11-03
leitura: 3
assunto: Pesquisa
origem: Simon Willison
imagem:
  src: /images/banco/rede-de-luz.jpg
  alt: "Pessoa de costas observando uma grande rede de pontos e linhas luminosas presa numa parede escura."
em30segundos:
  - "Um estudo diz que o GPT-6 Astra entende o que uma rede neural foi treinada para fazer só lendo os pesos dela."
  - "No teste mais citado, ele achou o defeito que travava o raciocínio de um modelo pequeno e corrigiu mexendo em 0,016% dos pesos."
  - "Simon Willison repetiu parte do teste num modelo local. Críticos dizem que o estudo mistura resultados com e sem ferramentas."
porQueImporta: "Se modelos conseguirem ler e editar outros modelos direto nos pesos, o conserto de defeitos pode ficar mais rápido do que retreinar. Por enquanto, é resultado inicial e contestado."
fontes:
  - nome: Simon Willison
    detalhe: "03 nov 2026"
    url: https://simonwillison.net/2026/Nov/3/qwen-can-interpret-model-weights/
  - nome: Takehi, Teoh, Zhang e Khattab
    detalhe: "Sparks of Weight-Space Programming"
    url: https://rikiyat.github.io/blog/weight-space-programming/
tags:
  - Pesquisa
  - Interpretabilidade
---

## O que diz o estudo

Rikiya Takehi, Jayden Teoh, Alex Zhang e Omar Khattab publicaram um trabalho em que chamam de Weight-Space Programming o uso de modelos de linguagem para ler e editar diretamente os pesos de redes neurais. A afirmação central é que o GPT-6 Astra consegue dizer o que uma rede foi treinada para fazer só olhando os números.

O exemplo mais comentado é o do Qwen3.5-0.8B, um modelo pequeno que entrava em loop ao raciocinar. Segundo os autores, o Astra achou a causa e corrigiu mexendo em 0,016% dos pesos. O desempenho no MATH-500 subiu de 7,9% para 48,1%.

## O teste em casa

Simon Willison repetiu parte do experimento sem ferramentas, num modelo local, o Qwen 3.8 27B. O modelo acertou três de quatro jogos só pelos pesos (Pac-Man, Pong e Breakout), cada um depois de 46 minutos a mais de uma hora de raciocínio. Errou o quarto, o Freeway.

> “Não estou pronto para declarar que a era do código-fonte acabou.” Simon Willison

## As críticas

Matthew Honnibal, autor do spaCy, chamou o trabalho de enganoso por misturar resultados com e sem ferramentas. Sean Goedecke argumentou que o conserto do Qwen segue os mesmos passos que um pesquisador humano faria. Willison achou o trabalho interessante, mas disse que parte da repercussão não se justifica.
