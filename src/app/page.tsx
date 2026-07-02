import { ArrowRight, Award, Building2, Factory, Home, Landmark, PlayCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CTASection } from "@/components/sections/CTASection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { mediaConfig } from "@/data/mediaConfig";
import { homeMethodSteps } from "@/data/method";
import { siteConfig } from "@/data/siteConfig";

const sectorIcons = [Factory, Building2, Home, Landmark];

const differentiators = [
  {
    title: "Une expertise technique au service de chaque projet",
    description:
      "Nos chargés d'affaires analysent les documents techniques, les schémas et les contraintes propres à chaque demande afin de proposer une solution cohérente, fiable et adaptée au besoin du client."
  },
  {
    title: "Une fabrication maîtrisée",
    description:
      "De la préparation de l'armoire au câblage, en passant par le montage des composants, les finitions et les essais, nos équipes suivent chaque étape avec rigueur et précision."
  },
  {
    title: "Une organisation attentive aux besoins",
    description:
      "Chaque demande est étudiée afin de proposer une réponse adaptée aux contraintes techniques, au niveau de personnalisation attendu et aux exigences du projet."
  },
  {
    title: "Un accompagnement de proximité",
    description:
      "De l'étude initiale à la livraison, nos équipes restent disponibles pour échanger, conseiller et accompagner les clients tout au long de leur projet."
  }
];

