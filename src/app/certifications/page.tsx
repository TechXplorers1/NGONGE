import { PageHeader } from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { certifications } from "@/lib/placeholder-data";
import { Download } from "lucide-react";

export default function CertificationsPage() {
  return (
    <>
      <PageHeader
        title="Certifications & Compliance"
        subtitle="Our commitment to quality, safety, and excellence, validated by industry and government standards."
        imageId="page-header-certifications"
      />
      <div className="container mx-auto py-16 sm:py-24">
        <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">Validated Excellence</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
                We hold key federal and industry certifications that demonstrate our capability and commitment to delivering high-quality services.
            </p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert) => (
            <Card key={cert.name} className="flex flex-col items-center text-center">
              <CardHeader>
                <div className="mx-auto bg-primary text-primary-foreground rounded-full p-4 w-fit">
                    <cert.icon className="h-8 w-8" />
                </div>
                <CardTitle className="pt-4 font-headline">{cert.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription>{cert.description}</CardDescription>
              </CardContent>
              <CardContent className="w-full">
                <Button asChild variant="outline" className="w-full border-accent text-accent hover:bg-accent/10 hover:text-accent">
                    <a href={cert.downloadUrl} download>
                        <Download className="mr-2 h-4 w-4" />
                        Download PDF
                    </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
