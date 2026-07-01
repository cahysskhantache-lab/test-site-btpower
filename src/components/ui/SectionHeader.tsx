type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  inverted?: boolean;
};

export function SectionHeader({ eyebrow, title, description, inverted = false }: SectionHeaderProps) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className={inverted ? "text-sm font-bold uppercase text-electric" : "text-sm font-bold uppercase text-deepblue"}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={inverted ? "mt-3 text-3xl font-black leading-tight text-white sm:text-4xl" : "mt-3 text-3xl font-black leading-tight text-deepblue sm:text-4xl"}>
        {title}
      </h2>
      {description ? (
        <p className={inverted ? "mt-4 text-lg leading-8 text-white/70" : "mt-4 text-lg leading-8 text-muted"}>{description}</p>
      ) : null}
    </div>
  );
}
