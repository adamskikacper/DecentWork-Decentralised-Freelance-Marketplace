import { ReactNode } from "react";
import { Toaster } from "@/shared/ui/Toaster";
import { Toaster as Sonner } from "@/shared/ui/Sonner";
import { TooltipProvider } from "@/shared/ui/Tooltip";

interface UIProviderProps {
  children: ReactNode;
}

export const UIProvider = ({ children }: UIProviderProps) => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    {children}
  </TooltipProvider>
);