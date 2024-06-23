import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth')({
  component: AuthLayout,
});

function AuthLayout() {
  return (
   
    <div className="relative flex flex-col">
      <main className="container grow">
        <section className="flex min-h-[auto] flex-col items-center justify-center px-12 py-16 md:px-6 lg:px-8">
          <Outlet />
        </section>
      </main>
    </div>
  );
}