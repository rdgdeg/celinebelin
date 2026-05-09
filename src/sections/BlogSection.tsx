import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeader from "@/components/SectionHeader";

const articles = [
  {
    id: "1",
    title: "Stress au quotidien : reprendre le contrôle",
    excerpt:
      "Comprendre les mécanismes du stress et quelques pistes concrètes pour mieux respirer entre deux rendez-vous.",
    date: "12 avril 2026",
    readTime: "4 min",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80&auto=format&fit=crop",
    href: "#blog",
  },
  {
    id: "2",
    title: "EMDR : à quoi s'attendre en séance ?",
    excerpt:
      "Une introduction bienveillante à la désensibilisation par mouvements oculaires et à son cadre sécurisant.",
    date: "28 mars 2026",
    readTime: "6 min",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f8e?w=800&q=80&auto=format&fit=crop",
    href: "#blog",
  },
  {
    id: "3",
    title: "Sommeil et anxiété : les premiers réflexes",
    excerpt:
      "Routines du soir, rythme circadien et petits outils issus des thérapies brèves pour retrouver des nuits plus sereines.",
    date: "15 mars 2026",
    readTime: "5 min",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80&auto=format&fit=crop",
    href: "#blog",
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="border-t border-warm-border/60 bg-gradient-to-b from-cream to-mint-soft/50 py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <ScrollReveal>
          <SectionHeader
            label="Blog"
            title="À lire pour avancer"
            subtitle="Articles autour du bien-être, des thérapies et du quotidien — le blog s'étoffe bientôt."
            className="mb-14"
          />
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {articles.map((article, i) => (
            <ScrollReveal key={article.id} delay={i * 0.12}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-warm-border/70 bg-white shadow-[0_8px_32px_rgba(27,67,50,0.08)] transition duration-300 hover:-translate-y-1 hover:border-fern/35 hover:shadow-[0_16px_48px_rgba(27,67,50,0.14)] motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                <a
                  href={article.href}
                  className="relative block aspect-[16/10] overflow-hidden bg-gradient-to-br from-mint to-jade/30"
                >
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105 motion-reduce:group-hover:scale-100"
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-pine/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
                    {article.readTime}
                  </span>
                </a>
                <div className="flex flex-1 flex-col p-6">
                  <time
                    className="mb-2 text-xs font-medium uppercase tracking-wider text-sage"
                    dateTime={article.date}
                  >
                    {article.date}
                  </time>
                  <h3 className="font-display text-xl font-semibold leading-snug text-pine transition-colors group-hover:text-forest">
                    <a href={article.href}>{article.title}</a>
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-warm-text-secondary">
                    {article.excerpt}
                  </p>
                  <a
                    href={article.href}
                    className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-forest transition hover:text-jade"
                  >
                    Lire l'article
                    <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
