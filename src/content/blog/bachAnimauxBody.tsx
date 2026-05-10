import { LireAussi, FaqItem, linkArticle, LinkBlog, LinkPage, MaillagePagesSite } from "@/content/blog/articleUi";

export default function BachAnimauxBody() {
  return (
    <>
      <p className="lead text-lg text-warm-text">
        Les <strong>élixirs floraux du Dr Bach</strong> et les <strong>accompagnements doux</strong>{" "}
        (dont ceux orientés vers le bien-être des animaux) suscitent beaucoup de questions. Ici,
        j&apos;essaie d&apos;être <strong>nuancée</strong> : repères historiques, prudence scientifique, et
        lien avec ce que je propose publiquement — conseil en Fleurs de Bach, Harmonie et
        Mieux-Être pour les animaux.
      </p>

      <p className="rounded-xl border border-brand/15 bg-mist-soft/60 px-4 py-4 text-[15px] leading-relaxed text-warm-text md:text-base">
        Pour le volet humain (anxiété, sommeil), ce billet dialogue avec ce que j&apos;ai écrit sur le{" "}
        <LinkBlog slug="sommeil-anxiete-premiers-reflexes">sommeil et l&apos;anxiété</LinkBlog>,{" "}
        l&apos;<LinkBlog slug="hypnose-ericksonienne-cadre">hypnose</LinkBlog> et le{" "}
        <LinkBlog slug="coaching-de-vie-objectifs-limites">coaching de vie</LinkBlog>. La section{" "}
        <LinkPage to="/#animaux">soins pour animaux</LinkPage> résume l&apos;offre « Harmonie et
        Mieux-Être ».
      </p>

      <h2 className="mt-10 font-display text-xl font-semibold text-ink md:text-2xl">
        Fleurs de Bach : origine et usage courant
      </h2>
      <p>
        Edward Bach, médecin et homéopathe anglais du XX<sup>e</sup> siècle, a développé une série de
        préparations florales diluées. Aujourd&apos;hui, on les utilise surtout comme{" "}
        <strong>accompagnement bien-être</strong> — pas comme substitut à un traitement médical prouvé
        contre des pathologies graves. Sur ma fiche publique, je me présente comme{" "}
        <strong>conseillère en Fleurs de Bach</strong>.
      </p>

      <h2 className="mt-10 font-display text-xl font-semibold text-ink md:text-2xl">
        Que dit la science ? (sans caricature)
      </h2>
      <p>
        La littérature scientifique sur les Fleurs de Bach reste <strong>limitée en qualité</strong>{" "}
        par rapport aux standards des essais contrôlés randomisés pour les médicaments. Je les
        présente donc volontiers comme un <strong>complément d&apos;écoute et de routine</strong> pour
        certaines personnes, sans promesse de guérison. En séance, ce qui compte pour moi, c&apos;est
        de clarifier vos attentes et de veiller à la sécurité (allergies, interactions, suivi
        médical).
      </p>

      <h2 className="mt-10 font-display text-xl font-semibold text-ink md:text-2xl">
        Animaux : Reiki, Lahochi, kinésiologie (Harmonie et Mieux-Être)
      </h2>
      <p>
        Sur le site, je présente aussi une seconde activité sous le nom{" "}
        <strong>Harmonie et Mieux-Être</strong> : des <strong>soins énergétiques</strong> destinés aux
        animaux (reiki, lahochi, kinésiologie, Fleurs de Bach pour animaux, etc.). Ce cadre est
        différent de ma psychologie humaine : il vise souvent le confort perçu par le gardien et le
        respect du bien-être animal, sans remplacer la médecine vétérinaire.
      </p>
      <p>
        Pour toute douleur, boiterie, trouble digestif ou comportement brutal,{" "}
        <strong>consultez un vétérinaire</strong> en priorité.
      </p>

      <MaillagePagesSite />

      <LireAussi excludeSlug="fleurs-de-bach-et-accompagnements-naturels" />

      <h2 className="mt-10 font-display text-xl font-semibold text-ink md:text-2xl">Questions fréquentes</h2>
      <div className="rounded-xl border border-warm-border/70 bg-white/80 px-4 md:px-6">
        <FaqItem question="Les Fleurs de Bach remplacent-elles un anxiolytique ?">
          <p>
            Non sans avis médical. Toute modification de traitement psychiatrique se fait avec un
            prescripteur. Les fleurs peuvent accompagner un suivi global ; elles ne le remplacent pas.
          </p>
        </FaqItem>
        <FaqItem question="Les soins à distance sur photo sont-ils efficaces ?">
          <p>
            Les preuves scientifiques sont faibles ; l&apos;intérêt peut être surtout relationnel (rituel,
            attention portée). Je préfère être transparente sur les limites.
          </p>
        </FaqItem>
      </div>

      <h2 className="mt-10 font-display text-xl font-semibold text-ink md:text-2xl">Sources</h2>
      <ul className="list-disc space-y-2 pl-6 marker:text-brand text-sm">
        <li>
          <a href="https://centre-psychologique-hainaut.be/notre-equipe-des-psychologues-et-psychotherapeutes-hainaut/celine-belin-psychologue-silly/" target="_blank" rel="noopener noreferrer" className={linkArticle}>
            Centre psychologique du Hainaut — ma fiche
          </a>
        </li>
        <li>
          <a href="https://www.doctena.be/fr/specialite/psychologue/celine-belin-1886103" target="_blank" rel="noopener noreferrer" className={linkArticle}>
            Doctena — mon profil
          </a>
        </li>
      </ul>
    </>
  );
}
