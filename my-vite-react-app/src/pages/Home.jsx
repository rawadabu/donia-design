import Contact from "../components/Contact";
import FAQ from "../components/FAQ";
import Features from "../components/Features";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Testimonial from "../components/Testimonial";

function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Features />
      <Testimonial />
      <FAQ />
      <Contact />
    </div>
  );
}

export default Home;
