import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Sin esto Turbopack sube buscando lockfiles y encuentra uno fuera del
    // repositorio, lo que hace que el build avise y pueda resolver mal.
    root: process.cwd(),
  },
  images: {
    // Solo WebP. AVIF pesa la mitad, pero alisa la piel y el pelo de los
    // retratos hasta que se ven borrosos, y aquí la foto es lo que se vende.
    formats: ["image/webp"],
    // Next 16 solo admite las calidades listadas aquí (por defecto, 75). Los
    // retratos van a 90: a 75 se notaba el empaste en piel y pelo.
    qualities: [75, 90],
  },
};

export default nextConfig;
