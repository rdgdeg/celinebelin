import { useLayoutEffect } from "react";
import { Link } from "react-router";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import MobileCtaBar from "@/components/MobileCtaBar";
import type { BlogPostMeta } from "@/data/blogPosts";

interface BlogArticleLayoutProps {
  meta: BlogPostMeta;
  children: React.ReactNode;
}

export default function BlogArticleLayout({ meta, children }: BlogArticleLayoutProps) {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [meta.slug]);

  return (
    <div className="flex min-h-screen flex-col bg-cream pb-28 lg:pb-0">
      <Navigation />
      <article className="flex-1">
        <header className="border-b border-warm-border/60 bg-gradient-to-b from-mist-soft/80 to-cream">
          <div className="mx-auto max-w-3xl px-6 pb-10 pt-24 md:pt-28">
            <nav className="mb-6 text-sm text-warm-text-secondary" aria-label="Fil d'Ariane">
              <Link to="/" className="text-brand hover:underline">
                Accueil
              </Link>
              <span className="mx-2" aria-hidden>
                /
              </span>
              <Link to="/#blog" className="text-brand hover:underline">
                Blog
              </Link>
              <span className="mx-2" aria-hidden>
                /
              </span>
              <span className="text-warm-text">{meta.title}</span>
            </nav>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-lavender">
              Blog — texte signé Céline Belin
            </p>
            <h1 className="font-display text-3xl font-bold leading-tight text-ink md:text-4xl lg:text-[2.35rem]">
              {meta.title}
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-warm-text-secondary">
              <time dateTime={meta.dateIso}>{meta.date}</time>
              <span aria-hidden>·</span>
              <span>Lecture estimée : {meta.readTime}</span>
              <span aria-hidden>·</span>
              <span>Par Céline Belin · psychologue agréée</span>
            </div>
          </div>
        </header>

        <div className="relative aspect-[21/9] max-h-[320px] w-full overflow-hidden md:aspect-[3/1] md:max-h-[380px]">
          <img
            src={meta.image}
            alt={meta.imageAlt}
            className="h-full w-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-cream/90 via-transparent to-transparent" />
        </div>

        <div className="mx-auto max-w-3xl px-6 py-12 md:py-16">
          <div className="prose-article space-y-6 text-base leading-relaxed text-warm-text-secondary md:text-[17px] md:leading-[1.75]">
            {children}
          </div>

          <div className="mt-14 rounded-2xl border border-warm-border/70 bg-white p-8 shadow-card">
            <p className="font-display text-lg font-semibold text-ink">
              Envie d&apos;aller plus loin ?
            </p>
            <p className="mt-2 text-sm text-warm-text-secondary">
              Je reçois en cabinet (Silly et partenaires), en visioconférence ou en extérieur
              (walking therapy). Vous pouvez prendre rendez-vous directement sur Doctena.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://www.doctena.be/fr/specialite/psychologue/celine-belin-1886103"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-cta transition hover:bg-brand-light"
              >
                Prendre rendez-vous
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center rounded-full border-2 border-brand px-6 py-3 text-sm font-semibold text-brand transition hover:bg-brand/5"
              >
                Me contacter
              </Link>
            </div>
          </div>
        </div>
      </article>
      <Footer />
      <MobileCtaBar />
    </div>
  );
}
