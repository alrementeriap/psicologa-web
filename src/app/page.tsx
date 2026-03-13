import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TrustBar from "@/components/TrustBar";
import ArtDivider from "@/components/ArtDivider";
import Services from "@/components/Services";
import WhoItsFor from "@/components/WhoItsFor";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main id="top" className="pt-[84px]">
      <Header />
      <Hero />
      <About />
      <TrustBar />
      <ArtDivider />
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