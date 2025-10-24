import { Shirt } from 'lucide-react';
// ADDED: Import the PageHeader component
import { PageHeader } from '@/components/shared/PageHeader'; 

// ADDED: Data for this specific service
const SERVICE_TITLE = "Linen Supply";
const SERVICE_SUBTITLE = "Reliable, hygienic, and cost-effective linen supply and inventory management for various institutions.";
// UPDATED: Set the correct image ID for Linen Supply
const HERO_IMAGE_ID = "linen-supply"; 

export default function LinenSupplyPage() {
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
                    <h2 className="text-2xl font-semibold">Linen Supply</h2>
                </div>
                <p>
                    NGONGE offers a reliable and cost-effective linen supply and inventory management service for various institutions, including healthcare, hospitality, and federal agencies.
                </p>
                
                <h3>Our Services Include:</h3>
                <ul>
                    <li><strong>Full-Service Linen Rental:</strong> A complete rental program providing high-quality sheets, towels, gowns, and other textiles without the upfront investment.</li>
                    <li><strong>Inventory Management:</strong> Advanced tracking systems to monitor linen usage, reduce loss, and ensure you always have the right amount of inventory on hand.</li>
                    <li><strong>Scheduled Deliveries:</strong> Consistent and timely deliveries of freshly laundered linens, tailored to your facility's schedule and demand.</li>
                    <li><strong>Quality Control:</strong> Rigorous inspection processes to ensure all linens meet our high standards for cleanliness, quality, and appearance.</li>
                    <li><strong>Customizable Programs:</strong> Flexible linen programs that can be scaled and adjusted to meet the changing needs of your organization.</li>
                </ul>

                <h3>Why Choose NGONGE for Linen Supply?</h3>
                <p>
                    We simplify your operations by managing the entire linen lifecycle, from procurement and laundering to delivery and inventory control. Our focus on quality and reliability means you can provide a comfortable and professional experience for your patients, guests, or personnel, while controlling costs and reducing administrative burden.
                </p>
            </article>
        </>
    );
}