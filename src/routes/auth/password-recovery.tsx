import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/auth/password-recovery")({
  component: () => <div>Hello /auth/password-recovery!</div>,
});
