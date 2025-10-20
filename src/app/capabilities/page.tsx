import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { capabilities } from "@/lib/placeholder-data";
import { ArrowRight, Building, HardHat, Shirt, Truck } from "lucide-react";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const iconMap = {
    Truck: Truck,
    Building: Building,
    Shirt: Shirt,
    HardHat: HardHat,
}

export default function CapabilitiesPage() {
  return (
    <article className="prose-h2:text-3xl prose-h2:md:text-4xl prose-h2:font-headline prose-h2:font-bold prose-h2:text-primary prose-p:text-muted-foreground">
      <h2>Comprehensive Federal Solutions</h2>
      <p>
        NGONGE LLC offers a diverse range of services designed to meet the complex needs of modern federal agencies. Our team of experts is equipped to handle challenges in logistics, facility management, and beyond, ensuring that your operations run smoothly and efficiently. Our approach is built on a foundation of reliability, security, and innovation.
      </p>
       <div className="not-prose mt-12">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {capabilities.map((cap) => {
                  const Icon = iconMap[cap.icon as keyof typeof iconMap] || Truck;
                  return (
                    <CarouselItem key={cap.title} className="basis-full md:basis-1/2 lg:basis-1/3">
                       <div className="p-1 h-full">
                        <Link href={cap.href} className="group h-full block">
                          <Card className="flex flex-col h-full transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                            <CardHeader className="flex-row items-center gap-4">
                              <div className="bg-primary text-primary-foreground p-3 rounded-full">
                                <Icon className="h-6 w-6" />
                              </div>
                              <CardTitle className="text-xl font-headline leading-tight">{cap.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow">
                              <CardDescription>{cap.description}</CardDescription>
                            </CardContent>
                            <CardContent>
                              <div className="flex items-center text-accent font-semibold text-sm">
                                  Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                              </div>
                            </CardContent>
                          </Card>
                        </Link>
                      </div>
                    </CarouselItem>
                  )
                })}
              </CarouselContent>
              <CarouselPrevious className="ml-8 hidden sm:flex" />
              <CarouselNext className="mr-8 hidden sm:flex" />
            </Carousel>
        </div>
    </article>
  );
}
