import { router } from "@/setup";
import "@/styles/index.css";
import { RouterProvider } from "@tanstack/react-router";
import { useAuth } from '@/auth';

export function Client() {
  const auth = useAuth();
  return <RouterProvider router={router} context={{ auth }} />;
}
