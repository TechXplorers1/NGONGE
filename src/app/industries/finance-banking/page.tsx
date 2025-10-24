import { Building } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
// ADDED: Import the PageHeader component
import { PageHeader } from '@/components/shared/PageHeader'; 

// ADDED: Data for this specific industry
const INDUSTRY_TITLE = "Finance & Banking";
const INDUSTRY_SUBTITLE = "Discreet and professional facility support services for secure and pristine financial environments.";
// UPDATED: Set the correct image ID for the Finance & Banking industry
const HERO_IMAGE_ID = "Finance & Banking"; 

export default function FinanceBankingPage() {
    return (
        <>
            {/* ADDED: The PageHeader component is now correctly placed with the imageId */}
            <PageHeader
                title={INDUSTRY_TITLE}
                subtitle={INDUSTRY_SUBTITLE}
                imageId={HERO_IMAGE_ID} 
            />

            {/* ARTICLE CONTENT - The rest of your page content */}
            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
                {/* Replaced the original H2 with a simple section header */}
                <div className="flex items-center gap-4 mb-4">
                    <div className="bg-primary text-primary-foreground p-3 rounded-full">
                        <Building className="h-6 w-6" />
                    </div>
                    <h2 className="text-2xl font-semibold">Industry Details</h2> 
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
        </>
    );
}