import { Link } from "react-router";
import { Check } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeader from "@/components/SectionHeader";

const plans = [
  {
    title: "Consultation",
    price: "65€",
    accent: "brand" as const,
    features: [
      "Durée: 50-60 minutes",
      "En cabinet ou visioconférence",
      "Silly, Mons, Péruwelz, Bernissart",
      "Remboursement mutuelle possible",
    ],
    cta: "Prendre RDV",
    href: "https://www.doctena.be/fr/specialite/psychologue/celine-belin-1886103",
    featured: false,
  },
  {
    title: "Coaching de Vie",
    price: "60€",
    accent: "brand" as const,
    features: [
      "Durée: 50-60 minutes",
      "Love coaching, Job coaching",
      "Objectifs personnels & professionnels",
      "En cabinet ou visioconférence",
    ],
    cta: "Prendre RDV",
    href: "https://www.doctena.be/fr/specialite/psychologue/celine-belin-1886103",
    featured: true,
  },
  {
    title: "Soins Animaux",
    price: "45€",
    accent: "lavender" as const,
    features: [
      "Reiki, Lahochi, Kinésiologie",
      "Fleurs de Bach",
      "En présentiel ou à distance",
      "Sur photo et nom de l'animal",
    ],
    cta: "En savoir plus",
    href: "/#animaux",
    featured: false,
  },
];

export default function TarifsSection() {
  return (
    <section id="tarifs" className="py-24 bg-cream">
      <div className="max-w-[1200px] mx-auto px-6">
        <ScrollReveal>
          <SectionHeader
            label="Tarifs"
            title="Mes honoraires"
            subtitle="Des tarifs transparents adaptés à chaque accompagnement"
          />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <ScrollReveal key={plan.title} delay={i * 0.15}>
              <div
                className={`relative bg-white rounded-2xl p-10 border border-warm-border/60 shadow-card h-full flex flex-col ${
                  plan.featured
                    ? "border-2 border-brand scale-[1.02] lg:scale-105"
                    : ""
                }`}
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-brand text-white text-xs font-semibold uppercase tracking-wider rounded-full">
                    Populaire
                  </span>
                )}

                <h3 className="font-display text-xl font-semibold text-warm-text text-center mb-2">
                  {plan.title}
                </h3>

                <div className="text-center mb-6">
                  <span
                    className={`font-display text-5xl font-bold ${
                      plan.accent === "lavender" ? "text-lavender" : "text-brand"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span className="text-warm-text-secondary text-sm"> / séance</span>
                </div>

                <ul className="flex flex-col gap-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check
                        size={18}
                        className={
                          plan.accent === "lavender"
                            ? "text-lavender mt-0.5"
                            : "text-brand mt-0.5"
                        }
                      />
                      <span className="text-sm text-warm-text-secondary">{feature}</span>
                    </li>
                  ))}
                </ul>

                {plan.href.startsWith("/#") ? (
                  <Link
                    to={plan.href}
                    className={`block text-center px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 ${
                      plan.featured
                        ? "bg-brand text-white hover:bg-brand-light hover:-translate-y-0.5 hover:shadow-cta"
                        : plan.accent === "lavender"
                          ? "border-2 border-lavender text-lavender hover:bg-lavender hover:text-white"
                          : "border-2 border-brand text-brand hover:bg-brand hover:text-white"
                    }`}
                  >
                    {plan.cta}
                  </Link>
                ) : (
                  <a
                    href={plan.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block text-center px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 ${
                      plan.featured
                        ? "bg-brand text-white hover:bg-brand-light hover:-translate-y-0.5 hover:shadow-cta"
                        : plan.accent === "lavender"
                          ? "border-2 border-lavender text-lavender hover:bg-lavender hover:text-white"
                          : "border-2 border-brand text-brand hover:bg-brand hover:text-white"
                    }`}
                  >
                    {plan.cta}
                  </a>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
