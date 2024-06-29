import type { FieldApi } from "@tanstack/react-form";

import { createFileRoute, Link } from "@tanstack/react-router";
import { useForm } from "@tanstack/react-form";
import { zodValidator } from "@tanstack/zod-form-adapter";
import { z } from "zod";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import React from "react";

import { useAuth } from "@/context/auth";
import {
  EyeFilledIcon,
  EyeSlashFilledIcon,
  MailIcon,
} from "@/components/icons";
import { subtitle } from "@/components/primitives";
import { capitalizeFirstLetter } from "@/lib/utils";

export const Route = createFileRoute("/auth/login")({
  component: Login,
});

function Login() {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  const { login } = useAuth();
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    onSubmit: async ({ value }) => {
      await login(value.email, value.password);
      form.reset()
    },
    validatorAdapter: zodValidator(),
  });

  return (
    <Card>
      <CardHeader className="flex flex-col items-center text-center">
        <h2 className={subtitle()}>Login</h2>
        <p className="text-sm">
          Enter your email below to login to your account
        </p>
      </CardHeader>
      <CardBody>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit();
          }}
        >
          <form.Field
            name="email"
            validators={{
              onChange: z.string().email("Must be a valid email address"),
              onChangeAsyncDebounceMs: 500,
              onChangeAsync: z.string().refine(
                async (value) => {
                  await new Promise((resolve) => setTimeout(resolve, 1000));

                  return !value.includes("error");
                },
                {
                  message: "No 'error' allowed in email",
                },
              ),
            }}
          >
            {(field) => (
              <div className="p-2">
                <Input
                  autoComplete="current-email"
                  endContent={
                    <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  id={field.name}
                  label={capitalizeFirstLetter(field.name)}
                  labelPlacement="outside"
                  name={field.name}
                  placeholder="you@example.com"
                  type="email"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
                <FieldInfo field={field} />
              </div>
            )}
          </form.Field>

          <form.Field
            name="password"
            validators={{
              onChange: z
                .string()
                .min(6, "Password must be at least 6 characters"),
              onChangeAsyncDebounceMs: 500,
              onChangeAsync: z.string().refine(
                async (value) => {
                  await new Promise((resolve) => setTimeout(resolve, 1000));

                  return !value.includes("error");
                },
                {
                  message: "No 'error' allowed in password",
                },
              ),
            }}
          >
            {(field) => (
              <div className="p-2">
                <Input
                  autoComplete="current-password"
                  endContent={
                    <button
                      className="focus:outline-none"
                      type="button"
                      onClick={toggleVisibility}
                    >
                      {isVisible ? (
                        <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                      ) : (
                        <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                      )}
                    </button>
                  }
                  id={field.name}
                  label={capitalizeFirstLetter(field.name)}
                  labelPlacement="outside"
                  name={field.name}
                  placeholder="Enter your password"
                  type={isVisible ? "text" : "password"}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
                <FieldInfo field={field} />
              </div>
            )}
          </form.Field>
          <div className="flex items-center p-2">
            <Link
              className="ml-auto inline-block text-sm text-primary hover:text-secondary"
              to="/auth/password-recovery"
            >
              Forgot your password?
            </Link>
          </div>
          <div className="grid gap-2 p-2">
            <form.Subscribe
              selector={(state) => [state.canSubmit, state.isSubmitting]}
            >
              {([canSubmit, isSubmitting]) => (
                <Button
                  color="primary"
                  disabled={!canSubmit}
                  isLoading={isSubmitting}
                  type="submit"
                  variant="solid"
                >
                  {isSubmitting ? "submitting" : "login"}
                </Button>
              )}
            </form.Subscribe>
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link
              className="underline text-sm text-primary hover:text-secondary"
              to="/auth/signup"
            >
              sign up
            </Link>
          </div>
        </form>
      </CardBody>
    </Card>
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
      {/* {field.state.meta.isValidating ? <>
                    <Icons.spinner className="mr-2 size-4 animate-spin" />
                  </> : null} */}
    </>
  );
}
