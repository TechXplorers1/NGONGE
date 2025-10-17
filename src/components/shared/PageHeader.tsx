import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

type PageHeaderProps = {
  title: string;
  subtitle: string;
  imageId: string;
};

export function PageHeader({ title, subtitle, imageId }: PageHeaderProps) {
  const image = PlaceHolderImages.find((img) => img.id === imageId);

  return (
    <section className="relative h-64 w-full">
      {image && (
        <Image
          src={image.imageUrl}
          alt={image.description}
          fill
          className="object-cover"
          data-ai-hint={image.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-primary/80" />
      <div className="relative container mx-auto z-10 flex h-full flex-col items-start justify-center text-primary-foreground px-4">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">
          {title}
        </h1>
        <p className="mt-2 max-w-2xl text-lg md:text-xl text-primary-foreground/80">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
