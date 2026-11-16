---
titulo: "MiniMax H3-Image: pesos abertos para gerar e editar imagens em 4K"
linhaFina: "O modelo de 33,1 bilhões de parâmetros faz imagens de cerca de 16 megapixels sem ampliador, mas a licença proíbe uso nos EUA, na União Europeia, no Reino Unido e na Coreia do Sul."
data: 2026-11-11
leitura: 2
assunto: Modelos
origem: Hugging Face
imagem:
  src: /images/banco/tres-monitores.jpg
  alt: "Três monitores lado a lado sobre uma mesa de madeira mostrando imagens abstratas em tons de laranja e vermelho."
em30segundos:
  - "A MiniMax publicou em 11 de novembro os pesos do H3-Image, que gera e edita imagens no mesmo modelo."
  - "Saem imagens de cerca de 16 megapixels direto, em 6 passos, e a edição aceita até 16 imagens de referência."
  - "A licença é própria e restritiva: exige autorização para empresas com receita anual acima de US$ 1 milhão e exclui EUA, UE, Reino Unido e Coreia do Sul."
porQueImporta: "É um dos modelos de imagem abertos mais capazes até agora, mas mostra que \"pesos abertos\" e \"livre para usar\" nem sempre andam juntos. Ler a licença é parte do trabalho."
fontes:
  - nome: Neurohive
    detalhe: "nov 2026"
    url: https://neurohive.io/en/news/minimax-h3-image-4k-image-generation/
  - nome: AI Weekly
    detalhe: "11 nov 2026"
    url: https://aiweekly.co/alerts/minimax-open-sources-h3-image-331b-parameter-diffusion-model
  - nome: Hugging Face
    detalhe: "página do modelo MiniMaxAI/MiniMax-H3-Image"
    url: https://huggingface.co/MiniMaxAI/MiniMax-H3-Image
tags:
  - Modelos abertos
  - Imagem
  - MiniMax
---

## O que é

O H3-Image é um transformer de difusão com 33,1 bilhões de parâmetros, derivado do modelo de vídeo H3 da própria MiniMax. Geração e edição rodam no mesmo modelo, que entrega imagens de cerca de 16 megapixels em qualquer proporção, sem etapa de ampliação. Pela API da empresa, uma imagem 4K sai em 10 a 16 segundos, segundo números divulgados pela MiniMax.

## Edição com referências

Na edição, o modelo aceita até 16 imagens de referência, citadas na ordem em que foram enviadas. Pelos números da MiniMax, editar em 4K com uma referência leva de 12,5 a 18,2 segundos na API.

## O peso e a licença

Não é coisa para placa de vídeo comum: só o transformer ocupa 66 GB, e o codificador de texto, outros 66,7 GB. A MiniMax não publicou relatório técnico nem resultados de qualidade.

A licença, segundo a Neurohive, exige o nome do modelo em produtos comerciais, proíbe usar as imagens para treinar outros modelos e não vale em quatro regiões, incluindo EUA e União Europeia.
