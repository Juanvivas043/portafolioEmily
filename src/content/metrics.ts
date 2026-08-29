export type Metric = {
  id: string;
  /** El dato, entre corchetes hasta que Emily confirme el real. */
  value: string;
  label: string;
  /** Anotación manuscrita al lado de la cifra. Opcional. */
  note?: string;
  /** Coordenadas dentro del lienzo dibujado de 1440x560. */
  point: { x: number; y: number };
  color: "ember" | "bone" | "violet" | "magenta";
};

/**
 * La sección de métricas es un dibujo a mano alzada: cada cifra se ancla a un
 * punto de la curva, así que las coordenadas son parte del dato y no del
 * componente.
 */
export const metrics: Metric[] = [
  {
    id: "cuentas",
    value: "40+",
    label: "cuentas gestionadas",
    note: "las que me sé de memoria",
    point: { x: 200, y: 404 },
    color: "ember",
  },
  {
    id: "roas",
    value: "3,2x",
    label: "ROAS medio",
    note: "el número que defiendo en cada cierre",
    point: { x: 520, y: 344 },
    color: "bone",
  },
  {
    id: "anos",
    value: "6",
    label: "años en marketing",
    note: "de becaria a ejecutiva",
    point: { x: 860, y: 258 },
    color: "violet",
  },
  {
    id: "alcance",
    value: "180%",
    label: "crecimiento de alcance",
    note: "lo que más me costó y lo que más me gusta contar",
    point: { x: 1245, y: 148 },
    color: "magenta",
  },
];
