// app.tsx
import "@/styles/index.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";

import { Client } from "@/client";
import { queryClient } from "@/setup";

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Client />
      <Toaster richColors />
    </QueryClientProvider>
  );
}
