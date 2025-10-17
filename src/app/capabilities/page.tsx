import { ArrowLeft } from "lucide-react";

export default function CapabilitiesPage() {
  return (
    <article>
      <h2>Comprehensive Federal Solutions</h2>
      <p>
        NGONGE LLC offers a diverse range of services designed to meet the complex needs of modern federal agencies. Our team of experts is equipped to handle challenges in logistics, facility management, and beyond, ensuring that your operations run smoothly and efficiently.
      </p>
      <p>
        Our approach is built on a foundation of reliability, security, and innovation. We work closely with our government partners to understand their unique requirements and develop tailored solutions that deliver measurable results. From ensuring that a military base is fully supplied to maintaining the operational integrity of a federal building, NGONGE is the trusted partner for mission success.
      </p>
      <h3>Explore Our Services</h3>
      <p>
        Select a service area from the menu to learn more about how we can support your agency's objectives. Each section provides a detailed look at our specific offerings, methodologies, and the value we bring to every project.
      </p>
      <div className="flex items-center gap-2 text-accent font-semibold mt-8">
          <ArrowLeft className="h-5 w-5"/>
          <span>Choose a capability to learn more.</span>
      </div>
    </article>
  );
}
