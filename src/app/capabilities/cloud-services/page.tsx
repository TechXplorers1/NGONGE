
import { Cloud } from 'lucide-react';

export default function CloudServicesPage() {
  return (
    <article>
        <div className="flex items-center gap-4 mb-4">
            <div className="bg-primary text-primary-foreground p-3 rounded-full">
                <Cloud className="h-6 w-6" />
            </div>
            <h2>Cloud Services</h2>
        </div>
      <p>
        NGONGE offers secure, scalable, and compliant cloud solutions for federal agencies. We help you migrate, manage, and optimize your cloud infrastructure to improve efficiency, enhance security, and drive innovation.
      </p>
      
      <h3>Our Services Include:</h3>
      <ul>
        <li><strong>Cloud Migration & Modernization:</strong> Seamlessly migrate legacy systems to the cloud and modernize applications for cloud-native performance.</li>
        <li><strong>Infrastructure as a Service (IaaS):</strong> Providing managed virtual servers, storage, and networking to build and run your applications.</li>
        <li><strong>Platform as a Service (PaaS):</strong> Offering a complete development and deployment environment in the cloud.</li>
        <li><strong>Security & Compliance:</strong> Ensuring your cloud environment meets federal security standards like FedRAMP, FISMA, and CMMC.</li>
        <li><strong>DevSecOps & Automation:</strong> Integrating security into the development lifecycle and automating cloud operations for greater agility and reliability.</li>
      </ul>

      <h3>Why Choose NGONGE for Cloud Services?</h3>
      <p>
        Our certified cloud architects and engineers have deep expertise in government cloud environments. We provide end-to-end solutions that are tailored to your agency's unique mission requirements, ensuring a secure and cost-effective transition to the cloud.
      </p>
    </article>
  );
}
