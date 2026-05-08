import { Brain, Sparkles, Eye, Flower2, Target, Hand } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeader from "@/components/SectionHeader";

const services = [
  {
    icon: Brain,
    title: "TCC & Thérapie ACT",
    description:
      "Thérapie Cognitive et Comportementale et Thérapie d'Acceptation et d'Engagement pour transformer vos pensées et comportements.",
  },
  {
    icon: Sparkles,
    title: "Hypnose & Imagerie Mentale",
    description:
      "Accédez à vos ressources inconscientes pour surmonter blocages, phobies et anxiétés en toute sécurité.",
  },
  {
    icon: Eye,
    title: "EMDR",
    description:
      "Désensibilisation par mouvements oculaires pour traiter les traumatismes, stress post-traumatique et angoisses.",
  },
  {
    icon: Flower2,
    title: "Fleurs de Bach",
    description:
      "Conseil en élixirs floraux pour rétablir l'équilibre émotionnel de manière naturelle et douce.",
  },
  {
    icon: Target,
    title: "Coaching de Vie",
    description:
      "Love coaching, job coaching et accompagnement personnalisé pour atteindre vos objectifs personnels et professionnels.",
  },
  {
    icon: Hand,
    title: "EFT",
    description:
      "Technique de libération émotionnelle par tapotage pour soulager stress, anxiété et émotions bloquantes.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-cream">
      <div className="max-w-[1200px] mx-auto px-6">
        <ScrollReveal>
          <SectionHeader
            label="Mes spécialités"
            title="Services de psychologie"
            subtitle="De la thérapie brève aux approches complémentaires, chaque parcours est unique"
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
