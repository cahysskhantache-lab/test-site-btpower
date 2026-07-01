import type { Metadata } from "next";
import type { ComponentType, ReactNode } from "react";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/sections/ContactForm";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { mediaConfig } from "@/data/mediaConfig";
import { siteConfig } from "@/data/siteConfig";
import { isConfirmedContact } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact et demande de devis",
  description:
    "Contact BT Power IDF pour une demande de devis, une question technique ou un projet d'armoire électrique à étudier."
};

const address = siteConfig.contact.addressLines.join(", ");
const encodedAddress = encodeURIComponent(address);
const mapsEmbedUrl = `https://www.google.com/maps?q=${encodedAddress}&output=embed`;
const itineraryUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;

export default function ContactPage() {
  const hasEmail = isConfirmedContact(siteConfig.contact.contactEmail);
  const hasPhone = isConfirmedContact(siteConfig.contact.phone);
  const phoneHref = `tel:${siteConfig.contact.phone.replace(/\s/g, "")}`;
  const emailHref = `mailto:${siteConfig.contact.contactEmail}`;

  return (
    <>
      <section className="bg-white py-8 sm:py-10">
        <div className="page-shell">
          <div className="relative min-h-[500px] overflow-hidden rounded-lg bg-deepblue text-white shadow-soft">
            <Image
              src={mediaConfig.afterSales.path}
              alt={mediaConfig.afterSales.alt}
              fill
              priority
              sizes="100vw"
              className="object-cover"
              style={{ objectPosition: "center center" }}
            />
            <div className="absolute inset-0 bg-deepblue/66" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,56,33,0.94),rgba(18,56,33,0.62),rgba(18,56,33,0.18))]" />
            <div className="relative z-10 flex min-h-[500px] items-center px-6 py-12 sm:px-8 lg:px-12">
              <div className="max-w-3xl">
                <p className="text-sm font-black uppercase text-electric">Contact</p>
                <h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
                  Parlons de votre projet électrique.
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82 sm:text-xl">
                  Une demande de devis, une question technique ou un projet à étudier ? Nos équipes sont disponibles pour vous accompagner.
                </p>
                <Link
                  href="#devis"
                  className="focus-ring mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-electric px-6 py-3 font-bold text-deepblue transition hover:bg-white"
                >
                  Demander un devis gratuit
                  <ArrowRight aria-hidden="true" className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper py-20">
        <div className="page-shell grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative overflow-hidden rounded-lg border border-line bg-white p-6 shadow-sm sm:p-8">
            <Image
              src={mediaConfig.logos.mark.path}
              alt=""
              width={96}
              height={207}
              aria-hidden="true"
              className="absolute right-6 top-6 h-28 w-auto opacity-[0.06]"
            />
            <Image
              src={mediaConfig.logos.contact.path}
              alt={mediaConfig.logos.contact.alt}
              width={mediaConfig.logos.contact.width}
              height={mediaConfig.logos.contact.height}
              className="h-auto w-24"
            />
            <p className="mt-8 text-sm font-black uppercase text-deepblue">Coordonnées</p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-deepblue">
              Une équipe disponible pour étudier votre besoin
            </h2>
            <p className="mt-5 text-lg leading-8 text-muted">
              L'étude de votre demande et le devis sont gratuits. Vous pouvez transmettre vos plans, schémas, contraintes techniques ou premiers éléments de projet.
            </p>

            <div className="mt-8 grid gap-4">
              <ContactLine icon={Phone} title="Téléphone">
                {hasPhone ? (
                  <a className="focus-ring rounded-md text-deepblue hover:text-electric" href={phoneHref}>
                    {siteConfig.contact.phone}
                  </a>
                ) : (
                  <span>{siteConfig.contact.phone}</span>
                )}
              </ContactLine>
              <ContactLine icon={Mail} title="E-mail">
                {hasEmail ? (
                  <a className="focus-ring rounded-md text-deepblue hover:text-electric" href={emailHref}>
                    {siteConfig.contact.contactEmail}
                  </a>
                ) : (
                  <span>{siteConfig.contact.contactEmail}</span>
                )}
              </ContactLine>
              <ContactLine icon={MapPin} title="Adresse">
                <span>{address}</span>
              </ContactLine>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {hasPhone ? (
                <a
                  href={phoneHref}
                  className="focus-ring inline-flex min-h-12 items-center justify-center rounded-md border border-line px-5 py-3 font-bold text-deepblue transition hover:border-electric hover:bg-electric/10 md:hidden"
                >
                  <Phone aria-hidden="true" className="mr-2 h-5 w-5" />
                  Appeler
                </a>
              ) : null}
              {hasEmail ? (
                <a
                  href={emailHref}
                  className="focus-ring inline-flex min-h-12 items-center justify-center rounded-md border border-line px-5 py-3 font-bold text-deepblue transition hover:border-electric hover:bg-electric/10"
                >
                  <Mail aria-hidden="true" className="mr-2 h-5 w-5" />
                  Envoyer un e-mail
                </a>
              ) : null}
              <Link
                href="#devis"
                className="focus-ring inline-flex min-h-12 items-center justify-center rounded-md bg-electric px-5 py-3 font-bold text-deepblue transition hover:bg-deepblue hover:text-white"
              >
                Demander un devis
                <ArrowRight aria-hidden="true" className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border border-line bg-white shadow-sm">
            <iframe
              title="Localisation BT Power IDF à Frépillon"
              src={mapsEmbedUrl}
              className="h-[420px] w-full border-0 lg:h-full lg:min-h-[560px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="border-t border-line p-5">
              <p className="font-bold text-deepblue">{address}</p>
              <a
                href={itineraryUrl}
                target="_blank"
                rel="noreferrer"
                className="focus-ring mt-4 inline-flex min-h-11 items-center justify-center rounded-md bg-deepblue px-5 py-3 font-bold text-white transition hover:bg-electric hover:text-deepblue"
              >
                Obtenir l'itinéraire
                <ArrowRight aria-hidden="true" className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="devis" className="py-20">
        <div className="page-shell grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <SectionHeader
            eyebrow="Demande de devis"
            title="Transmettre les éléments de votre projet"
            description="Plus les informations fournies sont précises, plus l'étude pourra être adaptée à votre besoin."
          />
          <ContactForm />
        </div>
      </section>
    </>
  );
}

function ContactLine({
  icon: Icon,
  title,
  children
}: {
  icon: ComponentType<{ className?: string; "aria-hidden"?: boolean | "true" }>;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="flex items-start gap-4 rounded-lg border border-line bg-paper p-5">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-electric/10 text-deepblue">
        <Icon aria-hidden="true" className="h-5 w-5" />
      </span>
      <div>
        <h3 className="font-black text-deepblue">{title}</h3>
        <div className="mt-2 leading-7 text-muted">{children}</div>
      </div>
    </div>
  );
}
