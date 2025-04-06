import React from "react";
import { cn } from "@/lib/utils";

export interface DashboardSectionProps
 extends React.HTMLAttributes<HTMLDivElement> {
 /**
  * Section title
  */
 title: string;
 /**
  * Section description
  */
 description?: string;
 /**
  * Action button or element to display in the header
  */
 action?: React.ReactNode;
 /**
  * Whether the section is in a loading state
  * @default false
  */
 isLoading?: boolean;
 /**
  * Whether to use glass card styling
  * @default true
  */
 glassEffect?: boolean;
 /**
  * Whether to add padding to the content area
  * @default true
  */
 contentPadding?: boolean;
}

/**
 * DashboardSection - A component that displays a section with title and content
 * Used to organize dashboard content into logical sections
 */
const DashboardSection = React.forwardRef<
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

export default DashboardSection;
