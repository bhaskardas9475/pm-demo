import About from "@/components/About";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import Carousel from "@/components/Carousel";
import Contact from "@/components/Contact";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Feature from "@/components/Features";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Hero from "@/components/Hero";
import Integration from "@/components/Integration";
import NewLauch from "@/components/NewLauch";
import Testimonial from "@/components/Testimonial";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Property Matrimony",
  description: "At Property Matrimony, we are dedicated to transforming the real estate experience for our clients As a premier real estate platform, we specialize in offering a wide range of premium plots, villas, and apartments, tailored to meet the diverse needs of our discerning clientele. Backed by a committed team of professionals, we leverage advanced technology and comprehensive market insights to guide our clients through every step of their property journey—from the initial search to the final possession.",
  // other metadata
};

export default function Home() {
  return (
    <main>
      <Carousel/>
      <NewLauch/>
      <Hero />
      <Brands />
      <Feature />
      <About />
      <FunFact />
      <Testimonial />
      <CTA />
      <Blog />
      <Contact />
      <FAQ />
    </main>
  );
}
