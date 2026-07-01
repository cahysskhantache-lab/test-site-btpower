import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-24">
      <div className="page-shell max-w-3xl">
        <p className="text-sm font-bold uppercase text-deepblue">Page introuvable</p>
        <h1 className="mt-4 text-4xl font-black text-deepblue">Cette page n'existe pas.</h1>
        <p className="mt-4 leading-8 text-muted">
          Le lien demandé ne correspond à aucune page disponible sur le site.
        </p>
        <Link
          href="/"
          className="focus-ring mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-electric px-6 py-3 font-bold text-white transition hover:bg-deepblue"
        >
          Retour à l'accueil
        </Link>
      </div>
    </section>
  );
}
