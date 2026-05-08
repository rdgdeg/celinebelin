import { Brain, Sparkles, Eye, Flower2, Target, Hand } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeader from "@/components/SectionHeader";

const services = [
  {
    icon: Brain,
    title: "TCC & Th\u00e9rapie ACT",
    description:
      "Th\u00e9rapie Cognitive et Comportementale et Th\u00e9rapie d'Acceptation et d'Engagement pour transformer vos pens\u00e9es et comportements.",
  },
  {
    icon: Sparkles,
    title: "Hypnose & Imagerie Mentale",
    description:
      "Acc\u00e9dez \u00e0 vos ressources inconscientes pour surmonter blocages, phobies et anxi\u00e9t\u00e9s en toute s\u00e9curit\u00e9.",
  },
  {
    icon: Eye,
    title: "EMDR",
    description:
      "D\u00e9sensibilisation par mouvements oculaires pour traiter les traumatismes, stress post-traumatique et angoisses.",
  },
  {
    icon: Flower2,
    title: "Fleurs de Bach",
    description:
      "Conseil en \u00e9lixirs floraux pour r\u00e9tablir l'\u00e9quilibre \u00e9motionnel de mani\u00e8re naturelle et douce.",
  },
  {
    icon: Target,
    title: "Coaching de Vie",
    description:
      "Love coaching, job coaching et accompagnement personnalis\u00e9 pour atteindre vos objectifs personnels et professionnels.",
  },
  {
    icon: Hand,
    title: "EFT",
    description:
      "Technique de lib\u00e9ration \u00e9motionnelle par tapotage pour soulager stress, anxi\u00e9t\u00e9 et \u00e9motions bloquantes.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-cream">
      <div className="max-w-[1200px] mx-auto px-6">
        <ScrollReveal>
          <SectionHeader
            label="Mes sp\u00e9cialit\u00e9s"
            title="Services de psychologie"
            subtitle="De la th\u00e9rapie br\u00e8ve aux approches compl\u00e9mentaires, chaque parcours est unique"
          />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(({ icon: Icon, title, description }, i) => (
            <ScrollReveal key={title} delay={i * 0.1}>
              <div className="group bg-white rounded-2xl p-8 border border-warm-border/80 shadow-[0_6px_28px_rgba(27,67,50,0.07)] hover:border-forest/25 hover:shadow-[0_14px_40px_rgba(27,67,50,0.12)] hover:-translate-y-1 transition-all duration-300 h-full">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-forest/12 to-sage/10 flex items-center justify-center mb-5 group-hover:from-forest/18 group-hover:to-sage/15 transition-colors">
                  <Icon size={28} className="text-forest" />
                </div>
                <h3 className="font-display text-xl font-semibold text-warm-text mb-3">
                  {title}
                </h3>
                <p className="text-sm text-warm-text-secondary leading-relaxed">
                  {description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
