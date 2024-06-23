import { Link, createFileRoute, redirect, useRouter } from '@tanstack/react-router';
import { zodValidator } from '@tanstack/zod-form-adapter';
import { z } from 'zod';
import { useForm } from '@tanstack/react-form';
import { InputPassword } from '@/components/ui/input-password';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Icons } from '@/components/icons';
import { FieldInfo } from '@/field-info';
import { useAuth } from '@/auth';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { FormSchema } from '@/definitions';

const fallback = '/dashboard' as const
export const Route = createFileRoute('/_auth/login')({
  validateSearch: z.object({
    redirect: z.string().optional().catch(''),
  }),
  beforeLoad: ({ context, search }) => {
    if (context.auth.isAuthenticated) {
      throw redirect({ to: search.redirect || fallback })
    }
  },
  component: SignIn
});

function SignIn() {
  const {login} = useAuth()
  const router = useRouter()
  const navigate = Route.useNavigate()

  const search = Route.useSearch()
  
  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    
    onSubmit: async ({ value }) => {
        await login(value.email, value.password)
        await router.invalidate()
  
        await navigate({ to: search.redirect || fallback })
     
    },
    validatorAdapter: zodValidator(),
  });

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
          e.preventDefault();
          form.handleSubmit();
        }}
        >
      <div className="grid gap-4">
      
          <form.Field
            name="email"
            validators={{
              onChange: FormSchema.shape.email
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
                  autoComplete='email'
                />
                <FieldInfo field={field} />
              </div>
            )}
          />
          <form.Field
            name="password"
            validators={{
              onChange: FormSchema.shape.password
            }}
            children={(field) => (
              <div className="grid gap-2">
            <div className="flex items-center">
                <Label htmlFor={field.name}>Password:</Label>
                <Link to="/" className="ml-auto inline-block text-sm underline">
                Forgot your password?
              </Link>
            </div>
                <InputPassword
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  autoComplete="current-password"
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
                  'Sign in'
                  )}
            </Button>
          )}
          />
        </div>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link to="/get-started" className="underline">
            Sign up
          </Link>
        </div>  
      </form>
          </CardContent>
    </Card>
  );
}
