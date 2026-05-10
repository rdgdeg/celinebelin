import {
  LireAussi,
  FaqItem,
  linkArticle,
  LinkBlog,
  LinkPage,
  MaillagePagesSite,
} from "@/content/blog/articleUi";

export default function StressBody() {
  return (
    <>
      <p className="lead text-lg text-warm-text">
        Bonjour, je suis Céline Belin, psychologue agréée. Dans ce billet, je vous propose des{" "}
        <strong>repères concrets pour vivre avec le stress</strong> sans minimiser ce que vous
        traversez — à la croisée de ce que j&apos;utilise en cabinet : psychoéducation, TCC, ACT et
        parfois la marche encadrée. Pour le cadre officiel (parcours, lieux de consultation), vous
        pouvez aussi consulter ma fiche au{" "}
        <a
          href="https://centre-psychologique-hainaut.be/notre-equipe-des-psychologues-et-psychotherapeutes-hainaut/celine-belin-psychologue-silly/"
          target="_blank"
          rel="noopener noreferrer"
          className={linkArticle}
        >
          Centre psychologique du Hainaut
        </a>{" "}
        et mon profil{" "}
        <a
          href="https://www.doctena.be/fr/specialite/psychologue/celine-belin-1886103"
          target="_blank"
          rel="noopener noreferrer"
          className={linkArticle}
        >
          Doctena
        </a>
        .
      </p>

      <p className="rounded-xl border border-brand/15 bg-mist-soft/60 px-4 py-4 text-[15px] leading-relaxed text-warm-text md:text-base">
        J&apos;ai écrit d&apos;autres textes sur mon blog qui dialoguent souvent avec celui-ci :{" "}
        <LinkBlog slug="emdr-attentes-seance">l&apos;EMDR en séance</LinkBlog>, le{" "}
        <LinkBlog slug="sommeil-anxiete-premiers-reflexes">sommeil et l&apos;anxiété</LinkBlog>, et le{" "}
        <LinkBlog slug="coaching-de-vie-objectifs-limites">coaching de vie</LinkBlog>. Sur mon site,
        vous retrouverez la liste de mes{" "}
        <LinkPage to="/#services">services</LinkPage> et les{" "}
        <LinkPage to="/#motifs">motifs de consultation</LinkPage> que je rencontre le plus souvent.
      </p>

      <h2 className="mt-10 font-display text-xl font-semibold text-ink md:text-2xl">
        Stress au travail, stress familial : je vois les mêmes mécanismes
      </h2>
      <p>
        Que la pression vienne du <strong>travail</strong> (charge, conflits, incertitude) ou de
        la <strong>vie privée</strong> (santé, couple, parentalité), le corps mobilise souvent la
        même chaîne : vigilance accrue, tensions, sommeil plus léger. En TCC, j&apos;aide souvent à
        distinguer <em>la situation</em>, <em>l&apos;interprétation</em> et{" "}
        <em>la réponse comportementale</em> — pour que vous retrouviez des leviers d&apos;action qui
        vous ressemblent.
      </p>

      <h3 className="mt-8 font-display text-lg font-semibold text-ink">
        Stress aigu et stress chronique : comment j&apos;en parle en séance
      </h3>
      <p>
        Le <strong>stress aigu</strong> est court et peut être mobilisateur. Le{" "}
        <strong>stress chronique</strong> s&apos;installe lorsque la charge dépasse longtemps ce que
        l&apos;on croit pouvoir porter. L&apos;OMS rappelle l&apos;importance du sommeil, du mouvement et du
        soutien social (
        <a
          href="https://www.who.int/news-room/questions-and-answers/item/stress"
          target="_blank"
          rel="noopener noreferrer"
          className={linkArticle}
        >
          fiche OMS sur le stress
        </a>
        ) — je m&apos;en inspire souvent dans mon accompagnement.
      </p>

      <h2 className="mt-10 font-display text-xl font-semibold text-ink md:text-2xl">
        Ce que je puise dans la TCC et l&apos;ACT
      </h2>
      <ul className="list-disc space-y-3 pl-6 marker:text-brand">
        <li>
          <strong>Journal des déclencheurs</strong> : horaire, lieu, pensée automatique, émotion
          (0–10), comportement — pour voir les cercles vicieux ensemble.
        </li>
        <li>
          <strong>Micro-expériences</strong> : tester de petites actions (pause, message assertif,
          délégation) plutôt que d&apos;attendre la « grande vague » de motivation.
        </li>
        <li>
          <strong>Diffusion cognitive</strong> (ACT) : accueillir une pensée comme un nuage qui
          passe (« Je remarque l&apos;idée que… ») sans la prendre pour une vérité absolue.
        </li>
        <li>
          <strong>Activation comportementale</strong> : réinjecter des gestes alignés avec vos
          valeurs, même quand l&apos;humeur freine.
        </li>
      </ul>

      <h2 className="mt-10 font-display text-xl font-semibold text-ink md:text-2xl">
        Walking therapy : pourquoi j&apos;aime proposer la marche
      </h2>
      <p>
        Je propose la <strong>marche thérapeutique en extérieur</strong> (walking therapy), comme
        sur mon profil Doctena : le rythme cardiaque modéré, le paysage qui change et la relation de
        confiance s&apos;y combinent bien. Ce n&apos;est pas une simple promenade — c&apos;est un cadre que
        j&apos;utilise notamment lorsque le face-à-face statique au bureau fait encore « trop » au
        début. Cela peut aussi compléter un suivi où nous travaillons déjà avec l&apos;{" "}
        <LinkBlog slug="hypnose-ericksonienne-cadre">hypnose</LinkBlog> ou où nous préparons un
        protocole <LinkBlog slug="emdr-attentes-seance">EMDR</LinkBlog>.
      </p>

      <MaillagePagesSite />

      <LireAussi excludeSlug="stress-quotidien-reprendre-controle" />

      <h2 className="mt-10 font-display text-xl font-semibold text-ink md:text-2xl">
        Questions que l&apos;on me pose souvent
      </h2>
      <div className="rounded-xl border border-warm-border/70 bg-white/80 px-4 md:px-6">
        <FaqItem question="Le stress est-il toujours pathologique ?">
          <p>
            Non. Un pic de stress peut être adaptatif. Je vous invite à prendre rendez-vous lorsque
            la souffrance ou l&apos;impact sur le sommeil, les proches ou le travail devient durable —
            nous ferons le point ensemble.
          </p>
        </FaqItem>
        <FaqItem question="La TCC suffit-elle sans médicament ?">
          <p>
            Cela dépend de chaque histoire. Je peux collaborer avec votre médecin si vous suivez un
            traitement. Ce billet ne remplace évidemment pas un avis médical.
          </p>
        </FaqItem>
        <FaqItem question="Combien de séances pour « mieux gérer » le stress ?">
          <p>
            Je ne peux pas le promettre à distance : cela dépend de vos objectifs, de votre parcours
            et de ce que vous mettez en place entre les séances. Un premier contact permet
            d&apos;esquisser un cadre réaliste, à votre rythme.
          </p>
        </FaqItem>
      </div>

      <h2 className="mt-10 font-display text-xl font-semibold text-ink md:text-2xl">
        Quelques sources que j&apos;emprunte volontiers
      </h2>
      <ul className="list-disc space-y-2 pl-6 marker:text-brand text-sm">
        <li>
          <a href="https://www.who.int/news-room/questions-and-answers/item/stress" target="_blank" rel="noopener noreferrer" className={linkArticle}>
            OMS — Stress (Q&amp;R)
          </a>
        </li>
        <li>
          <a href="https://www.doctena.be/fr/specialite/psychologue/celine-belin-1886103" target="_blank" rel="noopener noreferrer" className={linkArticle}>
            Mon profil Doctena
          </a>
        </li>
      </ul>
    </>
  );
}
