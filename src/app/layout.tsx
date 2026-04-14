import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/layout/JsonLd";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://eduprosport.com"),
  title: {
    default: "HDC Europe — Internationally Certified Hockey Performance System",
    template: "%s | HDC Europe",
  },
  description:
    "From coach preparation through player education to measurable performance growth. Join the leading hockey development program in Europe.",
  keywords: [
    "hockey coaching certification",
    "ice hockey training",
    "player development",
    "coaching courses Europe",
    "HDC Europe",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://eduprosport.com",
    siteName: "HDC Europe",
    title: "HDC Europe — Internationally Certified Hockey Performance System",
    description:
      "From coach preparation through player education to measurable performance growth.",
    images: [
      {
        url: "/images/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "HDC Europe — Hockey Performance System",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HDC Europe — Hockey Performance System",
    description:
      "From coach preparation through player education to measurable performance growth.",
    images: ["/images/og-image.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">
        <JsonLd />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
