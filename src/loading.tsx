import { Spinner } from "@nextui-org/spinner";
export function Loading() {
  return (
    <section className="fixed left-0 top-0 flex size-full items-center justify-center">
      <Spinner className="mr-2 size-16 text-primary" />
    </section>
  );
}
