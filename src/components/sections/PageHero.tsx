type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="technical-lines bg-white/86 py-16 sm:py-20">
      <div className="page-shell">
        <div className="max-w-4xl">
          <p className="text-sm font-bold uppercase text-deepblue">{eyebrow}</p>
          <h1 className="mt-4 text-4xl font-black leading-tight text-deepblue sm:text-5xl">{title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">{description}</p>
        </div>
      </div>
    </section>
  );
}
