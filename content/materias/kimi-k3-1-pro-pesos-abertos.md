---
titulo: "Kimi K3.1 Pro: pesos abertos de 2,8 trilhões de parâmetros"
linhaFina: "A Moonshot AI publicou o modelo no Hugging Face. Nos números da própria empresa, ele encosta nos modelos fechados em código e agentes, mas ainda perde em raciocínio sem ferramentas."
resumoCard: "Pesos no Hugging Face, contexto de 1 milhão de tokens e números que encostam nos fechados em código."
data: 2026-11-05
leitura: 3
assunto: Modelos
origem: Hugging Face
imagem:
  src: /images/edicoes/01/kimi-k3-1-pro.jpg
  alt: "Armário de servidores aberto no meio de um data center escuro, com placas de vídeo acesas em azul e roxo."
em30segundos:
  - "A Moonshot AI liberou os pesos do Kimi K3.1 Pro: 2,8 trilhões de parâmetros no total, 104 bilhões ativos por token e contexto de 1 milhão de tokens."
  - "Nos testes divulgados pela empresa, ele fica à frente do Claude Opus 5.5 em parte das tarefas de código e atrás em raciocínio sem ferramentas."
  - "A licença é própria da Moonshot, não Apache nem MIT. Vale ler antes de colocar em produto."
porQueImporta: "Um modelo aberto desse porte dá a empresas e provedores uma alternativa real às APIs fechadas para código e agentes, rodando em nuvem própria ou em provedores terceiros."
fontes:
  - nome: Hugging Face
    detalhe: "página do modelo moonshotai/Kimi-K3.1-Pro"
    url: https://huggingface.co/moonshotai/Kimi-K3.1-Pro
  - nome: TechNode
    detalhe: "05 nov 2026"
    url: https://technode.com/2026/11/05/moonshot-ai-releases-kimi-k3-1-pro-model-weights/
tags:
  - Modelos abertos
  - Kimi
  - Moonshot AI
---

## O que saiu

A Moonshot AI, a empresa chinesa por trás da família Kimi, publicou no Hugging Face os pesos do Kimi K3.1 Pro. A TechNode registrou a liberação em 5 de novembro. É um modelo do tipo mistura de especialistas (MoE): tem 2,8 trilhões de parâmetros no total, mas só 104 bilhões trabalham em cada token, o que barateia a execução.

A janela de contexto chega a 1.048.576 tokens, e o modelo também lê imagens, com um codificador visual próprio de 401 milhões de parâmetros. Ele foi treinado já pensando em rodar comprimido, com pesos em 4 bits (MXFP4). Para quem não quer hospedar, a API da Moonshot aceita chamadas no formato da OpenAI e no da Anthropic.

## O que os números dizem

Todos os resultados abaixo foram divulgados pela própria Moonshot. Testes independentes ainda não saíram.

Em código e agentes, a disputa ficou apertada. No Terminal-Bench 4.0, o Kimi marca 65,7 contra 66,4 do Claude Opus 5.5. No SWE Marathon v1.1, que mede tarefas longas de programação, ele vai a 51,7 contra 46,3. No DeepSWE v1.1, 75,5 contra 74,2.

No raciocínio puro, a vantagem ainda é dos fechados. No HLE completo sem ferramentas, o Kimi faz 51,1, contra 59,8 do Opus 5.5. No GPQA-Diamond, faz 94,2, contra 96,1 do GPT-6 Astra.

## Dá para rodar em casa?

Não no computador comum. Mesmo comprimido em 4 bits, o modelo tem 2,8 trilhões de parâmetros. A conta dá cerca de 1,4 TB só de pesos, tamanho de servidor. A página do modelo indica vLLM e SGLang para hospedar, e a comunidade já publica versões ainda menores para llama.cpp, Ollama e LM Studio.

Para testar sem servidor, o caminho é a API da Moonshot ou provedores como a Together AI, listada na própria página do modelo.
