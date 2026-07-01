"use client";

import { Paperclip, Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { siteConfig } from "@/data/siteConfig";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    if (!siteConfig.contact.formEndpoint) {
      event.preventDefault();
      setSubmitted(true);
    }
  }

  return (
    <form
      className="grid gap-5 rounded-lg border border-line bg-white p-5 shadow-sm sm:p-7"
      action={siteConfig.contact.formEndpoint || undefined}
      method="post"
      encType="multipart/form-data"
      onSubmit={onSubmit}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Prénom" name="firstName" autoComplete="given-name" required />
        <Field label="Nom" name="lastName" autoComplete="family-name" required />
      </div>
      <Field label="Entreprise" name="company" autoComplete="organization" required />
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Email" name="email" type="email" autoComplete="email" required />
        <Field label="Téléphone" name="phone" type="tel" autoComplete="tel" />
      </div>
      <label className="grid gap-2 text-sm font-semibold text-deepblue">
        Type de projet
        <select
          name="projectType"
          className="focus-ring min-h-12 rounded-md border border-line bg-white px-4 text-base text-ink"
          defaultValue=""
          required
        >
          <option value="" disabled>
            Sélectionner
          </option>
          <option>Tableau électrique</option>
          <option>Projet tertiaire</option>
          <option>Projet industriel</option>
          <option>Adaptation ou extension</option>
          <option>Autre</option>
        </select>
      </label>
      <label className="grid gap-2 text-sm font-semibold text-deepblue">
        Message
        <textarea
          name="message"
          rows={6}
          className="focus-ring rounded-md border border-line px-4 py-3 text-base leading-7 text-ink"
          placeholder="Décrivez votre besoin, le contexte du projet ou les documents disponibles."
          required
        />
      </label>
      <label className="focus-within:ring-2 focus-within:ring-electric grid cursor-pointer gap-3 rounded-lg border border-dashed border-electric/40 bg-electric/5 p-5 text-deepblue">
        <span className="flex items-center gap-3 font-semibold">
          <Paperclip aria-hidden="true" className="h-5 w-5 text-electric" />
          Ajouter une pièce jointe
        </span>
        <span className="text-sm leading-6 text-muted">Plans, schémas, CCTP ou photos peuvent être ajoutés selon les besoins du projet.</span>
        <input className="text-sm text-muted file:mr-4 file:rounded-md file:border-0 file:bg-deepblue file:px-4 file:py-2 file:font-semibold file:text-white" type="file" name="attachment" />
      </label>
      <label className="flex gap-3 text-sm leading-6 text-muted">
        <input className="mt-1 h-4 w-4 rounded border-line text-electric" type="checkbox" name="privacy" required />
        <span>
          J'accepte que mes informations soient utilisées pour répondre à ma demande, conformément à la politique de confidentialité.
        </span>
      </label>
      <button
        type="submit"
        className="focus-ring inline-flex min-h-12 items-center justify-center rounded-md bg-electric px-6 py-3 font-bold text-white transition hover:bg-deepblue"
      >
        Envoyer la demande
        <Send aria-hidden="true" className="ml-2 h-5 w-5" />
      </button>
      {submitted ? (
        <p className="rounded-md border border-signal/25 bg-signal/10 px-4 py-3 text-sm font-semibold text-deepblue">
          Votre demande a été préparée. La connexion au service d'envoi peut maintenant être activée.
        </p>
      ) : null}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  autoComplete,
  required = false
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-deepblue">
      {label}
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className="focus-ring min-h-12 rounded-md border border-line px-4 text-base text-ink"
      />
    </label>
  );
}
