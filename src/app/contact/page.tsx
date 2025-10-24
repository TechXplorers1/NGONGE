import { PageHeader } from "@/components/shared/PageHeader";
import { contactInfo } from "@/lib/placeholder-data";
import { ContactForm } from "./ContactForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Let's discuss how NGONGE can support your mission."
        imageId="page-header-contact"
      />
      <div className="container mx-auto py-16 sm:py-24">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-headline font-bold text-primary">Get in Touch</h2>
            <p className="mt-4 text-muted-foreground">
              We are ready to answer your questions about our services or prepare a proposal for your project. Please use the form to provide details about your requirements, or contact us directly via email or phone.
            </p>
            <div className="mt-8 space-y-4">
              {contactInfo.map((info) => (
                <Card key={info.title} className="bg-card">
                  <CardHeader className="flex flex-row items-center gap-4 space-y-0 p-4">
                    <div className="bg-primary text-primary-foreground rounded-md p-3">
                        <info.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{info.title}</CardTitle>
                      <a href={info.href} className="text-muted-foreground hover:text-accent transition-colors">
                        {info.value}
                      </a>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
            <div className="mt-8">
                <h3 className="text-2xl font-headline font-bold text-primary">Our Location</h3>
                <div className="mt-4 h-64 bg-muted rounded-lg flex items-center justify-center">
                    <Link href="https://share.google/NgWIdQphUjqkpVyhw" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                      View on Google Maps
                    </Link>
                </div>
            </div>
          </div>
          <div>
            <Card className="p-6 sm:p-8">
                <CardHeader className="p-0 mb-6">
                    <CardTitle className="text-2xl font-headline text-primary">Request for Proposal (RFP)</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                    <ContactForm />
                </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
