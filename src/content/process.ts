export type ProcessStep = {
  id: string;
  number: string;
  title: string;
  description: string;
  /** Lo que se lleva el cliente al terminar el paso. */
  entrega: string;
  /** Cuánto dura, para que nadie se imagine plazos distintos. */
  duracion: string;
};

/**
 * Mi forma de trabajo.
 *
 * Escrito en primera persona y con entregable y duración por paso: un proceso
 * sin plazos ni entregables concretos no dice nada que no diga cualquier otra
 * agencia.
 */
export const processSteps: ProcessStep[] = [
  {
    id: "escuchar",
    number: "01",
    title: "Te escucho",
    description:
      "Una sesión para entender el negocio, no solo la campaña: qué se vende, a quién, qué se ha probado y qué salió mal.",
    entrega: "Resumen de una página",
    duracion: "45 minutos",
  },
  {
    id: "brief",
    number: "02",
    title: "Escribo el brief",
    description:
      "Objetivo, público, mensaje, formatos, fechas y presupuesto en un solo documento. Si no cabe en una frase, todavía no está listo.",
    entrega: "Brief y calendario",
    duracion: "3 a 5 días",
  },
  {
    id: "producir",
    number: "03",
    title: "Producimos",
    description:
      "Reparto el trabajo, produzco lo que me toca y mantengo un punto de control semanal. Nada de sorpresas al final del mes.",
    entrega: "Piezas listas para publicar",
    duracion: "Según campaña",
  },
  {
    id: "medir",
    number: "04",
    title: "Te cuento qué pasó",
    description:
      "Un informe con lo que funcionó, lo que no y qué cambio el mes siguiente. Con la recomendación ya tomada, no con una tabla para que decidas tú.",
    entrega: "Informe y siguiente plan",
    duracion: "Cada mes",
  },
];
