import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Architecture from "@/components/Architecture";
import RoiCalculator from "@/components/RoiCalculator";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Approach from "@/components/Approach";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="top">
        <Hero />
        <Portfolio />
        <Architecture />
        <RoiCalculator />
        <Services />
        <Pricing />
        <Approach />
        <About />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
