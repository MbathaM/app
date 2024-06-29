import { createFileRoute, Outlet } from "@tanstack/react-router";
import { motion } from "framer-motion";

export const Route = createFileRoute("/auth")({
  component: AuthLayout,
});

function AuthLayout() {
  return (
    <div className="relative flex flex-col min-h-[90vh]">
      <main className="flex-grow flex items-center justify-center">
        <div className="flex flex-col items-center justify-center w-full px-4 py-16 md:px-6 lg:px-8">
          <motion.section
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center w-full text-center"
            id="auth"
            initial={{ opacity: 0, y: 100 }}
            transition={{ delay: 0.175 }}
          >
            <Outlet />
          </motion.section>
        </div>
      </main>
    </div>
  );
}
