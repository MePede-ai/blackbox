import Link from "next/link";
import { dataLonga } from "@/lib/datas";
import type { Materia } from "@/lib/content";

export type CardMateria = Pick<
  Materia,
  "slug" | "titulo" | "imagem" | "assunto" | "resumoCard" | "origem" | "leitura" | "data"
>;

export function paraCard(m: Materia): CardMateria {
  const { slug, titulo, imagem, assunto, resumoCard, origem, leitura, data } = m;
  return { slug, titulo, imagem, assunto, resumoCard, origem, leitura, data };
}

type Props = {
  materia: CardMateria;
  chips: string[];
  meta: string;
  variante?: "destaque" | "grande" | "normal";
  resumo?: boolean;
  prioridade?: boolean;
};

export default function FotoCard({
  materia,
  chips,
  meta,
  variante = "normal",
  resumo = false,
  prioridade = false,
}: Props) {
  return (
    <Link
      href={`/materia/${materia.slug}`}
      className={`foto-card foto-card--${variante}`}
      data-assunto={materia.assunto}
    >
      <img
        className="foto-card__img"
        src={materia.imagem.src}
        alt=""
        loading={prioridade ? "eager" : "lazy"}
        fetchPriority={prioridade ? "high" : undefined}
      />
      <div className="foto-card__topo">
        <div className="foto-card__chips">
          {chips.map((c) => (
            <span key={c} className="chip chip--foto">
              {c}
            </span>
          ))}
        </div>
        <span className="seta" aria-hidden="true">
          ↗
        </span>
      </div>
      <div className="foto-card__texto">
        <span className="mono foto-card__meta">{meta}</span>
        <h3 className="foto-card__titulo">{materia.titulo}</h3>
        {resumo && materia.resumoCard ? <p className="foto-card__resumo">{materia.resumoCard}</p> : null}
      </div>
    </Link>
  );
}

export function metaDestaque(m: CardMateria) {
  return `${dataLonga(m.data)} · ${m.leitura} min de leitura`;
}

export function metaSinal(m: CardMateria) {
  return m.origem ? `${m.origem} · ${m.leitura} min` : `${m.leitura} min`;
}
