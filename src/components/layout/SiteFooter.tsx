import { Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { mediaConfig } from "@/data/mediaConfig";
import { siteConfig } from "@/data/siteConfig";
import { isConfirmedContact } from "@/lib/utils";

export function SiteFooter() {
  const hasEmail = isConfirmedContact(siteConfig.contact.contactEmail);
  const hasPhone = isConfirmedContact(siteConfig.contact.phone);

  return (
    <footer className="bg-deepblue text-white">
      <div className="page-shell grid gap-10 py-14 md:grid-cols-[1.3fr_0.9fr_0.9fr]">
        <div className="relative">
          <Image
            src={mediaConfig.logos.mark.path}
            alt=""
            width={80}
            height={173}
            aria-hidden="true"
            className="absolute -right-2 top-0 hidden h-24 w-auto opacity-10 sm:block"
          />
          <Link href="/" className="focus-ring inline-flex rounded-md">
            <Image
              src={mediaConfig.logos.footer.path}
              alt={mediaConfig.logos.footer.alt}
              width={220}
              height={62}
              className="h-auto w-[210px]"
            />
          </Link>
          <p className="mt-5 max-w-xl leading-7 text-white/70">{siteConfig.description}</p>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase text-electric">Plan du site</h2>
          <ul className="mt-4 grid gap-3">
            {siteConfig.navigation.map((item) => (
              <li key={item.href}>
                <Link className="focus-ring rounded-md text-white/72 transition hover:text-white" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase text-electric">Contact</h2>
          <ul className="mt-4 grid gap-3 text-white/72">
            <li className="flex gap-3">
              <Mail aria-hidden="true" className="mt-1 h-4 w-4 text-electric" />
              {hasEmail ? (
                <a className="focus-ring rounded-md transition hover:text-white" href={`mailto:${siteConfig.contact.contactEmail}`}>
                  {siteConfig.contact.contactEmail}
                </a>
              ) : (
                <span>{siteConfig.contact.contactEmail}</span>
              )}
            </li>
            <li className="flex gap-3">
              <Phone aria-hidden="true" className="mt-1 h-4 w-4 text-electric" />
              {hasPhone ? (
                <a className="focus-ring rounded-md transition hover:text-white" href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}>
                  {siteConfig.contact.phone}
                </a>
              ) : (
                <span>{siteConfig.contact.phone}</span>
              )}
            </li>
            <li className="flex gap-3">
              <MapPin aria-hidden="true" className="mt-1 h-4 w-4 text-electric" />
              <span>{siteConfig.contact.addressLines.join(", ")}</span>
            </li>
            <li className="flex gap-3">
              <Linkedin aria-hidden="true" className="mt-1 h-4 w-4 text-electric" />
              <a
                className="focus-ring rounded-md transition hover:text-white"
                href={siteConfig.social.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="page-shell flex flex-col gap-3 py-5 text-sm text-white/62 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.name}. Tous droits réservés.</p>
          <div className="flex flex-wrap gap-4">
            <Link className="focus-ring rounded-md transition hover:text-white" href="/mentions-legales">
              Mentions légales
            </Link>
            <Link className="focus-ring rounded-md transition hover:text-white" href="/politique-confidentialite">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
