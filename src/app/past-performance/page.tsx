
"use client";

import Image from 'next/image';
import { PageHeader } from "@/components/shared/PageHeader";
import { ngonjeCaseStudies, vestisCaseStudies } from "@/lib/placeholder-data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function PastPerformancePage() {

  const ProjectCard = ({ study }: { study: (typeof ngonjeCaseStudies)[0] }) => {
    const studyImage = PlaceHolderImages.find(p => p.id === study.imageId);
    return (
        <Card className="flex flex-col">
            {studyImage && (
                <div className="relative h-56 w-full">
                <Image
                    src={studyImage.imageUrl}
                    alt={study.projectTitle}
                    fill
                    className="object-cover rounded-t-lg"
                    data-ai-hint={studyImage.imageHint}
                />
                </div>
            )}
            <CardHeader>
                <CardTitle>{study.projectTitle}</CardTitle>
                <CardDescription>{study.client}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow space-y-4">
                 <div>
                    <h4 className="font-semibold text-primary text-sm">Description</h4>
                    <p className="text-muted-foreground mt-1 text-sm">{study.description}</p>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                        <h4 className="font-semibold text-primary">Duration</h4>
                        <p className="text-muted-foreground">{study.duration}</p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-primary">Contract Value</h4>
                        <p className="text-muted-foreground">{study.contractValue}</p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-primary">Contract #</h4>
                        <p className="text-muted-foreground font-code">{study.contractNumber}</p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-primary">POC</h4>
                        <p className="text-muted-foreground">{study.poc}</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
  }

  return (
    <>
      <PageHeader
        title="Past Performance"
        subtitle="Proven results and successful outcomes for our federal partners."
        imageId="page-header-performance"
      />
      <div className="container mx-auto py-16 sm:py-24 space-y-16">
        <section id="ngonge-projects">
            <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">Our Projects</h2>
                <p className="mt-2 max-w-2xl mx-auto text-muted-foreground">
                    A selection of contracts successfully delivered by NGONGE Federal Solutions.
                </p>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {ngonjeCaseStudies.map((study) => (
                    <ProjectCard key={study.contractNumber} study={study} />
                ))}
            </div>
        </section>
        
        <Separator />

        <section id="vestis-projects">
            <div className="text-center">
                <div className="inline-flex items-center gap-2">
                    <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Partner Experience</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mt-2">Vestis Past Projects</h2>
                <p className="mt-2 max-w-2xl mx-auto text-muted-foreground">
                    Key projects performed by our strategic partner, Vestis, showcasing their extensive experience.
                </p>
            </div>
             <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {vestisCaseStudies.map((study) => (
                    <ProjectCard key={study.contractNumber} study={study} />
                ))}
            </div>
        </section>
      </div>
    </>
  );
}
