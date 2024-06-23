import { GearIcon } from '@radix-ui/react-icons'
import { createLazyFileRoute, Link } from '@tanstack/react-router'

import { buttonVariants } from '@/components/ui/button'

export const Route = createLazyFileRoute('/maintenance')({
  component: Maintenance,
})

function Maintenance() {
  return (
    <div className="flex min-h-[90vh] items-center justify-center">
      <div className="rounded-lg p-8  text-center shadow-lg">
        <GearIcon className="text-coral-500 mx-auto size-16 animate-pulse" />
        <h1 className="mt-4 text-4xl font-bold">We're Under Maintenance</h1>
        <p className="mt-2 text-lg">
          Our website is currently undergoing scheduled maintenance.
        </p>
        <p className="mt-1">
          We should be back shortly. Thank you for your patience.
        </p>
        <div className="mt-6">
          <Link className={buttonVariants()} to={'/'}>
            Notify Me
          </Link>
        </div>
      </div>
    </div>
  )
}
