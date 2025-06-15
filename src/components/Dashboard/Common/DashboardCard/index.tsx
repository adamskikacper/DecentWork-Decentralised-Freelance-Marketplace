import React from "react";
import { cn } from "@/lib/utils";
export interface DashboardCardProps
 extends React.HTMLAttributes<HTMLDivElement> {
 title?: string;
 description?: string;
 icon?: React.ReactNode;
 footer?: React.ReactNode;
 isLoading?: boolean;
 glassEffect?: boolean;
}
const DashboardCard = React.forwardRef<HTMLDivElement, DashboardCardProps>(
 (
  {
   className,
   title,
   description,
   icon,
   footer,
   isLoading = false,
   glassEffect = true,
   children,
   ...props
  },
  ref
 ) => {
  return (
   <div
    className={cn(
     glassEffect ? "glass-card" : "bg-card",
     "rounded-xl p-6 fade-in",
     isLoading && "animate-pulse",
     className
    )}
    ref={ref}
    {...props}
   >
    {(title || icon) && (
     <div className="flex items-center justify-between mb-4">
      {title && <h3 className="text-lg font-semibold">{title}</h3>}
      {icon && <div className="text-primary">{icon}</div>}
     </div>
    )}
    {description && (
     <p className="text-sm text-muted-foreground mb-4">{description}</p>
    )}
    <div className={cn(footer ? "mb-4" : "")}>{children}</div>
    {footer && (
     <div className="mt-auto pt-4 border-t border-border">{footer}</div>
    )}
   </div>
  );
 }
);
DashboardCard.displayName = "DashboardCard";
export default DashboardCard;
