import { RouterProvider } from "@tanstack/react-router";

import { router } from "@/setup";

import "@/styles/index.css";
import { useAuth } from "@/context/auth";

export function Client() {
  const auth = useAuth();

  return <RouterProvider context={auth} router={router} />;
}
