import { Truck } from 'lucide-react';
// ADDED: Import the PageHeader component
import { PageHeader } from '@/components/shared/PageHeader'; 

// ADDED: Data for this specific service
const SERVICE_TITLE = "Transportation & Logistics";
const SERVICE_SUBTITLE = "Secure, reliable, and efficient solutions tailored for the federal government, ensuring mission-readiness.";
// UPDATED: Set the correct image ID for Transportation & Logistics
const HERO_IMAGE_ID = "transportation-logistics"; 

export default function TransportationLogisticsPage() {
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
                    <h2 className="text-2xl font-semibold">Transportation & Logistics</h2>
                </div>
                <p>
                    NGONGE offers secure, reliable, and efficient transportation and logistics solutions tailored for the federal government. We manage the complete lifecycle of your assets, from origin to final destination, ensuring mission-readiness at every step.
                </p>
                
                <h3>Our Services Include:</h3>
                <ul>
                    <li><strong>Freight & Cargo Management:</strong> Coordinating the movement of goods via ground, air, and sea, including specialized handling for sensitive, oversized, or hazardous materials.</li>
                    <li><strong>Supply Chain Optimization:</strong> Analyzing and improving supply chain processes to increase efficiency, reduce costs, and enhance visibility from end to end.</li>
                    <li><strong>Warehouse & Distribution Services:</strong> Secure storage, inventory management, and distribution services to ensure assets are properly managed and readily available.</li>
                    <li><strong>Fleet Management:</strong> Providing full-service management of government vehicle fleets, including maintenance, tracking, and compliance.</li>
                    <li><strong>Last-Mile Delivery:</strong> Ensuring the final leg of the journey is completed with precision and timeliness, even in challenging or remote environments.</li>
                </ul>

                <h3>Why Choose NGONGE for Logistics?</h3>
                <p>
                    Our logistics professionals leverage cutting-edge technology, including real-time GPS tracking and advanced inventory systems, to provide unparalleled control and visibility over your assets. We have a proven track record of on-time, secure deliveries for a variety of federal agencies, making us a trusted partner for your most critical logistical challenges.
                </p>
            </article>
        </>
    );
}