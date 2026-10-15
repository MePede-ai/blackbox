"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, type ReactNode } from "react";
import FotoCard, { metaSinal, type CardMateria } from "@/components/FotoCard";
import { slugify } from "@/lib/slug";

type Props = {
  sinais: CardMateria[];
  filtros: string[];
  cabecalho: ReactNode;
};

function escolher(valor: string | null) {
  const url = new URL(window.location.href);
  if (valor) url.searchParams.set("assunto", valor);
  else url.searchParams.delete("assunto");
  // O Next sincroniza replaceState com useSearchParams.
  window.history.replaceState(null, "", url);
}

function Vista({ sinais, filtros, cabecalho, filtro }: Props & { filtro: string | null }) {
  const numerados = sinais.map((m, i) => ({ m, n: String(i + 1).padStart(2, "0") }));
  const visiveis = filtro ? numerados.filter(({ m }) => slugify(m.assunto) === filtro) : numerados;

  return (
    <>
      <div className="secao__cabecalho">
        {cabecalho}
        <div className="filtros" role="group" aria-label="Filtrar por assunto">
          <button
            className={`chip chip--filtro ${filtro === null ? "chip--ativo" : ""}`}
            aria-pressed={filtro === null}
            onClick={() => escolher(null)}
          >
            Tudo
          </button>
          {filtros.map((f) => {
            const s = slugify(f);
            return (
              <button
                key={f}
                className={`chip chip--filtro ${filtro === s ? "chip--ativo" : ""}`}
                aria-pressed={filtro === s}
                onClick={() => escolher(s)}
              >
                {f}
              </button>
            );
          })}
        </div>
      </div>

      <div className="sinais" aria-live="polite">
        {visiveis.length === 0 ? (
          <p className="sinais__vazio">Nenhum sinal desse assunto nesta edição.</p>
        ) : (
          visiveis.map(({ m, n }, i) => (
            <FotoCard
              key={m.slug}
              materia={m}
              chips={[n, m.assunto]}
              meta={metaSinal(m)}
              variante={i === 0 ? "grande" : "normal"}
            />
          ))
        )}
      </div>
    </>
  );
}

function ComUrl(props: Props) {
  const filtro = useSearchParams().get("assunto");
  return <Vista {...props} filtro={filtro} />;
}

/** Mosaico "Nesta semana" com filtro por assunto (?assunto=modelos). */
export default function Sinais(props: Props) {
  // O fallback já sai no HTML com todos os sinais; o filtro entra no navegador.
  return (
    <Suspense fallback={<Vista {...props} filtro={null} />}>
      <ComUrl {...props} />
    </Suspense>
  );
}
