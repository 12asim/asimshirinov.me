import type { Metadata } from "next";
import { Atkinson_Hyperlegible } from "next/font/google";
import "./globals.css";
import { siteData } from "@/data/site";

const atkinson = Atkinson_Hyperlegible({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-atkinson",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://asimshirinov.me"),
  title: "Asim Shirinov",
  description:
    "Asim Shirinov — Computer Science student at Clarkson University. Explore projects, research in machine learning & PFAS detection, blog posts, and more.",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Asim Shirinov",
    description:
      "Asim Shirinov — Computer Science student at Clarkson University. Explore projects, research in machine learning & PFAS detection, blog posts, and more.",
    url: "https://asimshirinov.me",
    siteName: "Asim Shirinov",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Asim Shirinov",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Asim Shirinov",
    description:
      "Asim Shirinov — Computer Science student at Clarkson University. Explore projects, research in machine learning & PFAS detection, blog posts, and more.",
    images: ["/og-image.jpg"],
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
        className={`${atkinson.variable} font-sans bg-[#fbfbf9] text-slate-800 antialiased min-h-screen selection:bg-blue-200 selection:text-blue-900`}
      >
        <main className="max-w-[760px] mx-auto px-6 py-16 md:py-24 space-y-20">
          {children}
        </main>
      </body>
    </html>
  );
}
