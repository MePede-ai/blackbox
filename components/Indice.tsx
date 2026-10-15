"use client";

import { useEffect, useState } from "react";

type Item = { id: string; titulo: string };

/** Índice lateral da matéria; marca a seção que está na tela. */
export default function Indice({ itens }: { itens: Item[] }) {
  const [ativo, setAtivo] = useState<string | null>(itens[0]?.id ?? null);

  useEffect(() => {
    const alvos = itens
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => el !== null);
    if (alvos.length === 0) return;

    const observador = new IntersectionObserver(
      (entradas) => {
        const visiveis = entradas
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visiveis[0]) setAtivo(visiveis[0].target.id);
      },
      { rootMargin: "-96px 0px -60% 0px", threshold: 0 },
    );
    alvos.forEach((el) => observador.observe(el));
    return () => observador.disconnect();
  }, [itens]);

  return (
    <nav className="indice" aria-label="Nesta matéria">
      {itens.map((i) => (
        <a key={i.id} href={`#${i.id}`} aria-current={ativo === i.id ? "true" : undefined}>
          {i.titulo}
        </a>
      ))}
    </nav>
  );
}
