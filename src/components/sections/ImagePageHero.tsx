import Image from "next/image";
import type { MediaItem } from "@/data/mediaConfig";

type ImagePageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: MediaItem;
  imagePosition?: string;
};

export function ImagePageHero({ eyebrow, title, description, image, imagePosition = "center center" }: ImagePageHeroProps) {
  return (
    <section className="bg-white py-8 sm:py-10">
      <div className="page-shell">
        <div className="relative min-h-[420px] overflow-hidden rounded-lg bg-deepblue py-20 text-white shadow-soft sm:min-h-[500px] sm:py-24">
          <Image
            src={image.path}
            alt={image.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: imagePosition }}
          />
          <div className="absolute inset-0 bg-deepblue/72" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,56,33,0.94),rgba(18,56,33,0.62),rgba(18,56,33,0.2))]" />
          <div className="relative z-10 flex min-h-[250px] items-end px-6 sm:px-8 lg:px-12">
            <div className="max-w-4xl">
              <p className="text-sm font-black uppercase text-electric">{eyebrow}</p>
              <h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">{title}</h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/82 sm:text-xl">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
