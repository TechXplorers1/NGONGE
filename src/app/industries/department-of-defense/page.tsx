
import { ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function DepartmentOfDefensePage() {
  return (
    <article>
        <div className="flex items-center gap-4 mb-4">
            <div className="bg-primary text-primary-foreground p-3 rounded-full">
                <ShieldCheck className="h-6 w-6" />
            </div>
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">Department of Defense</h2>
        </div>
      <p className="lead">
        NGONGE provides robust, secure, and mission-focused support services to the Department of Defense (DoD) and its various branches. We understand the critical importance of operational readiness, security, and efficiency in supporting the warfighter and national defense objectives.
      </p>
      
      <h3 className="text-2xl font-headline font-bold text-primary mt-8">Specialized Support for the DoD:</h3>
      <ul className="list-disc list-inside space-y-2 mt-4 text-muted-foreground">
        <li><strong>Military Logistics:</strong> End-to-end logistics for troop movements, equipment transport (including specialized freight for household goods), and supply chain management.</li>
        <li><strong>Base Operations Support (BOS):</strong> Comprehensive facilities support, including maintenance, janitorial services, and groundskeeping for military installations.</li>
        <li><strong>Laundry and Uniform Services:</strong> High-volume laundry services for barracks, as well as specialized cleaning for military dress and protective uniforms.</li>
        <li><strong>Secure IT & Communications:</strong> Development of secure mobile and web applications, cloud migration, and IT support that meets stringent DoD security requirements.</li>
      </ul>

      <h3 className="text-2xl font-headline font-bold text-primary mt-8">Our Commitment to the Mission:</h3>
      <p>
        Our team is experienced in operating within secure and dynamic military environments. We are dedicated to providing reliable solutions that enhance the quality of life for service members and ensure the smooth operation of defense installations, allowing the DoD to focus on its core mission of protecting the nation.
      </p>
      <div className="mt-12">
        <Button asChild variant="outline">
          <Link href="/industries">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Industries
          </Link>
        </Button>
      </div>
    </article>
  );
}
