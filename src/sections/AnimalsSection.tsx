import ScrollReveal from "@/components/ScrollReveal";

const animalServices = [
  {
    title: "Reiki pour animaux",
    description:
      "Méthode douce pour apaiser et équilibrer l'énergie, en présentiel ou à distance.",
  },
  {
    title: "Lahochi & 13ème octave",
    description:
      "Énergie de haute fréquence pour le bien-être émotionnel profond.",
  },
  {
    title: "Massages (Kinésiologie)",
    description: "Détente et soulagement des tensions musculaires.",
  },
  {
    title: "Fleurs de Bach pour animaux",
    description:
      "Équilibre émotionnel naturel contre troubles comportementaux.",
  },
  {
    title: "Méditation avec les animaux",
    description:
      "Reconnexion à la nature et calme intérieur en compagnie de vos amis les bêtes.",
  },
];

export default function AnimalsSection() {
  return (
    <section id="animaux" className="relative py-24 bg-cream-alt">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand via-lavender to-sky" />

      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-[55%_45%] gap-12 items-center">
          <div>
            <ScrollReveal>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-[0.1em] bg-lavender/15 text-lavender mb-4">
                Deuxième activité
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="font-display text-3xl md:text-[42px] font-semibold leading-tight text-warm-text mb-4">
                Soins énergétiques pour animaux
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="w-[60px] h-[3px] rounded-full bg-lavender mb-6" />
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-warm-text-secondary leading-relaxed mb-8">
                Sous le nom <strong>Harmonie et Mieux-Être</strong>, je propose des soins
                énergétiques holistiques pour vos compagnons à quatre pattes. Une
                approche douce et naturelle pour rétablir leur équilibre physique,
                émotionnel et énergétique.
              </p>
            </ScrollReveal>

            <div className="flex flex-col gap-4">
              {animalServices.map(({ title, description }, i) => (
                <ScrollReveal key={title} delay={0.25 + i * 0.08}>
                  <div className="flex gap-4 p-4 bg-white rounded-xl border border-warm-border/70 shadow-animal hover:border-lavender/40 transition-colors">
                    <span className="text-lg shrink-0">🐾</span>
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

          <ScrollReveal direction="right" distance={30}>
            <img
              src="/images/animals.jpg"
              alt="Soins énergétiques pour animaux"
              className="rounded-2xl w-full object-cover shadow-lg"
              loading="lazy"
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
