const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "À propos", href: "#a-propos" },
  { label: "Services", href: "#services" },
  { label: "Animaux", href: "#animaux" },
  { label: "Tarifs", href: "#tarifs" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Psychologie",
  "Hypnose",
  "EMDR",
  "Fleurs de Bach",
  "Coaching",
  "Soins Animaux",
];

export default function Footer() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-forest-dark text-white">
      <div className="max-w-[1200px] mx-auto px-6 pt-16 pb-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Logo */}
          <div>
            <h3 className="font-display text-xl font-semibold text-white mb-1">
              Céline Belin
            </h3>
            <p className="text-sm text-warm-text-light mb-3">
              Psychologue &amp; Bien-Être
            </p>
            <p className="text-sm text-white/50 leading-relaxed">
              Accompagnement bienveillant vers votre mieux-être.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Navigation
            </h4>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Services
            </h4>
            <ul className="flex flex-col gap-2.5">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm text-white/60">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Contact
            </h4>
            <ul className="flex flex-col gap-2.5">
              <li className="text-sm text-white/60">0479/46.24.29</li>
              <li className="text-sm text-white/60">celine.belin@gmail.com</li>
              <li className="text-sm text-white/60">
                Silly, Mons, Péruwelz, Bernissart
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-[13px] text-white/40">
            &copy; 2026 Céline Belin &mdash; Psychologue &amp; Bien-Être. Tous
            droits réservés.
          </p>
          <p className="text-xs text-white/30 mt-1">
            Agréée par la Commission des Psychologues
          </p>
        </div>
      </div>
    </footer>
  );
}
