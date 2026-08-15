import type { Metadata } from "next";
import { Fredoka, Nunito, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { cn } from "@/lib/utils";

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-fredoka",
  weight: ["300", "400", "500", "600", "700"],
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Muhammad Abdullah Butt | Senior Full-Stack AI Engineer & Researcher",
  description:
    "Portfolio of Muhammad Abdullah Butt - Senior Full-Stack AI Engineer, published researcher (Springer Nature), and architect of scalable systems.",
  keywords: [
    "Full Stack Engineer",
    "AI Researcher",
    "Next.js",
    "React",
    "TypeScript",
    "Machine Learning",
    "LLM",
    "Portfolio",
  ],
  authors: [{ name: "Muhammad Abdullah Butt" }],
  openGraph: {
    title: "Muhammad Abdullah Butt | Senior Full-Stack AI Engineer",
    description:
      "Published AI researcher. Architecting scalable systems.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Abdullah Butt | Senior Full-Stack AI Engineer",
    description:
      "Published AI researcher. Architecting scalable systems.",
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
        className={cn(
          fredoka.variable,
          nunito.variable,
          jetbrainsMono.variable,
          "antialiased bg-background text-text-primary font-body selection:bg-accent-primary selection:text-white"
        )}
      >
        <div className="noise-overlay"></div>
        <SmoothScroll>{children}</SmoothScroll>

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Muhammad Abdullah Butt",
              jobTitle: "Senior Full-Stack AI Engineer",
              url: "https://abdullahbutt.dev",
              sameAs: [
                "https://linkedin.com/in/muhammadabdullahbutt",
                "https://github.com/Abdullahs-git",
              ],
              knowsAbout: [
                "Artificial Intelligence",
                "Machine Learning",
                "Full Stack Development",
                "React",
                "Next.js",
                "Python",
                "TypeScript",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
