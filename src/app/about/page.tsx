
import Image from "next/image";
import { PageHeader } from "@/components/shared/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { companyCodes, companyTimeline, leadershipTeam } from "@/lib/placeholder-data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { CheckCircle } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About NGONGE LLC"
        subtitle="Our Commitment to Excellence in Federal Service"
        imageId="page-header-about"
      />
      <div className="container mx-auto py-16 sm:py-24 space-y-16">
        <section id="mission-values">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-headline font-bold text-primary">Our Mission</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                To provide unwavering support to federal agencies through reliable, efficient, and innovative solutions, enabling them to achieve their mission-critical objectives with confidence.
              </p>
            </div>
            <div className="space-y-4">
                <h3 className="text-2xl font-headline font-bold text-primary">Our Core Values</h3>
                <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                        <div>
                            <h4 className="font-semibold">Integrity</h4>
                            <p className="text-muted-foreground text-sm">Upholding the highest ethical standards in all our actions.</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                        <div>
                            <h4 className="font-semibold">Mission-Focused</h4>
                            <p className="text-muted-foreground text-sm">Aligning our goals with our clients' objectives for mission success.</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                        <div>
                            <h4 className="font-semibold">Excellence</h4>
                            <p className="text-muted-foreground text-sm">Striving for superior quality and continuous improvement in everything we do.</p>
                        </div>
                    </li>
                </ul>
            </div>
          </div>
        </section>

        <section id="leadership">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">Meet Our Leadership</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              Experienced leaders dedicated to serving our nation.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadershipTeam.map((leader) => {
              const leaderImage = PlaceHolderImages.find((img) => img.id === leader.imageId);
              return (
                <Card key={leader.name} className="text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                  <CardContent className="pt-6">
                    {leaderImage && (
                      <div className="relative h-32 w-32 rounded-full mx-auto mb-4 overflow-hidden">
                        <Image
                          src={leaderImage.imageUrl}
                          alt={`Portrait of ${leader.name}`}
                          fill
                          className="object-cover"
                          data-ai-hint={leaderImage.imageHint}
                        />
                      </div>
                    )}
                    <CardTitle className="text-xl font-headline">{leader.name}</CardTitle>
                    <p className="text-accent font-semibold">{leader.title}</p>
                    <p className="mt-2 text-sm text-muted-foreground">{leader.bio}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        <section id="timeline">
            <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">Our Journey</h2>
                <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
                    A history of growth and commitment to our federal partners.
                </p>
            </div>
            <div className="mt-12 max-w-3xl mx-auto">
                <div className="relative">
                    <div className="absolute left-0 h-full w-0.5 bg-border" aria-hidden="true"></div>
                    {companyTimeline.map((item, index) => (
                        <div key={item.year} className="relative pl-8 mb-8">
                           <div className="absolute left-0 -translate-x-1/2 bg-background p-1">
                               <div className="h-4 w-4 rounded-full bg-primary ring-4 ring-background"></div>
                           </div>
                           <div className="text-left">
                               <p className="font-bold text-accent text-lg">{item.year}</p>
                               <p className="text-muted-foreground">{item.event}</p>
                           </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section id="codes" className="text-center">
             <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">Company Information</h2>
             <div className="mt-6 flex justify-center gap-8">
                <Card className="p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <CardHeader className="p-0">
                        <CardTitle className="text-lg text-muted-foreground">DUNS Number</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 mt-2">
                        <p className="text-2xl font-bold font-code text-primary">{companyCodes.duns}</p>
                    </CardContent>
                </Card>
                <Card className="p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                     <CardHeader className="p-0">
                        <CardTitle className="text-lg text-muted-foreground">CAGE Code</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 mt-2">
                        <p className="text-2xl font-bold font-code text-primary">{companyCodes.cage}</p>
                    </CardContent>
                </Card>
             </div>
        </section>
      </div>
    </>
  );
}
