import Link from "next/link";
import Image from "next/image"; // ✅ Import Image component
import { companyCodes, contactInfo } from "@/lib/placeholder-data";
import { Logo } from "./Logo";

export function Footer() {
    return (
        <footer className="bg-card border-t">
            <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {/* Left Column */}
                    <div className="space-y-4 md:col-span-1">
                        <Link href="/" className="flex items-center space-x-2">
                            <Logo />
                            <span className="font-bold text-lg">NGONGE LLC</span>
                        </Link>
                        <p className="text-muted-foreground text-sm">
                            Mission-Ready Logistics, IT, and Facility Support for Federal Operations.
                        </p>
                        <div className="text-sm text-muted-foreground space-y-1">
                            <p><strong>UEID:</strong> {companyCodes.uied}</p>
                            <p><strong>DUNS:</strong> {companyCodes.duns}</p>
                            <p><strong>CAGE:</strong> {companyCodes.cage}</p>
                        </div>
                    </div>

                    {/* Middle & Right Columns */}
                    <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-8">
                        <div>
                            <h3 className="font-semibold text-primary">Capabilities</h3>
                            <ul className="mt-4 space-y-2">
                                <li><Link href="/capabilities/transportation-logistics" className="text-sm text-muted-foreground hover:text-accent">Transportation</Link></li>
                                <li><Link href="/capabilities/facilities-support" className="text-sm text-muted-foreground hover:text-accent">Facilities</Link></li>
                                <li><Link href="/capabilities/laundry-linen-services" className="text-sm text-muted-foreground hover:text-accent">Laundry</Link></li>
                                <li><Link href="/capabilities/janitorial-services" className="text-sm text-muted-foreground hover:text-accent">Janitorial</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold text-primary">Company</h3>
                            <ul className="mt-4 space-y-2">
                                <li><Link href="/about" className="text-sm text-muted-foreground hover:text-accent">About Us</Link></li>
                                <li><Link href="/past-performance" className="text-sm text-muted-foreground hover:text-accent">Projects</Link></li>
                                <li><Link href="/resources" className="text-sm text-muted-foreground hover:text-accent">Resources</Link></li>
                                <li>
                                    <Link 
                                        href="https://search.certifications.sba.gov/profile/ETYLDMH63LM9/9Y1F2?page=1#naics-codes" 
                                        className="text-sm text-accent hover:underline"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        NAICS codes
                                    </Link>
                                </li>
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

                            {/* 👇 Added Certified Minority-Owned Image */}
                            <div className="mt-6 flex justify-start">
                                <Image
                                    src="/images/Certified-minority-owned.png"
                                    alt="Certified Minority-Owned Business"
                                    width={150}  // adjust width as you prefer
                                    height={60}  // adjust height if needed
                                    className="opacity-90 hover:opacity-100 transition"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
                    <p>
                        &copy; {new Date().getFullYear()} NGONGE LLC. All Rights Reserved.{" "}
                        {/* <Link href="#" className="hover:text-accent">Accessibility Statement</Link> */}
                    </p>
                </div>
            </div>
        </footer>
    );
}
