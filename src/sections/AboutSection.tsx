import { Award, Brain, Sparkles, Eye, Flower2, Target } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeader from "@/components/SectionHeader";

const certifications = [
  { icon: Award, text: "Psychologue agr\u00e9e" },
  { icon: Brain, text: "TCC & Th\u00e9rapie ACT" },
  { icon: Sparkles, text: "Hypnose Ericksonienne" },
  { icon: Eye, text: "EMDR" },
  { icon: Flower2, text: "Fleurs de Bach" },
  { icon: Target, text: "Coach de vie" },
];

export default function AboutSection() {
  return (
    <section id="a-propos" className="py-24 bg-cream-alt">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-[45%_55%] gap-12 items-center">
          {/* Left: Image */}
          <ScrollReveal direction="left" distance={30}>
            <div className="relative">
              <div className="absolute -top-5 -left-5 w-20 h-20 rounded-full bg-forest/15 -z-10" />
              <img
                src="/images/about.jpg"
                alt="C\u00e9line Belin en consultation"
                className="rounded-2xl w-full object-cover shadow-lg"
                loading="lazy"
              />
            </div>
          </ScrollReveal>

          {/* Right: Content */}
          <div>
            <ScrollReveal>
              <SectionHeader
                label="\u00c0 propos de moi"
                title="C\u00e9line Belin"
                align="left"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="text-warm-text-secondary leading-relaxed mb-4">
                Psychologue agr\u00e9e par la Commission des Psychologues, dipl\u00f4m\u00e9e d'un
                master en sciences psychologiques et neuropsychologiques de l'Universit\u00e9 de
                Trois-Rivi\u00e8res (Qu\u00e9bec) et de l'Universit\u00e9 de Mons.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-warm-text-secondary leading-relaxed mb-4">
                Je me suis form\u00e9e en psychoth\u00e9rapie via un certificat de 3 ans \u00e0
                l'UCLouvain en psychoth\u00e9rapie int\u00e9grative (orientation TCC). Curieuse de
                nature, j'ai enrichi ma bo\u00eete \u00e0 outils avec de nombreuses formations
                compl\u00e9mentaires.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="text-warm-text-secondary leading-relaxed mb-8">
                Je propose des consultations <strong>en cabinet</strong>, en{" "}
                <strong>visioconf\u00e9rence</strong> et en{" "}
                <strong>walking therapy</strong> (s\u00e9ances en ext\u00e9rieur \u00e0 la for\u00eat
                de Bonsecours, Stambruges ou le long du canal).
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {certifications.map(({ icon: Icon, text }) => (
                  <div
                    key={text}
                    className="flex items-center gap-3 p-3 bg-white/80 border border-warm-border/60 rounded-xl shadow-sm"
                  >
                    <div className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-forest" />
                    </div>
                    <span className="text-sm font-medium text-warm-text">{text}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
