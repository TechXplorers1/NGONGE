import { Truck } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
// ADDED: Import the PageHeader component
import { PageHeader } from '@/components/shared/PageHeader'; 

// ADDED: Data for this specific industry
const INDUSTRY_TITLE = "Manufacturing";
const INDUSTRY_SUBTITLE = "Industrial services designed to optimize operations, ensure safety, and improve efficiency in manufacturing plants.";
// UPDATED: Set the correct image ID for the Manufacturing industry
const HERO_IMAGE_ID = "Manufacturing"; 

export default function ManufacturingPage() {
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
                        <Truck className="h-6 w-6" />
                    </div>
                    <h2 className="text-2xl font-semibold">Industry Details</h2> 
                </div>

                <p className="lead">
                    NGONGE supports the manufacturing sector with a range of industrial services designed to optimize operations, ensure safety, and improve efficiency. We help manufacturing facilities maintain a clean, productive, and compliant environment.
                </p>
                
                <h3 className="text-2xl font-headline font-bold text-primary mt-8">Key Services for Manufacturing:</h3>
                <ul className="list-disc list-inside space-y-2 mt-4 text-muted-foreground">
                    <li><strong>Industrial Laundry Services:</strong> Heavy-duty cleaning of uniforms, workwear, and protective garments to remove industrial soils and contaminants while maintaining garment integrity.</li>
                    <li><strong>Commercial & Industrial Equipment Leasing:</strong> Flexible leasing options for forklifts, generators, and other essential machinery, reducing capital expenditure and maintenance costs.</li>
                    <li><strong>Facility Support:</strong> Comprehensive janitorial and maintenance services to keep manufacturing plants running smoothly and safely.</li>
                    <li><strong>Logistics & Freight Management:</strong> Transportation of raw materials and finished goods, providing reliable supply chain support.</li>
                </ul>

                <h3 className="text-2xl font-headline font-bold text-primary mt-8">Your Partner in Production:</h3>
                <p>
                    Our services are tailored to the demanding environment of the manufacturing industry. We focus on reliability and quality, helping you minimize downtime and focus on your core production goals.
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