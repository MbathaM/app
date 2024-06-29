import { Link } from "@tanstack/react-router";

import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="py-4">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between px-4 text-center md:flex-row md:text-left">
        <p className="text-sm">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold">
            <Link
              className="text-sm text-primary hover:text-secondary"
              to={"/"}
            >
              {siteConfig.name}
            </Link>
          </span>
          . All rights reserved.
        </p>
        <div className="mt-2 flex flex-col items-center space-x-4 md:mt-0 md:flex-row md:items-end">
          <Link
            className="text-sm text-primary hover:text-secondary md:ml-4"
            to={"/terms"}
          >
            Terms of Service
          </Link>
          <Link
            className="text-sm text-primary hover:text-secondary md:ml-4"
            to={"/policy"}
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
