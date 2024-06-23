import { siteConfig } from "@/config/site";
import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t py-4">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between px-4 text-center md:flex-row md:text-left">
            <p className="text-sm">
              © {new Date().getFullYear()} {siteConfig.name}. All rights
              reserved.
            </p>
            <div className="mt-2 flex flex-col items-center space-x-4 md:mt-0 md:flex-row md:items-end">
              <Link to={"/terms"} className="text-sm hover:text-primary">
                Terms of Service
              </Link>
              <Link to={"/policy"} className="text-sm  hover:text-primary md:ml-4">
                Privacy Policy
              </Link>
            </div>
          </div>
        </footer>
  );
}

