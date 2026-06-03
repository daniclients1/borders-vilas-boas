import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Family } from "@/components/Family";
import { Values } from "@/components/Values";
import { Pack } from "@/components/Pack";
import { HowItWorks } from "@/components/HowItWorks";
import { Puppies } from "@/components/Puppies";
import { Testimonials } from "@/components/Testimonials";
import { Gallery } from "@/components/Gallery";
import { Faq } from "@/components/Faq";
import { Contact } from "@/components/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Family />
      <Values />
      <Pack />
      <HowItWorks />
      <Puppies />
      <Testimonials />
      <Gallery />
      <Faq />
      <Contact />
    </>
  );
}
