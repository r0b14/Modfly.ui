import type { Metadata } from "next";
import { Geist, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  weight: "400",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Modfy UI — Components built for learning",
  description: "Uma biblioteca de componentes React disruptiva para e-learning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <div className="grain" aria-hidden="true" />
        <div className="tint-layer" aria-hidden="true" />
        <div className="color-rail in" aria-hidden="true">
          <span style={{ background: "var(--blue)", transitionDelay: "0s" }}></span>
          <span style={{ background: "var(--green)", transitionDelay: "0.08s" }}></span>
          <span style={{ background: "var(--orange)", transitionDelay: "0.16s" }}></span>
          <span style={{ background: "var(--yellow)", transitionDelay: "0.24s" }}></span>
          <span style={{ background: "var(--pink)", transitionDelay: "0.32s" }}></span>
          <span style={{ background: "var(--purple)", transitionDelay: "0.40s" }}></span>
        </div>
        {children}
      </body>
    </html>
  );
}
