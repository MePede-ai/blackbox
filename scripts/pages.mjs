// Monta a pasta que a Cloudflare Pages publica (dist/).
// O Next exporta em out/ com links que começam em /blog/blackbox, então os arquivos
// precisam morar nesse mesmo caminho dentro de dist/.
import { cpSync, existsSync, mkdirSync, rmSync, writeFileSync } from "node:fs";

if (!existsSync("out")) {
  console.error("Pasta out/ não existe. Rode o build com CF_PAGES=1 antes.");
  process.exit(1);
}

rmSync("dist", { recursive: true, force: true });
mkdirSync("dist/blog", { recursive: true });
cpSync("out", "dist/blog/blackbox", { recursive: true });

// Quem abrir a raiz do domínio da Cloudflare cai no blog.
writeFileSync("dist/_redirects", "/ /blog/blackbox/ 302\n/blog /blog/blackbox/ 302\n");

console.log("dist/ pronto para a Cloudflare Pages.");
