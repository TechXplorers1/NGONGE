import { Building } from 'lucide-react';

export default function JanitorialServicesPage() {
  return (
    <article>
        <div className="flex items-center gap-4 mb-4">
            <div className="bg-primary text-primary-foreground p-3 rounded-full">
                <Building className="h-6 w-6" />
            </div>
            <h2>Janitorial Services</h2>
        </div>
      <p>
        NGONGE provides top-tier janitorial services designed to maintain clean, safe, and healthy environments for federal facilities. We understand that a pristine workspace is crucial for productivity and morale.
      </p>
      
      <h3>Our Services Include:</h3>
      <ul>
        <li><strong>Daily & Routine Cleaning:</strong> Comprehensive cleaning schedules tailored to your facility's needs, including dusting, vacuuming, mopping, and waste removal.</li>
        <li><strong>Floor Care:</strong> Specialized care for all types of flooring, including stripping, waxing, buffing, and carpet shampooing to maintain appearance and longevity.</li>
        <li><strong>Restroom Sanitization:</strong> Thorough cleaning and disinfection of restrooms to ensure a hygienic environment for all personnel.</li>
        <li><strong>Window & Glass Cleaning:</strong> Professional cleaning for interior and exterior windows, ensuring a clear and professional look.</li>
        <li><strong>Special Event Cleaning:</strong> Pre- and post-event cleaning services to prepare your facility for special functions and restore it afterward.</li>
      </ul>

      <h3>Why Choose NGONGE for Janitorial Services?</h3>
      <p>
        Our highly trained and vetted staff use eco-friendly cleaning products and modern equipment to deliver exceptional results. We are committed to upholding the highest standards of cleanliness and providing a reliable service that you can count on, allowing your agency to focus on its core mission.
      </p>
    </article>
  );
}
