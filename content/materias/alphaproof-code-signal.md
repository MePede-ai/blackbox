---
titulo: "AlphaProof Code: DeepMind usa agentes para provar a segurança de partes do Signal"
linhaFina: "Em cerca de quatro semanas, o sistema gerou mais de seis milhões de linhas de prova em Lean sobre o código compilado de dois componentes da biblioteca libsignal."
data: 2026-11-10
leitura: 2
assunto: Pesquisa
origem: Google DeepMind
imagem:
  src: /images/banco/fibra-optica.jpg
  alt: "Feixe de fios de fibra óptica em verde, azul e rosa fazendo uma curva sobre fundo preto."
em30segundos:
  - "O Google DeepMind apresentou em 10 de novembro o AlphaProof Code, que escreve provas formais de que um código cumpre o que promete."
  - "Foram verificadas quatro propriedades de segurança do handshake PQXDH e do Triple Ratchet, partes da libsignal, usada pelo Signal e pelo WhatsApp."
  - "A prova cobre esses dois componentes, sob hipóteses declaradas. Não prova que o app inteiro é seguro."
porQueImporta: "Verificação formal costumava levar anos de trabalho humano. Se agentes conseguem fazer o grosso em semanas, código crítico pode passar a ser checado com muito mais frequência."
fontes:
  - nome: AI Weekly
    detalhe: "10 nov 2026"
    url: https://aiweekly.co/alerts/google-deepminds-alphaproof-code-formally-verifies-signal-protocol-guarantees
  - nome: Tech Insider
    detalhe: "12 nov 2026"
    url: https://tech-insider.org/what-google-deepmind-s-ai-generated-proofs-actually-verified-about-sig/
  - nome: Google DeepMind
    detalhe: "anúncio oficial"
    url: https://deepmind.google/blog/introducing-alphaproof-code/
tags:
  - Verificação formal
  - Google DeepMind
  - Segurança
---

## O que foi feito

O AlphaProof Code é um sistema de agentes do Google DeepMind que escreve provas em Lean, uma linguagem em que o computador confere cada passo da demonstração. A equipe aplicou o sistema à libsignal, biblioteca de criptografia do Signal, e verificou quatro propriedades de dois componentes: sigilo futuro, autenticação, segurança após comprometimento e sigilo do handshake. A prova vale para o código de máquina compilado, não só para o desenho do protocolo.

## Os números

O trabalho levou cerca de quatro semanas e gerou mais de seis milhões de linhas de prova. Agentes marcaram cerca de 1% do material para uma segunda revisão humana. Como teste, a equipe reintroduziu dois bugs já corrigidos, e o sistema apontou os dois.

## O que fica de fora

A Tech Insider lista os limites: a prova assume criptografia perfeita, não cobre negação plausível nem segurança de memória e deixa de fora outros módulos da biblioteca. Tudo também depende de cerca de 26 mil linhas de especificação escritas e revisadas por pessoas.
