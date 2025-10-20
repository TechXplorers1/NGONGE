import { Truck } from 'lucide-react';

export default function CharterBusIndustryPage() {
  return (
    <article>
        <div className="flex items-center gap-4 mb-4">
            <div className="bg-primary text-primary-foreground p-3 rounded-full">
                <Truck className="h-6 w-6" />
            </div>
            <h2>Charter Bus Industry</h2>
        </div>
      <p>
        NGONGE provides safe, reliable, and comfortable charter bus services for government personnel, military groups, and official events. We ensure timely and efficient transportation for groups of any size.
      </p>
      
      <h3>Our Services Include:</h3>
      <ul>
        <li><strong>Personnel & Troop Transport:</strong> Coordinated transportation for military units, government employees, and contractors for training, deployment, or official travel.</li>
        <li><strong>Event & Conference Shuttles:</strong> Shuttle services for government conferences, summits, and other events, ensuring smooth and organized transit for attendees.</li>
        <li><strong>VIP & Dignitary Transport:</strong> Discreet and professional transportation services with premium vehicles for high-profile officials and guests.</li>
        <li><strong>Long-Distance & Inter-City Travel:</strong> Comfortable and modern coaches for long-haul trips, equipped with amenities to ensure a pleasant journey.</li>
        <li><strong>Custom Itinerary Planning:</strong> Flexible route planning and logistics coordination to meet the specific needs of your group's travel itinerary.</li>
      </ul>

      <h3>Why Choose NGONGE for Charter Bus Services?</h3>
      <p>
        Our commitment to safety is paramount. We maintain a modern fleet of vehicles that undergo rigorous safety inspections, and our professional drivers are highly trained and vetted. With NGONGE, you can be confident that your group will arrive at their destination safely, comfortably, and on schedule.
      </p>
    </article>
  );
}
