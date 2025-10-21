import { Smartphone } from 'lucide-react';

export default function MobileAppDevelopmentPage() {
  return (
    <article>
        <div className="flex items-center gap-4 mb-4">
            <div className="bg-primary text-primary-foreground p-3 rounded-full">
                <Smartphone className="h-6 w-6" />
            </div>
            <h2>Mobile Application Development (Android & iOS)</h2>
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
  );
}
