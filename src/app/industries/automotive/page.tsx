import { Truck } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
// ADDED: Import the PageHeader component
import { PageHeader } from '@/components/shared/PageHeader'; 

// ADDED: Data for this specific industry
const INDUSTRY_TITLE = "Automotive";
const INDUSTRY_SUBTITLE = "Specialized industrial laundry, freight, and facility services for automotive workshops and manufacturing.";
// UPDATED: Set the correct image ID for the Automotive industry
const HERO_IMAGE_ID = "automotive"; 

export default function AutomotivePage() {
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
                {/* The original main title H2 has been replaced with a simple section header since the main title is in PageHeader */}
                <div className="flex items-center gap-4 mb-4">
                    <div className="bg-primary text-primary-foreground p-3 rounded-full">
                        <Truck className="h-6 w-6" />
                    </div>
                    {/* Using a generic H2 since the main title is in the header */}
                    <h2 className="text-2xl font-semibold">Industry Details</h2> 
                </div>

                <p className="lead">
                    NGONGE supports the automotive industry with specialized industrial laundry, freight, and facility services. We help automotive workshops, manufacturing plants, and service centers maintain a clean, safe, and efficient operational environment.
                </p>
                
                <h3 className="text-2xl font-headline font-bold text-primary mt-8">Core Services for the Automotive Sector:</h3>
                <ul className="list-disc list-inside space-y-2 mt-4 text-muted-foreground">
                    <li><strong>Industrial Laundry:</strong> Expert cleaning of greasy and soiled mechanic uniforms, shop towels, and protective wear, extending their lifespan and ensuring employee safety.</li>
                    <li><strong>Specialized Freight & Logistics:</strong> Transportation of automotive parts, machinery, and equipment with reliable and timely delivery.</li>
                    <li><strong>Facility Services:</strong> Janitorial and maintenance services for showrooms, service bays, and manufacturing floors, including grease trap cleaning and floor care.</li>
                    <li><strong>Equipment Leasing:</strong> Access to material handling equipment like forklifts and pallet jacks to support plant and warehouse logistics.</li>
                </ul>

                <h3 className="text-2xl font-headline font-bold text-primary mt-8">Driving Your Operations Forward:</h3>
                <p>
                    Our services are built to handle the tough demands of the automotive industry. We focus on providing reliable, high-quality support that allows you to focus on your core business of vehicle manufacturing, sales, and service.
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