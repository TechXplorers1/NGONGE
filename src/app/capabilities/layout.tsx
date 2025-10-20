"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PageHeader } from "@/components/shared/PageHeader";
import { capabilities } from "@/lib/placeholder-data";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export default function CapabilitiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <>
      <PageHeader
        title="Our Capabilities"
        subtitle="Delivering specialized services for federal mission success."
        imageId="page-header-capabilities"
      />
      <div className="container mx-auto py-16 sm:py-24">
        <div className="grid grid-cols-1">
          <main className="prose max-w-none prose-h2:font-headline prose-h2:text-primary prose-p:text-muted-foreground">
            {children}
          </main>
        </div>
      </div>
    </>
  );
}
