import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";

import { title } from "@/components/primitives";

export const Route = createFileRoute("/_public/blog")({
  component: BlogPage,
});

function BlogPage() {
  return (
    <motion.section
      animate={{ opacity: 1, y: 0 }}
      className="mb-5 text-center sm:mb-10 scroll-mt-28"
      id="blog"
      initial={{ opacity: 0, y: 100 }}
      transition={{ delay: 0.175 }}
    >
      <h1 className={title()}>Blog</h1>
    </motion.section>
  );
}
