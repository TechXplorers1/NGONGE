"use client";

import { usePathname } from "next/navigation"; // 👈 Import the hook
import { PageHeader } from "@/components/shared/PageHeader"; // Assuming this renders the background based on `imageId`

export default function CapabilitiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // 1. Determine if the current page is an individual service detail page.
  // We check if the path has more than one segment after the root, e.g., /capabilities/transportation-logistics
  const pathSegments = pathname.split('/').filter(Boolean);
  const isIndividualServicePage = pathSegments.length > 1;

  // The PageHeader to be rendered only on the main /capabilities index page
  const capabilitiesHeader = (
    <PageHeader
      title="Our Capabilities"
      subtitle="Delivering specialized services for federal mission success."
      // This imageId likely points to the generic dark blue background
      imageId="page-header-capabilities"
    />
  );

  return (
    <>
      {/* 2. CONDITIONAL RENDERING: Render the header ONLY if it is NOT an individual service page */}
      {!isIndividualServicePage && capabilitiesHeader}
      
      {/* The rest of the layout wrapper remains the same */}
      <div className="container mx-auto py-12 sm:py-20">
        <div className="grid grid-cols-1">
          <main className="prose max-w-none prose-h2:font-headline prose-h2:text-primary prose-p:text-muted-foreground prose-h3:font-headline prose-h3:text-primary prose-ul:list-disc prose-ul:ml-6 prose-li:text-muted-foreground">
            {children}
          </main>
        </div>
      </div>
    </>
  );
}