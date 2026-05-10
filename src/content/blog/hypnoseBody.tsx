import { LireAussi, FaqItem, linkArticle, LinkBlog, LinkPage, MaillagePagesSite } from "@/content/blog/articleUi";

export default function HypnoseBody() {
  return (
    <>
      <p className="lead text-lg text-warm-text">
        J&apos;utilise l&apos;<strong>hypnose thérapeutique</strong> — ici l&apos;approche{" "}
        <strong>Ericksonienne</strong>, du nom du psychiatre Milton H. Erickson — bien loin des clichés
        du spectacle. En cabinet, il s&apos;agit d&apos;un{" "}
        <strong>état de conscience modifié</strong> que j&apos;invite avec votre accord, au service
        d&apos;objectifs clairs (douleur, phobie, anxiété, sommeil, etc.).
      </p>

      <p className="rounded-xl border border-brand/15 bg-mist-soft/60 px-4 py-4 text-[15px] leading-relaxed text-warm-text md:text-base">
        J&apos;associe souvent l&apos;hypnose à l&apos;{" "}
        <LinkBlog slug="emdr-attentes-seance">EMDR</LinkBlog> (ressources, ancrage) et aux pistes
        que je décris dans mon article sur le{" "}
        <LinkBlog slug="sommeil-anxiete-premiers-reflexes">sommeil et l&apos;anxiété</LinkBlog>. Pour
        les objectifs professionnels ou relationnels, vous pouvez aussi jeter un œil à mon billet
        sur le <LinkBlog slug="coaching-de-vie-objectifs-limites">coaching de vie</LinkBlog> et à la
        page <LinkPage to="/#tarifs">tarifs</LinkPage>.
      </p>

      <h2 className="mt-10 font-display text-xl font-semibold text-ink md:text-2xl">
        Hypnose ericksonienne : comment je l&apos;explique en séance
      </h2>
      <p>
        Je mets l&apos;accent sur vos <strong>ressources</strong>, sur des suggestions indirectes
        (métaphores, histoires) et sur le respect de votre rythme. Contrairement aux clichés de «
        contrôle mental », ce que je cherche, c&apos;est une <strong>co-régulation</strong> : vous
        restez capable de refuser ou d&apos;ajuster une suggestion.
      </p>
      <p>
        Sur mes supports publics, je mentionne ma formation de{" "}
        <strong>technicienne en hypnose Ericksonienne</strong> (Centre psychologique du Hainaut) et
        je propose l&apos;hypnose parmi d&apos;autres outils sur{" "}
        <a href="https://www.doctena.be/fr/specialite/psychologue/celine-belin-1886103" target="_blank" rel="noopener noreferrer" className={linkArticle}>
          Doctena
        </a>
        .
      </p>

      <h2 className="mt-10 font-display text-xl font-semibold text-ink md:text-2xl">
        Contre-indications et prudence (transparence)
      </h2>
      <p>
        Certaines pathologies psychiatriques aiguës ou troubles dissociatifs non stabilisés
        demandent une évaluation spécialisée avant toute technique de modification de conscience.
        Pour moi, l&apos;hypnose n&apos;est pas un « gadget » : elle s&apos;inscrit dans un plan de soins
        que nous construisons ensemble.
      </p>

      <h2 className="mt-10 font-display text-xl font-semibold text-ink md:text-2xl">
        Comment je la combine avec TCC, EMDR et EFT
      </h2>
      <p>
        En pratique intégrative, j&apos;utilise l&apos;hypnose pour soutenir des ancrages de ressource
        avant un protocole EMDR, ou pour accompagner des visualisations compatibles avec la TCC.
        L&apos;<strong>EFT</strong> (tapotage) mobilise un autre cadre sensoriel — l&apos;essentiel, pour
        moi, reste la cohérence du plan que nous validons ensemble.
      </p>

      <MaillagePagesSite />

      <LireAussi excludeSlug="hypnose-ericksonienne-cadre" />

      <h2 className="mt-10 font-display text-xl font-semibold text-ink md:text-2xl">Questions fréquentes</h2>
      <div className="rounded-xl border border-warm-border/70 bg-white/80 px-4 md:px-6">
        <FaqItem question="Vais-je perdre le contrôle pendant l&apos;hypnose ?">
          <p>
            Non : le cadre que je propose vise la collaboration. Vous pouvez interrompre ou signaler
            un inconfort à tout moment.
          </p>
        </FaqItem>
        <FaqItem question="L&apos;hypnose guérit-elle toute seule une dépression ?">
          <p>
            La dépression est une problématique sérieuse qui demande souvent plusieurs leviers
            (thérapie, parfois soins médicaux, entourage). L&apos;hypnose peut être un outil parmi
            d&apos;autres chez moi — pas une promesse miracle.
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
      </ul>
    </>
  );
}
