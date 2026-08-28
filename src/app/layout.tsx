import type { Metadata, Viewport } from "next";
import { Bakbak_One, Plus_Jakarta_Sans } from "next/font/google";

import { site } from "@/content/site";

import "./globals.css";

/**
 * next/font descarga y autoaloja ambas familias en build, así que no hay
 * petición a fonts.googleapis.com en runtime ni salto de layout al cargar.
 */
const bakbak = Bakbak_One({
  variable: "--font-bakbak",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} · ${site.role}`,
    template: `%s · ${site.name}`,
  },
  description: site.summary,
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    title: `${site.name} · ${site.role}`,
    description: site.summary,
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} · ${site.role}`,
    description: site.summary,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a090c",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${bakbak.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="relative min-h-full">{children}</body>
    </html>
  );
}
