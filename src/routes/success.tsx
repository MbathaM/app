import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { title } from "@/components/primitives";

export const Route = createFileRoute("/success")({
  component: SuccessPage,
});

function SuccessPage() {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(6);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    const timer = setTimeout(() => {
      navigate({ to: "/" });
    }, 6000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [navigate]);

  return (
    <motion.section
      animate={{ opacity: 1, y: 0 }}
      className="flex min-h-[90vh] flex-col items-center justify-center px-12 py-16 md:px-6 lg:px-8"
      id="unauthenticated"
      initial={{ opacity: 0, y: 100 }}
      transition={{ delay: 0.175 }}
    >
      <div className="max-w-md space-y-6 text-center">
        <h1 className={title()}>Success</h1>

        <p className="text-sm p-4 text-primary">
          You will be redirected to the home page in {countdown} seconds...
        </p>
      </div>
    </motion.section>
  );
}
