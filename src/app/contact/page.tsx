import type { Metadata } from "next";
import type { ComponentType, ReactNode } from "react";
import { ArrowRight, Clock, FileText, Mail, MapPin, Phone, Route } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/sections/ContactForm";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { contactFaqItems } from "@/data/faq";
import { mediaConfig } from "@/data/mediaConfig";

export const metadata: Metadata = {
  title: "Contact et demande de devis",
  description:
    "Contact BT Power IDF pour une demande de devis, une question technique ou un projet d'armoire électrique à étudier."
};

const contactDetails = {
  phone: "06 74 45 10 98",
  email: "contact@btpower-idf.fr",
  address: "2 avenue Louis Blériot, 95740 Frépillon",
  hours: "Du lundi au vendredi — 7h30 à 17h00"
};

const encodedAddress = encodeURIComponent(contactDetails.address);
const mapsEmbedUrl = `https://www.google.com/maps?q=${encodedAddress}&output=embed`;
const itineraryUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;
const phoneHref = `tel:${contactDetails.phone.replace(/\s/g, "")}`;
const emailHref = `mailto:${contactDetails.email}`;

export default function ContactPage() {
  return (
    <>
      <section className="bg-white pb-10 pt-12 sm:pb-12 sm:pt-16">
        <div className="page-shell">
          <div className="relative overflow-hidden rounded-lg border border-line bg-paper px-6 py-10 shadow-sm sm:px-8 lg:px-10">
            <Image
              src={mediaConfig.logos.mark.path}
              alt=""
              width={92}
              height={198}
              aria-hidden="true"
              className="absolute right-6 top-6 h-28 w-auto opacity-[0.06]"
            />
            <div className="relative max-w-3xl">
              <p className="text-sm font-black uppercase text-electric">Contact</p>
              <h1 className="mt-4 text-4xl font-black leading-tight text-deepblue sm:text-5xl">
                Parlons de votre projet électrique.
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
                Une demande de devis, une question technique ou un projet à étudier ? Notre équipe est disponible pour vous accompagner.
              </p>
              <Link
                href="#demande-devis"
                className="focus-ring mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-electric px-6 py-3 font-bold text-deepblue transition hover:bg-deepblue hover:text-white"
              >
                Demander un devis gratuit
                <ArrowRight aria-hidden="true" className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="demande-devis" className="scroll-mt-24 bg-white pb-20">
        <div className="page-shell grid gap-8 lg:grid-cols-[1.12fr_0.88fr] lg:items-start">
          <div className="min-w-0">
            <SectionHeader
              eyebrow="Demande de devis"
              title="Parlez-nous de votre projet"
              description="Décrivez votre besoin et joignez vos documents techniques si nécessaire. Notre équipe vous répondra avec une solution adaptée."
            />
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <aside className="relative overflow-hidden rounded-lg border border-white/10 bg-deepblue p-6 text-white shadow-soft sm:p-8 lg:sticky lg:top-28">
            <Image
              src={mediaConfig.logos.mark.path}
              alt=""
              width={96}
              height={207}
              aria-hidden="true"
              className="absolute right-6 top-6 h-28 w-auto opacity-10"
            />
            <div className="relative">
              <Image
                src={mediaConfig.logos.footer.path}
                alt={mediaConfig.logos.footer.alt}
                width={mediaConfig.logos.footer.width}
                height={mediaConfig.logos.footer.height}
                className="h-auto w-44"
              />
              <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-electric/35 bg-electric/12 px-4 py-2 text-sm font-black uppercase text-electric">
                <FileText aria-hidden="true" className="h-4 w-4" />
                Devis gratuit
              </div>
              <h2 className="mt-5 text-3xl font-black leading-tight">Coordonnées BT Power IDF</h2>
              <p className="mt-4 leading-7 text-white/76">
                Un contact direct pour les demandes de devis, les questions techniques et le suivi de vos projets.
              </p>

              <div className="mt-8 grid gap-4">
                <ContactLine icon={Phone} title="Téléphone">
                  <a className="focus-ring rounded-md text-white hover:text-electric" href={phoneHref}>
                    {contactDetails.phone}
                  </a>
                </ContactLine>
                <ContactLine icon={Mail} title="E-mail">
                  <a className="focus-ring rounded-md text-white hover:text-electric" href={emailHref}>
                    {contactDetails.email}
                  </a>
                </ContactLine>
                <ContactLine icon={MapPin} title="Adresse">
                  <span>{contactDetails.address}</span>
                </ContactLine>
                <ContactLine icon={Clock} title="Horaires">
                  <span>{contactDetails.hours}</span>
                </ContactLine>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <a
                  href={phoneHref}
                  className="focus-ring inline-flex min-h-12 items-center justify-center rounded-md border border-white/18 bg-white/8 px-5 py-3 font-bold text-white transition hover:border-electric hover:bg-electric/15 md:hidden"
                >
                  <Phone aria-hidden="true" className="mr-2 h-5 w-5" />
                  Appeler
                </a>
                <a
                  href={emailHref}
                  className="focus-ring inline-flex min-h-12 items-center justify-center rounded-md border border-white/18 bg-white/8 px-5 py-3 font-bold text-white transition hover:border-electric hover:bg-electric/15"
                >
                  <Mail aria-hidden="true" className="mr-2 h-5 w-5" />
                  Envoyer un e-mail
                </a>
                <a
                  href={itineraryUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring inline-flex min-h-12 items-center justify-center rounded-md bg-electric px-5 py-3 font-bold text-deepblue transition hover:bg-white"
                >
                  <Route aria-hidden="true" className="mr-2 h-5 w-5" />
                  Obtenir l'itinéraire
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-paper py-20">
        <div className="page-shell">
          <SectionHeader
            eyebrow="Localisation"
            title="Nous trouver à Frépillon"
            description="BT Power IDF est situé dans le Val-d'Oise, avec un accès simple pour préparer un rendez-vous ou organiser un échange technique."
          />
          <div className="mt-8 overflow-hidden rounded-lg border border-line bg-white shadow-sm">
            <iframe
              title="Localisation BT Power IDF à Frépillon"
              src={mapsEmbedUrl}
              className="h-[360px] w-full border-0 sm:h-[430px] lg:h-[520px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="flex flex-col gap-4 border-t border-line p-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="font-bold text-deepblue">{contactDetails.address}</p>
              <a
                href={itineraryUrl}
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex min-h-11 items-center justify-center rounded-md bg-deepblue px-5 py-3 font-bold text-white transition hover:bg-electric hover:text-deepblue"
              >
                Obtenir l'itinéraire
                <ArrowRight aria-hidden="true" className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="page-shell">
          <SectionHeader
            eyebrow="FAQ"
            title="Vos questions fréquentes"
            description="Les réponses essentielles avant de transmettre vos éléments techniques ou de demander un devis."
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {contactFaqItems.map((item) => (
              <details key={item.question} className="group rounded-lg border border-line bg-white p-5 shadow-sm">
                <summary className="cursor-pointer list-none text-lg font-black leading-7 text-deepblue">
                  <span className="inline-flex w-full items-start justify-between gap-4">
                    {item.question}
                    <span className="mt-1 text-electric transition group-open:rotate-45">+</span>
                  </span>
                </summary>
                <p className="mt-4 leading-8 text-muted">{item.answer}</p>
              </details>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-5 rounded-lg border border-line bg-paper p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <h2 className="text-2xl font-black leading-tight text-deepblue">Un projet à étudier ?</h2>
              <p className="mt-2 leading-7 text-muted">Envoyez vos premiers éléments, même si la solution n'est pas encore totalement définie.</p>
            </div>
            <Link
              href="#demande-devis"
              className="focus-ring inline-flex min-h-12 shrink-0 items-center justify-center rounded-md bg-electric px-6 py-3 font-bold text-deepblue transition hover:bg-deepblue hover:text-white"
            >
              Demander un devis gratuit
              <ArrowRight aria-hidden="true" className="ml-2 h-5 w-5" />
            </Link>
          </div>
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
    <div className="flex items-start gap-4 rounded-lg border border-white/12 bg-white/[0.06] p-5">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-electric/15 text-electric">
        <Icon aria-hidden="true" className="h-5 w-5" />
      </span>
      <div>
        <h3 className="font-black text-white">{title}</h3>
        <div className="mt-2 leading-7 text-white/76">{children}</div>
      </div>
    </div>
  );
}
