import { Shirt } from 'lucide-react';
// ADDED: Import the PageHeader component
import { PageHeader } from '@/components/shared/PageHeader'; 

// ADDED: Data for this specific service
const SERVICE_TITLE = "Laundry & Linen Services";
const SERVICE_SUBTITLE = "Specialized, hygienic, and high-quality textile supply for healthcare, military, and institutional facilities.";
// UPDATED: Set the correct image ID for Laundry & Linen Services
const HERO_IMAGE_ID = "laundry-linen-services"; 

export default function LaundryLinenPage() {
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
                        <Shirt className="h-6 w-6" />
                    </div>
                    <h2 className="text-2xl font-semibold">Laundry & Linen Services</h2>
                </div>
                <p>
                    NGONGE delivers specialized laundry and linen services that meet the exacting standards of federal healthcare, military, and institutional facilities. We ensure a reliable, hygienic, and high-quality supply of textiles to support critical daily operations.
                </p>
                
                <h3>Our Services Include:</h3>
                <ul>
                    <li><strong>Medical Linen & Uniforms:</strong> Hygienically clean processing of patient gowns, scrubs, lab coats, and other medical textiles in compliance with healthcare regulations (e.g., OSHA, CDC).</li>
                    <li><strong>Military & Barracks Laundry:</strong> High-volume laundry services for military uniforms, bedding, and personal clothing, ensuring rapid turnaround and pristine condition.</li>
                    <li><strong>Linen Inventory Management:</strong> Advanced tracking and inventory control systems to prevent shortages, reduce loss, and optimize linen utilization.</li>
                    <li><strong>Textile Repair & Replacement:</strong> Mending services to extend the life of textiles and a managed replacement program for worn-out items.</li>
                    <li><strong>Specialized Stain Treatment:</strong> Expertise in handling and treating a wide variety of stains to maintain the quality and appearance of linens.</li>
                </ul>

                <h3>Why Choose NGONGE for Laundry Services?</h3>
                <p>
                    We operate state-of-the-art facilities with industrial-grade equipment capable of handling large volumes with exceptional efficiency. Our processes are environmentally conscious, and our quality control is second to none. We provide a dependable service that ensures your personnel and patients have the clean linens they need, when they need them.
                </p>
            </article>
        </>
    );
}