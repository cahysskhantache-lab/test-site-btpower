import type { Metadata } from "next";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CTASection } from "@/components/sections/CTASection";
import { ImagePageHero } from "@/components/sections/ImagePageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { mediaConfig } from "@/data/mediaConfig";
import { featuredSolutions, solutions } from "@/data/solutions";

export const metadata: Metadata = {
  title: "Nos solutions",
  description:
    "Armoires et coffrets électriques BT Power IDF pour projets tertiaires et industriels."
};

export default function SolutionsPage() {
  return (
    <>
      <ImagePageHero
        eyebrow="Nos solutions"
        title="Des armoires et coffrets électriques adaptés à vos projets"
        description="BT Power IDF conçoit, fabrique et livre des équipements électriques adaptés aux besoins des projets tertiaires et industriels, en tenant compte des contraintes techniques et de l'environnement d'implantation."
        image={mediaConfig.solutionsHeader}
        imagePosition="center center"
      />

      <section className="bg-paper py-20">
        <div className="page-shell">
          <SectionHeader
            eyebrow="Solutions principales"
            title="Armoires et coffrets électriques"
            description="Deux familles d'équipements présentées avec des photos réelles BT Power IDF."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {featuredSolutions.map((solution, index) => {
              const media = mediaConfig.solutionCards[index];

              return (
                <article key={solution.slug} className="overflow-hidden rounded-lg border border-line bg-white shadow-sm">
                  <div className="relative min-h-[430px] bg-paper p-5">
                    <Image
                      src={media.path}
                      alt={media.alt}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-contain p-5"
                    />
                  </div>
                  <div className="p-6 sm:p-8">
                    <span className="text-sm font-black uppercase text-deepblue">Solution</span>
                    <h2 className="mt-3 text-2xl font-black text-deepblue sm:text-3xl">{solution.title}</h2>
                    <p className="mt-4 leading-8 text-muted">{solution.description}</p>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-8 grid overflow-hidden rounded-lg border border-line bg-white shadow-sm lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
            <div className="relative min-h-[360px] bg-paper">
              <Image
                src={mediaConfig.solutionDetail.openCabinet.path}
                alt={mediaConfig.solutionDetail.openCabinet.alt}
                fill
                sizes="(min-width: 1024px) 44vw, 100vw"
                className="object-cover"
                style={{ objectPosition: "center center" }}
              />
            </div>
            <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
              <p className="text-sm font-black uppercase text-deepblue">Détail intérieur</p>
              <h2 className="mt-3 text-3xl font-black leading-tight text-deepblue">
                Pensés jusque dans les détails
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
                Chaque coffret est conçu et réalisé selon les contraintes techniques, les équipements à intégrer et les besoins propres à votre projet.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="page-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="sticky top-28 hidden overflow-hidden rounded-lg border border-line bg-white shadow-soft lg:block">
            <div className="relative h-[560px]">
              <Image
                src={mediaConfig.knowHow.production[2].path}
                alt={mediaConfig.knowHow.production[2].alt}
                fill
                sizes="38vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="grid gap-6">
            {solutions.map((solution, index) => (
              <article
                id={solution.slug}
                key={solution.slug}
                className="scroll-mt-28 rounded-lg border border-line bg-white p-6 shadow-sm sm:p-8"
              >
                <span className="text-sm font-black text-deepblue">0{index + 1}</span>
                <h2 className="mt-3 text-2xl font-black text-deepblue sm:text-3xl">{solution.title}</h2>
                <p className="mt-4 leading-8 text-muted">{solution.description}</p>
                <div className="mt-6 grid gap-5 md:grid-cols-2">
                  <div className="rounded-lg bg-paper p-5">
                    <h3 className="font-black text-deepblue">Cas d'usage</h3>
                    <ul className="mt-4 grid gap-3">
                      {solution.useCases.map((item) => (
                        <li key={item} className="flex gap-3 text-muted">
                          <CheckCircle2 aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-deepblue" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-lg bg-electric/10 p-5">
                    <h3 className="font-black text-deepblue">Apports</h3>
                    <ul className="mt-4 grid gap-3">
                      {solution.benefits.map((item) => (
                        <li key={item} className="flex gap-3 text-muted">
                          <CheckCircle2 aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-electric" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="focus-ring mt-6 inline-flex min-h-11 items-center justify-center rounded-md bg-electric px-5 py-3 font-bold text-deepblue transition hover:bg-deepblue hover:text-white"
                >
                  Parler de votre projet
                  <ArrowRight aria-hidden="true" className="ml-2 h-5 w-5" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
