
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
                <div className="mt-4 h-96 bg-muted rounded-lg overflow-hidden">
                   <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3227.533439099354!2d-77.863!3d36.007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89aefb2e4f62a951%3A0x4c2b9b7f5b8a5a7d!2s4678%20N%20Browntown%20Rd%2C%20Battleboro%2C%20NC%2027809!5e0!3m2!1sen!2sus!4v1716315264633!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
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
