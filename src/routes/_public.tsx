import { SiteHeader } from "@/components/site-header";
import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_public")({
  component: PublicLayout,
});

function PublicLayout() {
  return (
    <div className="relative flex flex-col">
      <SiteHeader />
      <main className="container grow">
        <section className="flex flex-col items-center justify-center gap-2 py-2 md:py-10">
          <Outlet />
        </section>
      </main>
    </div>
  );
}
