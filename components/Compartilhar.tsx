"use client";

import { useState } from "react";

type Props = { titulo: string; caminho: string; ordem?: "lateral" | "fim" };

const BASE = "https://blackbox.mepede.ai";

export default function Compartilhar({ titulo, caminho, ordem = "lateral" }: Props) {
  const [copiado, setCopiado] = useState(false);
  const url = `${BASE}${caminho}`;
  const u = encodeURIComponent(url);
  const t = encodeURIComponent(titulo);

  const redes = [
    { nome: "X", href: `https://x.com/intent/post?text=${t}&url=${u}` },
    { nome: "LinkedIn", href: `https://www.linkedin.com/sharing/share-offsite/?url=${u}` },
    { nome: "WhatsApp", href: `https://wa.me/?text=${encodeURIComponent(`${titulo} ${url}`)}` },
  ];
  // No celular o desenho põe WhatsApp logo depois de "Copiar link".
  const lista = ordem === "fim" ? [redes[2], redes[0], redes[1]] : redes;

  const copiar = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href || url);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    } catch {}
  };

  return (
    <div className={`compartilhar ${ordem === "fim" ? "compartilhar--fim" : ""}`}>
      <button type="button" className="chip" onClick={copiar} aria-live="polite">
        {copiado ? "Link copiado" : "Copiar link"}
      </button>
      {lista.map((r) => (
        <a key={r.nome} className="chip" href={r.href} target="_blank" rel="noopener noreferrer">
          {r.nome}
        </a>
      ))}
    </div>
  );
}
