import { ExclamationTriangleIcon } from '@radix-ui/react-icons'
import { createLazyFileRoute, Link } from '@tanstack/react-router'

import { buttonVariants } from '@/components/ui/button'

export const Route = createLazyFileRoute('/unauthenticated')({
  component: Unauthenticated,
})

function Unauthenticated() {
  return (
    <section className="flex min-h-[90vh] flex-col items-center justify-center px-12 py-16 md:px-6 lg:px-8">
      <div className="max-w-md items-center justify-center space-y-2 text-center">
        <div className="flex w-full items-center justify-center">
          <ExclamationTriangleIcon className="size-16 animate-pulse text-destructive" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Unauthenticated Access.
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          You need to be logged in to view this page. Please log in or sign up
          to continue.
        </p>
        <div className='pt-4'> 
        <Link className={buttonVariants()} to={'/login'}>
          Go to Login
        </Link>
        </div>
      </div>
    </section>
  )
}