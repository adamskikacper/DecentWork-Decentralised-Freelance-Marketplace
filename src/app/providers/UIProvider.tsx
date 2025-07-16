import { ReactNode } from "react";
import { Toaster } from "@/shared/ui/Toaster";
import { Toaster as Sonner } from "@/shared/ui/Sonner";
import { useLenis } from "@/shared/hooks/ui";

interface UIProviderProps {
 children: ReactNode;
}

export const UIProvider = ({ children }: UIProviderProps) => {
 useLenis();

 return (
  <>
   <Toaster />
   <Sonner />
   {children}
  </>
 );
};
