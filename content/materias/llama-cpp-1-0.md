---
titulo: "llama.cpp chega à versão 1.0 depois de três anos e meio"
linhaFina: "O motor que roda modelos abertos em computador comum ganhou regras claras de versão: mudança que quebra programa, agora, só com troca do número principal."
data: 2026-11-13
leitura: 2
assunto: Ferramentas
origem: Hugging Face
imagem:
  src: /images/edicoes/02/llama-cpp-1-0.jpg
  alt: "Mini PC aberto com placa de vídeo iluminada em verde e rosa sobre uma mesa de madeira, ao lado de um notebook com a tela colorida e desfocada."
em30segundos:
  - "O llama.cpp e a biblioteca ggml, que fazem a conta por baixo, chegaram juntos à versão 1.0.0 em 13 de novembro."
  - "A partir de agora, qualquer mudança incompatível na interface pública em C só sai com aumento do número principal da versão."
  - "A versão remove 35 funções antigas e traz cache em FP8 e suporte a modelos novos, como o Kimi K3.1 Pro."
porQueImporta: "Ollama, LM Studio e muitos outros apps dependem do llama.cpp. Com regras de versão estáveis, quem constrói em cima dele passa a saber quando uma atualização vai quebrar alguma coisa."
fontes:
  - nome: Superpower Daily
    detalhe: "13 nov 2026"
    url: https://superpowerdaily.com/posts/hugging-face-releases-llama-cpp-1-0-with-clearer-rules-for-breaking-changes
  - nome: tbreak
    detalhe: "nov 2026"
    url: https://tbreak.com/llama-cpp-1-0-stable-release/
  - nome: Hugging Face
    detalhe: "post da ggml-org"
    url: https://huggingface.co/blog/ggml-org/llama-cpp-v1
tags:
  - Modelos abertos
  - IA local
  - llama.cpp
---

## O que muda com o 1.0

O llama.cpp, projeto que roda modelos de linguagem em notebook, desktop e celular, publicou a versão 1.0.0 em 13 de novembro, junto com a ggml 1.0.0, a biblioteca de cálculo que fica por baixo. O time, que hoje faz parte da Hugging Face, adotou versionamento semântico: mudança que quebra a interface pública em C sobe o número principal, novidade compatível sobe o segundo número e correção sobe o terceiro.

Os mantenedores deixaram claro que o 1.0 é um aviso para quem usa o projeto, não um congelamento. O desenvolvimento continua no mesmo ritmo.

## Novidades da versão

A limpeza tirou 35 funções que já estavam marcadas como obsoletas. Entraram cache de chave e valor em FP8, que economiza memória, e um cache em memória do sistema para modelos de mistura de especialistas. Também chegou suporte a modelos novos, como o Kimi K3.1 Pro, e correções de segurança no servidor embutido.

O projeto hoje cobre mais de 150 variações de arquitetura de modelo e sai em pacotes para Linux, macOS, Windows, Android e iOS, além de Docker, Homebrew e Winget.

## Para quem usa

Quem só roda modelos pelo Ollama ou pelo LM Studio não vê diferença imediata. O ganho aparece com o tempo, em atualizações que quebram menos. Para quem desenvolve em cima do llama.cpp, o recado é que o número da versão agora diz alguma coisa.
