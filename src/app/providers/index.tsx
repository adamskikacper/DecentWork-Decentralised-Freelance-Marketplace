import { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import { AuthProvider } from "./AuthProvider";
import { QueryProvider } from "./QueryProvider";
import { UIProvider } from "./UIProvider";

interface AppProvidersProps {
 children: ReactNode;
}

export const AppProviders = ({ children }: AppProvidersProps) => (
 <ThemeProvider
  attribute="class"
  defaultTheme="light"
  enableSystem
  disableTransitionOnChange
 >
  <AuthProvider>
   <QueryProvider>
    <UIProvider>{children}</UIProvider>
   </QueryProvider>
  </AuthProvider>
 </ThemeProvider>
);

export { AuthProvider } from "./AuthProvider";
export { QueryProvider } from "./QueryProvider";
export { UIProvider } from "./UIProvider";
