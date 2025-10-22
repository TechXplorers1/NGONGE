
import { HardHat } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function MediaAndAdvertisingPage() {
  return (
    <article>
        <div className="flex items-center gap-4 mb-4">
            <div className="bg-primary text-primary-foreground p-3 rounded-full">
                <HardHat className="h-6 w-6" />
            </div>
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">Media and Advertising</h2>
        </div>
      <p className="lead">
        NGONGE supports the dynamic needs of the media and advertising industries with flexible logistics and equipment solutions. We help ensure your productions, campaigns, and events run smoothly from start to finish.
      </p>
      
      <h3 className="text-2xl font-headline font-bold text-primary mt-8">Services for Media & Events:</h3>
      <ul className="list-disc list-inside space-y-2 mt-4 text-muted-foreground">
        <li><strong>Equipment Leasing:</strong> Flexible, short-term rentals of generators, lighting, and other essential equipment for on-location shoots and events.</li>
        <li><strong>Logistics & Transportation:</strong> Careful and timely transport of props, sets, and promotional materials to any location.</li>
        <li><strong>Charter Bus Services:</strong> Coordinated transportation for cast, crew, and event attendees, ensuring everyone arrives on schedule.</li>
        <li><strong>Facility Support:</strong> Pre- and post-event janitorial services to prepare venues and handle cleanup.</li>
      </ul>

      <h3 className="text-2xl font-headline font-bold text-primary mt-8">Behind the Scenes Support:</h3>
      <p>
        In the fast-paced world of media and advertising, you need a partner who can adapt quickly. NGONGE provides the reliable, behind-the-scenes support that allows your creative vision to take center stage.
      </p>
      <div className="mt-12">
        <Button asChild variant="outline">
          <Link href="/industries">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Industries
          </Link>
        </Button>
      </div>
    </article>
  );
}
