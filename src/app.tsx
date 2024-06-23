import "@/styles/index.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { Client } from "@/client";
import { queryClient } from "@/setup";
import { AuthProvider } from "@/auth";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
export function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Client />
        </TooltipProvider>
        <Toaster richColors />
      </QueryClientProvider>
    </AuthProvider>
  );
}
