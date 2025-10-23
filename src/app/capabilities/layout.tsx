
"use client";

import { PageHeader } from "@/components/shared/PageHeader";

export default function CapabilitiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <>
      <PageHeader
        title="Our Capabilities"
        subtitle="Delivering specialized services for federal mission success."
        imageId="page-header-capabilities"
      />
      <div className="container mx-auto py-16 sm:py-24">
        <div className="grid grid-cols-1">
          <main className="prose max-w-none prose-h2:font-headline prose-h2:text-primary prose-p:text-muted-foreground prose-h3:font-headline prose-h3:text-primary prose-ul:list-disc prose-ul:ml-6 prose-li:text-muted-foreground">
            {children}
          </main>
        </div>
      </div>
    </>
  );
}
