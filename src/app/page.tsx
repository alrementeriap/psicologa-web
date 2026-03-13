import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import About from "@/components/About";
import Services from "@/components/Services";
import WhoItsFor from "@/components/WhoItsFor";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main id="top">
      <Header />
      <Hero />
      <TrustBar />
      <About />
      <Services />
      <WhoItsFor />
      <Process />
      <FAQ />
      <FinalCTA />
      <ContactForm />
      <Footer />
    </main>
  );
}