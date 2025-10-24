import { Code } from 'lucide-react';
// ADDED: Import the PageHeader component
import { PageHeader } from '@/components/shared/PageHeader'; 

// ADDED: Data for this specific service
const SERVICE_TITLE = "Web Application / Software Development";
const SERVICE_SUBTITLE = "Robust, scalable, and secure web applications and custom software solutions to support federal missions.";
// UPDATED: Set the correct image ID for Web App Development
const HERO_IMAGE_ID = "web-app-development"; 

export default function WebAppDevelopmentPage() {
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
                        <Code className="h-6 w-6" />
                    </div>
                    <h2 className="text-2xl font-semibold">Web Application / Software Development</h2>
                </div>
                <p>
                    NGONGE specializes in building robust, scalable, and secure web applications and custom software solutions that streamline processes, enhance data management, and support the mission-critical objectives of federal agencies.
                </p>
                
                <h3>Our Services Include:</h3>
                <ul>
                    <li><strong>Custom Software Development:</strong> Designing and building tailored software solutions from the ground up to meet unique agency needs.</li>
                    <li><strong>Enterprise Web Applications:</strong> Developing large-scale web applications for internal and external use, focusing on performance, security, and scalability.</li>
                    <li><strong>API Development & Integration:</strong> Creating and integrating APIs to ensure seamless data flow between different systems and services.</li>
                    <li><strong>Database Design & Management:</strong> Architecting and managing efficient and secure databases to handle sensitive government data.</li>
                    <li><strong>Legacy System Modernization:</strong> Upgrading outdated systems to modern, more secure, and more efficient technology stacks.</li>
                </ul>

                <h3>Why Choose NGONGE for Web & Software Development?</h3>
                <p>
                    Our agile development process, combined with our expertise in secure coding practices, ensures that we deliver high-quality software on time and on budget. We work closely with our federal clients to understand their challenges and deliver solutions that provide lasting value.
                </p>
            </article>
        </>
    );
}