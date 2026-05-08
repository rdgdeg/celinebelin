import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "À propos", href: "#a-propos" },
  { label: "Services", href: "#services" },
  { label: "Motifs", href: "#motifs" },
  { label: "Animaux", href: "#animaux" },
  { label: "Tarifs", href: "#tarifs" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center transition-all duration-300 ${
        scrolled
          ? "bg-cream/95 backdrop-blur-xl shadow-[0_2px_20px_rgba(27,67,50,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto w-full px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#accueil"
          onClick={(e) => handleClick(e, "#accueil")}
          className="font-display text-xl font-semibold text-warm-text"
        >
          Céline Belin
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="text-sm font-medium text-warm-text-secondary hover:text-forest transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="https://www.doctena.be/fr/specialite/psychologue/celine-belin-1886103"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center px-6 py-2.5 bg-forest text-white text-sm font-semibold rounded-full hover:bg-forest-light hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(45,106,79,0.28)] transition-all duration-300"
        >
          Prendre RDV
        </a>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 text-warm-text"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-[72px] bg-cream/98 backdrop-blur-xl z-40">
          <div className="flex flex-col items-center gap-6 pt-12">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="text-lg font-medium text-warm-text hover:text-forest transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://www.doctena.be/fr/specialite/psychologue/celine-belin-1886103"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center px-8 py-3 bg-forest text-white font-semibold rounded-full"
            >
              Prendre RDV
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
