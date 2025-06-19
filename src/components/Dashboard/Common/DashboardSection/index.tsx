import React from "react";
import { cn } from "@/lib/utils";
export interface DashboardSectionProps
 extends React.HTMLAttributes<HTMLDivElement> {
 title: string;
 description?: string;
 action?: React.ReactNode;
 isLoading?: boolean;
 glassEffect?: boolean;
 contentPadding?: boolean;
}
export const DashboardSection = React.forwardRef<
 HTMLDivElement,
 DashboardSectionProps
>(
 (
  {
   className,
   title,
   description,
   action,
   isLoading = false,
   glassEffect = true,
   contentPadding = true,
   children,
   ...props
  },
  ref
 ) => {
  return (
   <section
    className={cn("fade-in", isLoading && "animate-pulse", className)}
    ref={ref}
    {...props}
   >
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
     <div>
      <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
      {description && (
       <p className="text-muted-foreground mt-1">{description}</p>
      )}
     </div>
     {action && <div>{action}</div>}
    </div>
    <div
     className={cn(
      glassEffect ? "glass-card" : "bg-card",
      "rounded-xl",
      contentPadding && "p-6"
     )}
    >
     {children}
    </div>
   </section>
  );
 }
);
DashboardSection.displayName = "DashboardSection";
