# BLACKBOX

A IA aberta, toda semana. Um projeto mepede.ai.

Blog semanal com as novidades de IA dos maiores fóruns e fontes da gringa. O design aprovado está no Figma da MePede (arquivo `9agDz7uvODaIdGRYgjsOF9`, página "07 - BLACKBOX").

Regras de segurança e limites para o Claude: veja `CLAUDE.md`.

## Como rodar

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # gera o site estático
```

Next.js 15, sem banco de dados e sem chave de API. Tudo sai como página estática.

## Onde fica cada coisa

| Pasta | O que tem | Quem mexe |
|---|---|---|
| `content/site.json` | Textos fixos: slogan, menu, assuntos da faixa, newsletter, rodapé | Conteúdo |
| `content/edicoes/NN.json` | Uma edição: semana, destaque, "Últimas", os 5 sinais e os números | Conteúdo |
| `content/materias/<slug>.md` | Uma matéria: dados no topo (YAML) e o texto em Markdown | Conteúdo |
| `public/images/` | Fotos das matérias | Conteúdo |
| `app/`, `components/`, `lib/` | Código do site | Código (sempre por PR) |

A edição com o maior número é a que aparece na home.

## Formato de uma matéria

```markdown
---
titulo: "Título da matéria"
linhaFina: "Uma ou duas frases abaixo do título."
resumoCard: "Versão curta da linha fina, usada no card de destaque."
data: 2026-10-14
leitura: 6                 # minutos
assunto: Modelos           # Modelos, Ferramentas, Agentes ou Pesquisa
origem: r/LocalLLaMA       # aparece no card: "r/LocalLLaMA · 6 min"
imagem:
  src: /images/....jpg
  alt: "Descrição da foto para quem não enxerga."
em30segundos:
  - Primeiro tópico.
  - Segundo tópico.
  - Terceiro tópico.
porQueImporta: "Uma frase sobre o impacto."
fontes:
  - nome: Hacker News
    detalhe: discussão de 13 out 2026
    url: https://...
tags: [Modelos abertos, Código]
---

## Intertítulo

Texto em Markdown. Cada `##` vira um item do índice lateral.

> Citação curta, com crédito no texto.

![Descrição da foto](/images/foto.jpg "Legenda que aparece embaixo")
```

Use aspas em qualquer valor que tenha dois-pontos.

## Tema

O padrão é o modo claro. A chave "Claro/Escuro" no topo grava a escolha no navegador de quem lê.

## Ainda não ligado

- Newsletter: o formulário valida o e-mail e avisa que as inscrições abrem em breve. Nada é enviado até o serviço ser escolhido.
- Busca, Arquivo, Sobre, RSS e sitemap: telas e páginas da próxima etapa.
- Perfis nas redes (Instagram, X, LinkedIn): aparecem como texto até a decisão sobre os perfis.
- Enquanto `content/site.json` tiver `"indexavel": false`, o site pede para não aparecer em buscadores.
