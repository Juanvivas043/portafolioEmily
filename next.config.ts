import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Sin esto Turbopack sube buscando lockfiles y encuentra uno fuera del
    // repositorio, lo que hace que el build avise y pueda resolver mal.
    root: process.cwd(),
  },
  images: {
    // AVIF primero: pesa bastante menos que WebP a calidad equivalente, y Next
    // sirve WebP a quien no lo soporte.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
