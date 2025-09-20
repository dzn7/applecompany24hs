import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Apple Company 24hs - Assistência Técnica Apple em Teresina-PI",
    template: "%s | Apple Company 24hs",
  },
  description:
    "Assistência técnica Apple em Teresina-PI: iPhone, MacBook, iPad e Apple Watch. Técnicos certificados, peças originais, garantia e atendimento 24h.",
  keywords: [
    "assistência técnica apple teresina",
    "conserto iphone teresina",
    "reparo macbook teresina",
    "assistência ipad teresina",
    "apple watch conserto teresina",
    "apple company 24hs",
    "assistência apple pi",
    "conserto celular teresina",
  ],
  authors: [{ name: "Apple Company 24hs" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Apple Company 24hs",
    title: "Apple Company 24hs - Assistência Técnica Apple em Teresina-PI",
    description:
      "Assistência técnica Apple em Teresina-PI: iPhone, MacBook, iPad e Apple Watch. Técnicos certificados, peças originais, garantia e atendimento 24h.",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Apple Company 24hs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apple Company 24hs - Assistência Técnica Apple em Teresina-PI",
    description:
      "Assistência técnica Apple em Teresina-PI: iPhone, MacBook, iPad e Apple Watch. Técnicos certificados, peças originais, garantia e atendimento 24h.",
    images: ["/logo.png"],
    creator: "@applecompany24hs",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  other: {
    "geo.region": "BR-PI",
    "geo.placename": "Teresina",
    "geo.position": "-5.0892;-42.8019",
    ICBM: "-5.0892, -42.8019",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* JSON-LD: LocalBusiness focado em Teresina-PI */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Apple Company 24hs",
              image: `${SITE_URL}/logo.png`,
              url: SITE_URL,
              telephone: "+55 86 98146-4559",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Avenida Dom Severino, 1430",
                addressLocality: "Teresina",
                addressRegion: "PI",
                addressCountry: "BR",
              },
              areaServed: "Teresina, PI, Brasil",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "08:00",
                  closes: "18:00",
                },
              ],
              sameAs: [
                "https://instagram.com/applecompany24hs",
                "https://wa.me/5586981464559",
              ],
              priceRange: "$$",
              description:
                "Assistência técnica Apple (iPhone, MacBook, iPad e Apple Watch) com técnicos certificados, peças originais e atendimento 24h em Teresina-PI.",
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
