import { Link } from "react-router";
import LegalPageLayout from "@/components/LegalPageLayout";

export default function PolitiqueConfidentialite() {
  return (
    <LegalPageLayout title="Politique de confidentialité">
      <p>
        Cette page décrit comment sont traitées les données personnelles dans le cadre
        de la consultation de ce site. Elle constitue une base à compléter selon vos
        traitements réels (formulaire, prise de rendez-vous en ligne, statistiques,
        etc.).
      </p>
      <p>
        <strong className="text-warm-text">Responsable du traitement :</strong> Céline
        Belin —{" "}
        <a
          href="mailto:celine.belin@gmail.com"
          className="font-medium text-brand underline-offset-2 hover:underline"
        >
          celine.belin@gmail.com
        </a>
        .
      </p>
      <p>
        <strong className="text-warm-text">Formulaire de contact :</strong> lorsque vous
        utilisez le formulaire sur la page dédiée{" "}
        <Link to="/contact" className="font-medium text-brand underline-offset-2 hover:underline">
          Contact
        </Link>
        , votre messagerie s&apos;ouvre avec un message prérempli ;
        aucune donnée du formulaire n&apos;est enregistrée sur les serveurs de ce site
        statique. L&apos;envoi effectif du message dépend de votre client de messagerie.
      </p>
      <p>
        <strong className="text-warm-text">Cookies :</strong> ce site ne dépose pas de
        cookies de mesure d&apos;audience par défaut. Toute évolution (ex. intégration
        d&apos;un outil d&apos;analytics) devra être décrite ici et, le cas échéant,
        assortie d&apos;un mécanisme de consentement conforme au RGPD.
      </p>
      <p>
        <strong className="text-warm-text">Vos droits :</strong> vous disposez d&apos;un
        droit d&apos;accès, de rectification, d&apos;effacement et de limitation du
        traitement de vos données, ainsi que d&apos;un droit à la portabilité et
        d&apos;opposition lorsque le traitement est fondé sur l&apos;intérêt légitime.
        Pour exercer ces droits, contactez la responsable du traitement à l&apos;adresse
        ci-dessus. Réclamation possible auprès de l&apos;Autorité de protection des
        données (APD, Belgique).
      </p>
    </LegalPageLayout>
  );
}
