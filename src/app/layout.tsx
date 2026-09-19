import type { Metadata } from "next";
import "./globals.css";
import { display, mono } from "@/lib/fonts";
import { MK } from "@/data/mk";

const SITE = "https://muhammadabdullahbutt.me";
const TITLE = `${MK.identity.name} — ${MK.identity.role}`;
const DESCRIPTION =
  "Senior web designer and UI/UX developer. Research, interface design, design systems and production front-end, carried from the first sketch to the browser.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "Senior Web Designer",
    "UI/UX Developer",
    "Product Design",
    "Design Systems",
    "Front-end Developer",
    "Next.js",
    "React",
    "Three.js",
    "Portfolio",
  ],
  authors: [{ name: MK.identity.name }],
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: `${SITE}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: TITLE,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [`${SITE}/og-image.jpg`],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${mono.variable} antialiased`}>
        {children}

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: MK.identity.name,
              jobTitle: MK.identity.role,
              url: SITE,
              email: MK.identity.email,
              sameAs: [MK.identity.linkedin, MK.identity.github],
              knowsAbout: [
                "User Experience Design",
                "User Interface Design",
                "Design Systems",
                "Front-end Development",
                "Web Design",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
