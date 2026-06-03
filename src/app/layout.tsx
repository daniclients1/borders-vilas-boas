import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bordersvilasboas.com.br"),
  title: {
    default: `${site.name} — Canil de Border Collies`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Border Collie",
    "filhotes de Border Collie",
    "canil Border Collie",
    "Border Collie com pedigree",
    "Borders Vilas Boas",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: `${site.name} — Canil de Border Collies`,
    description: site.description,
    siteName: site.name,
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  description: site.description,
  image: "/logo.svg",
  telephone: `+${site.whatsapp.number}`,
  areaServed: "Brasil",
  address: {
    "@type": "PostalAddress",
    addressRegion: "SC",
    addressCountry: "BR",
  },
  sameAs: [site.instagram.url],
  knowsAbout: ["Border Collie", "criação de cães", "filhotes com pedigree"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="paper min-h-screen overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#conteudo"
          className="sr-only z-[60] rounded-full bg-forest-800 px-5 py-2 text-sm font-semibold text-cream-50 focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Pular para o conteúdo
        </a>
        <Header />
        <main id="conteudo">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
