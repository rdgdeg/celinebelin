import LegalPageLayout from "@/components/LegalPageLayout";

export default function MentionsLegales() {
  return (
    <LegalPageLayout title="Mentions légales">
      <p>
        Les présentes mentions légales encadrent l&apos;utilisation du site vitrine de
        Céline Belin. Elles complètent les informations affichées sur les pages du site
        et peuvent être adaptées par la titulaire du cabinet (coordonnées, numéro
        d&apos;agrément, hébergeur, etc.).
      </p>
      <p>
        <strong className="text-warm-text">Éditeur du site :</strong> Céline Belin,
        psychologue agréée par la Commission des Psychologues — contact :{" "}
        <a
          href="mailto:celine.belin@gmail.com"
          className="font-medium text-brand underline-offset-2 hover:underline"
        >
          celine.belin@gmail.com
        </a>
        , téléphone 0479/46.24.29.
      </p>
      <p>
        <strong className="text-warm-text">Hébergement :</strong> à compléter avec le
        nom et l&apos;adresse de l&apos;hébergeur du site (ex. société d&apos;hébergement
        de votre nom de domaine).
      </p>
      <p>
        <strong className="text-warm-text">Propriété intellectuelle :</strong> les
        contenus textes et visuels publiés sur ce site sont destinés à l&apos;information
        du public. Toute reproduction non autorisée des éléments du site peut constituer
        une contrefaçon au sens du Code de la propriété intellectuelle.
      </p>
    </LegalPageLayout>
  );
}
