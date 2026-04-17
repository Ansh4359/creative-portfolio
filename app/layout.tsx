import type { Metadata } from "next";
import { Inter, Playfair_Display, Caveat, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "./providers";
import { ClientCommandPalette } from "../components/ClientCommandPalette";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Ansh Singh Kushwaha | Creative Developer",
  description:
    "Crafting beautiful, immersive web experiences — engineering meets art, animations. Solving Real World Problems.",
  openGraph: {
    type: "website",
    url: "https://ansh-dev.me",
    siteName: "Ansh Singh Kushwaha",
    title: "Ansh Singh Kushwaha | Creative Developer",
    description:
      "Crafting beautiful, immersive web experiences — engineering meets art, animations. Solving Real World Problems.",
    images: ["https://ansh-dev.me/og-preview.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ansh Singh Kushwaha | Creative Developer",
    description:
      "Crafting beautiful, immersive web experiences — engineering meets art, animations. Solving Real World Problems.",
    images: ["https://ansh-dev.me/og-preview.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${caveat.variable} ${jetbrains.variable} h-full dark`}
    >
      <head>
        <link rel="icon" type="image/png" href="/Favicon.png" />
      </head>
      <body className="min-h-full flex flex-col bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
        <ThemeProvider>
          {children}
          <ClientCommandPalette />
        </ThemeProvider>
      </body>
    </html>
  );
}