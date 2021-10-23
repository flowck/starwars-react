import { HelmetProvider } from "react-helmet-async";
import { BaseProps } from "@/common/typings/interfaces";
import { BrowserRouter as Router } from "react-router-dom";

export function Providers({ children }: BaseProps) {
  return (
    <HelmetProvider>
      <Router>{children}</Router>
    </HelmetProvider>
  );
}
