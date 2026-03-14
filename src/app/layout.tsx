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
  title: siteData.name,
  description: siteData.titleDesc,
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
