
import { Building } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function FederalGovernmentPage() {
  return (
    <article>
        <div className="flex items-center gap-4 mb-4">
            <div className="bg-primary text-primary-foreground p-3 rounded-full">
                <Building className="h-6 w-6" />
            </div>
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">Federal Government</h2>
        </div>
      <p className="lead">
        NGONGE is a trusted partner to a wide range of U.S. federal civilian agencies. We provide a comprehensive suite of services designed to enhance operational efficiency, ensure compliance, and support mission-critical objectives. Our solutions are tailored to meet the unique challenges and stringent requirements of government operations.
      </p>
      
      <h3 className="text-2xl font-headline font-bold text-primary mt-8">Core Services for Federal Agencies:</h3>
      <ul className="list-disc list-inside space-y-2 mt-4 text-muted-foreground">
        <li><strong>Facilities Support:</strong> Integrated facility management, janitorial services, and maintenance to ensure government buildings are safe, clean, and fully operational.</li>
        <li><strong>Logistics and Transportation:</strong> Secure and reliable transportation, specialized freight, and supply chain management for government assets and personnel.</li>
        <li><strong>IT & Software Solutions:</strong> Custom web and mobile application development, cloud services, and digital transformation to modernize government systems.</li>
        <li><strong>Industrial & Commercial Services:</strong> Equipment leasing, industrial laundry, and specialized services to support the diverse needs of federal agencies.</li>
      </ul>

      <h3 className="text-2xl font-headline font-bold text-primary mt-8">Why Choose NGONGE?</h3>
      <p>
        As an 8(a) and HUBZone certified small business, we are committed to delivering excellence and value to the federal government. Our deep understanding of federal procurement processes, security protocols, and performance standards makes us an ideal partner for agencies seeking reliable, high-quality support.
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
