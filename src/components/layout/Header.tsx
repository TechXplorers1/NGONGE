"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { Logo } from "./Logo";
import { navLinks, capabilities, industries } from "@/lib/placeholder-data";
import { cn } from "@/lib/utils";
import React from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";


const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";


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
        <NavigationMenu className="hidden lg:flex flex-1 items-center justify-center">
          <NavigationMenuList>
            {navLinks.map((link) =>
              link.children ? (
                <NavigationMenuItem key={link.name}>
                  <NavigationMenuTrigger>{link.name}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                      {link.children.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem key={link.name}>
                  <Link href={link.href} legacyBehavior passHref>
                    <NavigationMenuLink active={pathname === link.href} className={navigationMenuTriggerStyle()}>
                      {link.name}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              )
            )}
          </NavigationMenuList>
        </NavigationMenu>

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
                        <nav className="mt-6 flex flex-col space-y-1 px-2">
                            {navLinks.map((link) =>
                              link.children ? (
                                <Collapsible key={link.name} className="flex flex-col">
                                  <CollapsibleTrigger asChild>
                                      <div className={cn(
                                        "flex justify-between items-center text-lg font-medium w-full px-2 py-2 rounded-md",
                                        pathname.startsWith(link.href) ? "text-primary font-bold bg-accent/10" : "text-muted-foreground",
                                        "hover:text-primary hover:bg-muted/50 transition-colors"
                                      )}>
                                          <span>{link.name}</span>
                                          <ChevronDown className="h-5 w-5" />
                                      </div>
                                  </CollapsibleTrigger>
                                  <CollapsibleContent>
                                    <div className="flex flex-col space-y-1 pl-6 pt-2 pb-1 border-l ml-4">
                                      {link.children.map((childLink) => (
                                        <Link
                                          key={childLink.title}
                                          href={childLink.href}
                                          className={cn(
                                            "text-base",
                                            pathname === childLink.href ? "text-primary font-semibold" : "text-muted-foreground",
                                            "hover:text-primary transition-colors py-1"
                                          )}
                                          onClick={() => setMobileMenuOpen(false)}
                                        >
                                          {childLink.title}
                                        </Link>
                                      ))}
                                    </div>
                                  </CollapsibleContent>
                                </Collapsible>
                              ) : (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={cn(
                                        "text-lg font-medium px-2 py-2 rounded-md",
                                        pathname === link.href ? "text-primary font-bold bg-accent/10" : "text-muted-foreground",
                                        "hover:text-primary hover:bg-muted/50 transition-colors"
                                    )}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                              )
                            )}
                             <Button asChild className="mt-4 mx-2 bg-accent text-accent-foreground hover:bg-accent/90">
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
