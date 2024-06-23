import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { useAuth } from "@/auth";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const { isAuthenticated } = useAuth();

  // Determine which nav items to use based on authentication status
  const navItems = isAuthenticated ? siteConfig.navItems.dashboard : siteConfig.navItems.public;

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <Icons.hamburger className="size-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <Link to="/" className="flex items-center space-x-2">
          {/* Optional logo can be added here */}
          {/* <Icons.logo className="size-6" /> */}
          <span className="inline-block font-bold">{siteConfig.name}</span>
        </Link>
        <ScrollArea className="my-4 h-[calc(100vh-[8rem])] pb-10 pl-6">
          {navItems.length ? (
            <div className="flex flex-col space-y-3">
              {navItems.map(
                (item, index) =>
                  item.href && (
                    <Link
                      key={index}
                      to={item.href}
                      className={cn(
                        "flex items-center text-sm font-medium text-muted-foreground"
                      )}
                      onClick={() => setOpen(false)} // Close the menu on link click
                    >
                      {item.label}
                    </Link>
                  )
              )}
            </div>
          ) : null}
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
