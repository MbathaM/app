import { useAuth } from "@/auth";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_dashboard/dashboard/profile")({
  component: Profile,
});

function Profile() {
  const { user } = useAuth();
  return (
    <pre className="whitespace-pre-wrap">{JSON.stringify(user, null, 2)}</pre>
  );
}
