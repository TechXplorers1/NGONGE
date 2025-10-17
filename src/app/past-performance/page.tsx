"use client";

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { PageHeader } from "@/components/shared/PageHeader";
import { caseStudies } from "@/lib/placeholder-data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const categories = ["All", ...Array.from(new Set(caseStudies.map(cs => cs.category)))];

export default function PastPerformancePage() {
  const [filter, setFilter] = useState("All");

  const filteredStudies = useMemo(() => {
    if (filter === "All") return caseStudies;
    return caseStudies.filter(study => study.category === filter);
  }, [filter]);

  return (
    <>
      <PageHeader
        title="Past Performance"
        subtitle="Proven results and successful outcomes for our federal partners."
        imageId="page-header-performance"
      />
      <div className="container mx-auto py-16 sm:py-24">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-center sm:text-left">
                <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">Our Case Studies</h2>
                <p className="mt-2 max-w-2xl text-muted-foreground">
                    Explore our track record of delivering excellence.
                </p>
            </div>
            <div className="flex-shrink-0">
                <div className="flex items-center gap-2 p-1 bg-muted rounded-lg">
                    {categories.map(category => (
                        <Button
                            key={category}
                            variant={filter === category ? "default" : "ghost"}
                            size="sm"
                            onClick={() => setFilter(category)}
                            className={filter === category ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'}
                        >
                            {category}
                        </Button>
                    ))}
                </div>
            </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStudies.map((study, index) => {
                const studyImage = PlaceHolderImages.find(p => p.id === study.imageId);
                return (
                    <Dialog key={index}>
                        <Card className="flex flex-col">
                            {studyImage && (
                                <div className="relative h-56 w-full">
                                <Image
                                    src={studyImage.imageUrl}
                                    alt={study.problem}
                                    fill
                                    className="object-cover rounded-t-lg"
                                    data-ai-hint={studyImage.imageHint}
                                />
                                </div>
                            )}
                            <CardHeader>
                                <CardTitle>{study.client}</CardTitle>
                                <CardDescription>{study.category}</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <h4 className="font-semibold text-primary">Result</h4>
                                <p className="text-muted-foreground mt-1 line-clamp-3">{study.result}</p>
                            </CardContent>
                            <CardFooter>
                                <DialogTrigger asChild>
                                    <Button variant="outline" className="w-full">View Details</Button>
                                </DialogTrigger>
                            </CardFooter>
                        </Card>
                        <DialogContent className="sm:max-w-[625px]">
                            <DialogHeader>
                                <DialogTitle className="text-2xl font-headline">{study.client}</DialogTitle>
                                <DialogDescription>{study.category}</DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                                <div>
                                    <h4 className="font-semibold text-accent">Problem</h4>
                                    <p className="text-muted-foreground">{study.problem}</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-accent">Solution</h4>
                                    <p className="text-muted-foreground">{study.solution}</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-accent">Result</h4>
                                    <p className="text-muted-foreground">{study.result}</p>
                                </div>
                            </div>
                        </DialogContent>
                    </Dialog>
                )
            })}
        </div>
        {filteredStudies.length === 0 && (
            <div className="text-center py-16 text-muted-foreground">
                <p>No case studies found for this category.</p>
            </div>
        )}
      </div>
    </>
  );
}
