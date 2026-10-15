// Datas no formato da BLACKBOX: "14 out 2026". Sem dependência de fuso.

const MESES = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];

function partes(iso: string) {
  const [a, m, d] = iso.split("-").map(Number);
  return { a, m, d };
}

/** "14 out 2026" */
export function dataLonga(iso: string) {
  const { a, m, d } = partes(iso);
  return `${d} ${MESES[m - 1]} ${a}`;
}

/** "14 out" */
export function dataCurta(iso: string) {
  const { m, d } = partes(iso);
  return `${d} ${MESES[m - 1]}`;
}

/** "12 a 18 out 2026" ou "28 set a 4 out 2026" */
export function periodo(inicio: string, fim: string) {
  const i = partes(inicio);
  const f = partes(fim);
  const ini = i.m === f.m ? `${i.d}` : `${i.d} ${MESES[i.m - 1]}`;
  return `${ini} a ${f.d} ${MESES[f.m - 1]} ${f.a}`;
}

export function numeroEdicao(n: number) {
  return `#${String(n).padStart(2, "0")}`;
}

