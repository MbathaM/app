import { button as buttonStyles } from "@nextui-org/theme";
import { Link } from "@tanstack/react-router";

import { title, subtitle } from "@/components/primitives";

export function NotFound() {
  return (
    <section className="flex min-h-[90vh] flex-col items-center justify-center px-12 py-16 md:px-6 lg:px-8">
      <div className="max-w-md items-center justify-center space-y-2 text-center">
        {/* <div className="flex w-full items-center justify-center">
          <LinkBreak2Icon className="size-16 animate-pulse text-destructive" />
        </div> */}
        <h1 className={title()}>Oops!&nbsp;</h1> <br />
        <h1 className={title({ color: "violet" })}>Page not found.</h1>
        <h2 className={subtitle({ class: "mt-4" })}>
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </h2>
        <Link
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          to={"/"}
        >
          Go back home
        </Link>
      </div>
    </section>
  );
}
