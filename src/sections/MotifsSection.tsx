import { User, Zap, Flame, CloudRain, AlertTriangle, Heart } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeader from "@/components/SectionHeader";

const motifs = [
  {
    icon: User,
    title: "Connaissance de soi",
    description:
      "Se découvrir, comprendre ses aspirations, ses forces et ses faiblesses à l'adolescence ou à l'âge adulte.",
  },
  {
    icon: Zap,
    title: "Stress & Anxiété",
    description:
      "Le stress est une réaction physiologique aux situations perçues comme dangereuses. Apprenez à le gérer efficacement.",
  },
  {
    icon: Flame,
    title: "Burn-out",
    description:
      "Épuisement professionnel ou familial se manifestant par fatigue, difficultés de concentration et perturbations du sommeil.",
  },
  {
    icon: CloudRain,
    title: "Dépression",
    description:
      "Perte de plaisir, démotivation, perte de sens et sentiment de désespoir après un événement difficile.",
  },
  {
    icon: AlertTriangle,
    title: "Phobies",
    description:
      "Peurs irrationnelles des chiens, araignées, serpents, piqûres... Traitement par hypnose, EMDR et TCC.",
  },
  {
    icon: Heart,
    title: "Deuil & Séparation",
    description:
      "Accompagnement dans le processus de deuil, la perte d'un proche ou la séparation affective.",
  },
];

export default function MotifsSection() {
  return (
    <section
      id="motifs"
      className="relative py-24 overflow-hidden bg-gradient-to-br from-forest-dark via-forest to-forest-light"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="max-w-[1200px] mx-auto px-6 relative">
        <ScrollReveal>
          <SectionHeader
            label="Pour quelle raison ?"
            title="Motifs de consultation"
            light
          />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {motifs.map(({ icon: Icon, title, description }, i) => (
            <ScrollReveal key={title} delay={i * 0.1}>
              <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-7 hover:bg-white/15 hover:-translate-y-1 transition-all duration-300 h-full">
                <Icon size={32} className="text-white/80 mb-4" />
                <h3 className="font-display text-lg font-semibold text-white mb-2">{title}</h3>
                <p className="text-sm text-white/75 leading-relaxed">{description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
