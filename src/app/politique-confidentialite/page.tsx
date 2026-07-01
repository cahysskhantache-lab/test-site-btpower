import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité du site BT Power IDF, prête à adapter avant mise en ligne."
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Données personnelles"
        title="Politique de confidentialité"
        description="Cette page fournit une base à faire valider et adapter selon les traitements réellement mis en place."
      />
      <section className="py-20">
        <div className="page-shell max-w-4xl">
          <div className="grid gap-8 rounded-lg border border-line bg-white p-6 leading-8 text-muted shadow-sm sm:p-8">
            <section>
              <h2 className="text-xl font-black text-deepblue">Données collectées</h2>
              <p className="mt-3">
                Les données transmises via le formulaire peuvent inclure le nom, le prénom, l'entreprise, l'email, le téléphone, le type de projet, le message et les pièces jointes ajoutées volontairement.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-black text-deepblue">Finalité</h2>
              <p className="mt-3">
                Ces informations sont destinées à répondre aux demandes de contact ou de devis envoyées à {siteConfig.name}. Aucun traitement complémentaire ne doit être annoncé avant d'être réellement mis en place.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-black text-deepblue">Conservation</h2>
              <p className="mt-3">
                La durée de conservation doit être complétée selon l'organisation interne et les obligations applicables.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-black text-deepblue">Contact</h2>
              <p className="mt-3">
                Pour toute demande relative aux données personnelles, utilisez l'adresse indiquée dans le fichier de configuration : {siteConfig.contact.contactEmail}.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-black text-deepblue">Mesure d'audience</h2>
              <p className="mt-3">
                Le site peut accueillir une mesure d'audience de type Google Analytics ou Matomo, mais aucun identifiant n'est activé tant que les informations nécessaires ne sont pas renseignées.
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
