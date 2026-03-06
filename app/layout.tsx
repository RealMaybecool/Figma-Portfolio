import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";

const poppins = Poppins({
  weight: ["300","400","500","600","700","800","900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Maybecool - Advanced Roblox Lua Scripter",
  description:
    "Maybecool is an advanced self-taught Roblox Lua scripter specializing in game systems, scripting, and performance-focused Roblox development. Creating scalable mechanics, UI systems, and gameplay features.",

  keywords: [
    "Maybecool",
    "Roblox Scripter",
    "Roblox Lua Developer",
    "Lua Scripting",
    "Roblox Game Developer",
    "Roblox Systems Developer",
    "Roblox Portfolio",
    "Roblox Programming",
  ],

  authors: [{ name: "Maybecool" }],
  creator: "Maybecool",
  publisher: "Maybecool",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://maybecool.dev",
    title: "Maybecool - Advanced Roblox Lua Scripter",
    description:
      "Portfolio of Maybecool, an advanced Roblox Lua scripter building game systems, mechanics, and optimized gameplay features.",
    siteName: "Maybecool Roblox Portfolio",
  },

  twitter: {
    card: "summary_large_image",
    title: "Maybecool - Advanced Roblox Lua Scripter",
    description:
      "Explore Roblox Lua scripting projects, systems, and development work by Maybecool.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://maybecool.dev" />
      </head>

      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
