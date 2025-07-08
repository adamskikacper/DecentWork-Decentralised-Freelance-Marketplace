import { ReactNode } from "react";
import { QueryProvider } from "./QueryProvider";
import { UIProvider } from "./UIProvider";

interface AppProvidersProps {
  children: ReactNode;
}

export const AppProviders = ({ children }: AppProvidersProps) => (
  <QueryProvider>
    <UIProvider>
      {children}
    </UIProvider>
  </QueryProvider>
);

export { AuthProvider } from "./AuthProvider";
export { QueryProvider } from "./QueryProvider";
export { UIProvider } from "./UIProvider";