import { PageHeader } from "@/components/shared/PageHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { industries } from "@/lib/placeholder-data";
import { Building, ShieldCheck, Star, Truck } from "lucide-react";

const iconMap = {
    Building,
    ShieldCheck,
    Star,
    Truck,
}

export default function IndustriesPage() {
  return (
    <>
      <PageHeader
        title="Industries We Serve"
        subtitle="Delivering tailored solutions across government and commercial sectors."
        imageId="page-header-industries"
      />
      <div className="container mx-auto py-16 sm:py-24">
        <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">Our Market Focus</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
                We apply our core capabilities to meet the unique challenges and requirements of various industries, ensuring mission success and operational excellence.
            </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry) => {
            const Icon = iconMap[industry.icon as keyof typeof iconMap] || Building;
            return (
              <Card key={industry.title} className="flex flex-col text-center">
                <CardHeader>
                    <div className="mx-auto bg-primary text-primary-foreground rounded-full p-4 w-fit">
                        <Icon className="h-8 w-8" />
                    </div>
                    <CardTitle className="pt-4 font-headline">{industry.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription>{industry.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </>
  );
}