export default function HomePage() {
  const homeMethodMedia = [...mediaConfig.method, mediaConfig.afterSales];

  return (
    <>
      <section className="bg-white py-8 sm:py-10">
        <div className="page-shell">
          <div className="reveal relative min-h-[620px] overflow-hidden rounded-lg bg-deepblue text-white shadow-soft">
            <Image
              src={mediaConfig.home.hero.path}
              alt={mediaConfig.home.hero.alt}
              fill
              priority
              sizes="100vw"
              className="object-cover"
              style={{ objectPosition: "center center" }}
            />
            <div className="absolute inset-0 bg-deepblue/58" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,56,33,0.95),rgba(18,56,33,0.62),rgba(18,56,33,0.12))]" />
            <div className="relative z-10 flex min-h-[620px] items-center px-6 py-12 sm:px-8 lg:px-12">
              <div className="max-w-3xl">
                <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/16 bg-white/10 px-4 py-2 text-sm font-black uppercase tracking-[0.08em] text-white">
                  <Image
                    src={mediaConfig.logos.mark.path}
                    alt=""
                    width={24}
                    height={24}
                    aria-hidden="true"
                    className="h-6 w-auto"
                  />
                  BT IDF
                </div>
                <h1 className="font-heading text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
                  La précision électrique,
                  <span className="mt-2 block decoration-electric decoration-4 underline-offset-8 sm:underline">
                    au service de vos projets.
                  </span>
                </h1>
                <p className="mt-7 max-w-2xl text-lg leading-8 text-white/82 sm:text-xl">
                  Conception et réalisation d'armoires et de coffrets électriques pour les projets tertiaires et industriels.
                </p>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/contact"
                    className="focus-ring inline-flex min-h-12 items-center justify-center rounded-md bg-electric px-6 py-3 font-bold text-deepblue shadow-panel transition hover:bg-white"
                  >
                    Demander un devis gratuit
                    <ArrowRight aria-hidden="true" className="ml-2 h-5 w-5" />
                  </Link>
                  <Link
                    href="/solutions"
                    className="focus-ring inline-flex min-h-12 items-center justify-center rounded-md border border-white/24 bg-white/10 px-6 py-3 font-bold text-white transition hover:bg-white hover:text-deepblue"
                  >
                    Découvrir nos solutions
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper py-20">
        <div className="page-shell">
          <SectionHeader
            eyebrow="Vidéo"
            title="Découvrez BT IDF"
            description="Une présentation sobre de l'atelier, des gestes techniques et du soin porté aux tableaux électriques."
          />
          <div className="mt-10 overflow-hidden rounded-lg border border-line bg-deepblue shadow-soft">
            <video
              className="aspect-video w-full bg-deepblue object-cover"
              autoPlay
              controls
              loop
              muted
              playsInline
              preload="metadata"
              poster={mediaConfig.home.videoPoster.path}
            >
              <source src={mediaConfig.home.videoMov.path} type="video/quicktime" />
              <source src={mediaConfig.home.videoMp4.path} type="video/mp4" />
              Votre navigateur ne lit pas cette vidéo.
            </video>
            <div className="flex items-center gap-3 border-t border-white/10 bg-deepblue px-5 py-4 text-sm text-white/76">
              <PlayCircle aria-hidden="true" className="h-5 w-5 text-electric" />
              <span>Lecture automatique muette, en boucle, avec contrôles visibles.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-deepblue py-20 text-white">
        <div className="page-shell grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-stretch">
          <div className="relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] p-6 sm:p-8 lg:p-10">
            <Image
              src={mediaConfig.logos.mark.path}
              alt=""
              width={96}
              height={96}
              aria-hidden="true"
              className="absolute right-6 top-6 h-24 w-auto opacity-10"
            />
            <p className="text-sm font-black uppercase text-electric">Ce qui nous différencie</p>
            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
              Une approche technique, réactive et proche du terrain
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-white/78">
              BT IDF accompagne ses clients avec une approche à la fois technique, réactive et proche du terrain. Cette exigence se retrouve à chaque étape, de l'analyse du besoin jusqu'à la livraison.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-electric/30 bg-white/[0.06] px-4 py-2 text-sm font-black uppercase text-white/86">
              <Image
                src={mediaConfig.logos.mark.path}
                alt=""
                width={16}
                height={16}
                aria-hidden="true"
                className="h-3.5 w-3.5"
              />
              Entreprise 100 % française
            </div>

            <div className="mt-10 grid gap-7">
              {differentiators.map((item, index) => (
                <article key={item.title} className="border-l-2 border-electric/70 pl-5">
                  <span className="text-sm font-black text-electric">0{index + 1}</span>
                  <h3 className="mt-2 text-xl font-black leading-tight">{item.title}</h3>
                  <p className="mt-3 leading-7 text-white/72">{item.description}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="relative min-h-[520px] overflow-hidden rounded-lg border border-white/10 shadow-soft">
            <Image
              src={mediaConfig.knowHow.production[2].path}
              alt={mediaConfig.knowHow.production[2].alt}
              fill
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="object-cover"
              style={{ objectPosition: "center center" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deepblue/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <p className="max-w-md text-lg font-bold leading-8">
                Une production en atelier, appuyée par des échanges techniques dès l'amont.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper py-20">
        <div className="page-shell">
          <div className="relative grid gap-10 overflow-hidden rounded-lg border border-line bg-white p-6 shadow-sm sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center lg:p-10">
            <Image
              src={mediaConfig.logos.mark.path}
              alt=""
              width={128}
              height={128}
              aria-hidden="true"
              className="absolute -left-2 top-8 h-32 w-auto opacity-[0.06]"
            />
            <div className="relative max-w-3xl">
              <div className="flex h-11 w-11 items-center justify-center rounded-md bg-electric/10 text-deepblue">
                <Award aria-hidden="true" className="h-5 w-5" />
              </div>
              <p className="mt-6 text-sm font-black uppercase text-deepblue">Engagement</p>
              <h2 className="mt-3 text-3xl font-black leading-tight text-deepblue sm:text-4xl">
                Un engagement responsable reconnu
              </h2>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">
                En janvier 2026, BT IDF a obtenu la médaille de bronze EcoVadis. Cette distinction vient reconnaître une démarche d'amélioration et d'engagement en matière de responsabilité sociétale.
              </p>
            </div>
            <div className="relative mx-auto aspect-square w-48 shrink-0 sm:w-60 lg:w-72">
              <Image
                src={mediaConfig.trust.ecovadisBronze.path}
                alt={mediaConfig.trust.ecovadisBronze.alt}
                fill
                sizes="(min-width: 1024px) 288px, 240px"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-deepblue py-20 text-white">
        <div className="page-shell">
          <SectionHeader
            eyebrow="Secteurs"
            title="Des contextes de projet identifiés"
            description="BT IDF étudie des équipements électriques adaptés aux environnements tertiaires, industriels, résidentiels collectifs ou publics."
            inverted
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {siteConfig.sectors.map((sector, index) => {
              const Icon = sectorIcons[index] ?? Factory;
              return (
                <article key={sector.title} className="rounded-lg border border-white/15 bg-white/[0.06] p-6">
                  <Icon aria-hidden="true" className="h-7 w-7 text-electric" />
                  <h2 className="mt-6 text-xl font-black">{sector.title}</h2>
                  <p className="mt-3 leading-7 text-white/72">{sector.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="page-shell">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeader
              eyebrow="Méthode"
              title="Un parcours clair pour traiter votre projet"
              description="Une lecture simple des étapes clés, avec le détail complet disponible sur la page dédiée."
            />
            <Link
              href="/notre-methode"
              className="focus-ring inline-flex min-h-12 w-fit items-center justify-center rounded-md bg-electric px-6 py-3 font-bold text-deepblue transition hover:bg-deepblue hover:text-white"
            >
              En savoir plus
              <ArrowRight aria-hidden="true" className="ml-2 h-5 w-5" />
            </Link>
          </div>
          <div className="relative mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-6">
            <span aria-hidden="true" className="absolute left-8 right-8 top-24 hidden h-px bg-electric/35 xl:block" />
            {homeMethodSteps.map((step, index) => {
              const media = homeMethodMedia[index];
              return (
                <article key={step.title} className="relative z-10 overflow-hidden rounded-lg border border-line bg-white shadow-sm">
                  <div className="relative aspect-[4/3] overflow-hidden bg-paper">
                    <Image
                      src={media.path}
                      alt={media.alt}
                      fill
                      sizes="(min-width: 1280px) 17vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                      style={{ objectPosition: step.imagePosition }}
                    />
                  </div>
                  <div className="relative p-5">
                    <Image
                      src={mediaConfig.logos.mark.path}
                      alt=""
                      width={40}
                      height={40}
                      aria-hidden="true"
                      className="absolute right-4 top-4 h-10 w-auto opacity-10"
                    />
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-electric text-sm font-black text-deepblue">
                      {index + 1}
                    </span>
                    <h2 className="mt-3 text-lg font-black leading-tight text-deepblue">{step.title}</h2>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection title="Un projet d'armoire ou de coffret électrique ?" buttonLabel="Demander un devis gratuit" />
    </>
  );
}
