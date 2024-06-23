import { createFileRoute } from '@tanstack/react-router'
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
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp';

// Define the route for email verification
export const Route = createFileRoute('/auth/verify-email')({
  component: VerifyEmail,
})

// VerifyEmail component
function VerifyEmail() {
  const { verifyEmail } = useAuth() // Assume verifyEmail is a function provided by useAuth
  const form = useForm({
    defaultValues: {
      email: '',
      code: '',
    },
    onSubmit: async ({ value }) => {
      await verifyEmail(value.email, value.code)
      console.log('Email verified with code:', value.code)
    },
    validatorAdapter: zodValidator(),
  })

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Verify Email</CardTitle>
        <CardDescription>
          Enter your email and the verification code sent to your email address.
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
            {/* Email Field */}
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
          <div className="mt-4">
            {/* Code Field */}
            <form.Field
              name="code"
              validators={{
                onChange: z
                  .string()
                  .regex(/^\d{8}$/, 'Code must be 8 digits'),
                onChangeAsyncDebounceMs: 500,
                onChangeAsync: z.string().refine(
                  async (value) => {
                    await new Promise((resolve) => setTimeout(resolve, 1000))
                    return !value.includes('error')
                  },
                  {
                    message: "No 'error' allowed in code",
                  },
                ),
              }}
              children={(field) => {
                return (
                  <>
                    <Label htmlFor={field.name}>Verification Code:</Label>
                    <InputOTP
                      maxLength={8}
                      inputMode={'numeric'}
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onChange={(value) => field.handleChange(value)} // Handle change directly
                    >
                      <InputOTPGroup>
                        {[...Array(8)].map((_, index) => (
                          <InputOTPSlot key={index} index={index} />
                        ))}
                      </InputOTPGroup>
                    </InputOTP>
                    <FieldInfo field={field} />
                  </>
                )
              }}
            />
          </div>
          <div className="grid gap-2 pt-4">
            <form.Subscribe
              selector={(state) => [state.canSubmit, state.isSubmitting]}
              children={([canSubmit, isSubmitting]) => (
                <Button type="submit" disabled={!canSubmit}>
                  {isSubmitting ? (
                    <>
                      <Icons.spinner className="mr-2 size-4 animate-spin" />
                      Verifying...
                    </>
                  ) : (
                    'Verify'
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function FieldInfo({ field }: { field: FieldApi<any, any, any, any> }) {
  return (
    <>
      {field.state.meta.touchedErrors ? (
        <em className='text-sm text-red-500'>{field.state.meta.touchedErrors}</em>
      ) : null}
      {/* Optional: Add a spinner or additional info during validation */}
      {/* {field.state.meta.isValidating ? <>
        <Icons.spinner className="mr-2 size-4 animate-spin" />
      </> : null} */}
    </>
  )
}