import Contact from "../components/Contact";
import FAQ from "../components/FAQ";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Logos from "../components/Logos";
import Testimonial from "../components/Testimonial";

function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Logos />
      <Features />
      <Testimonial />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
