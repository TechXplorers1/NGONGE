import { Smartphone } from 'lucide-react';
// ADDED: Import the PageHeader component
import { PageHeader } from '@/components/shared/PageHeader'; 

// ADDED: Data for this specific service
const SERVICE_TITLE = "Mobile Application Development (Android & iOS)";
const SERVICE_SUBTITLE = "Secure, reliable, and user-friendly mobile applications to extend government services and improve efficiency.";
// UPDATED: Set the correct image ID for Mobile App Development
const HERO_IMAGE_ID = "mobile-app-development"; 

export default function MobileAppDevelopmentPage() {
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
                        <Smartphone className="h-6 w-6" />
                    </div>
                    <h2 className="text-2xl font-semibold">Mobile Application Development (Android & iOS)</h2>
                </div>
                <p>
                    NGONGE develops secure, reliable, and user-friendly mobile applications for both Android and iOS platforms. We help federal agencies extend their services to mobile devices, improving accessibility and efficiency for government personnel and the public.
                </p>
                
                <h3>Our Services Include:</h3>
                <ul>
                    <li><strong>Native App Development:</strong> Building high-performance, platform-specific applications for Android (Java/Kotlin) and iOS (Swift/Objective-C).</li>
                    <li><strong>Cross-Platform Development:</strong> Utilizing frameworks like React Native or Flutter to create cost-effective applications that run on multiple platforms with a single codebase.</li>
                    <li><strong>Secure Data Integration:</strong> Ensuring secure communication between mobile apps and backend government systems, complying with federal data protection standards.</li>
                    <li><strong>UI/UX Design:</strong> Designing intuitive and accessible user interfaces that provide an optimal user experience for all users, including those with disabilities (Section 508 compliance).</li>
                    <li><strong>App Maintenance & Support:</strong> Providing ongoing support, updates, and security patches to ensure applications remain secure and functional.</li>
                </ul>

                <h3>Why Choose NGONGE for Mobile App Development?</h3>
                <p>
                    Our development team understands the unique security and compliance requirements of government applications. We build applications that are not only powerful and easy to use but also meet the stringent security standards required for federal deployment.
                </p>
            </article>
        </>
    );
}