import { HardHat } from 'lucide-react';

export default function EquipmentLeasingPage() {
  return (
    <article>
        <div className="flex items-center gap-4 mb-4">
            <div className="bg-primary text-primary-foreground p-3 rounded-full">
                <HardHat className="h-6 w-6" />
            </div>
            <h2>Commercial & Industrial Equipment Leasing</h2>
        </div>
      <p>
        NGONGE provides flexible and cost-effective rental and leasing solutions for a wide range of commercial and industrial machinery and equipment, helping federal agencies access the tools they need without the high cost of ownership.
      </p>
      
      <h3>Our Leasing Options Include:</h3>
      <ul>
        <li><strong>Construction Equipment:</strong> Access to a full range of construction machinery, including excavators, loaders, and compactors for infrastructure projects.</li>
        <li><strong>Material Handling Equipment:</strong> Forklifts, pallet jacks, and other warehouse equipment to optimize your logistics and supply chain operations.</li>
        <li><strong>Generators & Power Equipment:</strong> Reliable power solutions for temporary sites, emergency situations, or supplemental power needs.</li>
        <li><strong>Specialized Industrial Tools:</strong> A wide variety of tools and machinery for maintenance, repair, and operational tasks.</li>
        <li><strong>Flexible Leasing Terms:</strong> Short-term rentals and long-term leasing options to match your project timeline and budget.</li>
      </ul>

      <h3>Why Choose NGONGE for Equipment Leasing?</h3>
      <p>
        Our equipment leasing program provides federal agencies with the operational flexibility to scale up or down as mission requirements change. We offer well-maintained, reliable equipment from leading manufacturers, delivered directly to your site. Avoid the costs of maintenance, storage, and depreciation with our convenient leasing solutions.
      </p>
    </article>
  );
}
