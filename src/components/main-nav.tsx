import { siteConfig } from "@/config/site";
import { useAuth } from "@/auth";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";

export function MainNav() {
  const { isAuthenticated, role } = useAuth();

  // Select the appropriate navigation items based on authentication status
  const navItems = isAuthenticated ? siteConfig.navItems.dashboard : siteConfig.navItems.public;

  return (
    <div className="mr-4 hidden md:flex">
      <Link to="/" className="flex items-center space-x-2">
        <span className={cn("inline-block font-extrabold")}>
          {siteConfig.name}
        </span>
      </Link>
      <nav className="ml-6 flex items-center gap-4 text-sm lg:gap-6">
        {navItems.length ? (
          <div className="flex gap-6">
            {navItems.map(
              (item, index) =>
                item.href && (
                  <Link
                    key={index}
                    to={item.href}
                    className={cn(
                      "flex items-center text-sm font-medium text-muted-foreground",
                      "[&.active]:font-bold [&.active]:text-primary"
                    )}
                  >
                    {item.label}
                  </Link>
                )
            )}
            {/* Add the Admin link if the user is an admin */}
            {isAuthenticated && role === 'admin' && (
              <Link
                to="/admin"
                className={cn(
                  "flex items-center text-sm font-medium text-muted-foreground",
                  "[&.active]:font-bold [&.active]:text-primary"
                )}
              >
                Admin
              </Link>
            )}
          </div>
        ) : null}
      </nav>
    </div>
  );
}
