
import { Building } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function FinanceBankingPage() {
  return (
    <article>
        <div className="flex items-center gap-4 mb-4">
            <div className="bg-primary text-primary-foreground p-3 rounded-full">
                <Building className="h-6 w-6" />
            </div>
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">Finance & Banking</h2>
        </div>
      <p className="lead">
        NGONGE provides discreet and professional facility support services for the finance and banking industry. We understand the importance of maintaining a secure, pristine, and professional environment for both employees and clients.
      </p>
      
      <h3 className="text-2xl font-headline font-bold text-primary mt-8">Services for Financial Institutions:</h3>
      <ul className="list-disc list-inside space-y-2 mt-4 text-muted-foreground">
        <li><strong>Premium Janitorial Services:</strong> Top-tier cleaning and maintenance that reflects the professionalism of your institution, with flexible scheduling to avoid disruption to business operations.</li>
        <li><strong>Secure Facility Maintenance:</strong> Vetted and uniformed personnel to handle routine maintenance and repairs with the utmost discretion and security.</li>
        <li><strong>Specialized Floor & Window Care:</strong> Advanced care for high-end flooring and pristine window cleaning to maintain a polished corporate image.</li>
        <li><strong>Secure Document Transport:</strong> As part of our logistics services, we can facilitate the secure transport of sensitive documents during office relocations.</li>
      </ul>

      <h3 className="text-2xl font-headline font-bold text-primary mt-8">Trust and Professionalism:</h3>
      <p>
        Our team is trained to operate in high-security environments, adhering to strict confidentiality and access protocols. We provide a reliable, background-checked workforce to ensure your facility is maintained to the highest standards of quality and trust.
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
