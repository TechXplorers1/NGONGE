import { Shirt } from 'lucide-react';
// ADDED: Import the PageHeader component
import { PageHeader } from '@/components/shared/PageHeader'; 

// ADDED: Data for this specific service
const SERVICE_TITLE = "Drycleaning and Laundry Services";
const SERVICE_SUBTITLE = "Professional, specialized care for dress uniforms, formal wear, and delicate garments.";
// UPDATED: Set the correct image ID for Drycleaning and Laundry Services
const HERO_IMAGE_ID = "drycleaning-laundry"; 

export default function DrycleaningLaundryServicesPage() {
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
                    <h2 className="text-2xl font-semibold">Drycleaning and Laundry Services</h2>
                </div>
                <p>
                    NGONGE delivers professional drycleaning and laundry services for non-coin-operated facilities, specializing in military dress uniforms, formal wear, and other delicate garments that require expert care.
                </p>
                
                <h3>Our Services Include:</h3>
                <ul>
                    <li><strong>Dress Uniform & Formal Wear Care:</strong> Expert drycleaning and pressing for military dress uniforms, ensuring they are always inspection-ready.</li>
                    <li><strong>Specialty Garment Cleaning:</strong> Careful handling of delicate fabrics, embellished items, and other garments that cannot be traditionally laundered.</li>
                    <li><strong>Stain Removal:</strong> Advanced techniques to treat and remove a wide variety of tough stains, restoring garments to their best condition.</li>
                    <li><strong>Pressing & Finishing:</strong> Professional pressing and finishing for a crisp, polished look on all garments.</li>
                    <li><strong>Bulk & Contract Services:</strong> Convenient and reliable services for organizations requiring regular drycleaning and laundry for their personnel.</li>
                </ul>

                <h3>Why Choose NGONGE for Drycleaning?</h3>
                <p>
                    Our team of experienced professionals uses state-of-the-art equipment and premium, eco-friendly solvents to provide a superior clean while protecting your most important garments. We pride ourselves on attention to detail, quality, and timely service, making us the trusted choice for federal and military clients.
                </p>
            </article>
        </>
    );
}