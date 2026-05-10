import { useLayoutEffect } from "react";
import { useLocation } from "react-router";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import MobileCtaBar from "@/components/MobileCtaBar";
import HeroSection from "@/sections/HeroSection";
import BlogSection from "@/sections/BlogSection";
import AboutSection from "@/sections/AboutSection";
import ServicesSection from "@/sections/ServicesSection";
import MotifsSection from "@/sections/MotifsSection";
import AnimalsSection from "@/sections/AnimalsSection";
import TarifsSection from "@/sections/TarifsSection";
import ContactSection from "@/sections/ContactSection";

export default function Landing() {
  const location = useLocation();

  useLayoutEffect(() => {
    const raw = location.hash.replace(/^#/, "");
    const refresh = () => ScrollTrigger.refresh();
    if (!raw) {
      refresh();
      return;
    }
    const el = document.getElementById(raw);
    if (el) {
      requestAnimationFrame(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        requestAnimationFrame(refresh);
      });
    } else refresh();
  }, [location.hash, location.pathname]);

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
      <MobileCtaBar />
    </div>
  );
}
