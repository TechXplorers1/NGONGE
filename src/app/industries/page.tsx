
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { industries } from "@/lib/placeholder-data";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function IndustriesPage() {
  return (
    <>
      <div className="container mx-auto py-12 sm:py-20">
        <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">Our Market Focus</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
                We apply our core capabilities to meet the unique challenges and requirements of various industries, ensuring mission success and operational excellence.
            </p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry) => {
            return (
              <Link key={industry.title} href={industry.href} className="group h-full block">
                <Card className="flex flex-col text-center h-full transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2">
                  <CardHeader>
                      <CardTitle className="font-headline">{industry.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription>{industry.description}</CardDescription>
                  </CardContent>
                  <CardContent>
                    <div className="flex items-center justify-center text-accent font-semibold text-sm">
                        Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </>
  );
}
