import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { site } from "@/lib/content";
import Topo from "@/components/Topo";
import Rodape from "@/components/Rodape";
import "./globals.css";

const unbounded = localFont({
  src: [
    { path: "../node_modules/@fontsource/unbounded/files/unbounded-latin-500-normal.woff2", weight: "500" },
    { path: "../node_modules/@fontsource/unbounded/files/unbounded-latin-600-normal.woff2", weight: "600" },
    { path: "../node_modules/@fontsource/unbounded/files/unbounded-latin-700-normal.woff2", weight: "700" },
  ],
  variable: "--font-unbounded",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://blackbox.mepede.ai"),
  title: {
    default: `${site.nome} · ${site.slogan}`,
    template: `%s · ${site.nome}`,
  },
  description: site.descricao,
  openGraph: {
    siteName: site.nome,
    locale: "pt_BR",
    type: "website",
  },
  // Enquanto o site só tem conteúdo de exemplo, fica fora dos buscadores.
  robots: site.indexavel ? undefined : { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

// Aplica o tema salvo antes da pintura, para não piscar. Padrão: claro.
const scriptTema = `try{var t=localStorage.getItem('bb-tema');document.documentElement.dataset.theme=t==='dark'?'dark':'light'}catch(e){document.documentElement.dataset.theme='light'}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      data-theme="light"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable} ${unbounded.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: scriptTema }} />
      </head>
      <body>
        <Topo />
        <main>{children}</main>
        <Rodape />
      </body>
    </html>
  );
}
