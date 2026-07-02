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
    <section className="relative isolate min-h-[76svh] overflow-hidden bg-deepblue text-white md:min-h-[calc(100svh_-_76px)]">
      <Image
        src={image.path}
        alt={image.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: imagePosition }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,20,15,0.88)_0%,rgba(7,20,15,0.66)_34%,rgba(7,20,15,0.22)_68%,rgba(7,20,15,0)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(7,20,15,0.76)_0%,rgba(7,20,15,0.28)_42%,rgba(7,20,15,0)_76%)]" />
      <div className="relative z-10 flex min-h-[76svh] items-end px-5 pb-12 pt-20 sm:px-8 sm:pb-16 md:min-h-[calc(100svh_-_76px)] lg:px-16 lg:pb-20">
        <div className="min-w-0 w-[78vw] sm:w-[calc(100vw_-_5rem)] lg:w-[min(82vw,980px)]">
          <p className="text-sm font-black uppercase text-electric">{eyebrow}</p>
          <h1 className="mt-4 break-words text-[2rem] font-black leading-tight sm:text-5xl lg:text-7xl">{title}</h1>
          <p className="mt-6 min-w-0 break-words text-lg leading-8 text-white/82 sm:text-xl lg:w-[min(66vw,780px)]">{description}</p>
        </div>
      </div>
    </section>
  );
}
