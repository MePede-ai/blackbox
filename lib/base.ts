// O site vive em mepede.ai/blog/blackbox. A landing da MePede repassa esse caminho
// para o deploy da Vercel; aqui o Next usa o mesmo caminho como basePath.
export const BASE_PATH = "/blog/blackbox";
export const SITE_URL = `https://mepede.ai${BASE_PATH}`;

/** Prefixa caminhos absolutos do site ("/images/...") com o basePath. Links externos passam direto. */
export function asset(src: string) {
  return src.startsWith("/") && !src.startsWith(BASE_PATH + "/") ? `${BASE_PATH}${src}` : src;
}
