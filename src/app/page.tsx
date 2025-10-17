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
      <section className="relative h-[60vh] md:h-[80vh] w-full">
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
          <h1 className="text-4xl md:text-6xl font-headline font-bold drop-shadow-lg">
            Mission-Critical Federal Solutions
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl drop-shadow">
            NGONGE delivers unparalleled logistics, facility support, and IT modernization to ensure your agency's success.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/resources">Download Capability Statement</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10">
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
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {trustIndicators.map((indicator) => (
              <div key={indicator.name} className="flex justify-center">
                <span className="font-bold text-lg text-primary/80">{indicator.name}</span>
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
              <Card key={cap.title} className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="bg-primary text-primary-foreground p-3 rounded-full">
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
                  <Button asChild variant="link" className="p-0 text-accent">
                    <Link href={cap.href}>Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </CardContent>
              </Card>
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
                <Card key={index} className="overflow-hidden">
                  {studyImage && (
                    <div className="relative h-48 w-full">
                      <Image
                        src={studyImage.imageUrl}
                        alt={study.problem}
                        fill
                        className="object-cover"
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
            <Button asChild size="lg">
              <Link href="/past-performance">Explore All Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
