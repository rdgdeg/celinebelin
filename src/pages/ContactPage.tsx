import { useLayoutEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import MobileCtaBar from "@/components/MobileCtaBar";
import ContactSection from "@/sections/ContactSection";

export default function ContactPage() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      <main>
        <ContactSection />
      </main>
      <Footer />
      <MobileCtaBar />
    </div>
  );
}
