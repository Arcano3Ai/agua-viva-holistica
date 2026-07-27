import type { Metadata, Viewport } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LotusLoader from "@/components/ui/LotusLoader";
import FloatingActions from "@/components/ui/FloatingActions";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aguavivaholistica.com"),
  title: "Agua Viva Holística | Centro de Sanación, Cristales y Armonización",
  description:
    "Un espacio sagrado para sanar cuerpo, mente y espíritu. Terapias con cuarzos, armonización con péndulo, ceremonias de cacao, círculos de mujeres, tarot terapéutico y reiki.",
  keywords: [
    "Agua Viva Holística",
    "centro holístico",
    "terapia con cuarzos",
    "armonización péndulo",
    "ceremonia de cacao",
    "sanación de útero",
    "reiki",
    "tarot terapéutico",
    "meditación guiada",
    "wellness centro histórico",
  ],
  authors: [{ name: "Agua Viva Holística" }],
  openGraph: {
    title: "Agua Viva Holística | Centro de Sanación y Bienestar Premium",
    description:
      "Un espacio para sanar cuerpo, mente y espíritu. Terapias energéticas, sonido sagrado y crecimiento espiritual.",
    url: "https://aguavivaholistica.com",
    siteName: "Agua Viva Holística",
    images: [
      {
        url: "/images/logo.png",
        width: 800,
        height: 800,
        alt: "Logo Agua Viva Holística",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#FAFAF7",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured JSON-LD Schema for LocalBusiness / HealthAndBeautyBusiness
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "name": "Agua Viva Holística",
    "image": "https://aguavivaholistica.com/images/logo.png",
    "description": "Un espacio para sanar cuerpo, mente y espíritu con terapias con cuarzos, armonización con péndulo y ceremonias ancestrales.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Morelos 654, Agua Fría",
      "addressLocality": "Apodaca, Nuevo León",
      "addressCountry": "MX"
    },
    "telephone": "+525584399200",
    "openingHours": "Mo-Sa 09:00-19:30",
    "priceRange": "$$$"
  };

  return (
    <html lang="es" className={`${playfair.variable} ${poppins.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#FAFAF7] text-[#2E2E2E] antialiased selection:bg-[#38B6C8] selection:text-white">
        <LotusLoader />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
