/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fotos já saem no tamanho certo; sem otimização de imagem da Vercel, sem limite de plano.
  images: { unoptimized: true },
  poweredByHeader: false,
};

export default nextConfig;
