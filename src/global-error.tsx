import { Button } from "@/components/ui/button";
import { ErrorComponent } from "@tanstack/react-router";
export function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <section className="container items-center justify-center gap-y-4">
      <div className="text-pretty text-primary">
        <ErrorComponent  error={error}/>
      </div>
      
      <div className="flex gap-4 p-6">
        <Button onClick={reset}>Try Again</Button>
        <Button variant="outline">Cancel</Button>
      </div>
    </section>
  );
}
