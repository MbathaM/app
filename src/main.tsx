import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import { ThemeProvider } from "@/context/theme";
import { App } from "@/app";
import { AuthProvider } from "@/context/auth";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>,
);
