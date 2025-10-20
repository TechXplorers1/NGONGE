import { Shirt } from 'lucide-react';

export default function IndustrialLaundryServicesPage() {
  return (
    <article>
        <div className="flex items-center gap-4 mb-4">
            <div className="bg-primary text-primary-foreground p-3 rounded-full">
                <Shirt className="h-6 w-6" />
            </div>
            <h2>Industrial Laundry Services</h2>
        </div>
      <p>
        NGONGE provides high-volume, heavy-duty laundry services for industrial and commercial sectors, handling everything from uniforms and protective gear to specialized textiles with precision and care.
      </p>
      
      <h3>Our Services Include:</h3>
      <ul>
        <li><strong>Uniform & Workwear Cleaning:</strong> Specialized cleaning processes for industrial uniforms, ensuring they are clean, safe, and ready for the demands of the job.</li>
        <li><strong>Protective Garment Care:</strong> Proper handling and cleaning of flame-resistant (FR), high-visibility, and other protective garments to maintain their integrity and compliance.</li>
        <li><strong>Mat & Mop Cleaning:</strong> Regular cleaning and exchange programs for floor mats and mops to keep your facility clean and safe.</li>
        <li><strong>Towel & Wiper Services:</strong> A steady supply of clean industrial towels and wipers for all your operational needs.</li>
        <li><strong>Customized Solutions:</strong> Tailored laundry programs to meet the specific needs of your industry, whether it's manufacturing, automotive, or energy.</li>
      </ul>

      <h3>Why Choose NGONGE for Industrial Laundry?</h3>
      <p>
        Our industrial-grade facilities are equipped to handle the toughest jobs, removing grease, grime, and contaminants effectively. We focus on extending the life of your textiles while ensuring they meet all safety and cleanliness standards, helping your operations run smoothly and efficiently.
      </p>
    </article>
  );
}
