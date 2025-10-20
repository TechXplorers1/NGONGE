"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { navLinks, capabilities } from "@/lib/placeholder-data";
import { Logo } from "./Logo";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import React from "react";

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
ListItem.displayName = "ListItem"


function NavMenu() {
  const pathname = usePathname();
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navLinks.map((link) => (
          <NavigationMenuItem key={link.name}>
             {link.name === "Services" ? (
                <>
                  <NavigationMenuTrigger className={cn(
                      "transition-colors hover:text-accent font-medium tracking-widest uppercase bg-transparent",
                      pathname.startsWith("/capabilities") ? "text-primary" : "text-muted-foreground"
                    )}>Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                      {capabilities.map((component) => (
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
                </>
              ) : (
                <Link href={link.href} legacyBehavior={false}>
                  <NavigationMenuLink active={pathname === link.href} className={cn(
                      navigationMenuTriggerStyle(),
                      "transition-colors hover:text-accent font-medium tracking-widest uppercase bg-transparent",
                      pathname === link.href ? "text-primary" : "text-muted-foreground"
                    )}>
                      {link.name}
                  </NavigationMenuLink>
                </Link>
              )
            }
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}


export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm">
      <div className="container flex h-20 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Logo />
          <span className="font-bold text-lg sm:inline-block">NGONGE</span>
        </Link>
        
        <div className="hidden md:flex flex-1 items-center justify-center">
          <NavMenu />
        </div>

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
