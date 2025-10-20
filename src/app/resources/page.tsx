import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { blogPosts, resources } from "@/lib/placeholder-data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight, Download } from "lucide-react";

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        title="Resources"
        subtitle="Downloadable documents and insights from our team."
        imageId="page-header-resources"
      />
      <div className="container mx-auto py-16 sm:py-24 space-y-16">
        <section id="downloads">
            <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">Documents & Downloads</h2>
                <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
                    Access our official documents to learn more about our capabilities and service offerings.
                </p>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                {resources.map((resource) => (
                    <Card key={resource.title} className="flex flex-col group transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                        <CardHeader className="flex-row items-center gap-4">
                            <resource.icon className="h-10 w-10 text-accent transition-transform group-hover:scale-110" />
                            <div>
                                <CardTitle className="font-headline">{resource.title}</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <CardDescription>{resource.description}</CardDescription>
                        </CardContent>
                        <CardFooter>
                            <Button asChild className="w-full transition-transform hover:scale-105">
                                <a href={resource.downloadUrl} download>
                                    <Download className="mr-2 h-4 w-4" />
                                    Download
                                </a>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </section>

        <section id="blog">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">Latest Insights</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              Industry analysis and company news from the NGONGE team.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post) => {
              const postImage = PlaceHolderImages.find(p => p.id === post.imageId);
              return (
                <Link key={post.slug} href="#" className="group block">
                <Card className="flex flex-col overflow-hidden h-full transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2">
                    {postImage && (
                        <div className="relative h-48 w-full overflow-hidden">
                            <Image
                                src={postImage.imageUrl}
                                alt={post.title}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                                data-ai-hint={postImage.imageHint}
                            />
                        </div>
                    )}
                  <CardHeader>
                    <CardTitle className="text-xl font-headline">{post.title}</CardTitle>
                    <CardDescription>
                        {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} | by {post.author}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">{post.excerpt}</p>
                  </CardContent>
                  <CardFooter>
                    <div className="flex items-center text-accent font-semibold text-sm">
                        Read More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </CardFooter>
                </Card>
                </Link>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
}
