import { LireAussi, FaqItem, linkArticle, LinkBlog, LinkPage, MaillagePagesSite } from "@/content/blog/articleUi";

export default function CoachingBody() {
  return (
    <>
      <p className="lead text-lg text-warm-text">
        Le <strong>coaching de vie</strong> (love coaching, job coaching, objectifs personnels)
        répond souvent à une envie de <strong>clarification et d&apos;action</strong>. Il ne remplace pas
        une psychothérapie lorsque la souffrance psychique, des traumas ou des troubles mentaux
        appellent un cadre clinique plus large — voici comment j&apos;en parle avec les personnes qui
        me consultent, en m&apos;appuyant sur ce que j&apos;affiche publiquement sur mes compétences.
      </p>

      <p className="rounded-xl border border-brand/15 bg-mist-soft/60 px-4 py-4 text-[15px] leading-relaxed text-warm-text md:text-base">
        Pour distinguer coaching et suivi plus profond, j&apos;ai aussi rédigé des billets sur le{" "}
        <LinkBlog slug="stress-quotidien-reprendre-controle">stress au quotidien</LinkBlog> et
        l&apos;<LinkBlog slug="emdr-attentes-seance">EMDR</LinkBlog>. Sur le site, les{" "}
        <LinkPage to="/#services">fiches services</LinkPage> et la rubrique{" "}
        <LinkPage to="/#a-propos">à propos</LinkPage> précisent mon cadre d&apos;exercice.
      </p>

      <h2 className="mt-10 font-display text-xl font-semibold text-ink md:text-2xl">
        Coaching vs psychothérapie : la grille que je vous propose
      </h2>
      <ul className="list-disc space-y-3 pl-6 marker:text-brand">
        <li>
          <strong>Coaching</strong> : souvent centré sur un objectif mesurable (reconversion,
          assertivité au travail, clarification relationnelle), parfois sur un nombre de séances
          limité, avec des « devoirs » entre les rendez-vous.
        </li>
        <li>
          <strong>Psychothérapie</strong> : exploration plus large des schémas, des émotions et de
          l&apos;histoire personnelle ; cadre déontologique strict du psychologue agréé.
        </li>
      </ul>
      <p>
        Je suis à la fois <strong>psychologue agréée</strong> et <strong>coach de vie</strong> — ce
        qui permet, lorsque c&apos;est pertinent pour vous, d&apos;articuler les deux registres (toujours
        explicité en séance, pour que vous sachiez où nous sommes).
      </p>

      <h2 className="mt-10 font-display text-xl font-semibold text-ink md:text-2xl">
        Objectifs SMART et suivi
      </h2>
      <p>
        En coaching, j&apos;aime formuler avec vous des objectifs <strong>Spécifiques</strong>,{" "}
        <strong>Mesurables</strong>, <strong>Atteignables</strong>, <strong>Réalistes</strong> et{" "}
        <strong>Temporellement ancrés</strong> (modèle SMART). Cela évite la frustration d&apos;un
        objectif flou (« être heureux ») et oriente les micro-pas concrets.
      </p>

      <h2 className="mt-10 font-display text-xl font-semibold text-ink md:text-2xl">
        Love coaching et job coaching : éthique et limites
      </h2>
      <p>
        Le coaching amoureux ou professionnel touche à l&apos;intimité et à l&apos;économie personnelle.
        Pour moi, un cadre clair sur la <strong>confidentialité</strong>, les{" "}
        <strong>conflits d&apos;intérêts</strong> et ce que <strong>je ne fais pas</strong> (par exemple
        médiation juridique, diagnostic médical) protège la relation. N&apos;hésitez pas à poser ces
        questions dès le premier rendez-vous.
      </p>

      <MaillagePagesSite />

      <LireAussi excludeSlug="coaching-de-vie-objectifs-limites" />

      <h2 className="mt-10 font-display text-xl font-semibold text-ink md:text-2xl">Questions fréquentes</h2>
      <div className="rounded-xl border border-warm-border/70 bg-white/80 px-4 md:px-6">
        <FaqItem question="Le coaching est-il remboursé comme la psychothérapie ?">
          <p>
            Cela dépend des mutuelles et des contrats. Renseignez-vous auprès de votre assureur ; sur
            Doctena, j&apos;indique quand c&apos;est possible pour certaines prestations.
          </p>
        </FaqItem>
        <FaqItem question="Puis-je passer du coaching à une thérapie avec vous ?">
          <p>
            Nous pouvons en discuter selon vos besoins et la déontologie. L&apos;important est que le
            cadre (objectifs, durée, outils) soit transparent et accepté par nous deux.
          </p>
        </FaqItem>
      </div>

      <h2 className="mt-10 font-display text-xl font-semibold text-ink md:text-2xl">Sources</h2>
      <ul className="list-disc space-y-2 pl-6 marker:text-brand text-sm">
        <li>
          <a href="https://www.doctena.be/fr/specialite/psychologue/celine-belin-1886103" target="_blank" rel="noopener noreferrer" className={linkArticle}>
            Mon profil Doctena
          </a>
        </li>
      </ul>
    </>
  );
}
