import { router } from "@/setup"; // Import from setup.ts
import "@/styles/index.css";
import { RouterProvider } from "@tanstack/react-router";

export function Client() {
  return <RouterProvider router={router} />;
}
