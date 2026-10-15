import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { Marked, type Tokens } from "marked";
import site from "@/content/site.json";
import { slugify } from "@/lib/slug";

export { slugify };

const ROOT = process.cwd();
const DIR_MATERIAS = path.join(ROOT, "content", "materias");
const DIR_EDICOES = path.join(ROOT, "content", "edicoes");

export type Site = typeof site;
export { site };

export type Fonte = { nome: string; detalhe?: string; url?: string };

export type Materia = {
  slug: string;
  titulo: string;
  linhaFina?: string;
  resumoCard?: string;
  data: string; // AAAA-MM-DD
  leitura: number; // minutos
  assunto: string;
  origem?: string;
  exemplo: boolean;
  imagem: { src: string; alt: string };
  em30segundos: string[];
  porQueImporta?: string;
  fontes: Fonte[];
  tags: string[];
  html: string;
  indice: { id: string; titulo: string }[];
};

export type Edicao = {
  numero: number;
  inicio: string;
  fim: string;
  exemplo: boolean;
  destaque: string;
  ultimas: string[];
  sinais: string[];
  fontesLidas: number;
  minutosDeLeitura: number;
};

export { dataLonga, dataCurta, periodo, numeroEdicao } from "@/lib/datas";

/* ---------- markdown ---------- */

function escapar(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function renderizar(md: string) {
  const indice: { id: string; titulo: string }[] = [];
  const marked = new Marked({
    gfm: true,
    renderer: {
      heading({ tokens, depth }: Tokens.Heading) {
        const texto = this.parser.parseInline(tokens);
        if (depth === 2) {
          const titulo = tokens.map((t) => ("text" in t ? t.text : "")).join("");
          const id = slugify(titulo);
          indice.push({ id, titulo });
          return `<h2 id="${id}">${texto}</h2>\n`;
        }
        return `<h${depth}>${texto}</h${depth}>\n`;
      },
      blockquote({ tokens }: Tokens.Blockquote) {
        const corpo = this.parser.parse(tokens).replace(/<\/?p>/g, "");
        return `<blockquote class="citacao"><p>${corpo.trim()}</p></blockquote>\n`;
      },
      image({ href, title, text }: Tokens.Image) {
        const legenda = title ? `<figcaption>${escapar(title)}</figcaption>` : "";
        return `<figure class="figura"><img src="${escapar(href)}" alt="${escapar(text)}" loading="lazy" />${legenda}</figure>`;
      },
      paragraph({ tokens }: Tokens.Paragraph) {
        // Imagem sozinha no parágrafo vira figura, sem <p> em volta.
        if (tokens.length === 1 && tokens[0].type === "image") {
          return this.parser.parseInline(tokens) + "\n";
        }
        return `<p>${this.parser.parseInline(tokens)}</p>\n`;
      },
      link({ href, title, tokens }: Tokens.Link) {
        const texto = this.parser.parseInline(tokens);
        const externo = /^https?:\/\//.test(href);
        const t = title ? ` title="${escapar(title)}"` : "";
        return externo
          ? `<a href="${escapar(href)}"${t} target="_blank" rel="noopener noreferrer">${texto}</a>`
          : `<a href="${escapar(href)}"${t}>${texto}</a>`;
      },
    },
  });
  const html = marked.parse(md, { async: false }) as string;
  return { html, indice };
}

/* ---------- leitura dos arquivos ---------- */

const cacheMaterias = new Map<string, Materia>();

export function getMateria(slug: string): Materia | null {
  if (cacheMaterias.has(slug)) return cacheMaterias.get(slug)!;
  const arquivo = path.join(DIR_MATERIAS, `${slug}.md`);
  if (!fs.existsSync(arquivo)) return null;
  const { data, content } = matter(fs.readFileSync(arquivo, "utf8"));
  const { html, indice } = renderizar(content);
  const dataIso =
    data.data instanceof Date ? data.data.toISOString().slice(0, 10) : String(data.data);
  const m: Materia = {
    slug,
    titulo: data.titulo,
    linhaFina: data.linhaFina,
    resumoCard: data.resumoCard,
    data: dataIso,
    leitura: Number(data.leitura) || 1,
    assunto: data.assunto,
    origem: data.origem,
    exemplo: Boolean(data.exemplo),
    imagem: data.imagem,
    em30segundos: data.em30segundos ?? [],
    porQueImporta: data.porQueImporta,
    fontes: data.fontes ?? [],
    tags: data.tags ?? [],
    html,
    indice,
  };
  cacheMaterias.set(slug, m);
  return m;
}

export function listarSlugs(): string[] {
  return fs
    .readdirSync(DIR_MATERIAS)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function listarEdicoes(): Edicao[] {
  return fs
    .readdirSync(DIR_EDICOES)
    .filter((f) => f.endsWith(".json"))
    .map((f) => JSON.parse(fs.readFileSync(path.join(DIR_EDICOES, f), "utf8")) as Edicao)
    .sort((a, b) => b.numero - a.numero);
}

export function edicaoAtual(): Edicao {
  const [atual] = listarEdicoes();
  if (!atual) throw new Error("Nenhuma edição em content/edicoes.");
  return atual;
}

export function edicaoDaMateria(slug: string): Edicao | null {
  return (
    listarEdicoes().find(
      (e) => e.destaque === slug || e.sinais.includes(slug) || e.ultimas.includes(slug),
    ) ?? null
  );
}

export function materiasDe(slugs: string[]): Materia[] {
  return slugs.map((s) => getMateria(s)).filter((m): m is Materia => m !== null);
}
