import Link from "next/link";
import {
  dataCurta,
  edicaoAtual,
  getMateria,
  materiasDe,
  numeroEdicao,
  periodo,
  site,
} from "@/lib/content";
import FotoCard, { metaDestaque, paraCard } from "@/components/FotoCard";
import Sinais from "@/components/Sinais";
import Assine from "@/components/Assine";

export default function Home() {
  const edicao = edicaoAtual();
  const destaque = getMateria(edicao.destaque);
  const ultimas = materiasDe(edicao.ultimas);
  const sinais = materiasDe(edicao.sinais).map(paraCard);
  const semana = periodo(edicao.inicio, edicao.fim);

  return (
    <>
      {/* Abertura de marca */}
      <section className="wrap capa" aria-label={`${site.nome}, ${site.slogan}`}>
        <div className="capa__edicao mono">
          <span className="capa__aovivo">
            Edição {numeroEdicao(edicao.numero)} · <span className="capa__semana">Semana de </span>
            {semana}
          </span>
          <span className="capa__curadoria">{site.curadoria}</span>
        </div>
        <h1 className="capa__marca">{site.nome}</h1>
        <div className="capa__tagline">
          <p className="capa__slogan">{site.slogan}</p>
          <p className="capa__descricao">{site.descricao}</p>
        </div>
        <div className="capa__linha" />
      </section>

      {/* Destaque + últimas */}
      <section className="wrap destaque" aria-label="Destaque da semana">
        <div className="destaque__linha">
          {destaque ? (
            <FotoCard
              materia={paraCard(destaque)}
              chips={["Destaque", destaque.assunto]}
              meta={metaDestaque(destaque)}
              variante="destaque"
              resumo
              prioridade
            />
          ) : null}

          <div className="ultimas">
            <div className="ultimas__cabecalho mono">
              <span>Últimas</span>
              <span>Ver todas →</span>
            </div>
            {ultimas.map((m) => (
              <Link key={m.slug} href={`/materia/${m.slug}`} className="ultimas__item">
                <img className="ultimas__foto" src={m.imagem.src} alt="" loading="lazy" />
                <div className="ultimas__texto">
                  <span className="mono">
                    {m.assunto} · {dataCurta(m.data)}
                  </span>
                  <h2 className="ultimas__titulo">{m.titulo}</h2>
                </div>
              </Link>
            ))}
            <ul className="numeros" aria-label="Números da edição">
              <li>
                <strong>{edicao.sinais.length}</strong>
                <span>
                  <span className="longo">sinais na edição</span>
                  <span className="curto">sinais</span>
                </span>
              </li>
              <li>
                <strong>{edicao.fontesLidas}</strong>
                <span>
                  <span className="longo">fontes lidas</span>
                  <span className="curto">fontes</span>
                </span>
              </li>
              <li>
                <strong>{edicao.minutosDeLeitura} min</strong>
                <span>
                  <span className="longo">para ler tudo</span>
                  <span className="curto">leitura</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Faixa de assuntos */}
      <div className="faixa" aria-label="Assuntos que acompanhamos">
        <ul>
          {[...site.assuntos, ...site.assuntos.slice(0, 2)].map((a, i) => (
            <li key={`${a}-${i}`} aria-hidden={i >= site.assuntos.length ? true : undefined}>
              {a}
            </li>
          ))}
        </ul>
      </div>

      {/* Nesta semana */}
      <section className="wrap secao" id="nesta-semana" aria-labelledby="nesta-semana-titulo">
        <Sinais
          sinais={sinais}
          filtros={site.menu}
          cabecalho={
            <div className="secao__titulos">
              <span className="mono">Os sinais da semana</span>
              <h2 className="secao__titulo" id="nesta-semana-titulo">
                Nesta semana
              </h2>
            </div>
          }
        />
      </section>

      <Assine />
    </>
  );
}
