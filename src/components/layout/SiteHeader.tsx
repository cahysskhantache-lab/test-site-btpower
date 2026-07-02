"use client";

import { Mail, Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { mediaConfig } from "@/data/mediaConfig";
import { siteConfig } from "@/data/siteConfig";
import { cn, isConfirmedContact } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const hasEmail = isConfirmedContact(siteConfig.contact.contactEmail);
  const hasPhone = isConfirmedContact(siteConfig.contact.phone);

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-white/94 backdrop-blur">
      <div className="page-shell flex min-h-[76px] items-center justify-between gap-5">
        <Link href="/" className="focus-ring flex items-center rounded-md" onClick={() => setOpen(false)}>
          <Image
            src={mediaConfig.logos.primary.path}
            alt={mediaConfig.logos.primary.alt}
            width={240}
            height={60}
            priority
            className="h-auto w-[170px] sm:w-[214px]"
          />
        </Link>

        <nav aria-label="Navigation principale" className="hidden items-center gap-1 lg:flex">
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "focus-ring rounded-md px-3 py-2 text-sm font-semibold text-muted transition hover:bg-steel hover:text-deepblue",
                pathname === item.href && "bg-electric/10 text-deepblue"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          {hasEmail ? (
            <a
              href={`mailto:${siteConfig.contact.contactEmail}`}
              className="focus-ring flex h-10 w-10 items-center justify-center rounded-md border border-line text-deepblue transition hover:border-electric hover:text-electric"
              aria-label="Envoyer un email"
            >
              <Mail aria-hidden="true" className="h-5 w-5" />
            </a>
          ) : (
            <span className="flex h-10 w-10 items-center justify-center rounded-md border border-line text-logoGray" aria-label="Email à confirmer">
              <Mail aria-hidden="true" className="h-5 w-5" />
            </span>
          )}
          <Link
            href="/contact"
            className="focus-ring inline-flex min-h-10 items-center justify-center rounded-md bg-electric px-4 py-2 text-sm font-bold text-deepblue transition hover:bg-deepblue hover:text-white"
          >
            Parler de votre projet
          </Link>
        </div>

        <button
          type="button"
          className="focus-ring flex h-11 w-11 items-center justify-center rounded-md border border-line bg-white text-deepblue lg:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div id="menu-mobile" className="border-t border-line bg-white lg:hidden">
          <nav aria-label="Navigation mobile" className="page-shell py-4">
            <div className="grid gap-2">
              {siteConfig.navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "focus-ring rounded-md px-4 py-3 font-semibold text-muted transition hover:bg-steel hover:text-deepblue",
                    pathname === item.href && "bg-electric/10 text-deepblue"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {hasPhone ? (
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                  className="focus-ring inline-flex min-h-11 items-center justify-center rounded-md border border-line px-3 font-semibold text-deepblue"
                >
                  <Phone aria-hidden="true" className="mr-2 h-4 w-4" />
                  Appeler
                </a>
              ) : (
                <span className="inline-flex min-h-11 items-center justify-center rounded-md border border-line px-3 font-semibold text-logoGray">
                  <Phone aria-hidden="true" className="mr-2 h-4 w-4" />
                  À confirmer
                </span>
              )}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="focus-ring inline-flex min-h-11 items-center justify-center rounded-md bg-electric px-3 font-semibold text-deepblue"
              >
                Contact
              </Link>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
