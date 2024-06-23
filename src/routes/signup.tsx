import { createFileRoute } from '@tanstack/react-router'
import { useForm } from '@tanstack/react-form'
import { zodValidator } from '@tanstack/zod-form-adapter'
import { z } from 'zod'
import type { FieldApi } from '@tanstack/react-form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'


export const Route = createFileRoute('/signup')({
  component: Signup,
})

function Signup() {
  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    onSubmit: async ({ value }) => {
      // Do something with form data
      console.log(value)
    },
    validatorAdapter: zodValidator(),
  })

  return (
    <div>
      <h1>Singup</h1>
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
                />
                <FieldInfo field={field} />
              </>
            )}
          />
        </div>
        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
          children={([canSubmit, isSubmitting]) => (
            <Button type="submit" disabled={!canSubmit}>
              {isSubmitting ? '...' : 'Submit'}
            </Button>
          )}
        />
      </form>
    </div>
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function FieldInfo({ field }: { field: FieldApi<any, any, any, any> }) {
  return (
    <>
      {field.state.meta.touchedErrors ? (
        <em className='text-sm text-red-500'>{field.state.meta.touchedErrors}</em>
      ) : null}
      {/* {field.state.meta.isValidating ? 'Validating...' : null} */}
    </>
  )
}
