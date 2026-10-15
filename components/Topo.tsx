"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import site from "@/content/site.json";
import { slugify } from "@/lib/slug";

type Tema = "light" | "dark";

function useTema(): [Tema, (t: Tema) => void] {
  const [tema, setTema] = useState<Tema>("light");
  useEffect(() => {
    setTema(document.documentElement.dataset.theme === "dark" ? "dark" : "light");
  }, []);
  const trocar = (t: Tema) => {
    setTema(t);
    document.documentElement.dataset.theme = t;
    try {
      localStorage.setItem("bb-tema", t);
    } catch {}
  };
  return [tema, trocar];
}

export function ChaveTema() {
  const [tema, trocar] = useTema();
  return (
    <div className="tema" role="group" aria-label="Tema">
      <button className="tema__claro" aria-pressed={tema === "light"} onClick={() => trocar("light")}>
        Claro
      </button>
      <button className="tema__escuro" aria-pressed={tema === "dark"} onClick={() => trocar("dark")}>
        Escuro
      </button>
    </div>
  );
}

function Busca() {
  // A tela de busca ainda não foi desenhada; por enquanto o campo é só visual.
  return (
    <span className="busca" aria-hidden="true">
      <span>⌕</span>
      <span>Buscar</span>
    </span>
  );
}

function LinksMenu({ onNavegar }: { onNavegar?: () => void }) {
  const pathname = usePathname();
  const assunto = useSearchParams().get("assunto");
  return (
    <Links
      naHome={pathname === "/" || pathname.startsWith("/materia/")}
      assunto={pathname === "/" ? assunto : null}
      onNavegar={onNavegar}
    />
  );
}

function LinksMenuEstatico() {
  return <Links naHome={false} assunto={null} />;
}

function Links({
  naHome,
  assunto,
  onNavegar,
}: {
  naHome: boolean;
  assunto: string | null;
  onNavegar?: () => void;
}) {
  return (
    <>
      <Link href="/" aria-current={naHome && !assunto ? "page" : undefined} onClick={onNavegar}>
        Últimas
      </Link>
      {site.menu.map((item) => {
        const s = slugify(item);
        return (
          <Link
            key={item}
            href={`/?assunto=${s}#nesta-semana`}
            aria-current={naHome && assunto === s ? "page" : undefined}
            onClick={onNavegar}
          >
            {item}
          </Link>
        );
      })}
    </>
  );
}

export default function Topo() {
  const [aberta, setAberta] = useState(false);
  const pathname = usePathname();

  useEffect(() => setAberta(false), [pathname]);

  return (
    <header className="topo">
      <div className="wrap">
        <div className="topo__linha">
          <Link href="/" className="logo" aria-label={`${site.nome}, página inicial`}>
            <span className="logo__caixa" aria-hidden="true" />
            <span className="logo__nome">{site.nome}</span>
            <span className="logo__by">{site.assinatura}</span>
          </Link>

          <nav className="menu" aria-label="Assuntos">
            <Suspense fallback={<LinksMenuEstatico />}>
              <LinksMenu />
            </Suspense>
          </nav>

          <div className="topo__direita">
            <ChaveTema />
            <Busca />
            <a href="#assine" className="btn-assinar">
              Assinar
            </a>
            <button
              className="topo__botao-menu"
              aria-expanded={aberta}
              aria-controls="gaveta"
              aria-label={aberta ? "Fechar menu" : "Abrir menu"}
              onClick={() => setAberta((v) => !v)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>

        <div id="gaveta" className="gaveta" data-aberta={aberta}>
          <nav aria-label="Assuntos">
            <Suspense fallback={<LinksMenuEstatico />}>
              <LinksMenu onNavegar={() => setAberta(false)} />
            </Suspense>
          </nav>
          <div className="gaveta__extras">
            <ChaveTema />
          </div>
        </div>
      </div>
    </header>
  );
}
