import { ReactNode } from "react";
import { Toaster } from "@/shared/ui/Toaster";
import { Toaster as Sonner } from "@/shared/ui/Sonner";

interface UIProviderProps {
 children: ReactNode;
}

export const UIProvider = ({ children }: UIProviderProps) => (
 <>
  <Toaster />
  <Sonner />
  {children}
 </>
);
