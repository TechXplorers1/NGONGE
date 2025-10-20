import { HardHat } from 'lucide-react';

export default function SepticTankServicesPage() {
  return (
    <article>
        <div className="flex items-center gap-4 mb-4">
            <div className="bg-primary text-primary-foreground p-3 rounded-full">
                <HardHat className="h-6 w-6" />
            </div>
            <h2>Septic Tank and Related Services</h2>
        </div>
      <p>
        NGONGE offers professional and reliable maintenance for septic systems, ensuring compliance with environmental regulations and preventing costly failures for government facilities.
      </p>
      
      <h3>Our Services Include:</h3>
      <ul>
        <li><strong>Septic Tank Pumping:</strong> Regular and emergency pumping services to remove sludge and scum, preventing backups and system failures.</li>
        <li><strong>System Inspection:</strong> Thorough inspections using advanced camera technology to identify potential issues before they become major problems.</li>
        <li><strong>Drain Field Maintenance:</strong> Services to maintain and restore the effectiveness of your system's drain field, ensuring proper wastewater treatment.</li>
        <li><strong>Component Repair & Replacement:</strong> Expert repair and replacement of septic system components, including lids, baffles, and pumps.</li>
        <li><strong>Grease Trap Cleaning:</strong> Professional cleaning of grease traps for commercial kitchens and food service facilities to prevent blockages and ensure compliance.</li>
      </ul>

      <h3>Why Choose NGONGE for Septic Services?</h3>
      <p>
        Our certified technicians provide efficient, safe, and environmentally responsible services. We utilize modern equipment and adhere to all local and federal guidelines, providing peace of mind and ensuring the long-term health of your facility's wastewater management system.
      </p>
    </article>
  );
}
