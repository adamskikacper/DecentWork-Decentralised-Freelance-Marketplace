import React from "react";
import { Button } from "@/shared/ui";
import { Menu, X } from "lucide-react";
import { cn } from "@/shared/lib/utils";

interface SidebarToggleButtonProps {
 isCollapsed: boolean;
 handleToggle: () => void;
 isKeyboardNavigating: boolean;
}

export const SidebarToggleButton = ({
 isCollapsed,
 handleToggle,
 isKeyboardNavigating,
}: SidebarToggleButtonProps) => {
 const focusStyles = isKeyboardNavigating
  ? "focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:outline-none"
  : "focus:outline-none";
 return (
  <Button
   variant="default"
   size="sm"
   onClick={handleToggle}
   className={cn(
    "absolute -right-[40px] top-[50px] z-50 rounded-r-full w-10 h-10 flex items-center justify-center pr-4 pl-2",
    "bg-primary text-primary-foreground shadow-lg",
    focusStyles
   )}
   aria-label={isCollapsed ? "Open sidebar menu" : "Close sidebar menu"}
   aria-expanded={!isCollapsed}
   aria-controls="sidebar-content"
  >
   {isCollapsed ? (
    <Menu className="w-5 h-5" aria-hidden="true" />
   ) : (
    <X className="w-5 h-5" aria-hidden="true" />
   )}
  </Button>
 );
};
