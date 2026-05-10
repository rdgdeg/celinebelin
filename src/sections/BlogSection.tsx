import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeader from "@/components/SectionHeader";
import { BLOG_POSTS } from "@/data/blogPosts";

export default function BlogSection() {
  return (
    <section id="blog" className="border-t border-warm-border/60 bg-gradient-to-b from-cream to-mist-soft/60 py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <ScrollReveal>
          <SectionHeader
            label="Blog"
            title="À lire pour avancer"
            subtitle="Six articles longs (stress, EMDR, sommeil, hypnose, coaching, Fleurs de Bach & bien-être animal) : repères documentés, maillage interne et sources — complément d’information, sans remplacer une consultation."
            className="mb-14"
          />
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {BLOG_POSTS.map((article, i) => (
            <ScrollReveal key={article.slug} delay={i * 0.12}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-warm-border/70 bg-white shadow-blog transition duration-300 hover:-translate-y-1 hover:border-sky/40 hover:shadow-blog-hover motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                <Link
                  to={`/blog/${article.slug}`}
                  className="relative block aspect-[16/10] overflow-hidden bg-gradient-to-br from-mist to-brand-light/35"
                >
                  <img
                    src={article.image}
                    alt={article.imageAlt}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105 motion-reduce:group-hover:scale-100"
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-ink/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
                    {article.readTime}
                  </span>
                </Link>
                <div className="flex flex-1 flex-col p-6">
                  <time
                    className="mb-2 text-xs font-medium uppercase tracking-wider text-lavender"
                    dateTime={article.dateIso}
                  >
                    {article.date}
                  </time>
                  <h3 className="font-display text-xl font-semibold leading-snug text-ink transition-colors group-hover:text-brand">
                    <Link to={`/blog/${article.slug}`}>{article.title}</Link>
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-warm-text-secondary">
                    {article.excerpt}
                  </p>
                  <Link
                    to={`/blog/${article.slug}`}
                    className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand transition hover:text-brand-light"
                  >
                    Lire l&apos;article
                    <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
