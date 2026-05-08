import ScrollReveal from "@/components/ScrollReveal";

const animalServices = [
  {
    title: "Reiki pour animaux",
    description:
      "M\u00e9thode douce pour apaiser et \u00e9quilibrer l'\u00e9nergie, en pr\u00e9sentiel ou \u00e0 distance.",
  },
  {
    title: "Lahochi & 13\u00e8me octave",
    description:
      "\u00c9nergie de haute fr\u00e9quence pour le bien-\u00eatre \u00e9motionnel profond.",
  },
  {
    title: "Massages (Kin\u00e9siologie)",
    description: "D\u00e9tente et soulagement des tensions musculaires.",
  },
  {
    title: "Fleurs de Bach pour animaux",
    description:
      "\u00c9quilibre \u00e9motionnel naturel contre troubles comportementaux.",
  },
  {
    title: "M\u00e9ditation avec les animaux",
    description:
      "Reconnexion \u00e0 la nature et calme int\u00e9rieur en compagnie de vos amis les b\u00eates.",
  },
];

export default function AnimalsSection() {
  return (
    <section id="animaux" className="relative py-24 bg-cream-alt">
      {/* Top accent strip */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-forest via-sage to-leaf" />

      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-[55%_45%] gap-12 items-center">
          {/* Left: Content */}
          <div>
            <ScrollReveal>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-[0.1em] bg-sage/15 text-sage mb-4">
                Deuxi\u00e8me activit\u00e9
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="font-display text-3xl md:text-[42px] font-semibold leading-tight text-warm-text mb-4">
                Soins \u00e9nerg\u00e9tiques pour animaux
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="w-[60px] h-[3px] rounded-full bg-sage mb-6" />
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-warm-text-secondary leading-relaxed mb-8">
                Sous le nom <strong>Harmonie et Mieux-\u00catre</strong>, je propose des soins
                \u00e9nerg\u00e9tiques holistiques pour vos compagnons \u00e0 quatre pattes. Une
                approche douce et naturelle pour r\u00e9tablir leur \u00e9quilibre physique,
                \u00e9motionnel et \u00e9nerg\u00e9tique.
              </p>
            </ScrollReveal>

            <div className="flex flex-col gap-4">
              {animalServices.map(({ title, description }, i) => (
                <ScrollReveal key={title} delay={0.25 + i * 0.08}>
                  <div className="flex gap-4 p-4 bg-white rounded-xl border border-warm-border/70 shadow-[0_4px_18px_rgba(27,67,50,0.06)] hover:border-sage/40 transition-colors">
                    <span className="text-lg shrink-0">\ud83d\udc3e</span>
                    <div>
                      <h4 className="font-semibold text-warm-text text-sm mb-1">
                        {title}
                      </h4>
                      <p className="text-xs text-warm-text-secondary">{description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <ScrollReveal direction="right" distance={30}>
            <img
              src="/images/animals.jpg"
              alt="Soins \u00e9nerg\u00e9tiques pour animaux"
              className="rounded-2xl w-full object-cover shadow-lg"
              loading="lazy"
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
