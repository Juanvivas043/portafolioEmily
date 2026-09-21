export type NavItem = {
  /** Ancla dentro de la landing. El id vive en la propia sección. */
  href: string;
  label: string;
};

/** En el mismo orden en que aparecen al bajar por la página. */
export const navItems: NavItem[] = [
  { href: "#inicio", label: "Inicio" },
  { href: "#sobre-mi", label: "Sobre Mi" },
  { href: "#servicios", label: "Servicios" },
  { href: "#portafolio", label: "Portafolio" },
  { href: "#proceso", label: "Proceso" },
];

/**
 * Contacto se sale de la lista del header porque ya está ahí como botón:
 * repetirlo dos veces en la misma barra sobra.
 */
export const headerNavItems = navItems.filter(
  (item) => item.href !== "#contacto",
);

/** Ids de sección en orden, para el scroll-spy del header. */
export const sectionIds = navItems.map((item) => item.href.slice(1));
