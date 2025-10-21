import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Building, Shirt, Truck } from 'lucide-react';
import { capabilities, caseStudies, trustIndicators } from '@/lib/placeholder-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-banner');

  return (
    <div className="flex flex-col">
      <section className="relative h-[70vh] md:h-[80vh] w-full">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-primary-foreground px-4">
          <h1 className="text-4xl md:text-6xl font-headline font-bold drop-shadow-lg animate-fade-in-up">
            Mission-Critical Federal Solutions
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl drop-shadow animate-fade-in-up [animation-delay:0.2s]">
            NGONGE delivers unparalleled logistics, facility support, and IT modernization to ensure your agency's success.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-fade-in-up [animation-delay:0.4s]">
            <Button asChild size="lg" variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90 transition-transform hover:scale-105">
              <Link href="/resources">Download Capability Statement</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-foreground/80 text-foreground hover:bg-foreground/5 hover:text-foreground transition-transform hover:scale-105">
              <Link href="/contact">Request a Proposal</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="trust-indicators" className="bg-background py-12">
        <div className="container mx-auto text-center">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Trusted by Federal Agencies
          </h3>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {trustIndicators.map((indicator, i) => (
              <div key={indicator.name} className="flex justify-center animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s`}}>
                <div className="relative h-12 w-36">
                    <Image 
                        src={indicator.imageUrl}
                        alt={indicator.alt}
                        fill
                        className="object-contain filter grayscale transition-all duration-300 hover:grayscale-0 opacity-60 hover:opacity-100"
                    />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="capabilities" className="py-16 sm:py-24 bg-card">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">Our Core Capabilities</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            We provide comprehensive support services tailored to the unique needs of government operations.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {capabilities.slice(0, 3).map((cap) => (
              <Link key={cap.title} href={cap.href} className="group block">
                <Card className="flex flex-col h-full transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="bg-primary text-primary-foreground p-3 rounded-full transition-colors group-hover:bg-accent">
                        {cap.icon === 'Truck' && <Truck className="h-6 w-6" />}
                        {cap.icon === 'Building' && <Building className="h-6 w-6" />}
                        {cap.icon === 'Shirt' && <Shirt className="h-6 w-6" />}
                      </div>
                      <CardTitle className="text-xl font-headline">{cap.title}</CardTitle>
                    </div>
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
            ))}
          </div>
        </div>
      </section>

      <section id="past-performance" className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">Proven Past Performance</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              Delivering excellence and measurable results for our federal partners.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.slice(0, 3).map((study, index) => {
              const studyImage = PlaceHolderImages.find(p => p.id === study.imageId);
              return (
                <Card key={index} className="overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                  {studyImage && (
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={studyImage.imageUrl}
                        alt={study.problem}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={studyImage.imageHint}
                      />
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle>{study.client}</CardTitle>
                    <CardDescription>{study.category}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold text-primary">Result</h4>
                    <p className="text-muted-foreground mt-1">{study.result}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg" className="transition-transform hover:scale-105">
              <Link href="/past-performance">Explore All Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
