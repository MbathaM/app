import { MainNav } from "@/components/main-nav";
import { MobileNav } from "@/components/mobile-nav";
import { ModeToggle } from "@/components/mode-toggle";
import { UserNav } from "@/components/user-nav";
import { Link } from "@tanstack/react-router";
import { buttonVariants } from "@/components/ui/button";
import { useAuth } from "@/auth";

export function SiteHeader() {
  const { isAuthenticated } = useAuth();

  return (
    <header className="sticky top-0 z-40 w-full border-b ">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <MainNav />
        <MobileNav />
        <div className="flex flex-1 items-center justify-end space-x-4">
          {/* Hide this navigation on smaller screens using Tailwind CSS */}
          <nav className="hidden items-center space-x-4 md:flex">
            <ModeToggle />
            {isAuthenticated ? (
              // Show UserNav if the user is signed in
              <UserNav />
            ) : (
              // Show Login and Get Started links if the user is not signed in
              <div className="flex gap-2">
                <Link to="/auth/login" className={buttonVariants({ variant: "ghost" })}>
                  Login
                </Link>
                <Link to="/auth/signup" className={buttonVariants()}>
                  Get started
                </Link>
              </div>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
