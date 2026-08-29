export type Service = {
  id: string;
  /** Se pinta como «01», «02»… en el índice. */
  number: string;
  title: string;
  description: string;
  /** Solo el servicio destacado las muestra. */
  tags: string[];
};

export const services: Service[] = [
  {
    id: "cuentas",
    number: "01",
    title: "Gestión de cuentas",
    description:
      "Un solo interlocutor entre tu marca y el equipo. Recojo el brief, lo traduzco, reparto el trabajo y te cuento cómo va sin que tengas que perseguirme.",
    tags: ["Brief", "Plazos", "Presupuesto"],
  },
  {
    id: "estrategia",
    number: "02",
    title: "Estrategia de contenido",
    description:
      "Pilares, calendario y formatos pensados para cada plataforma, no copiados de una a otra.",
    tags: ["Calendario", "Pilares", "Formatos"],
  },
  {
    id: "produccion",
    number: "03",
    title: "Producción de contenido",
    description:
      "Guion, grabación y edición de piezas para redes. De la idea al archivo listo para publicar.",
    tags: ["Guion", "Cámara", "Montaje"],
  },
  {
    id: "campanas",
    number: "04",
    title: "Campañas de pago",
    description:
      "Segmentación, reparto de presupuesto y ajuste semanal en Meta y Google.",
    tags: ["Segmentación", "Presupuesto", "Optimización"],
  },
  {
    id: "creadores",
    number: "05",
    title: "Alianzas con creadores",
    description:
      "Selección, negociación y seguimiento de colaboraciones que encajan con la marca.",
    tags: ["Selección", "Negociación", "Seguimiento"],
  },
  {
    id: "reporting",
    number: "06",
    title: "Reporting",
    description:
      "Un informe al mes que dice qué funcionó, qué no y qué cambiamos. Sin adornos.",
    tags: ["Informe", "Aprendizajes", "Siguiente paso"],
  },
];

/** Opciones del desplegable del formulario, derivadas de los servicios. */
export const serviceOptions = [
  ...services.map((service) => service.title),
  "Otra cosa",
];
