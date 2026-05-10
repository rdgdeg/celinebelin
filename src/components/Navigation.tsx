import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { Menu, X } from "lucide-react";

const DOCTENA =
  "https://www.doctena.be/fr/specialite/psychologue/celine-belin-1886103";

const navLinks = [
  { label: "Accueil", to: "/#accueil" },
  { label: "À propos", to: "/#a-propos" },
  { label: "Services", to: "/#services" },
  { label: "Motifs", to: "/#motifs" },
  { label: "Blog", to: "/#blog" },
  { label: "Animaux", to: "/#animaux" },
  { label: "Tarifs", to: "/#tarifs" },
  { label: "Contact", to: "/contact" },
] as const;

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobilePanelRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;

    const panel = mobilePanelRef.current;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setMobileOpen(false);
        menuButtonRef.current?.focus();
        return;
      }
      if (e.key !== "Tab" || !panel) return;

      const focusable = panel.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])'
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    requestAnimationFrame(() => firstLinkRef.current?.focus());

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [mobileOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center transition-all duration-300 ${
        scrolled
          ? "bg-cream/95 backdrop-blur-xl shadow-nav"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto w-full px-6 flex items-center justify-between">
        <Link
          to="/#accueil"
          className="font-display text-xl font-semibold text-warm-text"
          onClick={() => setMobileOpen(false)}
        >
          Céline Belin
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm font-medium text-warm-text-secondary hover:text-brand transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <a
          href={DOCTENA}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center px-6 py-2.5 bg-brand text-white text-sm font-semibold rounded-full hover:bg-brand-light hover:-translate-y-0.5 hover:shadow-cta transition-all duration-300"
        >
          Prendre RDV
        </a>

        <button
          ref={menuButtonRef}
          type="button"
          className="lg:hidden p-2 text-warm-text"
          onClick={() => setMobileOpen((o) => !o)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav-panel"
          aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {mobileOpen ? <X size={24} aria-hidden /> : <Menu size={24} aria-hidden />}
        </button>
      </div>

      {mobileOpen && (
        <div
          ref={mobilePanelRef}
          id="mobile-nav-panel"
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navigation"
          className="lg:hidden fixed inset-0 top-[72px] bg-cream/98 backdrop-blur-xl z-40"
        >
          <div className="flex flex-col items-center gap-6 pt-12">
            {navLinks.map((link, i) => (
              <Link
                key={link.to}
                ref={i === 0 ? firstLinkRef : undefined}
                to={link.to}
                className="text-lg font-medium text-warm-text hover:text-brand transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={DOCTENA}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center px-8 py-3 bg-brand text-white font-semibold rounded-full"
              onClick={() => setMobileOpen(false)}
            >
              Prendre RDV
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
