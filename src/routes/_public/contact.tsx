import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@nextui-org/button";
import { Textarea, Input } from "@nextui-org/input";
import { FieldApi, useForm } from "@tanstack/react-form";
import { zodValidator } from "@tanstack/zod-form-adapter";
import { z } from "zod";
import { motion } from "framer-motion";

import { EditIcon, HeartIcon, MailIcon, UserIcon } from "@/components/icons";
import { title } from "@/components/primitives";

export const Route = createFileRoute("/_public/contact")({
  component: ContactPage,
});

const FormSchema = z.object({
  firstname: z.string().min(1, "First name is required"),
  lastname: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
});

function ContactPage() {
  const form = useForm({
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      subject: "",
      message: "",
    },
    onSubmit: async ({ value }) => {
      // Handle form submission
      console.log(value);
      alert("Form submitted successfully");
    },
    validatorAdapter: zodValidator(),
  });

  return (
    <motion.section
      animate={{ opacity: 1, y: 0 }}
      className="mb-28 max-w-[45rem] text-center sm:mb-40 scroll-mt-28"
      id="contact"
      initial={{ opacity: 0, y: 100 }}
      transition={{ delay: 0.175 }}
    >
      <Card className="max-w-lg w-full shadow-lg">
        <CardHeader className="flex flex-col items-center text-center space-y-2">
          <h1 className={title()}>Contact Me</h1>
          <p>Let&apos;s connect and create something amazing together!</p>
        </CardHeader>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit();
          }}
        >
          <CardBody className="space-y-4">
            <div className="flex space-x-2">
              <div className="flex-1">
                <form.Field
                  name="firstname"
                  validators={{
                    onChange: FormSchema.shape.firstname,
                  }}
                >
                  {(field) => (
                    <>
                      <Input
                        endContent={
                          <UserIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                        }
                        id={field.name}
                        label="First Name"
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                      />
                      <FieldInfo field={field} />
                    </>
                  )}
                </form.Field>
              </div>
              <div className="flex-1">
                <form.Field
                  name="lastname"
                  validators={{
                    onChange: FormSchema.shape.lastname,
                  }}
                >
                  {(field) => (
                    <>
                      <Input
                        endContent={
                          <UserIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                        }
                        id={field.name}
                        label="Last Name"
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                      />
                      <FieldInfo field={field} />
                    </>
                  )}
                </form.Field>
              </div>
            </div>
            <form.Field
              name="email"
              validators={{
                onChange: FormSchema.shape.email,
              }}
            >
              {(field) => (
                <>
                  <Input
                    endContent={
                      <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                    id={field.name}
                    label="Email"
                    name={field.name}
                    type="email"
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                  <FieldInfo field={field} />
                </>
              )}
            </form.Field>
            <form.Field
              name="subject"
              validators={{
                onChange: FormSchema.shape.subject,
              }}
            >
              {(field) => (
                <>
                  <Input
                    endContent={
                      <HeartIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                    id={field.name}
                    label="Subject"
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                  <FieldInfo field={field} />
                </>
              )}
            </form.Field>
            <form.Field
              name="message"
              validators={{
                onChange: FormSchema.shape.message,
              }}
            >
              {(field) => (
                <>
                  <Textarea
                    endContent={
                      <EditIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                    id={field.name}
                    label="Message"
                    name={field.name}
                    rows={6}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                  <FieldInfo field={field} />
                </>
              )}
            </form.Field>
          </CardBody>
          <CardFooter className="flex justify-end space-x-4">
            <Button color="danger" variant="flat" onClick={() => form.reset()}>
              Reset
            </Button>
            <form.Subscribe
              selector={(state) => [state.canSubmit, state.isSubmitting]}
            >
              {([canSubmit, isSubmitting]) => (
                <Button
                  color="primary"
                  disabled={!canSubmit}
                  type="submit"
                  variant="solid"
                >
                  {isSubmitting ? "..." : "Send"}
                </Button>
              )}
            </form.Subscribe>
          </CardFooter>
        </form>
      </Card>
    </motion.section>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function FieldInfo({ field }: { field: FieldApi<any, any, any, any> }) {
  return (
    <>
      {field.state.meta.touchedErrors ? (
        <em className="text-sm text-red-500">
          {field.state.meta.touchedErrors}
        </em>
      ) : null}
      {field.state.meta.isValidating ? "Validating..." : null}
    </>
  );
}
