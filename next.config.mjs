/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Quando as fotos reais chegarem, formatos modernos por padrão (UX de carregamento).
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
