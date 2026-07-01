import type { Metadata } from "next";
import Image from "next/image";
import { CTASection } from "@/components/sections/CTASection";
import { ImagePageHero } from "@/components/sections/ImagePageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { mediaConfig } from "@/data/mediaConfig";

export const metadata: Metadata = {
  title: "L'entreprise",
  description:
    "Présentation de BT Power IDF, PME spécialisée dans la conception et la réalisation d'armoires et de coffrets électriques."
};

const values = ["Proximité", "Qualité", "Réactivité", "Précision"];

export default function CompanyPage() {
  return (
    <>
      <ImagePageHero
        eyebrow="L'entreprise"
        title="Une équipe proche du terrain, attentive au détail"
        description="BT Power IDF associe expertise technique, production maîtrisée et accompagnement de proximité pour concrétiser vos projets électriques."
        image={mediaConfig.company.group}
        imagePosition="center 45%"
      />

      <section className="py-20">
        <div className="page-shell grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div>
            <SectionHeader
              eyebrow="Présentation"
              title="Une entreprise spécialisée dans les armoires et coffrets électriques"
              description="BT Power IDF est spécialisée dans la conception et la réalisation d'armoires et de coffrets électriques destinés aux projets tertiaires et industriels."
            />
            <div className="mt-7 grid gap-5 text-lg leading-8 text-muted">
              <p>
                Reconnue pour la qualité et la fiabilité de ses équipements, l'entreprise accompagne ses clients avec une approche technique, concrète et attentive aux contraintes de chaque projet.
              </p>
              <p>
                De l'analyse des documents techniques à la fabrication, aux essais et à la livraison, les équipes coordonnent chaque étape afin de proposer des équipements adaptés et conçus avec exigence.
              </p>
              <p>
                La proximité, la qualité, la réactivité et la précision guident l'ensemble de la démarche. BT Power IDF s'appuie sur la complémentarité de ses chargés d'affaires et de ses équipes de production pour assurer un suivi cohérent, de la première demande jusqu'à la finalisation du projet.
              </p>
            </div>
          </div>
          <div className="relative min-h-[430px] overflow-hidden rounded-lg border border-line bg-white shadow-soft">
            <Image
              src={mediaConfig.company.work.path}
              alt={mediaConfig.company.work.alt}
              fill
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="object-cover"
              style={{ objectPosition: "center center" }}
            />
          </div>
        </div>
      </section>

      <section className="bg-paper py-20">
        <div className="page-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative min-h-[420px] overflow-hidden rounded-lg border border-line bg-white shadow-soft">
            <Image
              src={mediaConfig.company.study.path}
              alt={mediaConfig.company.study.alt}
              fill
              sizes="(min-width: 1024px) 44vw, 100vw"
              className="object-cover"
              style={{ objectPosition: "center center" }}
            />
          </div>
          <div>
            <SectionHeader
              eyebrow="Bureau d'études"
              title="Une équipe à l'écoute de vos projets"
              description="Les chargés d'affaires et le bureau d'études analysent les besoins, les documents techniques et les contraintes du projet afin de proposer une solution adaptée."
            />
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
              Cette phase d'échange et d'analyse permet de préparer la production avec une compréhension claire du contexte, des exigences techniques et des points à anticiper avant le passage en atelier.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="page-shell">
          <SectionHeader
            eyebrow="Façon de travailler"
            title="Des repères concrets à chaque étape"
            description="Ces valeurs structurent la relation projet et la qualité d'exécution, de l'étude initiale jusqu'à la finalisation."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value} className="flex items-center justify-center gap-3 rounded-lg border border-electric/25 bg-electric/10 p-6 text-center text-xl font-black text-deepblue">
                <Image
                  src={mediaConfig.logos.mark.path}
                  alt=""
                  width={16}
                  height={35}
                  aria-hidden="true"
                  className="h-7 w-auto"
                />
                <span>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
