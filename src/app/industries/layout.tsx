
"use client";

import { PageHeader } from "@/components/shared/PageHeader";

export default function IndustriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHeader
        title="Industries We Serve"
        subtitle="Delivering tailored solutions across government and commercial sectors."
      />
      <div className="container mx-auto py-12 sm:py-20">
        <div className="grid grid-cols-1">
          <main className="prose max-w-none prose-h2:font-headline prose-h2:text-primary prose-p:text-muted-foreground">
            {children}
          </main>
        </div>
      </div>
    </>
  );
}
