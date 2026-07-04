import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Works from "@/components/Works";
import Services from "@/components/Services";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Works />
      <Services />
      <CtaBand />
      <Footer />
    </main>
  );
}
