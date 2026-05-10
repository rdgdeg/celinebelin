export type BlogPostMeta = {
  slug: string;
  title: string;
  excerpt: string;
  /** ~150–160 caractères pour balise meta description (SEO) */
  metaDescription: string;
  date: string;
  dateIso: string;
  readTime: string;
  image: string;
  /** Texte alternatif descriptif pour l’image (SEO + accessibilité) */
  imageAlt: string;
};

export const BLOG_POSTS: BlogPostMeta[] = [
  {
    slug: "stress-quotidien-reprendre-controle",
    title: "Stress au quotidien : reprendre le contrôle",
    excerpt:
      "Je partage des repères TCC, ACT et walking therapy sur le stress au travail et en famille, avec des outils concrets.",
    metaDescription:
      "Billet signé Céline Belin : gérer le stress au quotidien (TCC, ACT, walking therapy), quand consulter. Psychologue agréée à Silly, près de Mons.",
    date: "12 avril 2026",
    dateIso: "2026-04-12",
    readTime: "18 min",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&q=85&auto=format&fit=crop",
    imageAlt:
      "Personne méditant en extérieur, illustration pour article sur le stress et la régulation émotionnelle",
  },
  {
    slug: "emdr-attentes-seance",
    title: "EMDR : à quoi s'attendre en séance ?",
    excerpt:
      "Je détaille les phases du protocole, la stabilisation, des sources HAS et MCA, et comment j’associe l’EMDR à la TCC ou l’hypnose.",
    metaDescription:
      "Céline Belin explique l’EMDR : phases, stabilisation, attentes réalistes, sources HAS et Agence MCA. Psychologue agréée, cabinet au Hainaut.",
    date: "28 mars 2026",
    dateIso: "2026-03-28",
    readTime: "20 min",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f8e?w=1200&q=85&auto=format&fit=crop",
    imageAlt:
      "Consultation thérapeutique calme, illustration pour article sur l’EMDR et les séances",
  },
  {
    slug: "sommeil-anxiete-premiers-reflexes",
    title: "Sommeil et anxiété : les premiers réflexes",
    excerpt:
      "Ce que je retiens de l’hygiène du sommeil, de la TCC-I et du rythme circadien quand l’anxiété s’invite au coucher.",
    metaDescription:
      "Sommeil et anxiété : repères d’hygiène du sommeil, TCC-I, lumière et caféine. Billet de Céline Belin, psychologue agréée, avec sources utiles.",
    date: "15 mars 2026",
    dateIso: "2026-03-15",
    readTime: "19 min",
    image:
      "https://images.unsplash.com/photo-1541781774459-bb2f2f8158d0?w=1200&q=85&auto=format&fit=crop",
    imageAlt:
      "Chambre paisible et lit confortable, illustration pour article sur le sommeil et l’anxiété",
  },
  {
    slug: "hypnose-ericksonienne-cadre",
    title: "Hypnose ericksonienne : mythes et cadre thérapeutique",
    excerpt:
      "Je démêle les mythes du spectacle : hypnose clinique, consentement, et comment je l’associe à l’EMDR ou à la TCC.",
    metaDescription:
      "Hypnose ericksonienne : principes, mythes, prudences, complémentarité avec EMDR ou TCC. Texte signé Céline Belin, psychologue agréée.",
    date: "8 mars 2026",
    dateIso: "2026-03-08",
    readTime: "17 min",
    image:
      "https://images.unsplash.com/photo-1515023112839-5c12f734778b?w=1200&q=85&auto=format&fit=crop",
    imageAlt:
      "Paysage aquatique calme et lumière douce, métaphore visuelle pour l’hypnose thérapeutique",
  },
  {
    slug: "coaching-de-vie-objectifs-limites",
    title: "Coaching de vie : objectifs, limites et complémentarité avec la thérapie",
    excerpt:
      "J’explique comment je distingue coaching et thérapie, les objectifs SMART, et les questions d’éthique avant de vous engager.",
    metaDescription:
      "Coaching de vie vs psychothérapie : différences, SMART, éthique. Céline Belin, psychologue agréée et coach de vie — ce que j’affiche et ce que je propose.",
    date: "2 mars 2026",
    dateIso: "2026-03-02",
    readTime: "16 min",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=85&auto=format&fit=crop",
    imageAlt:
      "Réunion de travail collaborative autour d’objectifs, illustration pour article sur le coaching de vie",
  },
  {
    slug: "fleurs-de-bach-et-accompagnements-naturels",
    title: "Fleurs de Bach et accompagnements doux : repères sérieux",
    excerpt:
      "Je pose un cadre honnête sur les Fleurs de Bach, la littérature scientifique, et mon offre Harmonie et Mieux-Être pour les animaux.",
    metaDescription:
      "Fleurs de Bach et accompagnements doux : contexte, prudence scientifique, soins bien-être animaux. Billet signé Céline Belin ; rappel vétérinaire.",
    date: "22 février 2026",
    dateIso: "2026-02-22",
    readTime: "18 min",
    image:
      "https://images.unsplash.com/photo-1462275646964-a0e3386b89ea?w=1200&q=85&auto=format&fit=crop",
    imageAlt:
      "Fleurs colorées en gros plan, illustration pour article sur les Fleurs de Bach et le bien-être",
  },
];

export function getBlogPost(slug: string | undefined): BlogPostMeta | undefined {
  if (!slug) return undefined;
  return BLOG_POSTS.find((p) => p.slug === slug);
}
