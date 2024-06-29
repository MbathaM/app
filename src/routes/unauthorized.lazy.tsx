import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { button as buttonStyles } from "@nextui-org/theme";
import { motion } from "framer-motion";

import { ExclamationTriangleIcon } from "@/components/icons";

export const Route = createLazyFileRoute("/unauthorized")({
  component: Unauthorized,
});

function Unauthorized() {
  return (
    <motion.section
      animate={{ opacity: 1, y: 0 }}
      className="flex min-h-[90vh] flex-col items-center justify-center px-12 py-16 md:px-6 lg:px-8"
      id="unauthorized"
      initial={{ opacity: 0, y: 100 }}
      transition={{ delay: 0.175 }}
    >
      <div className="max-w-md items-center justify-center space-y-2 text-center">
        <div className="flex w-full items-center justify-center">
          <ExclamationTriangleIcon className="size-16 animate-pulse text-destructive" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Unauthorized Access.
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          You do not have permission to view this page. Please contact the
          administrator if you believe this is an error.
        </p>
        <div className="flex gap-3">
          <Link className={buttonStyles()} to={"/"}>
            Go back home
          </Link>
          <Link className={buttonStyles()} to={"/contact"}>
            contact
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
