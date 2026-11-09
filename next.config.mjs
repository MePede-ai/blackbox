/** @type {import('next').NextConfig} */
const nextConfig = {
  // O site é servido em mepede.ai/blog/blackbox (a landing repassa esse caminho para a Vercel).
  // Mantenha igual a BASE_PATH em lib/base.ts.
  basePath: "/blog/blackbox",
  // Fotos já saem no tamanho certo; sem otimização de imagem da Vercel, sem limite de plano.
  images: { unoptimized: true },
  poweredByHeader: false,
  async redirects() {
    // Quem abrir a raiz do domínio da Vercel cai no blog.
    return [{ source: "/", destination: "/blog/blackbox", basePath: false, permanent: false }];
  },
};

export default nextConfig;
