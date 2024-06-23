import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useEffect } from 'react'
import { Link } from '@tanstack/react-router'
import { buttonVariants } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/ui/card'

export const Route = createFileRoute('/success')({
  component: SuccessPage,
})

function SuccessPage() {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate({ to: '/' })
    }, 6000)

    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div className="flex h-[90vh] flex-col items-center justify-center">
       <Card className="mx-auto max-w-sm">
      <CardHeader className="items-center justify-center">
        <CardTitle>
          <CardDescription>
            <h1 className="mb-4 text-xl font-bold">Success</h1>
          </CardDescription>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4 text-sm">
          You will be redirected to the home page shortly...
        </p>
      </CardContent>
      <CardFooter className="items-center justify-center">
        <Link to="/" className={buttonVariants()}>
          Go to Home
        </Link>
      </CardFooter>
    </Card>
    </div>
  )
}
