
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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <aside className="col-span-1">
            <h3 className="text-lg font-semibold text-primary mb-4">All Services</h3>
            <nav className="flex flex-col gap-2">
              {capabilities.map(cap => (
                <Link 
                  key={cap.title} 
                  href={cap.href}
                  className={cn(
                    "p-2 rounded-md text-muted-foreground hover:bg-muted hover:text-foreground transition-colors text-sm",
                    pathname === cap.href && "bg-accent text-accent-foreground font-semibold"
                  )}
                >
                  <div className="flex items-center gap-2">
                    <span>{cap.title}</span>
                    {pathname === cap.href && <ArrowRight className="h-4 w-4 ml-auto" />}
                  </div>
                </Link>
              ))}
            </nav>
          </aside>
          <main className="col-span-3 prose max-w-none prose-h2:font-headline prose-h2:text-primary prose-p:text-muted-foreground prose-h3:font-headline prose-h3:text-primary prose-ul:list-disc prose-ul:ml-6 prose-li:text-muted-foreground">
            {children}
          </main>
        </div>
      </div>
    </>
  );
}
