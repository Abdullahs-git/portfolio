import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://muhammadabdullahbutt.me"),
  title: "Muhammad Abdullah Butt — Senior Full-Stack AI Engineer & Researcher",
  description:
    "Senior Full Stack AI Engineer & Published Researcher. Architecting scalable platforms and parameter-efficient deepfake detection frameworks. Published in Springer Nature.",
  keywords: [
    "Full Stack Engineer",
    "AI Researcher",
    "MAPF-Lite",
    "Springer Nature",
    "Next.js",
    "React",
    "TypeScript",
    "Machine Learning",
    "LLM",
    "Deepfake Detection",
  ],
  authors: [{ name: "Muhammad Abdullah Butt" }],
  openGraph: {
    title: "Muhammad Abdullah Butt — Senior Full-Stack AI Engineer",
    description:
      "Published AI researcher. Architecting scalable platforms and parameter-efficient detection frameworks.",
    url: "https://muhammadabdullahbutt.me",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://muhammadabdullahbutt.me/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Muhammad Abdullah Butt — Senior Full-Stack AI Engineer & Researcher",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Abdullah Butt — Senior Full-Stack AI Engineer",
    description:
      "Published AI researcher. Architecting scalable platforms and parameter-efficient detection frameworks.",
    images: ["https://muhammadabdullahbutt.me/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://db.onlinewebfonts.com/c/5ac3fe7c6abd2f62067f266d89671492?family=HelveticaNowDisplay-Medium"
        />
        <link
          rel="stylesheet"
          href="https://db.onlinewebfonts.com/c/1aa3377e489837a26d019bba501e779d?family=HelveticaNowDisplayW01-Rg"
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased font-sans`}
      >
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
              url: "https://muhammadabdullahbutt.me",
              sameAs: [
                "https://linkedin.com/in/muhammadabdullahbutt",
                "https://github.com/Abdullahs-git",
              ],
              knowsAbout: [
                "Artificial Intelligence",
                "Machine Learning",
                "Full Stack Development",
                "Deepfake Detection",
                "LLM Engineering",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
