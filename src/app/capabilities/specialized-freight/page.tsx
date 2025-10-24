import { Truck } from 'lucide-react';
// ADDED: Import the PageHeader component
import { PageHeader } from '@/components/shared/PageHeader'; 

// ADDED: Data for this specific service
const SERVICE_TITLE = "Specialized Freight";
const SERVICE_SUBTITLE = "Secure and careful transport of used household and office goods for government relocations and asset redistribution.";
// UPDATED: Set the correct image ID for Specialized Freight
const HERO_IMAGE_ID = "specialized-freight"; 

export default function SpecializedFreightPage() {
    return (
        <>
            {/* ADDED: The PageHeader component is now correctly placed with the imageId */}
            <PageHeader
                title={SERVICE_TITLE}
                subtitle={SERVICE_SUBTITLE}
                imageId={HERO_IMAGE_ID} 
            />
            
            {/* The rest of your article content */}
            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
                <div className="flex items-center gap-4 mb-4">
                    <div className="bg-primary text-primary-foreground p-3 rounded-full">
                        <Truck className="h-6 w-6" />
                    </div>
                    <h2 className="text-2xl font-semibold">Specialized Freight</h2>
                </div>
                <p>
                    NGONGE specializes in the secure and careful transport of used household and office goods, providing tailored solutions for government relocations, office moves, and asset redistribution.
                </p>
                
                <h3>Our Services Include:</h3>
                <ul>
                    <li><strong>Government & Military Relocations (PCS):</strong> Comprehensive packing, loading, transport, and unloading services for service members and federal employees during Permanent Change of Station (PCS) moves.</li>
                    <li><strong>Office & Facility Moves:</strong> Efficient and organized relocation of office furniture, equipment, and sensitive documents with minimal downtime.</li>
                    <li><strong>Packing & Crating:</strong> Professional packing and custom crating services to protect valuable and fragile items during transit.</li>
                    <li><strong>Secure Document Transport:</strong> Climate-controlled and secure transportation for sensitive files and records.</li>
                    <li><strong>Warehousing & Storage:</strong> Short-term and long-term storage solutions in secure facilities for assets during transition periods.</li>
                </ul>

                <h3>Why Choose NGONGE for Specialized Freight?</h3>
                <p>
                    We understand the unique requirements and regulations involved in government relocations. Our vetted teams are trained in proper handling techniques, and our advanced tracking systems provide complete visibility of your shipment from start to finish. Trust NGONGE to manage your specialized freight with the care and security it deserves.
                </p>
            </article>
        </>
    );
}