import { BrainCircuit } from 'lucide-react';
// ADDED: Import the PageHeader component
import { PageHeader } from '@/components/shared/PageHeader'; 

// ADDED: Data for this specific service
const SERVICE_TITLE = "Digital Marketing & Gen AI";
const SERVICE_SUBTITLE = "Harnessing Generative AI to create innovative and effective digital communication strategies.";
// UPDATED: Set the correct image ID for Digital Marketing & Gen AI
const HERO_IMAGE_ID = "digital-marketing-gen-ai"; 

export default function DigitalMarketingGenAiPage() {
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
                        <BrainCircuit className="h-6 w-6" />
                    </div>
                    <h2 className="text-2xl font-semibold">Digital Marketing & Gen AI</h2>
                </div>
                <p>
                    NGONGE harnesses the power of Generative AI to create innovative and effective digital marketing and communication strategies for federal agencies. We help you reach your target audience with compelling, data-driven content and campaigns.
                </p>
                
                <h3>Our Services Include:</h3>
                <ul>
                    <li><strong>AI-Powered Content Creation:</strong> Using generative models to produce high-quality, relevant content for websites, social media, and public outreach campaigns at scale.</li>
                    <li><strong>Advanced Data Analysis:</strong> Applying AI to analyze marketing data, identify trends, and gain deep insights into audience behavior and campaign performance.</li>
                    <li><strong>Personalized Communications:</strong> Developing AI-driven systems to deliver personalized messages and information to different segments of the public.</li>
                    <li><strong>Chatbot & Virtual Assistant Development:</strong> Creating intelligent chatbots to improve citizen services, answer frequently asked questions, and guide users through complex processes.</li>
                    <li><strong>Predictive Analytics for Outreach:</strong> Utilizing AI to forecast trends and optimize the targeting of public information campaigns for maximum impact.</li>
                </ul>

                <h3>Why Choose NGONGE for Digital Marketing & Gen AI?</h3>
                <p>
                    Our team is at the forefront of AI innovation. We combine marketing expertise with technical acumen to deliver solutions that are not only cutting-edge but also responsible and ethically sound. We can help your agency communicate more effectively and efficiently in the digital age.
                </p>
            </article>
        </>
    );
}