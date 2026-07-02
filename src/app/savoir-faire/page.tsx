import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, ClipboardCheck, Wrench } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ImagePageHero } from "@/components/sections/ImagePageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { knowHowContent } from "@/data/knowHow";
import { mediaConfig } from "@/data/mediaConfig";

export const metadata: Metadata = {
  title: "Notre savoir-faire",
  description:
    "Savoir-faire BT Power IDF : analyse technique, préparation de l'armoire, montage des composants, câblage, finitions, essais et contrôle."
};

export default function KnowHowPage() {
  return (
    <>
      <ImagePageHero
        eyebrow="Notre savoir-faire"
        title="De l'analyse technique aux essais finaux"
        description="BT Power IDF mobilise son expertise technique et son savoir-faire d'atelier pour concevoir, préparer, câbler et finaliser des équipements adaptés à chaque projet."
        image={mediaConfig.knowHow.production[2]}
        imagePosition="center center"
      />

      <section className="py-20">
        <div className="page-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative min-h-[420px] overflow-hidden rounded-lg border border-line bg-white shadow-soft">
            <Image
              src={mediaConfig.knowHow.analysis.path}
              alt={mediaConfig.knowHow.analysis.alt}
              fill
              sizes="(min-width: 1024px) 44vw, 100vw"
              className="object-cover"
              style={{ objectPosition: knowHowContent.analysis.imagePosition }}
            />
          </div>
          <div>
            <div className="flex h-11 w-11 items-center justify-center rounded-md bg-electric/10 text-deepblue">
              <ClipboardCheck aria-hidden="true" className="h-5 w-5" />
            </div>
            <SectionHeader
              eyebrow="Amont projet"
              title={knowHowContent.analysis.title}
              description={knowHowContent.analysis.description}
            />
            <p className="mt-6 max-w-2xl leading-8 text-muted">
              Cette phase permet de poser une base claire avant la production : lecture des plans, compréhension des contraintes et alignement technique autour de la solution à réaliser.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-paper py-20">
        <div className="page-shell">
          <SectionHeader
            eyebrow="Fabrication"
            title="La production, étape par étape"
            description="Le parcours de fabrication montre les grandes étapes visibles en atelier, de la structure de l'armoire jusqu'aux vérifications avant livraison."
          />
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
            Après validation de l'offre, les composants nécessaires sont préparés avant le lancement de la production. Les équipes réalisent ensuite chaque étape de fabrication avec précision, jusqu'aux essais finaux.
          </p>

          <div className="mt-12 grid gap-8">
            {knowHowContent.productionSteps.map((step, index) => {
              const media = mediaConfig.knowHow.production[index];
              const isCabling = step.title === "Câblage";
              const imageFirst = index % 2 === 0;
              const imageOrderClass = imageFirst ? "" : "lg:order-2";
              const contentOrderClass = imageFirst ? "" : "lg:order-1";

              return (
                <article
                  key={step.title}
                  className="overflow-hidden rounded-lg border border-line bg-white shadow-sm"
                >
                  <div className="grid gap-0 lg:grid-cols-2">
                    <div className={`relative min-h-[360px] bg-steel sm:min-h-[440px] ${imageOrderClass}`}>
                      <Image
                        src={media.path}
                        alt={media.alt}
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover"
                        style={{ objectPosition: step.imagePosition }}
                      />
                    </div>
                    <div className={`flex flex-col justify-center p-6 sm:p-8 lg:p-10 ${contentOrderClass}`}>
                      <div className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-electric text-sm font-black text-deepblue">
                        {index + 1}
                      </div>
                      <div className="mt-5 flex items-center gap-3">
                        {isCabling ? (
                          <Wrench aria-hidden="true" className="h-5 w-5 shrink-0 text-electric" />
                        ) : (
                          <CheckCircle2 aria-hidden="true" className="h-5 w-5 shrink-0 text-electric" />
                        )}
                        <h2 className="text-2xl font-black leading-tight text-deepblue">{step.title}</h2>
                      </div>
                      <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">{step.description}</p>

                      {isCabling ? (
                        <div className="mt-8 grid grid-cols-3 gap-3">
                          {mediaConfig.knowHow.cablingDetails.map((detail) => (
                            <div key={detail.id} className="relative aspect-[4/5] overflow-hidden rounded-md bg-paper">
                              <Image
                                src={detail.path}
                                alt={detail.alt}
                                fill
                                sizes="(min-width: 1024px) 12vw, 30vw"
                                className="object-cover"
                              />
                            </div>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="page-shell">
          <div className="grid overflow-hidden rounded-lg bg-deepblue text-white shadow-soft lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
            <div className="relative min-h-[360px] bg-paper sm:min-h-[430px] lg:min-h-[520px]">
              <Image
                src={mediaConfig.afterSales.path}
                alt={mediaConfig.afterSales.alt}
                fill
                sizes="(min-width: 1024px) 44vw, 100vw"
                className="object-cover"
                style={{ objectPosition: "center center" }}
              />
            </div>
            <div className="relative flex flex-col justify-center p-6 sm:p-8 lg:p-10">
              <Image
                src={mediaConfig.logos.mark.path}
                alt=""
                width={76}
                height={164}
                aria-hidden="true"
                className="absolute right-6 top-6 h-20 w-auto opacity-10"
              />
              <p className="text-sm font-black uppercase text-electric">Suivi client</p>
              <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
                Un accompagnement qui se poursuit après la livraison
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/76">
                Après la livraison de votre équipement, BT Power IDF reste disponible pour répondre aux besoins liés à votre projet et accompagner ses clients dans la durée.
              </p>
              <Link
                href="/contact#demande-devis"
                className="focus-ring mt-8 inline-flex min-h-12 w-fit items-center justify-center rounded-md bg-electric px-6 py-3 font-bold text-deepblue transition hover:bg-white"
              >
                Contacter notre équipe
                <ArrowRight aria-hidden="true" className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
