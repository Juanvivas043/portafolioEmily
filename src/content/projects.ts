export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  /** Resultado destacado. PENDIENTE: cifra de relleno, sin confirmar. */
  result: { value: string; label: string };
  /** Tamaño en la rejilla del portafolio. */
  featured?: boolean;
  /** Tinte del marcador de imagen mientras no haya foto. */
  tint: "ember" | "violet" | "magenta" | "grape";
  /** Contenido de la página de detalle. */
  detail: {
    challenge: string;
    approach: string[];
    deliverables: string[];
    period: string;
  };
};

export const projects: Project[] = [
  {
    slug: "marca-de-retail",
    title: "Cadena de retail",
    category: "Campaña 360",
    summary:
      "Lanzamiento de temporada: estrategia, contenido y pauta coordinados en seis semanas.",
    result: { value: "+62%", label: "ventas online" },
    featured: true,
    tint: "magenta",
    detail: {
      challenge:
        "La marca lanzaba temporada con 40 referencias nuevas y tres equipos trabajando por separado: tienda, redes y medios. Cada uno tenía su calendario.",
      approach: [
        "Un único brief con objetivo, público, mensaje y fechas para los tres equipos.",
        "Calendario común de piezas, con quién produce cada una y cuándo entra.",
        "Pauta arrancando dos semanas antes del lanzamiento para calentar audiencia.",
        "Punto de control semanal de 30 minutos para reasignar presupuesto.",
      ],
      deliverables: [
        "Brief maestro de campaña",
        "Calendario de contenido de 24 piezas",
        "Plan de medios con reparto por canal",
        "Informe de cierre con aprendizajes",
      ],
      period: "Marzo – mayo de 2025",
    },
  },
  {
    slug: "marca-de-belleza",
    title: "Marca de belleza",
    category: "Contenido",
    summary: "Serie de vídeo vertical, 12 piezas al mes de principio a fin.",
    result: { value: "+180%", label: "alcance" },
    tint: "violet",
    detail: {
      challenge:
        "Publicaban a diario sin línea reconocible: cada pieza parecía de una marca distinta.",
      approach: [
        "Tres pilares de contenido y un formato fijo para cada uno.",
        "Guion y grabación propios, para no depender de la agenda de producción.",
        "Publicación en bloques semanales en vez de a diario a última hora.",
      ],
      deliverables: [
        "Guía de pilares y formatos",
        "12 piezas de vídeo vertical al mes",
        "Calendario editorial mensual",
      ],
      period: "Enero de 2025 – hoy",
    },
  },
  {
    slug: "servicio-b2b",
    title: "Servicio B2B",
    category: "Paid media",
    summary: "Captación de leads con presupuesto mensual y coste por lead a la baja.",
    result: { value: "-38%", label: "coste por lead" },
    tint: "ember",
    detail: {
      challenge:
        "Invertían en pauta sin saber qué campaña traía los contactos que acababan cerrando.",
      approach: [
        "Trazabilidad del lead desde el anuncio hasta el cierre.",
        "Corte de las campañas que traían volumen pero no conversión.",
        "Concentración del presupuesto en los dos públicos que sí cerraban.",
      ],
      deliverables: ["Estructura de campañas", "Panel de seguimiento", "Informe mensual"],
      period: "Marzo – mayo de 2025",
    },
  },
  {
    slug: "marca-de-bebidas",
    title: "Marca de bebidas",
    category: "Creadores",
    summary: "8 colaboraciones para el lanzamiento, de la selección al pago.",
    result: { value: "8", label: "creadores activados" },
    tint: "grape",
    detail: {
      challenge:
        "Querían creadores, pero sin criterio para elegirlos más allá del número de seguidores.",
      approach: [
        "Criterio de selección por afinidad real con el producto, no por alcance.",
        "Brief corto para cada creador, con libertad de formato.",
        "Seguimiento de resultados por creador para decidir a quién repetir.",
      ],
      deliverables: ["Lista corta de creadores", "Brief por creador", "Informe por colaboración"],
      period: "Septiembre de 2024",
    },
  },
  {
    slug: "grupo-hotelero",
    title: "Grupo hotelero",
    category: "Reporting",
    summary: "Informe mensual para 6 establecimientos, con una sola lectura común.",
    result: { value: "6", label: "establecimientos" },
    tint: "violet",
    detail: {
      challenge:
        "Cada establecimiento reportaba a su manera. La dirección no podía comparar nada.",
      approach: [
        "Un mismo conjunto de métricas para todos los establecimientos.",
        "Informe mensual de una página por establecimiento, más un resumen del grupo.",
        "Una recomendación concreta por establecimiento cada mes.",
      ],
      deliverables: ["Plantilla de informe", "Resumen mensual del grupo", "Sesión de revisión"],
      period: "Enero de 2025 – hoy",
    },
  },
];

export const getProject = (slug: string) =>
  projects.find((project) => project.slug === slug);
