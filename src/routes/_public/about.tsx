import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";

import { title } from "@/components/primitives";

export const Route = createFileRoute("/_public/about")({
  component: AboutPage,
});

function AboutPage() {
  return (
    <motion.section
      animate={{ opacity: 1, y: 0 }}
      className="mb-5 text-center sm:mb-10 scroll-mt-28"
      id="about"
      initial={{ opacity: 0, y: 100 }}
      transition={{ delay: 0.175 }}
    >
      <h1 className={title()}>About</h1>
    </motion.section>
  );
}
