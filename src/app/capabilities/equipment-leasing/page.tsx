import { HardHat } from 'lucide-react';
// ADDED: Import the PageHeader component
import { PageHeader } from '@/components/shared/PageHeader'; 

// ADDED: Data for this specific service
const SERVICE_TITLE = "Commercial & Industrial Equipment Leasing";
const SERVICE_SUBTITLE = "Flexible and cost-effective rental and leasing solutions for a wide range of essential equipment.";
// UPDATED: Set the correct image ID for Equipment Leasing
const HERO_IMAGE_ID = "equipment-leasing"; 

export default function EquipmentLeasingPage() {
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
                        <HardHat className="h-6 w-6" />
                    </div>
                    <h2 className="text-2xl font-semibold">Commercial & Industrial Equipment Leasing</h2>
                </div>
                <p>
                    NGONGE provides flexible and cost-effective rental and leasing solutions for a wide range of commercial and industrial machinery and equipment, helping federal agencies access the tools they need without the high cost of ownership.
                </p>
                
                <h3>Our Leasing Options Include:</h3>
                <ul>
                    <li><strong>Construction Equipment:</strong> Access to a full range of construction machinery, including excavators, loaders, and compactors for infrastructure projects.</li>
                    <li><strong>Material Handling Equipment:</strong> Forklifts, pallet jacks, and other warehouse equipment to optimize your logistics and supply chain operations.</li>
                    <li><strong>Generators & Power Equipment:</strong> Reliable power solutions for temporary sites, emergency situations, or supplemental power needs.</li>
                    <li><strong>Specialized Industrial Tools:</strong> A wide variety of tools and machinery for maintenance, repair, and operational tasks.</li>
                    <li><strong>Flexible Leasing Terms:</strong> Short-term rentals and long-term leasing options to match your project timeline and budget.</li>
                </ul>

                <h3>Why Choose NGONGE for Equipment Leasing?</h3>
                <p>
                    Our equipment leasing program provides federal agencies with the operational flexibility to scale up or down as mission requirements change. We offer well-maintained, reliable equipment from leading manufacturers, delivered directly to your site. Avoid the costs of maintenance, storage, and depreciation with our convenient leasing solutions.
                </p>
            </article>
        </>
    );
}