import { Shirt } from 'lucide-react';

export default function LaundryLinenPage() {
  return (
    <article>
        <div className="flex items-center gap-4 mb-4">
            <div className="bg-primary text-primary-foreground p-3 rounded-full">
                <Shirt className="h-6 w-6" />
            </div>
            <h2>Laundry & Linen Services</h2>
        </div>
      <p>
        NGONGE delivers specialized laundry and linen services that meet the exacting standards of federal healthcare, military, and institutional facilities. We ensure a reliable, hygienic, and high-quality supply of textiles to support critical daily operations.
      </p>
      
      <h3>Our Services Include:</h3>
      <ul>
        <li><strong>Medical Linen & Uniforms:</strong> Hygienically clean processing of patient gowns, scrubs, lab coats, and other medical textiles in compliance with healthcare regulations (e.g., OSHA, CDC).</li>
        <li><strong>Military & Barracks Laundry:</strong> High-volume laundry services for military uniforms, bedding, and personal clothing, ensuring rapid turnaround and pristine condition.</li>
        <li><strong>Linen Inventory Management:</strong> Advanced tracking and inventory control systems to prevent shortages, reduce loss, and optimize linen utilization.</li>
        <li><strong>Textile Repair & Replacement:</strong> Mending services to extend the life of textiles and a managed replacement program for worn-out items.</li>
        <li><strong>Specialized Stain Treatment:</strong> Expertise in handling and treating a wide variety of stains to maintain the quality and appearance of linens.</li>
      </ul>

      <h3>Why Choose NGONGE for Laundry Services?</h3>
      <p>
        We operate state-of-the-art facilities with industrial-grade equipment capable of handling large volumes with exceptional efficiency. Our processes are environmentally conscious, and our quality control is second to none. We provide a dependable service that ensures your personnel and patients have the clean linens they need, when they need them.
      </p>
    </article>
  );
}
