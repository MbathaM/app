import { useForm } from '@tanstack/react-form'
import {
  createFileRoute,
  // redirect,
  useRouter,
} from '@tanstack/react-router'
import { zodValidator } from '@tanstack/zod-form-adapter'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Icons } from '@/components/icons'
import { FieldInfo } from '@/field-info'
import { FormSchema } from '@/definitions'
import { useAuth } from '@/auth'

export const Route = createFileRoute('/_auth/password-recovery')({
  component: PasswordRecovery,
})

function PasswordRecovery() {
  const { requestPasswordReset } = useAuth()
  const router = useRouter()
  const navigate = Route.useNavigate()

  const form = useForm({
    defaultValues: {
      email: '',
    },
    onSubmit: async ({ value }) => {
      // console.log('Submitting email for password recovery:', value.email);
      // Add logic to initiate password reset, e.g., sending a password reset email
      await requestPasswordReset(value.email)
      // redirect({ to: `/success?email=${value.email}` })
      await router.invalidate()
      await navigate({ to: `/success?email=${value.email}` })
    },
    validatorAdapter: zodValidator,
  })

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Password Recovery</CardTitle>
        <CardDescription>
          Enter your email address below to receive a link to reset your
          password.
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
            <form.Subscribe
              selector={(state) => [state.canSubmit, state.isSubmitting]}
              children={([canSubmit, isSubmitting]) => (
                <Button type="submit" disabled={!canSubmit}>
                  {isSubmitting ? (
                    <>
                      <Icons.spinner className="mr-2 size-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Send Recovery Email'
                  )}
                </Button>
              )}
            />
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
