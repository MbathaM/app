import { SiteHeader } from '@/components/site-header'
import { buttonVariants } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'
import { Link, Outlet, createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/admin')({
  beforeLoad: ({ context }) => {
    const { isAuthenticated, role } = context.auth
    if (!isAuthenticated) {
      throw redirect({ to: '/unauthenticated' })
    }

    // Redirect to '/unauthorized' if the user is logged in but does not have the 'admin' role
    if (isAuthenticated && role !== 'admin') {
      throw redirect({ to: '/unauthorized' })
    }

    // If the user is authenticated and has the 'admin' role, allow the route to load
  },
  component: AdminLayout,
})

function AdminLayout() {
  return (
    <div className="relative flex flex-col">
      <SiteHeader />
      <div className="space-y-6 p-10 pb-16 md:block">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Admin</h2>
          <p className="text-muted-foreground">
            Manage your account settings and set e-mail preferences.
          </p>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="-mx-4 lg:w-1/5">
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <div className="flex-1 lg:max-w-2xl">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}

const sidebarNavItems = [
//   {
//     title: 'admin',
//     href: '/admin',
//   },
  {
    title: 'users',
    href: '/admin/users',
  },
]

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string
    title: string
  }[]
}

function SidebarNav({ className, items, ...props }: SidebarNavProps) {
  return (
    <nav
      className={cn(
        'flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1',
        className,
      )}
      {...props}
    >
      {items.map((item) => (
        <Link
          key={item.href}
          to={item.href}
          className={cn(
            buttonVariants({ variant: 'ghost' }),
            '[&.active]:font-bold [&.active]:text-primary',
          )}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  )
}
