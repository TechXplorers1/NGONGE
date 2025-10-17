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
        <div className="grid md:grid-cols-4 gap-8">
          <aside className="md:col-span-1">
            <div className="sticky top-24">
              <h3 className="text-xl font-bold font-headline text-primary">Service Areas</h3>
              <nav className="mt-4 flex flex-col space-y-1">
                {capabilities.map((cap) => (
                  <Link
                    key={cap.title}
                    href={cap.href}
                    className={cn(
                      "flex justify-between items-center p-3 rounded-md text-sm font-medium transition-colors",
                      pathname === cap.href
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-secondary hover:text-secondary-foreground"
                    )}
                  >
                    {cap.title}
                    {pathname === cap.href && <ArrowRight className="h-4 w-4" />}
                  </Link>
                ))}
              </nav>
            </div>
          </aside>
          <main className="md:col-span-3 prose max-w-none prose-h2:font-headline prose-h2:text-primary prose-h2:text-3xl prose-p:text-muted-foreground">
            {children}
          </main>
        </div>
      </div>
    </>
  );
}
