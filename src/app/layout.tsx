import type { Metadata } from "next";
import { Syne, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500", "600"],
});

import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "Muhammad Abdullah Butt | Senior Full-Stack AI Engineer & Architect",
  description: "Experience the world of Muhammad Abdullah Butt — Senior Full-Stack AI Engineer, Senior Architect & UI/UX Designer. Multimodal AI research, LLM pipelines, Next.js, PyTorch.",
  keywords: ["Muhammad Abdullah Butt", "Full-Stack AI Engineer", "AI Researcher", "MAPF-Lite", "Next.js Developer", "UI UX Architect"],
  authors: [{ name: "Muhammad Abdullah Butt" }],
  openGraph: {
    title: "Muhammad Abdullah Butt — Senior Full-Stack AI Engineer",
    description: "Interactive portfolio & world experience of Abdullah — AI research, job locations, live projects, and publications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${syne.variable} ${manrope.variable} ${jetbrainsMono.variable} antialiased bg-[#050505] text-[#fafafa] selection:bg-white selection:text-black`}
      >
        <div className="noise-overlay"></div>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
