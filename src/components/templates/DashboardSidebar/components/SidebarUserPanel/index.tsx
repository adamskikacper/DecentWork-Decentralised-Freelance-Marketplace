import React from "react";
import { User } from "lucide-react";

interface SidebarUserPanelProps {
 userType?: string;
 userEmail?: string;
}

export const SidebarUserPanel = ({
 userType,
 userEmail,
}: SidebarUserPanelProps) => {
 return (
  <div className="flex mb-6 flex-col items-center">
   <div className="w-12 h-12 rounded-full bg-primary/20 dark:bg-primary/30 flex items-center justify-center mb-2 border border-primary/30">
    <User className="h-6 w-6 text-primary" aria-hidden="true" />
   </div>
   <div className="text-center">
    <h2 className="font-medium capitalize text-sm text-foreground">
     {userType}
    </h2>
    {userEmail && (
     <p className="text-xs text-muted-foreground truncate max-w-48">
      {userEmail}
     </p>
    )}
   </div>
  </div>
 );
};
