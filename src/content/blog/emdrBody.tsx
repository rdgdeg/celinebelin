import { LireAussi, FaqItem, linkArticle, LinkBlog, MaillagePagesSite } from "@/content/blog/articleUi";

export default function EmdrBody() {
  return (
    <>
      <p className="lead text-lg text-warm-text">
        Je me suis formée à l&apos;<strong>EMDR</strong> parce que j&apos;y crois lorsqu&apos;il est bien
        encadré. Beaucoup de personnes me demandent si c&apos;est « douloureux » ou combien de temps cela
        prend — voici comment j&apos;explique en général ce que nous faisons ensemble, avec des liens
        vers des <strong>sources institutionnelles</strong> que je trouve utiles pour y voir clair.
      </p>

      <h2 className="mt-10 font-display text-xl font-semibold text-ink md:text-2xl">
        EMDR : ce que j&apos;essaie de transmettre dès le début
      </h2>
      <p>
        L&apos;acronyme signifie <em>Eye Movement Desensitization and Reprocessing</em>. La thérapie
        associe le rappel contrôlé de souvenirs difficiles à une{" "}
        <strong>stimulation bilatérale alternée</strong> (souvent des mouvements oculaires). Ce que
        je tiens à préciser : l&apos;idée n&apos;est pas de « tout revivre » sans filet — les protocoles
        que j&apos;emploie insistent sur la <strong>stabilisation</strong> avant d&apos;aller plus loin.
      </p>
      <p>
        La{" "}
        <a href="https://www.has-sante.fr/jcms/p_3130049/fr/prise-en-charge-du-trouble-de-stress-post-traumatique" target="_blank" rel="noopener noreferrer" className={linkArticle}>
          HAS (France)
        </a>{" "}
        cite l&apos;EMDR dans la prise en charge du trouble de stress post-traumatique. En Belgique
        francophone, l&apos;{" "}
        <a href="https://www.agencemca.fr/information/lemdr" target="_blank" rel="noopener noreferrer" className={linkArticle}>
          Agence MCA
        </a>{" "}
        vulgarise bien le rôle des professionnels formés — je vous invite à la parcourir si vous
        hésitez encore.
      </p>

      <p className="rounded-xl border border-brand/15 bg-mist-soft/60 px-4 py-4 text-[15px] leading-relaxed text-warm-text md:text-base">
        Si votre malaise ressemble surtout à un <strong>stress cumulatif</strong> sans souvenir
        traumatique central, mon article sur le{" "}
        <LinkBlog slug="stress-quotidien-reprendre-controle">stress au quotidien</LinkBlog> pourra
        parler avant tout à votre situation. Si les <strong>nuits sont très cassées</strong>, je
        vous renvoie aussi à ce que j&apos;ai écrit sur le{" "}
        <LinkBlog slug="sommeil-anxiete-premiers-reflexes">sommeil et l&apos;anxiété</LinkBlog>. Enfin,
        j&apos;associe souvent l&apos;{" "}
        <LinkBlog slug="hypnose-ericksonienne-cadre">hypnose ericksonienne</LinkBlog> aux ressources et
        à l&apos;ancrage.
      </p>

      <h2 className="mt-10 font-display text-xl font-semibold text-ink md:text-2xl">
        Les huit phases du protocole (comme je les présente)
      </h2>
      <ol className="list-decimal space-y-3 pl-6 marker:font-semibold marker:text-brand">
        <li>Anamnèse et choix des cibles mémorielles pertinentes.</li>
        <li>Préparation : ressources, lieu sûr imagé, contrat de sécurité.</li>
        <li>Évaluation de la cible (image, cognition, affect, sensation).</li>
        <li>Désensibilisation avec sets de stimulation.</li>
        <li>Installation d&apos;une cognition positive adaptée.</li>
        <li>Balayage corporel pour résidus de tension.</li>
        <li>Clôture et retour au calme.</li>
        <li>Réévaluation lors des séances suivantes.</li>
      </ol>
      <p>
        La durée et l&apos;intensité varient selon les personnes. Parfois, je préfère d&apos;abord
        stabiliser (troubles dissociatifs sévères, instabilité aiguë) avant toute stimulation
        intensive — nous en parlons franchement ensemble.
      </p>

      <h2 className="mt-10 font-display text-xl font-semibold text-ink md:text-2xl">
        Comment j&apos;articule l&apos;EMDR avec mes autres outils
      </h2>
      <p>
        En cabinet, je combine selon les besoins <strong>EMDR</strong>, <strong>TCC</strong>,{" "}
        <strong>hypnose Ericksonienne</strong>, <strong>EFT</strong>, etc. L&apos;EMDR peut dialoguer avec
        des exercices de TCC sur les évitements ou avec des ancrages issus de l&apos;hypnothérapie —
        toujours au cas par cas, avec vous. Pour un autre angle « douceur » et plantes, j&apos;ai aussi
        rédigé un billet sur les{" "}
        <LinkBlog slug="fleurs-de-bach-et-accompagnements-naturels">Fleurs de Bach et accompagnements doux</LinkBlog>.
      </p>

      <MaillagePagesSite />

      <LireAussi excludeSlug="emdr-attentes-seance" />

      <h2 className="mt-10 font-display text-xl font-semibold text-ink md:text-2xl">Questions fréquentes</h2>
      <div className="rounded-xl border border-warm-border/70 bg-white/80 px-4 md:px-6">
        <FaqItem question="L&apos;EMDR fait-il revivre la scène traumatique en boucle ?">
          <p>
            Ce n&apos;est pas mon objectif : je veille aux pauses, aux ressources et au niveau
            d&apos;activation pour rester dans une « fenêtre de tolérance ». Si une technique ne vous
            convient pas, nous l&apos;ajustons ou nous cherchons autre chose.
          </p>
        </FaqItem>
        <FaqItem question="L&apos;EMDR remplace-t-il un suivi médical ?">
          <p>
            Non. Certaines situations demandent un médecin ou un psychiatre (médicaments, crises).
            Je reste dans mon champ de compétence de psychologue agréée et je coordonne si besoin.
          </p>
        </FaqItem>
      </div>

      <h2 className="mt-10 font-display text-xl font-semibold text-ink md:text-2xl">Sources</h2>
      <ul className="list-disc space-y-2 pl-6 marker:text-brand text-sm">
        <li>
          <a href="https://www.has-sante.fr/jcms/p_3130049/fr/prise-en-charge-du-trouble-de-stress-post-traumatique" target="_blank" rel="noopener noreferrer" className={linkArticle}>
            HAS — TSPT
          </a>
        </li>
        <li>
          <a href="https://www.ifemdr.fr/recommandations-internationales-de-traitement-pour-lemdr/" target="_blank" rel="noopener noreferrer" className={linkArticle}>
            IFEMDR — recommandations
          </a>
        </li>
      </ul>
    </>
  );
}
