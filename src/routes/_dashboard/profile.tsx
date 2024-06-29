import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { createFileRoute } from "@tanstack/react-router";
import { zodValidator } from "@tanstack/zod-form-adapter";
import { FieldApi, useForm } from "@tanstack/react-form";
import { useAuth } from "@/context/auth";
import { CameraIcon, UserIcon, MailIcon } from "@/components/icons";
import { FormSchema } from "@/definitions";

export const Route = createFileRoute("/_dashboard/profile")({
  component: ProfilePage,
});

function ProfilePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <Profile />
      <Password />
    </div>
  );
}

function Profile() {
  const auth = useAuth();
  const { email, firstName, lastName, image } = auth.user!;
  const form = useForm({
    defaultValues: {
      firstName,
      lastName,
      email,
      image,
    },
    onSubmit: async ({ value }) => {
      // Handle form submission
      console.log(value);
      alert("Form submitted successfully");
    },
    validatorAdapter: zodValidator(),
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}
      className="bg-white shadow-md rounded p-8 max-w-md w-full"
    >
      <div className="flex flex-col items-center mb-4">
        <img
          src={image || "https://via.placeholder.com/150"}
          alt="Profile"
          className="rounded-full w-32 h-32 mb-4"
        />
        <Button color="success" endContent={<CameraIcon />}>
          Take a photo
        </Button>
      </div>

      <div className="flex flex-col space-y-4">
        <form.Field
          name="firstName"
          validators={{
            onChange: FormSchema.shape.firstName,
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

        <form.Field
          name="lastName"
          validators={{
            onChange: FormSchema.shape.lastName,
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

        <div className="flex space-x-2">
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
                {isSubmitting ? "..." : "Save"}
              </Button>
            )}
          </form.Subscribe>
        </div>
      </div>
    </form>
  );
}

function Password() {
  const form = useForm({
    defaultValues: {
      password: "",
    },
    onSubmit: async ({ value }) => {
      // Handle form submission
      console.log(value);
      alert("Form submitted successfully");
    },
    validatorAdapter: zodValidator(),
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}
      className="bg-white shadow-md rounded p-8 max-w-md w-full mt-8"
    >
      <form.Field
        name="password"
        validators={{
          onChange: FormSchema.shape.password,
        }}
      >
        {(field) => (
          <>
            <Input
              endContent={
                <UserIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
              }
              id={field.name}
              label="Password"
              name={field.name}
              type="password"
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
            />
            <FieldInfo field={field} />
          </>
        )}
      </form.Field>

      <form.Subscribe
        selector={(state) => [state.canSubmit, state.isSubmitting]}
      >
        {([canSubmit, isSubmitting]) => (
          <Button
            color="primary"
            disabled={!canSubmit}
            type="submit"
            variant="solid"
            className="mt-4"
          >
            {isSubmitting ? "..." : "Update Password"}
          </Button>
        )}
      </form.Subscribe>
    </form>
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
