import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Poppins } from "next/font/google";
import React from "react";
import "./globals.css";
import GlassyNavbar from "@/components/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  icons: {
    icon: "/favicon_light.ico",
  },
  title: "PoC - Centre d'innovation étudiant",
  description:
    "Découvrez notre association étudiante dédiée à l’innovation et à la transformation des idées en projets concrets.",
  openGraph: {
    title: "PoC - Centre d'innovation étudiant",
    description:
      "Découvrez notre association étudiante dédiée à l’innovation et à la transformation des idées en projets concrets.",
    images: ["/og-image.jpg"],
    url: "https://www.poc-innovation.fr/",
    siteName: "POC Landing",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PoC - Centre d'innovation étudiant",
    description:
      "Découvrez notre association étudiante dédiée à l’innovation et à la transformation des idées en projets concrets.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={poppins.variable}>
      <body className="font-sans antialiased">
        <GlassyNavbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
