import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

type PageHeaderProps = {
  title: string;
  subtitle: string;
  imageId?: string;
};

export function PageHeader({ title, subtitle, imageId }: PageHeaderProps) {
  const image = imageId ? PlaceHolderImages.find((img) => img.id === imageId) : null;
  
  // Conditionally apply background only if no image is present
  const sectionClasses = image 
    ? "relative h-64 w-full mt-0 pt-0" // Image mode: No padding, no background color needed
    : "relative h-64 w-full bg-primary mt-0 pt-0"; // Solid background mode

  return (
    // FIX: Added mt-0 and pt-0 to eliminate the top gap
    <section className={sectionClasses}> 
      {image && (
        <Image
          src={image.imageUrl}
          alt={image.description}
          fill
          // FIX: Added brightness to darken the image for text readability
          className="object-cover brightness-[0.4]"
          data-ai-hint={image.imageHint}
        />
      )}
      {/* If using an image, the bg-primary/80 overlay handles the dimming. */}
      {/* The original code already has a good overlay, let's keep it. */}
      {image && <div className="absolute inset-0 bg-primary/30" />} 
      
      <div className="relative container mx-auto z-10 flex h-full flex-col items-start justify-center text-primary-foreground">
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