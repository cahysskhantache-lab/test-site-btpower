import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site BT Power IDF."
};

export default function LegalPage() {
  return (
    <>
      <PageHero
        eyebrow="Informations légales"
        title="Mentions légales"
        description="Retrouvez les informations principales relatives au site BT Power IDF."
      />
      <section className="py-20">
        <div className="page-shell max-w-4xl">
          <div className="grid gap-5 rounded-lg border border-line bg-white p-6 leading-8 text-muted shadow-sm sm:p-8">
            <LegalRow label="Dénomination" value={siteConfig.legal.companyName} />
            <LegalRow label="Contact" value={siteConfig.contact.contactEmail} />
            <LegalRow label="Téléphone" value={siteConfig.contact.phone} />
            <LegalRow label="Adresse" value={siteConfig.contact.addressLines.join(", ")} />
            <p>
              Le contenu du site présente l'activité, les solutions et les moyens de contact de BT Power IDF. Pour toute demande concernant le site ou ses contenus, vous pouvez contacter l'entreprise via les coordonnées ci-dessus.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

function LegalRow({ label, value }: { label: string; value: string }) {
  return (
    <p>
      <strong className="text-deepblue">{label} :</strong> {value}
    </p>
  );
}
