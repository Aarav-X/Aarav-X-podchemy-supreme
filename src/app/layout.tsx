import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { AmbientBackground } from "@/components/ambient-background";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Podchemy | Insightful Notes from Podcasts You Love",
  description:
    "Transform your podcast listening experience. Get beautifully curated notes, key insights, and transcripts from the world's best podcasts.",
  keywords: [
    "podcast notes",
    "podcast summaries",
    "podcast transcripts",
    "podcast insights",
  ],
  authors: [{ name: "Podchemy" }],
  openGraph: {
    title: "Podchemy | Insightful Notes from Podcasts You Love",
    description:
      "Transform your podcast listening experience with beautifully curated notes and insights.",
    type: "website",
    locale: "en_US",
    siteName: "Podchemy",
  },
  twitter: {
    card: "summary_large_image",
    title: "Podchemy | Podcast Notes & Insights",
    description:
      "Transform your podcast listening experience with beautifully curated notes and insights.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body>
        <AmbientBackground />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
