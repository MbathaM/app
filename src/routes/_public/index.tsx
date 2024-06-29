import { button as buttonStyles } from "@nextui-org/theme";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";

import { siteConfig } from "@/config/site";
import { GithubIcon } from "@/components/icons";
import { title, subtitle } from "@/components/primitives";

export const Route = createFileRoute("/_public/")({
  component: Index,
});

function Index() {
  return (
    <>
      <motion.section
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center gap-4 py-8 md:py-10"
        id="home"
        initial={{ opacity: 0, y: 100 }}
        transition={{ delay: 0.175 }}
      >
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Make&nbsp;</h1>
          <h1 className={title({ color: "violet" })}>beautiful&nbsp;</h1>
          <br />
          <h1 className={title()}>
            websites regardless of your design experience.
          </h1>
          <h2 className={subtitle({ class: "mt-4" })}>
            Beautiful, fast and modern React UI library.
          </h2>
        </div>

        <div className="flex gap-3">
          <Link
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href={siteConfig.links.docs}
          >
            Documentation
          </Link>
          <Link
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.github}
          >
            <GithubIcon size={20} />
            GitHub
          </Link>
        </div>

        <div className="mt-8">
          <Snippet hideCopyButton hideSymbol variant="flat">
            <span>
              Get started by editing <Code color="primary">app/page.tsx</Code>
            </span>
          </Snippet>
        </div>
      </motion.section>
    </>
  );
}
