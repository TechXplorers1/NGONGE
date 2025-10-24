import { Star } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
// ADDED: Import the PageHeader component
import { PageHeader } from '@/components/shared/PageHeader'; 

// ADDED: Data for this specific industry
const INDUSTRY_TITLE = "Health Care";
const INDUSTRY_SUBTITLE = "Specialized facility and logistical services for federal healthcare systems and medical facilities.";
// UPDATED: Set the correct image ID for the Health Care industry
const HERO_IMAGE_ID = "Health Care"; 

export default function HealthCarePage() {
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
                        <Star className="h-6 w-6" />
                    </div>
                    <h2 className="text-2xl font-semibold">Industry Details</h2> 
                </div>

                <p className="lead">
                    NGONGE offers specialized facility and logistical services for federal healthcare systems, including the Veterans Health Administration (VHA) and other government medical facilities. We are dedicated to creating a safe, clean, and efficient environment for patients and healthcare providers.
                </p>
                
                <h3 className="text-2xl font-headline font-bold text-primary mt-8">Services for Healthcare Facilities:</h3>
                <ul className="list-disc list-inside space-y-2 mt-4 text-muted-foreground">
                    <li><strong>Healthcare Environmental Services (EVS):</strong> Medical-grade janitorial and sanitization services that adhere to strict infection control protocols (OSHA, CDC).</li>
                    <li><strong>Linen and Laundry Management:</strong> Hygienic processing of patient gowns, bedding, scrubs, and lab coats, ensuring a reliable supply of clean textiles.</li>
                    <li><strong>Facility Support:</strong> Maintenance of HVAC, electrical, and plumbing systems to ensure the continuous operation of critical healthcare infrastructure.</li>
                    <li><strong>Logistics:</strong> Secure transport of medical supplies, equipment, and sensitive records between facilities.</li>
                </ul>

                <h3 className="text-2xl font-headline font-bold text-primary mt-8">Focus on Patient & Provider Safety:</h3>
                <p>
                    We recognize the unique demands of the healthcare environment. Our staff is trained in healthcare-specific protocols to minimize risk and support the delivery of high-quality patient care. By managing facility operations effectively, we allow healthcare professionals to focus on what matters most: patient outcomes.
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