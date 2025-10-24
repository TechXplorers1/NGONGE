
import Link from "next/link";
import { companyCodes, contactInfo } from "@/lib/placeholder-data";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
                <Logo />
                <span className="font-bold text-lg">NGONGE LLC</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Mission-Ready Logistics, IT, and Facility Support for Federal Operations.
            </p>
            <div className="text-sm text-muted-foreground">
                <p><strong>UEID:</strong> {companyCodes.uied}</p>
                <p><strong>DUNS:</strong> {companyCodes.duns}</p>
                <p><strong>EIN:</strong> {companyCodes.ein}</p>
                <p><strong>CAGE:</strong> {companyCodes.cage}</p>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-primary">Capabilities</h3>
            <ul className="mt-4 space-y-2">
                <li><Link href="/capabilities/transportation-logistics" className="text-sm text-muted-foreground hover:text-accent">Transportation & Logistics</Link></li>
                <li><Link href="/capabilities/facilities-support" className="text-sm text-muted-foreground hover:text-accent">Facilities Support</Link></li>
                <li><Link href="/capabilities/laundry-linen-services" className="text-sm text-muted-foreground hover:text-accent">Laundry & Linen Services</Link></li>
                <li><Link href="/capabilities/janitorial-services" className="text-sm text-muted-foreground hover:text-accent">Janitorial Services</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-primary">Contact Us</h3>
            <ul className="mt-4 space-y-2">
                {contactInfo.map((info) => (
                    <li key={info.title}>
                        <a href={info.href} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent">
                            <info.icon className="w-4 h-4 text-accent" />
                            <span>{info.value}</span>
                        </a>
                    </li>
                ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} NGONGE LLC. All Rights Reserved. | <Link href="#" className="hover:text-accent">Accessibility Statement</Link></p>
        </div>
      </div>
    </footer>
  );
}
