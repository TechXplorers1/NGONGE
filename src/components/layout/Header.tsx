"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { navLinks } from "@/lib/placeholder-data";
import { Logo } from "./Logo";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-20 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Logo />
          <span className="font-bold text-lg sm:inline-block">NGONGE</span>
        </Link>
        
        <nav className="hidden md:flex flex-1 items-center justify-center space-x-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "transition-colors hover:text-accent font-medium tracking-widest uppercase",
                pathname === link.href ? "text-primary" : "text-muted-foreground"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-end md:flex-1 space-x-4">
          <Button asChild>
            <Link href="/contact">Request a Proposal</Link>
          </Button>

          <div className="md:hidden">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="pr-0 w-[300px]">
                <Link href="/" className="mr-6 flex items-center space-x-2 mb-8">
                  <Logo />
                  <span className="font-bold">NGONGE</span>
                </Link>
                <div className="flex flex-col space-y-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={cn(
                          "p-3 rounded-l-md text-base font-medium uppercase tracking-wider",
                          pathname === link.href ? "bg-accent text-accent-foreground" : "text-foreground hover:bg-muted"
                      )}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
