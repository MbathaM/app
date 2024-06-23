import { SiteHeader } from '@/components/site-header';
import { Outlet, createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_dashboard')({
  beforeLoad: ({ context }) => {
    const { isAuthenticated } = context.auth;
    if (!isAuthenticated) {
      throw redirect({ to: '/unauthenticated' });
    }
  },
  component: DashboardLayout,
})

function DashboardLayout(){
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
