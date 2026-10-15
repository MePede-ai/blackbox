import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  dataLonga,
  edicaoDaMateria,
  getMateria,
  listarSlugs,
  materiasDe,
  numeroEdicao,
  periodo,
  slugify,
} from "@/lib/content";
import FotoCard, { metaSinal, paraCard } from "@/components/FotoCard";
import Indice from "@/components/Indice";
import Compartilhar from "@/components/Compartilhar";
import Assine from "@/components/Assine";

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return listarSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const m = getMateria(slug);
  if (!m) return {};
  return {
    title: m.titulo,
    description: m.linhaFina ?? m.resumoCard,
    alternates: { canonical: `/materia/${m.slug}` },
    openGraph: {
      type: "article",
      title: m.titulo,
      description: m.linhaFina ?? m.resumoCard,
      images: [{ url: m.imagem.src, alt: m.imagem.alt }],
      publishedTime: m.data,
    },
  };
}

const ID_IMPORTA = "por-que-importa";

export default async function PaginaMateria({ params }: Params) {
  const { slug } = await params;
  const m = getMateria(slug);
  if (!m) notFound();

  const edicao = edicaoDaMateria(m.slug);
  const ehDestaque = edicao?.destaque === m.slug;
  const indice = m.porQueImporta
    ? [...m.indice, { id: ID_IMPORTA, titulo: "Por que importa" }]
    : m.indice;

  // "Leia também": outros sinais da mesma edição, mantendo a numeração da edição.
  const outros = edicao
    ? edicao.sinais
        .map((s, i) => ({ s, n: String(i + 1).padStart(2, "0") }))
        .filter(({ s }) => s !== m.slug)
        .slice(-3)
    : [];
  const leia = materiasDe(outros.map((o) => o.s)).map((x, i) => ({ m: paraCard(x), n: outros[i].n }));

  const temTexto = m.html.trim().length > 0;
  const caminho = `/materia/${m.slug}`;

  return (
    <article>
      <header className="wrap materia-cabecalho">
        <div className="materia-cabecalho__nav mono">
          <span>
            <Link href="/">← Últimas</Link>
            {"  /  "}
            <Link href={`/?assunto=${slugify(m.assunto)}#nesta-semana`}>{m.assunto}</Link>
          </span>
          {edicao ? (
            <span>
              Edição {numeroEdicao(edicao.numero)} · Semana de {periodo(edicao.inicio, edicao.fim)}
            </span>
          ) : null}
        </div>
        <div className="materia-cabecalho__chips">
          {ehDestaque ? <span className="chip chip--ativo">Destaque</span> : null}
          <span className="chip">{m.assunto}</span>
        </div>
        <h1 className="materia-titulo">{m.titulo}</h1>
        {m.linhaFina ? <p className="materia-linha-fina">{m.linhaFina}</p> : null}
        <div className="assinatura">
          <span className="assinatura__avatar" aria-hidden="true" />
          <div className="assinatura__texto">
            <strong>Redação BLACKBOX</strong>
            <span className="mono">
              <time dateTime={m.data}>{dataLonga(m.data)}</time> · {m.leitura} min de leitura
            </span>
          </div>
        </div>
      </header>

      <figure className="wrap materia-imagem">
        <img src={m.imagem.src} alt={m.imagem.alt} fetchPriority="high" />
        <figcaption className="legenda">Imagem gerada para a BLACKBOX</figcaption>
      </figure>

      <div className="wrap materia-corpo">
        <div className="materia-corpo__linha">
          <aside className="lateral">
            {indice.length > 0 ? (
              <>
                <span className="mono">Nesta matéria</span>
                <Indice itens={indice} />
                <div className="lateral__espaco" />
              </>
            ) : null}
            <span className="mono">Compartilhar</span>
            <Compartilhar titulo={m.titulo} caminho={caminho} />
          </aside>

          <div className="texto">
            {m.em30segundos.length > 0 ? (
              <section className="em30" aria-label="Em 30 segundos">
                <span className="mono">Em 30 segundos</span>
                <ol>
                  {m.em30segundos.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ol>
              </section>
            ) : null}

            {temTexto ? (
              <div className="prosa" dangerouslySetInnerHTML={{ __html: m.html }} />
            ) : (
              <p className="sem-texto">Esta matéria de exemplo ainda não tem texto.</p>
            )}

            {m.porQueImporta ? (
              <section className="importa" id={ID_IMPORTA} aria-label="Por que importa">
                <span className="mono">Por que importa</span>
                <p>{m.porQueImporta}</p>
              </section>
            ) : null}

            {m.fontes.length > 0 ? (
              <section className="fontes" aria-label="Fontes">
                <span className="mono">Fontes</span>
                {m.fontes.map((f) => {
                  const conteudo = (
                    <>
                      <span className="fonte__nome">
                        <strong>{f.nome}</strong>
                        {f.detalhe ? <span>{f.detalhe}</span> : null}
                      </span>
                      <span className="fonte__seta" aria-hidden="true">
                        ↗
                      </span>
                    </>
                  );
                  return f.url ? (
                    <a
                      key={f.nome + f.detalhe}
                      className="fonte"
                      href={f.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {conteudo}
                    </a>
                  ) : (
                    <div key={f.nome + f.detalhe} className="fonte">
                      {conteudo}
                    </div>
                  );
                })}
              </section>
            ) : null}

            <Compartilhar titulo={m.titulo} caminho={caminho} ordem="fim" />

            {m.tags.length > 0 ? (
              <div className="tags" aria-label="Tags">
                {m.tags.map((t) => (
                  <span key={t} className="chip">
                    #{t}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>

      {leia.length > 0 ? (
        <section className="wrap secao leia-tambem" aria-labelledby="leia-tambem-titulo">
          <div className="secao__cabecalho">
            <div className="secao__titulos">
              <span className="mono">Continue lendo</span>
              <h2 className="secao__titulo" id="leia-tambem-titulo">
                Leia também
              </h2>
            </div>
          </div>
          <div className="sinais">
            {leia.map(({ m: x, n }) => (
              <FotoCard key={x.slug} materia={x} chips={[n, x.assunto]} meta={metaSinal(x)} />
            ))}
          </div>
        </section>
      ) : null}

      <Assine />
    </article>
  );
}
