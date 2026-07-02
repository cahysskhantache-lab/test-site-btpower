import type { Metadata } from "next";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CTASection } from "@/components/sections/CTASection";
import { ImagePageHero } from "@/components/sections/ImagePageHero";
import { mediaConfig } from "@/data/mediaConfig";
import { methodSteps } from "@/data/method";

export const metadata: Metadata = {
  title: "Notre méthode",
  description:
    "Méthode de travail BT Power IDF : analyse, offre, préparation, fabrication, contrôle, livraison et suivi après-vente."
};

export default function MethodPage() {
  return (
    <>
      <ImagePageHero
        eyebrow="Notre méthode"
        title="Un parcours clair pour avancer avec méthode"
        description="Les étapes structurent le traitement d'un projet, de l'analyse du besoin jusqu'au contrôle, à la livraison et au suivi après-vente."
        image={mediaConfig.method[0]}
        imagePosition="center center"
      />
      <section className="py-20">
        <div className="page-shell">
          <div className="relative grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            <span aria-hidden="true" className="absolute left-8 right-8 top-28 hidden h-px bg-electric/35 xl:block" />
            {methodSteps.map((step, index) => {
              const media = mediaConfig.method[index];

              return (
                <article
                  key={step.title}
                  className="relative z-10 overflow-hidden rounded-lg border border-line bg-white shadow-sm"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-paper">
                    <Image
                      src={media.path}
                      alt={media.alt}
                      fill
                      sizes="(min-width: 1280px) 20vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                      style={{ objectPosition: step.imagePosition }}
                    />
                  </div>
                  <div className="relative p-5">
                    <Image
                      src={mediaConfig.logos.mark.path}
                      alt=""
                      width={36}
                      height={78}
                      aria-hidden="true"
                      className="absolute right-4 top-4 h-10 w-auto opacity-10"
                    />
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-electric text-sm font-black text-deepblue">
                      {index + 1}
                    </span>
                    <div className="mt-4 flex items-center gap-3">
                      <CheckCircle2 aria-hidden="true" className="h-5 w-5 shrink-0 text-electric" />
                      <h2 className="text-xl font-black text-deepblue">{step.title}</h2>
                    </div>
                    <p className="mt-4 leading-8 text-muted">{step.description}</p>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-16 grid overflow-hidden rounded-lg bg-deepblue text-white shadow-soft lg:grid-cols-[0.95fr_1.05fr]">
            <div className="relative min-h-[360px] bg-paper">
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
                width={72}
                height={155}
                aria-hidden="true"
                className="absolute right-6 top-6 h-20 w-auto opacity-10"
              />
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-electric text-sm font-black text-deepblue">
                06
              </span>
              <p className="mt-6 text-sm font-black uppercase text-electric">Relation client</p>
              <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
                Suivi et service après-vente
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/76">
                Après la livraison, BT Power IDF reste disponible pour vous accompagner selon les besoins de votre projet.
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
      <CTASection />
    </>
  );
}
