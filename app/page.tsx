import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { Stakes } from "@/components/sections/Stakes";
import { Guide } from "@/components/sections/Guide";
import { Plan } from "@/components/sections/Plan";
import { Products } from "@/components/sections/Products";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <Stakes />
        <Guide />
        <Plan />
        <Products />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
