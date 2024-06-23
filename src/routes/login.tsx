import { createFileRoute, Link } from '@tanstack/react-router'
import { useForm } from '@tanstack/react-form'
import { zodValidator } from '@tanstack/zod-form-adapter'
import { z } from 'zod'
import type { FieldApi } from '@tanstack/react-form'
import { useAuth } from '@/auth'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Icons } from '@/components/icons'

export const Route = createFileRoute('/login')({
  component: Login,
})

function Login() {
  const {login} = useAuth()
  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    onSubmit: async ({ value }) => {
      await login(value.email, value.password)
      console.log(value)
    },
    validatorAdapter: zodValidator(),
  })

  return (
    <Card className="mx-auto max-w-sm">
    <CardHeader>
      <CardTitle className="text-2xl">Login</CardTitle>
      <CardDescription>
        Enter your email below to login to your account
      </CardDescription>
    </CardHeader>
    <CardContent>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          e.stopPropagation()
          form.handleSubmit()
        }}
      >
        <div>
          {/* A type-safe field component*/}
          <form.Field
            name="email"
            validators={{
              onChange: z
                .string()
                .email('Must be a valid email address'),
              onChangeAsyncDebounceMs: 500,
              onChangeAsync: z.string().refine(
                async (value) => {
                  await new Promise((resolve) => setTimeout(resolve, 1000))
                  return !value.includes('error')
                },
                {
                  message: "No 'error' allowed in email",
                },
              ),
            }}
            children={(field) => {
              return (
                <>
                  <Label htmlFor={field.name}>Email:</Label>
                  <Input
                    type="email"
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    autoComplete='email'
                  />
                  <FieldInfo field={field} />
                </>
              )
            }}
          />
        </div>
        <div>
          <form.Field
            name="password"
            validators={{
              onChange: z
                .string()
                .min(6, 'Password must be at least 6 characters'),
              onChangeAsyncDebounceMs: 500,
              onChangeAsync: z.string().refine(
                async (value) => {
                  await new Promise((resolve) => setTimeout(resolve, 1000))
                  return !value.includes('error')
                },
                {
                  message: "No 'error' allowed in password",
                },
              ),
            }}
            children={(field) => (
              <>
                <Label htmlFor={field.name}>Password:</Label>
                <Input
                  type="password"
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  autoComplete='current-password'
                />
                <FieldInfo field={field} />
              </>
            )}
          />
        </div>
        <div className="grid gap-2 pt-2">
        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
          children={([canSubmit, isSubmitting]) => (
            <Button type="submit" disabled={!canSubmit}>
              {isSubmitting ? (
                <>
                    <Icons.spinner className="mr-2 size-4 animate-spin" />
                    Loading
                  </>
                ) : (
                  'Sign in'
                  )}
            </Button>
          )}
          />
        </div>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link to="/signup" className="underline">
            Sign up
          </Link>
        </div>  
      </form>
          </CardContent>
    </Card>
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function FieldInfo({ field }: { field: FieldApi<any, any, any, any> }) {
  return (
    <>
    {field.state.meta.touchedErrors ? (
      <em className='text-sm text-red-500'>{field.state.meta.touchedErrors}</em>
    ) : null}
    {/* {field.state.meta.isValidating ? <>
                    <Icons.spinner className="mr-2 size-4 animate-spin" />
                  </> : null} */}
  </>
  )
}
