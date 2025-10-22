
import { Truck } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function CommercialSectorPage() {
  return (
    <article>
        <div className="flex items-center gap-4 mb-4">
            <div className="bg-primary text-primary-foreground p-3 rounded-full">
                <Truck className="h-6 w-6" />
            </div>
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">Commercial Sector</h2>
        </div>
      <p className="lead">
        Beyond our federal work, NGONGE extends its expertise in industrial laundry, equipment leasing, and janitorial services to a wide range of commercial clients. We bring the same commitment to quality, reliability, and excellence to the private sector.
      </p>
      
      <h3 className="text-2xl font-headline font-bold text-primary mt-8">Our Commercial Offerings:</h3>
      <ul className="list-disc list-inside space-y-2 mt-4 text-muted-foreground">
        <li><strong>Industrial & Uniform Laundry:</strong> High-quality cleaning services for businesses in the hospitality, automotive, and manufacturing sectors.</li>
        <li><strong>Equipment Leasing:</strong> Cost-effective rental solutions for construction, warehousing, and event-based businesses needing commercial and industrial machinery.</li>
        <li><strong>Janitorial & Facility Services:</strong> Professional cleaning and maintenance for commercial offices, retail spaces, and other private facilities.</li>
        <li><strong>Charter Bus & Transportation:</strong> Reliable group transportation for corporate events, team outings, and shuttle services.</li>
      </ul>

      <h3 className="text-2xl font-headline font-bold text-primary mt-8">Federal-Grade Quality for Your Business:</h3>
      <p>
        Leverage our experience and process-driven approach to enhance your business operations. We provide commercial clients with the high standards of service and reliability perfected through our work in the demanding federal marketplace.
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
