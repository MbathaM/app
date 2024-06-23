import { useAuth } from '@/auth'
import { FormSchema } from '@/definitions'
import { FieldInfo } from '@/field-info'
import { useForm } from '@tanstack/react-form'
import {
  createFileRoute,
  Link,
  redirect,
  useRouter,
} from '@tanstack/react-router'
import { zodValidator } from '@tanstack/zod-form-adapter'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  // CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
// import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { InputPassword } from '@/components/ui/input-password'
import { Label } from '@/components/ui/label'
import { Icons } from '@/components/icons'

const fallback = '/login' as const

export const Route = createFileRoute('/_auth/get-started')({
  validateSearch: z.object({
    redirect: z.string().optional().catch(''),
  }),
  beforeLoad: ({ context, search }) => {
    if (context.auth.isAuthenticated) {
      throw redirect({ to: search.redirect || fallback })
    }
  },
  component: SignUp,
})

function SignUp() {
  const { signup } = useAuth()
  const router = useRouter()
  const navigate = Route.useNavigate()

  // const search = Route.useSearch()

  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
      // firstName: '',
      // lastName: '',
    },
    onSubmit: async ({ value }) => {
      await signup( value.email, value.password)
      await router.invalidate()

      // await navigate({ to: search.redirect || fallback })
      // redirect({ to: `/success?email=${value.email}` })
      await navigate({ to: `/success?email=${value.email}` })
    },
    validatorAdapter: zodValidator(),
  })


  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-xl">Sign Up</CardTitle>
        <CardDescription>
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            form.handleSubmit()
          }}
        >
          <div className="grid gap-4">
            {/* <div className="grid grid-cols-2 gap-4">
              <form.Field
                name="firstName"
                validators={{
                  onChange: FormSchema.shape.firstName,
                }}
                children={(field) => (
                  <div className="grid gap-2">
                    <Label htmlFor={field.name}>First Name:</Label>
                    <Input
                      id={field.name}
                      name={field.name}
                      type="text"
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                    />
                    <FieldInfo field={field} />
                  </div>
                )}
              />
              <form.Field
                name="lastName"
                validators={{
                  onChange: FormSchema.shape.lastName,
                }}
                children={(field) => (
                  <div className="grid gap-2">
                    <Label htmlFor={field.name}>Last Name:</Label>
                    <Input
                      id={field.name}
                      name={field.name}
                      type="text"
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                    />
                    <FieldInfo field={field} />
                  </div>
                )}
              />
            </div> */}
            <form.Field
              name="email"
              validators={{
                onChange: FormSchema.shape.email,
              }}
              children={(field) => (
                <div className="grid gap-2">
                  <Label htmlFor={field.name}>Email:</Label>
                  <Input
                    id={field.name}
                    name={field.name}
                    type="email"
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                  <FieldInfo field={field} />
                </div>
              )}
            />
            <form.Field
              name="password"
              validators={{
                onChange: FormSchema.shape.password,
              }}
              children={(field) => (
                <div className="grid gap-2">
                  <Label htmlFor={field.name}>Password:</Label>
                  <InputPassword
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                  <FieldInfo field={field} />
                </div>
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
                    'Sign up'
                  )}
                </Button>
              )}
            />
          </div>
          <div className="mt-4 text-center text-sm">
            Already have an account?{' '}
            <Link to="/login" className="underline">
              Sign in
            </Link>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
