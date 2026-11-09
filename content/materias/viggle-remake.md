---
titulo: "Viggle Remake: pesos abertos para refilmar qualquer vídeo"
linhaFina: "O modelo troca pessoas, objetos, fundo e luz de um vídeo existente mantendo o movimento e o som. Roda em placa de vídeo comum e vem com um alerta claro sobre consentimento."
data: 2026-11-04
leitura: 3
assunto: Ferramentas
origem: Hugging Face
imagem:
  src: /images/banco/tres-monitores.jpg
  alt: "Três monitores lado a lado sobre uma mesa de madeira mostrando imagens abstratas em tons de laranja e vermelho."
em30segundos:
  - "A Viggle publicou no Hugging Face o Remake, que troca pessoas e objetos ou muda fundo, clima e luz de um vídeo que já existe."
  - "As versões compactadas rodam em placa de vídeo de 12 a 24 GB pelo ComfyUI."
  - "A própria página avisa que o modelo não verifica consentimento e pede para não usar em pessoas que não autorizaram."
porQueImporta: "Refazer uma cena sem filmar de novo ficou ao alcance de um computador de mesa. O mesmo vale para usar o rosto de alguém sem permissão, e a responsabilidade fica com quem usa."
fontes:
  - nome: Hugging Face
    detalhe: "página do modelo Viggle/Viggle-Remake"
    url: https://huggingface.co/Viggle/Viggle-Remake
  - nome: ComfyUI Wiki
    detalhe: "04 nov 2026"
    url: https://comfyui-wiki.com/en/news/2026-11-04-viggle-remake
tags:
  - Vídeo
  - Modelos abertos
  - Viggle
---

## O que faz

A Viggle publicou em 4 de novembro o Remake, um modelo que refilma vídeos existentes. Tem dois modos: um troca pessoas e personagens, o outro troca, tira ou coloca objetos e muda fundo, clima ou iluminação. O resultado mantém o movimento, a câmera, o ritmo e o som do vídeo original.

Para usar, a pessoa pinta de um a quatro quadros de referência e escreve um pedido num formato de seis partes. O modelo não gera som: vídeo mudo continua mudo.

## O que precisa para rodar

O Remake é um ajuste (LoRA) de 20 bilhões de parâmetros sobre o modelo de vídeo MiniMax H3. A versão completa pede uma placa de 80 GB e cerca de 144 GB do modelo base. As versões compactadas ficam entre 14,3 GB e 22,3 GB e rodam em placas de 12 a 24 GB pelo ComfyUI, mais devagar.

## Licença e consentimento

Os pesos seguem a licença comunitária do MiniMax H3: produto comercial precisa citar o MiniMax H3, e empresa com receita acima de US$ 20 milhões por ano precisa de autorização escrita. O código de apoio é Apache 2.0.

A página do modelo é direta: ele coloca o rosto de uma pessoa real num vídeo com a mesma facilidade, não consegue verificar identidade nem consentimento, e só deve ser usado em material que a pessoa tem direito de alterar, com a saída identificada como gerada por IA.
