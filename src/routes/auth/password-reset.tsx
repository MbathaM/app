import { createFileRoute, Link } from '@tanstack/react-router'
import { useForm } from '@tanstack/react-form'
import { zodValidator } from '@tanstack/zod-form-adapter'
import { z } from 'zod'
import type { FieldApi } from '@tanstack/react-form'
import { useAuth } from '@/auth'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Icons } from '@/components/icons'
import { InputPassword } from '@/components/ui/input-password'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp';
// Define the route for password reset
export const Route = createFileRoute('/auth/password-reset')({
  component: PasswordReset,
})

// PasswordReset component
function PasswordReset() {
  const { resetPassword } = useAuth() // Assume resetPassword is a function provided by useAuth
  const form = useForm({
    defaultValues: {
      password: '',
      code: '',
    },
    onSubmit: async ({ value }) => {
      await resetPassword(value.code, value.password)
      console.log('Password reset with code:', value.code)
    },
    validatorAdapter: zodValidator(),
  })

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Reset Password</CardTitle>
        <CardDescription>
          Enter your new password and the 8-digit code you received to reset your password
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
          <div className="mt-4">
            {/* Password Field */}
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
              children={(field) => {
                return (
                  <>
                    <Label htmlFor={field.name}>New Password:</Label>
                    <InputPassword
                      type="password"
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      autoComplete='new-password'
                    />
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
                      Resetting...
                    </>
                  ) : (
                    'Reset Password'
                  )}
                </Button>
              )}
            />
          </div>
          <div className="mt-4 text-center text-sm">
            <Link to="/auth/login" className="underline">
              Back to Login
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
      {/* Optional: Add a spinner or additional info during validation */}
      {/* {field.state.meta.isValidating ? <>
        <Icons.spinner className="mr-2 size-4 animate-spin" />
      </> : null} */}
    </>
  )
}
