import { Building } from 'lucide-react';

export default function FacilitiesSupportPage() {
  return (
    <article>
        <div className="flex items-center gap-4 mb-4">
            <div className="bg-primary text-primary-foreground p-3 rounded-full">
                <Building className="h-6 w-6" />
            </div>
            <h2>Facilities Support</h2>
        </div>
      <p>
        NGONGE provides comprehensive, integrated facility management solutions to ensure the operational readiness, safety, and efficiency of government installations. We understand that a well-maintained facility is the backbone of any successful federal operation.
      </p>
      
      <h3>Our Services Include:</h3>
      <ul>
        <li><strong>Operations & Maintenance:</strong> Proactive and corrective maintenance for all building systems, including HVAC, electrical, plumbing, and structural components.</li>
        <li><strong>Custodial & Janitorial Services:</strong> Maintaining a clean, safe, and healthy environment through scheduled cleaning, waste management, and sanitization protocols.</li>
        <li><strong>Grounds Maintenance & Landscaping:</strong> Comprehensive care for exterior spaces, including landscaping, snow removal, and groundskeeping to ensure a professional and safe appearance.</li>
        <li><strong>Pest Control Management:</strong> Integrated pest management solutions to protect facilities and personnel from health and safety risks.</li>
        <li><strong>Minor Construction & Repair:</strong> Skilled tradespeople to handle repairs, renovations, and minor construction projects to adapt facilities to changing needs.</li>
      </ul>

      <h3>Why Choose NGONGE for Facilities Support?</h3>
      <p>
        Our team is dedicated to providing best-in-class service that minimizes downtime and maximizes the lifecycle of your assets. We employ certified technicians, utilize computerized maintenance management systems (CMMS) for efficiency, and adhere to all federal safety and environmental regulations. With NGONGE, your facility is in capable hands, allowing your agency to focus on its primary mission.
      </p>
    </article>
  );
}
