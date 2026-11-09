/** @type {import('next').NextConfig} */

// Na Cloudflare Pages (que define CF_PAGES=1 no build) o site sai como arquivos estáticos.
// Fora dela (dev local e Vercel, enquanto durar a troca) segue como antes.
const naCloudflare = process.env.CF_PAGES === "1";

const nextConfig = {
  // O site é servido em mepede.ai/blog/blackbox (a landing repassa esse caminho para o host).
  // Mantenha igual a BASE_PATH em lib/base.ts.
  basePath: "/blog/blackbox",
  // Fotos já saem no tamanho certo; sem otimização de imagem do host, sem limite de plano.
  images: { unoptimized: true },
  poweredByHeader: false,
  ...(naCloudflare
    ? {
        // Exportação estática. O redirecionamento da raiz vai no arquivo _redirects
        // que o scripts/pages.mjs cria, porque redirects() não existe no modo estático.
        output: "export",
      }
    : {
        async redirects() {
          // Quem abrir a raiz do domínio cai no blog.
          return [{ source: "/", destination: "/blog/blackbox", basePath: false, permanent: false }];
        },
      }),
};

export default nextConfig;
