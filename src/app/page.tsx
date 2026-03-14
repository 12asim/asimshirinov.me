import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Blog } from "@/components/Blog";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="flex flex-col gap-10">
        <About />
        <Blog />
      </div>
      <Footer />
    </>
  );
}
