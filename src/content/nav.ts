export type NavItem = {
  /** Ancla dentro de la landing. El id vive en la propia sección. */
  href: string;
  label: string;
};

export const navItems: NavItem[] = [
  { href: "#inicio", label: "Inicio" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#servicios", label: "Servicios" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contacto", label: "Contacto" },
];

/** Ids de sección en orden, para el scroll-spy del header. */
export const sectionIds = navItems.map((item) => item.href.slice(1));
