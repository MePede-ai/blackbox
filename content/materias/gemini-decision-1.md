---
titulo: "Gemini Decision 1: o Google lança um modelo que só escolhe, não escreve"
linhaFina: "A nova Decisions API responde perguntas de sim ou não, múltipla escolha e notas em uma única passada, em até 250 milissegundos, e cobra só pela entrada."
data: 2026-11-11
leitura: 2
assunto: Modelos
origem: Google
imagem:
  src: /images/edicoes/02/gemini-decision-1.jpg
  alt: "Feixe de fibras ópticas azuis se dividindo em vários ramos sobre uma placa de circuito escura."
em30segundos:
  - "O Gemini Decision 1 não gera texto: ele pontua opções fechadas e devolve probabilidades com uma nota de confiança de 0 a 1."
  - "Uma chamada aceita uma entrada (texto, imagem, áudio, vídeo ou PDF) e até mil perguntas, com latência de 150 a 250 milissegundos."
  - "O preço é US$ 0,10 por milhão de tokens de entrada, sem cobrança de saída."
porQueImporta: "Boa parte do trabalho de um agente é decidir: qual ferramenta usar, para qual modelo mandar, se uma resposta passa ou não. Um modelo barato e rápido só para isso pode cortar custo e espera nesses sistemas."
fontes:
  - nome: Google
    detalhe: "blog oficial, 11 nov 2026"
    url: https://blog.google/innovation-and-ai/technology/developers-tools/gemini-decisions-api/
tags:
  - Google
  - Gemini
  - Agentes
---

## O que é

O Google DeepMind publicou em 11 de novembro a Gemini Decisions API, movida por um modelo novo, o Gemini Decision 1. A ideia é diferente da de um chatbot. Em vez de escrever a resposta palavra por palavra, o modelo olha as alternativas de uma vez só e diz qual é a mais provável, com uma nota de confiança.

São três tipos de pergunta: sim ou não, múltipla escolha (de 2 a 255 opções) e nota numa escala ordenada. Cada chamada recebe uma entrada, que pode misturar texto, imagem, áudio, vídeo e PDF até 256 mil tokens, e até mil perguntas sobre ela.

## Velocidade e preço

Pelos números divulgados pela empresa, a resposta completa leva de 150 a 250 milissegundos e quase não muda entre 1 e 100 perguntas na mesma chamada. A cobrança é de US$ 0,10 por milhão de tokens de entrada, e a saída sai de graça. Há uma faixa sem custo no Google AI Studio para testes.

O Google diz que o modelo lidera um conjunto de testes de roteamento de agentes, ranqueamento e entendimento multimodal, com o menor erro de calibração. Os detalhes estão só em gráficos e não foram conferidos de forma independente.

## Onde entra

Os exemplos do próprio Google mostram o uso: escolher para qual modelo mandar cada pergunta, checar se um conteúdo segue uma regra, filtrar ações perigosas de ferramentas e selecionar uma reação entre centenas de opções. A nota de confiança serve para mandar os casos duvidosos para uma pessoa ou para um modelo maior. A API já está no Gemini API e no AI Studio, com integrações chegando a OpenRouter, LangChain, Vercel e LiteLLM.
