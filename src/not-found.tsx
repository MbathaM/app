import { buttonVariants } from '@/components/ui/button'
import { LinkBreak2Icon } from '@radix-ui/react-icons'
import { Link } from '@tanstack/react-router'

export function NotFound() {
  return (
    <section className="flex min-h-[90vh] flex-col items-center justify-center px-12 py-16 md:px-6 lg:px-8">
      <div className="max-w-md items-center justify-center space-y-2 text-center">
      <div className="flex w-full items-center justify-center">
          <LinkBreak2Icon className="size-16 animate-pulse text-destructive" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          <span className="text-destructive">Oops!</span> Page not found.
        </h1>
        <p >
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link className={buttonVariants()} to={'/'}>
          Go back home
        </Link>
      </div>
    </section>
  )
}

