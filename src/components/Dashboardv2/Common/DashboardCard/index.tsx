import React from "react";
import { cn } from "@/lib/utils";

export interface DashboardCardProps
 extends React.HTMLAttributes<HTMLDivElement> {
 /**
  * Card title
  */
 title?: string;
 /**
  * Card description
  */
 description?: string;
 /**
  * Icon to display in the card header
  */
 icon?: React.ReactNode;
 /**
  * Content to display in the card footer
  */
 footer?: React.ReactNode;
 /**
  * Whether the card is in a loading state
  * @default false
  */
 isLoading?: boolean;
 /**
  * Whether to use glass card styling
  * @default true
  */
 glassEffect?: boolean;
}

/**
 * DashboardCard - A reusable card component for dashboard content
 * Can display a title, description, icon, and footer
 */
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
