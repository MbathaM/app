import { ExclamationTriangleIcon } from '@radix-ui/react-icons'
import { createLazyFileRoute, Link } from '@tanstack/react-router'

import { buttonVariants } from '@/components/ui/button'

export const Route = createLazyFileRoute('/unauthorized')({
  component: Unauthorized,
})

function Unauthorized() {
  return (
    <section className="flex min-h-[90vh] flex-col items-center justify-center px-12 py-16 md:px-6 lg:px-8">
      <div className="max-w-md items-center justify-center space-y-2 text-center">
        <div className="flex w-full items-center justify-center">
          <ExclamationTriangleIcon className="size-16 animate-pulse text-destructive" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Unauthorized Access.
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          You do not have permission to view this page. Please contact the
          administrator if you believe this is an error.
        </p>
        <div className='pt-4'> 
        <Link className={buttonVariants()} to={'/'}>
          Go back home
        </Link>
        </div>
      </div>
    </section>
  )
}
