import type { StaticImageData } from "next/image";

import logoCalorias from "../../public/images/marcas/0-calorias-montalban.webp";
import logoChangan from "../../public/images/marcas/changan.webp";
import logoMimesa from "../../public/images/marcas/grupo-mimesa.webp";
import logoIberia from "../../public/images/marcas/iberia.webp";
import logoRealStar from "../../public/images/marcas/real-star-caracas.webp";
import logoToyota from "../../public/images/marcas/toyota.webp";

export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  description: string;
  services: string[];
  tint: "ember" | "violet" | "magenta" | "grape";
  /**
   * Logo en crema sobre transparente. Si falta, <BrandMark /> pinta el
   * nombre con la tipografía display en su lugar.
   */
  logo?: StaticImageData;
};

export const projects: Project[] = [
  {
    slug: "toyota-de-venezuela",
    title: "Toyota de Venezuela",
    category: "Estrategia Digital & Eventos",
    summary:
      "Campañas estratégicas digitales, gestión de redes sociales, producción de eventos corporativos y coberturas en tiempo real.",
    description:
      "Desarrollo e implementación de campañas estratégicas digitales para potenciar el posicionamiento de marca. Gestión integral de redes sociales, coordinación de producción para eventos corporativos y ejecución de coberturas en tiempo real para lanzamientos y experiencias de marca.",
    services: [
      "Estrategia Digital",
      "Producción de Eventos",
      "Coberturas en Vivo",
      "Social Media Strategy",
    ],
    tint: "magenta",
    logo: logoToyota,
  },
  {
    slug: "grupo-mimesa",
    title: "Grupo Mimesa",
    category: "Marketing Corporativo 360",
    summary:
      "Gestión transversal de estrategia de comunicación y marketing corporativo 360 en canales digitales.",
    description:
      "Gestión transversal de estrategia de comunicación y marketing corporativo 360. Control integral de canales digitales, alineación de narrativa de marca y optimización de presencia online para sus distintas unidades de negocio.",
    services: [
      "Marketing Corporativo 360",
      "Social Media Management",
    ],
    tint: "ember",
    logo: logoMimesa,
  },
  {
    slug: "iberia-de-venezuela",
    title: "Iberia de Venezuela",
    category: "Social Media & Fidelización",
    summary:
      "Planificación y ejecución de contenidos digitales para fidelización de audiencia y crecimiento orgánico.",
    description:
      "Planificación y ejecución de contenidos digitales enfocados en la fidelización de audiencia, construcción de comunidad y crecimiento orgánico de la presencia de la marca en plataformas digitales.",
    services: [
      "Social Media Strategy",
      "Estrategia Digital",
    ],
    tint: "violet",
    logo: logoIberia,
  },
  {
    slug: "0-calorias-montalban",
    title: "0 Calorías Montalbán",
    category: "Campañas ATL/BTL & Eventos",
    summary:
      "Estrategias de marketing integral unificando acciones de visibilidad masiva (ATL), experiencias (BTL) y eventos.",
    description:
      "Ejecución de estrategias de marketing integral unificando acciones de visibilidad masiva (ATL) y experiencias directas de marca (BTL). Organización y producción de eventos presenciales con cobertura digital en vivo para maximizar alcance.",
    services: [
      "Estrategia Digital",
      "Campañas ATL/BTL",
      "Producción de Eventos",
      "Coberturas en Vivo",
    ],
    tint: "grape",
    logo: logoCalorias,
  },
  {
    slug: "changan-caracas",
    title: "Changan Caracas",
    category: "Sector Automotriz · Social Media",
    summary:
      "Estrategia de contenidos, exhibición de portafolio comercial y posicionamiento en el sector automotriz.",
    description:
      "Dirección y ejecución de estrategia de contenidos para redes sociales, enfocada en la exhibición de portafolio comercial, atención a la comunidad digital y posicionamiento dentro del sector automotriz local.",
    services: [
      "Social Media Management",
      "Estrategia de Contenidos",
      "Atención a la Comunidad",
    ],
    tint: "ember",
    logo: logoChangan,
  },
  {
    slug: "real-star-caracas",
    title: "Real Star Caracas",
    category: "Identidad de Marca · Social Media",
    summary:
      "Gestión de canales digitales, creación de contenidos atractivos y estructuración de identidad en redes.",
    description:
      "Gestión de canales digitales, creación de contenidos atractivos orientados a la interacción del público objetivo y estructuración de la identidad de la marca en redes sociales.",
    services: [
      "Social Media Management",
      "Creación de Contenidos",
      "Identidad de Marca",
    ],
    tint: "violet",
    logo: logoRealStar,
  },
];

export const getProject = (slug: string) =>
  projects.find((project) => project.slug === slug);
