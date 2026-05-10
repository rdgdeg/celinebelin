import { Link } from "react-router";

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

const services = [
  "Psychologie",
  "Hypnose",
  "EMDR",
  "Fleurs de Bach",
  "Coaching",
  "Soins Animaux",
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="max-w-[1200px] mx-auto px-6 pt-16 pb-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
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

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Navigation
            </h4>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

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

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 border-t border-white/10 pt-6 text-[13px] text-white/50">
          <Link to="/mentions-legales" className="hover:text-white transition-colors">
            Mentions légales
          </Link>
          <Link
            to="/politique-confidentialite"
            className="hover:text-white transition-colors"
          >
            Politique de confidentialité
          </Link>
        </div>

        <div className="border-t border-white/10 pt-6 mt-6 text-center">
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
