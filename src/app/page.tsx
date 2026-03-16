import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Blog } from "@/components/Blog";
import { Footer } from "@/components/Footer";
import { siteData } from "@/data/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const socialLabels = new Set(["github", "linkedin", "instagram"]);
const sameAs = siteData.socials
  .filter((s) => socialLabels.has(s.label.toLowerCase()))
  .map((s) => s.href);

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Asim Shirinov",
  url: "https://asimshirinov.me",
  image: "https://asimshirinov.me/og-image.jpg",
  jobTitle: "Computer Science Student",
  affiliation: {
    "@type": "CollegeOrUniversity",
    name: "Clarkson University",
    url: "https://www.clarkson.edu/",
  },
  sameAs,
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <div className="flex flex-col gap-10">
        <About />
        <Blog />
      </div>
      <Footer />
    </>
  );
}
