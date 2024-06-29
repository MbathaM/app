import { Button } from "@nextui-org/button";
import { ErrorComponent } from "@tanstack/react-router";
export function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <section className="container items-center justify-center gap-y-4">
      <div className="text-pretty text-primary">
        <ErrorComponent error={error} />
      </div>

      <div className="flex gap-4 p-6">
        <Button onClick={reset}>Try Again</Button>
        <Button variant="bordered">Cancel</Button>
      </div>
    </section>
  );
}
