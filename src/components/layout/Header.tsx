"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
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
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Menu, ArrowLeft } from "lucide-react";
import { Logo } from "./Logo";
import { navLinks } from "@/lib/placeholder-data";
import { cn } from "@/lib/utils";

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
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground group-hover:text-accent-foreground/90">
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
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const handleSubmenuOpen = (menuName: string) => {
    setActiveSubmenu(menuName);
  };

  const handleSubmenuClose = () => {
    setActiveSubmenu(null);
  };

  const renderMobileSubmenu = (link: any) => {
    return (
      <div className="h-full flex flex-col">
        {/* Submenu Header with Back Button */}
        <div className="flex items-center gap-3 p-4 border-b bg-background sticky top-0 z-10">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleSubmenuClose}
            className="h-8 w-8"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Go back</span>
          </Button>
          <h2 className="text-lg font-semibold">{link.name}</h2>
        </div>

        {/* Scrollable Submenu Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-4 space-y-2">
            {link.children.map((child: any) => (
              <Link
                key={child.title}
                href={child.href}
                className={cn(
                  "block p-3 rounded-lg border transition-colors",
                  pathname === child.href
                    ? "bg-accent text-accent-foreground border-accent"
                    : "bg-card hover:bg-accent/50 border-border"
                )}
                onClick={() => {
                  setMobileMenuOpen(false);
                  setActiveSubmenu(null);
                }}
              >
                <div className="font-medium text-foreground">{child.title}</div>
                {child.description && (
                  <p className="text-sm text-muted-foreground mt-1">
                    {child.description}
                  </p>
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center">
        {/* Logo Section */}
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Logo />
          <span className="hidden font-bold sm:inline-block">NGONGE</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden flex-1 items-center justify-center lg:flex">
          <NavigationMenu>
            <NavigationMenuList>
              {navLinks.map((link) =>
                link.children ? (
                  <NavigationMenuItem key={link.name}>
                    <NavigationMenuTrigger>{link.name}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
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
                    <NavigationMenuLink asChild>
                      <Link
                        href={link.href}
                        className={cn(
                          navigationMenuTriggerStyle(),
                          pathname === link.href &&
                            "bg-accent text-accent-foreground"
                        )}
                      >
                        {link.name}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                )
              )}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right Side Buttons + Mobile Menu */}
        <div className="flex flex-1 items-center justify-end gap-2">
          <Button asChild>
            <Link href="/contact">Request a Proposal</Link>
          </Button>

          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu />
                <span className="sr-only">Open Menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent 
              side="left" 
              className="p-0 w-full sm:max-w-sm flex flex-col h-full"
              onInteractOutside={(e) => {
                if (activeSubmenu) {
                  e.preventDefault();
                }
              }}
            >
              {/* Add SheetTitle for accessibility - visually hidden */}
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              
              {/* Main Menu Header - NO TOP CROSS BUTTON */}
              {!activeSubmenu && (
                <div className="flex items-center p-4 border-b shrink-0">
                  <Link
                    href="/"
                    className="flex items-center space-x-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Logo />
                    <span className="font-bold">NGONGE LLC</span>
                  </Link>
                </div>
              )}

              {/* Menu Content - Scrollable */}
              <div className="flex-1 overflow-hidden">
                {activeSubmenu ? (
                  // Submenu View - Back arrow is already implemented
                  renderMobileSubmenu(
                    navLinks.find((link) => link.name === activeSubmenu)
                  )
                ) : (
                  // Main Menu View
                  <div className="h-full overflow-y-auto">
                    <div className="p-4 space-y-1">
                      {navLinks.map((link) => {
                        if (link.children) {
                          return (
                            <Button
                              key={link.name}
                              variant="ghost"
                              className="w-full justify-between p-4 h-auto text-lg font-normal"
                              onClick={() => handleSubmenuOpen(link.name)}
                            >
                              <span>{link.name}</span>
                              <span className="text-muted-foreground">→</span>
                            </Button>
                          );
                        }

                        return (
                          <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                              "block w-full text-left p-4 rounded-md text-lg font-medium transition-colors border",
                              pathname === link.href
                                ? "bg-accent text-accent-foreground border-accent"
                                : "hover:bg-muted border-transparent"
                            )}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {link.name}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}