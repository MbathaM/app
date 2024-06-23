import { createLazyFileRoute } from '@tanstack/react-router'
import { useForm } from '@tanstack/react-form';
import { zodValidator } from '@tanstack/zod-form-adapter';
import { FormSchema } from '@/definitions';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icons';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { FieldInfo } from '@/field-info';
import { Textarea } from '@/components/ui/textarea';

export const Route = createLazyFileRoute('/_public/contact')({
  component: Contact
})

function Contact() {
  const form = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: '',
    },
    onSubmit: async ({ value }) => {
      console.log('Form submitted:', value);
      // Handle form submission logic here
    },
    validatorAdapter: zodValidator,
  });

  return (
    <Card className="mx-auto w-full max-w-lg">
      <CardHeader>
        <CardTitle>Contact Us</CardTitle>
        <CardDescription>Fill out the form below to get in touch with us</CardDescription>
      </CardHeader>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
      >
        <CardContent>
          <div className="flex gap-4">
            <form.Field
              name="firstName"
              validators={{ onChange: FormSchema.shape.firstName }}
              children={(field) => (
                <div className="flex-1 space-y-2">
                  <Label htmlFor={field.name}>First Name:</Label>
                  <Input
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
            <form.Field
              name="lastName"
              validators={{ onChange: FormSchema.shape.lastName }}
              children={(field) => (
                <div className="flex-1 space-y-2">
                  <Label htmlFor={field.name}>Last Name:</Label>
                  <Input
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
          <form.Field
            name="email"
            validators={{ onChange: FormSchema.shape.email }}
            children={(field) => (
              <div className="mt-4 space-y-2">
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
            name="subject"
            validators={{ onChange: FormSchema.shape.subject }}
            children={(field) => (
              <div className="mt-4 space-y-2">
                <Label htmlFor={field.name}>Subject:</Label>
                <Input
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
          <form.Field
            name="message"
            validators={{ onChange: FormSchema.shape.message }}
            children={(field) => (
              <div className="mt-4 space-y-2">
                <Label htmlFor={field.name}>Message:</Label>
                <Textarea
                  id={field.name}
                  name={field.name}
                  rows={5}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  placeholder="Type your message here."
                  className="w-full rounded-md border-gray-300 shadow-sm"
                />
                <FieldInfo field={field} />
              </div>
            )}
          />
        </CardContent>
        <CardFooter className="flex justify-between">
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
                  'Send Message'
                )}
              </Button>
            )}
          />
        </CardFooter>
      </form>
    </Card>
  );
}
