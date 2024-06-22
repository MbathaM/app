// app.tsx
import "@/styles/index.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { Client } from "@/client"; // Reuse the Client component
// import { Toaster } from "sonner";
import { queryClient } from "@/setup"; // Import the shared QueryClient

export function App() {
  return (
      <QueryClientProvider client={queryClient}>
        <Client />
        {/* <Toaster richColors /> */}
      </QueryClientProvider>
  );
}
