import { Check } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeader from "@/components/SectionHeader";

const plans = [
  {
    title: "Consultation",
    price: "65€",
    accent: "forest",
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
    accent: "forest",
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
    accent: "sage",
    features: [
      "Reiki, Lahochi, Kinésiologie",
      "Fleurs de Bach",
      "En présentiel ou à distance",
      "Sur photo et nom de l'animal",
    ],
    cta: "En savoir plus",
    href: "#animaux",
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
                className={`relative bg-white rounded-2xl p-10 border border-warm-border/60 shadow-[0_6px_28px_rgba(27,67,50,0.07)] h-full flex flex-col ${
                  plan.featured
                    ? "border-2 border-forest scale-[1.02] lg:scale-105"
                    : ""
                }`}
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-forest text-white text-xs font-semibold uppercase tracking-wider rounded-full">
                    Populaire
                  </span>
                )}

                <h3 className="font-display text-xl font-semibold text-warm-text text-center mb-2">
                  {plan.title}
                </h3>

                <div className="text-center mb-6">
                  <span
                    className={`font-display text-5xl font-bold ${
                      plan.accent === "sage" ? "text-sage" : "text-forest"
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
                          plan.accent === "sage" ? "text-sage mt-0.5" : "text-forest mt-0.5"
                        }
                      />
                      <span className="text-sm text-warm-text-secondary">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={plan.href}
                  target={plan.href.startsWith("http") ? "_blank" : undefined}
                  rel={plan.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`block text-center px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 ${
                    plan.featured
                      ? "bg-forest text-white hover:bg-forest-light hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(45,106,79,0.28)]"
                      : plan.accent === "sage"
                      ? "border-2 border-sage text-sage hover:bg-sage hover:text-white"
                      : "border-2 border-forest text-forest hover:bg-forest hover:text-white"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
