import type { Metadata } from "next";
import { Anton, Barlow, Barlow_Condensed, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CallBar from "@/components/CallBar";
import { BUSINESS } from "@/lib/business";

const display = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

const stencil = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  variable: "--font-stencil",
  display: "swap",
});

const sans = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: {
    default: `${BUSINESS.name} | Heizung, Sanitär, Solar im Saarland`,
    template: `%s | ${BUSINESS.name}`,
  },
  description:
    "GD D'Acquino GmbH in Saarbrücken. Meisterbetrieb für Heizung, Sanitär, Lüftung und Solar. Komplettes Saarland und Teile Rheinland-Pfalz.",
  openGraph: {
    title: `${BUSINESS.name} | Heizung, Sanitär, Solar`,
    description:
      "Meisterbetrieb aus Saarbrücken. Heizungsmodernisierung, Wohlfühl-Bäder, Photovoltaik und Wärmepumpen aus einer Hand.",
    locale: "de_DE",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="de"
      className={`${display.variable} ${stencil.variable} ${sans.variable} ${mono.variable}`}
    >
      <body className="font-sans antialiased">
        <Nav />
        <main className="relative">{children}</main>
        <Footer />
        <CallBar />
      </body>
    </html>
  );
}
