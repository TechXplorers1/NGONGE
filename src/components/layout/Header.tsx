
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { navLinks } from "@/lib/placeholder-data";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm">
      <div className="container flex h-20 items-center">
        <Link href="/" className="flex items-center space-x-2 mr-6 transition-transform hover:scale-105">
          <Logo />
          <span className="font-bold text-lg sm:inline-block">NGONGE</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex flex-1 items-center justify-center">
          <NavigationMenu>
            <NavigationMenuList>
              {navLinks.map((link) => (
                <NavigationMenuItem key={link.name}>
                    <NavigationMenuLink asChild active={pathname === link.href}>
                      <Link
                        href={link.href}
                        className={navigationMenuTriggerStyle()}
                      >
                        {link.name}
                      </Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-2">
            <Button asChild className="hidden md:inline-flex bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/contact">Request a Proposal</Link>
            </Button>

            {/* Mobile Menu Trigger */}
            <div className="lg:hidden">
                <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon">
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Open menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-full max-w-sm p-0">
                        <div className="flex justify-between items-center p-4 border-b">
                             <Link href="/" className="flex items-center space-x-2" onClick={() => setMobileMenuOpen(false)}>
                                <Logo />
                                <span className="font-bold">NGONGE LLC</span>
                             </Link>
                             <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                                <X className="h-6 w-6" />
                                <span className="sr-only">Close menu</span>
                            </Button>
                        </div>
                        <nav className="mt-6 flex flex-col space-y-4 px-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={cn(
                                        "text-lg font-medium",
                                        pathname === link.href ? "text-primary font-bold" : "text-muted-foreground",
                                        "hover:text-primary transition-colors"
                                    )}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                             <Button asChild className="mt-4 bg-accent text-accent-foreground hover:bg-accent/90">
                                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Request a Proposal</Link>
                            </Button>
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
      </div>
    </header>
  );
}
