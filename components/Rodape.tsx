import Link from "next/link";
import { site, slugify } from "@/lib/content";

type Item = { rotulo: string; href?: string };

// Itens sem href ainda não têm página (Arquivo, Sobre, RSS) ou dependem de decisão
// em aberto (perfis da BLACKBOX nas redes). Aparecem como texto até existirem.
const grupos: { titulo: string; itens: Item[] }[] = [
  {
    titulo: "Páginas",
    itens: [
      { rotulo: "Início", href: "/" },
      { rotulo: "Arquivo" },
      { rotulo: "Assinar", href: "#assine" },
      { rotulo: "Sobre" },
    ],
  },
  {
    titulo: "Assuntos",
    itens: site.menu.map((m) => ({ rotulo: m, href: `/?assunto=${slugify(m)}#nesta-semana` })),
  },
  {
    titulo: "Siga",
    itens: [{ rotulo: "Instagram" }, { rotulo: "X" }, { rotulo: "LinkedIn" }, { rotulo: "RSS" }],
  },
];

export default function Rodape() {
  return (
    <footer>
      <div className="rodape">
        <div className="wrap">
          <div className="rodape__colunas">
            <div className="rodape__marca">
              <strong>{site.nome}</strong>
              <p>{site.rodape}</p>
            </div>
            <div className="rodape__grupos">
              {grupos.map((g) => (
                <div className="rodape__grupo" key={g.titulo}>
                  <h2>{g.titulo}</h2>
                  {g.itens.map((i) =>
                    i.href ? (
                      <Link key={i.rotulo} href={i.href}>
                        {i.rotulo}
                      </Link>
                    ) : (
                      <span key={i.rotulo}>{i.rotulo}</span>
                    ),
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="rodape__base">
            <span>{site.copyright}</span>
            <span className="mono">{site.selo}</span>
          </div>
        </div>
      </div>
      <div className="marca-gigante" aria-hidden="true">
        <span>{site.nome}</span>
      </div>
    </footer>
  );
}
