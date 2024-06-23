import { QueryClient } from '@tanstack/react-query'
import { createRootRouteWithContext, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { SiteFooter } from '@/components/site-footer'
import type { AuthContext } from '@/auth'

export const Route = createRootRouteWithContext<{
  auth: AuthContext
  queryClient: QueryClient
}>()({
  component: RootComponent,
})

function RootComponent() {
  return (
    <>
      <div className="relative flex min-h-screen flex-col">
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
      {import.meta.env.DEV ? (
        <>
          <ReactQueryDevtools buttonPosition="bottom-left" />
          <TanStackRouterDevtools position="bottom-right" />
        </>
      ) : null}
    </>
  )
}
