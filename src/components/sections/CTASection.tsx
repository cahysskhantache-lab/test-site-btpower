import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { isConfirmedContact } from "@/lib/utils";

type CTASectionProps = {
  title?: string;
  buttonLabel?: string;
};

export function CTASection({ title = "Un projet de tableau électrique ?", buttonLabel = "Nous contacter" }: CTASectionProps) {
  const hasPhone = isConfirmedContact(siteConfig.contact.phone);

  return (
    <section className="bg-white py-20">
      <div className="page-shell">
        <div className="grid gap-8 rounded-lg border border-line bg-deepblue p-6 text-white shadow-soft sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase text-electric">Contact</p>
            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">{title}</h2>
            <p className="mt-4 max-w-2xl leading-7 text-white/72">
              Partagez votre besoin, vos contraintes ou vos premiers documents afin de préparer un premier échange.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link
              href="/contact#demande-devis"
              className="focus-ring inline-flex min-h-12 items-center justify-center rounded-md bg-electric px-6 py-3 font-bold text-deepblue transition hover:bg-white"
            >
              {buttonLabel}
              <ArrowRight aria-hidden="true" className="ml-2 h-5 w-5" />
            </Link>
            {hasPhone ? (
              <a
                href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                className="focus-ring inline-flex min-h-12 items-center justify-center rounded-md border border-white/20 px-6 py-3 font-bold text-white transition hover:bg-white/10 md:hidden"
              >
                <Phone aria-hidden="true" className="mr-2 h-5 w-5" />
                Appeler
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
