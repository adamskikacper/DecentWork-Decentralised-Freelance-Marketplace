import { ReactNode } from "react";
import { AuthProvider } from "./AuthProvider";
import { QueryProvider } from "./QueryProvider";
import { UIProvider } from "./UIProvider";

interface AppProvidersProps {
 children: ReactNode;
}

export const AppProviders = ({ children }: AppProvidersProps) => (
 <AuthProvider>
  <QueryProvider>
   <UIProvider>{children}</UIProvider>
  </QueryProvider>
 </AuthProvider>
);

export { AuthProvider } from "./AuthProvider";
export { QueryProvider } from "./QueryProvider";
export { UIProvider } from "./UIProvider";
