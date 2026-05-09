import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSection from "@/sections/HeroSection";
import BlogSection from "@/sections/BlogSection";
import AboutSection from "@/sections/AboutSection";
import ServicesSection from "@/sections/ServicesSection";
import MotifsSection from "@/sections/MotifsSection";
import AnimalsSection from "@/sections/AnimalsSection";
import TarifsSection from "@/sections/TarifsSection";
import ContactSection from "@/sections/ContactSection";

export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      <main>
        <HeroSection />
        <BlogSection />
        <AboutSection />
        <ServicesSection />
        <MotifsSection />
        <AnimalsSection />
        <TarifsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
