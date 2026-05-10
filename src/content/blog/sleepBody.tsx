import { LireAussi, FaqItem, linkArticle, LinkBlog, MaillagePagesSite } from "@/content/blog/articleUi";

export default function SleepBody() {
  return (
    <>
      <p className="lead text-lg text-warm-text">
        <strong>Sommeil léger, réveils, pensées qui tournent</strong> : je rencontre souvent ce
        mélange d&apos;<strong>anxiété au coucher</strong> et de fatigue le lendemain. Ici, je partage
        des repères d&apos;<strong>hygiène du sommeil</strong> et ce que j&apos;emprunte aux thérapies
        brèves (TCC, hypnose) dans mon accompagnement.
      </p>

      <p className="rounded-xl border border-brand/15 bg-mist-soft/60 px-4 py-4 text-[15px] leading-relaxed text-warm-text md:text-base">
        Ce billet fait écho à mon article sur le{" "}
        <LinkBlog slug="stress-quotidien-reprendre-controle">stress au quotidien</LinkBlog> et à ce
        que j&apos;écris sur l&apos;{" "}
        <LinkBlog slug="emdr-attentes-seance">EMDR</LinkBlog> lorsque l&apos;hypervigilance nocturne est
        liée à des souvenirs. Pour la relaxation guidée, je vous renvoie aussi à mon texte sur
        l&apos;{" "}
        <LinkBlog slug="hypnose-ericksonienne-cadre">hypnose ericksonienne</LinkBlog>.
      </p>

      <h2 className="mt-10 font-display text-xl font-semibold text-ink md:text-2xl">
        Rythme circadien : trois leviers que je rappelle souvent
      </h2>
      <ul className="list-disc space-y-3 pl-6 marker:text-brand">
        <li>
          <strong>Lumière matinale</strong> : quelques minutes près d&apos;une fenêtre ou dehors pour
          aider l&apos;horloge interne.
        </li>
        <li>
          <strong>Caféine</strong> : je vous invite à observer ce qu&apos;un café tardif fait à votre
          endormissement — la sensibilité varie énormément.
        </li>
        <li>
          <strong>Température de la chambre</strong> : un peu plus frais aide souvent à « poser » le
          corps.
        </li>
      </ul>

      <h2 className="mt-10 font-display text-xl font-semibold text-ink md:text-2xl">
        TCC-I : l&apos;idée que j&apos;explique quand le sommeil coince
      </h2>
      <p>
        La TCC pour l&apos;insomnie (<strong>TCC-I</strong>) combine restriction du temps au lit,
        contrôle des stimuli, restructuration des croyances sur le sommeil et relaxation. Je m&apos;appuie
        sur la littérature internationale ; côté vulgarisation grand public, la{" "}
        <a href="https://www.sleepfoundation.org/" target="_blank" rel="noopener noreferrer" className={linkArticle}>
          Sleep Foundation
        </a>{" "}
        (en anglais) peut compléter vos lectures.
      </p>

      <h2 className="mt-10 font-display text-xl font-semibold text-ink md:text-2xl">
        Herboristerie et aromathérapie : où je me situe
      </h2>
      <p>
        Sur ma fiche au Centre psychologique du Hainaut, j&apos;explique que je peux proposer, en{" "}
        <strong>conseil</strong>, des pistes issues de l&apos;herboristerie et de l&apos;aromathérapie pour
        l&apos;anxiété ou l&apos;insomnie — toujours sans remplacer un avis médical ni ignorer les
        interactions possibles avec vos traitements.
      </p>

      <MaillagePagesSite />

      <LireAussi excludeSlug="sommeil-anxiete-premiers-reflexes" />

      <h2 className="mt-10 font-display text-xl font-semibold text-ink md:text-2xl">Questions fréquentes</h2>
      <div className="rounded-xl border border-warm-border/70 bg-white/80 px-4 md:px-6">
        <FaqItem question="Faut-il arrêter les somnifères après avoir lu des articles ?">
          <p>
            Non, et ce n&apos;est pas le but de ce blog. Toute modification se fait avec votre médecin.
            J&apos;écris ici pour informer et pour vous aider à préparer un dialogue de soin.
          </p>
        </FaqItem>
        <FaqItem question="Les siestes sont-elles toujours mauvaises ?">
          <p>
            Une courte sieste (10–20 min) convient à certaines personnes. Ce que j&apos;observe souvent :
            les longues siestes en fin d&apos;après-midi peuvent décaler l&apos;endormissement — nous
            ajustons au cas par cas.
          </p>
        </FaqItem>
      </div>

      <h2 className="mt-10 font-display text-xl font-semibold text-ink md:text-2xl">Sources</h2>
      <ul className="list-disc space-y-2 pl-6 marker:text-brand text-sm">
        <li>
          <a href="https://www.sleepfoundation.org/" target="_blank" rel="noopener noreferrer" className={linkArticle}>
            Sleep Foundation
          </a>
        </li>
        <li>
          <a href="https://www.who.int/news-room/fact-sheets/detail/mental-disorders" target="_blank" rel="noopener noreferrer" className={linkArticle}>
            OMS — troubles mentaux (cadre général)
          </a>
        </li>
      </ul>
    </>
  );
}
