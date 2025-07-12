import React from "react";
import { cn } from "@/shared/lib/utils";
import { Card, CardContent } from "@/shared/ui/Card";

export interface StatItem {
 title: string;
 value: string | number;
 icon?: React.ReactNode;
 change?: {
  value: string | number;
  isPositive: boolean;
  label?: string;
 };
 delay?: string;
}

export interface DashboardStatsProps
 extends React.HTMLAttributes<HTMLDivElement> {
 stats: StatItem[];
 columns?: 1 | 2 | 3 | 4;
 isLoading?: boolean;
}

export const DashboardStats = React.forwardRef<
 HTMLDivElement,
 DashboardStatsProps
>(({ className, stats, columns = 4, isLoading = false, ...props }, ref) => {
 const gridCols = {
  1: "grid-cols-1",
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
 };

 return (
  <div
   className={cn("grid gap-4", gridCols[columns], className)}
   ref={ref}
   {...props}
  >
   {stats.map((stat, index) => (
    <Card key={index} className={cn("slide-up", isLoading && "animate-pulse")}>
     <CardContent className="p-6">
      <div className="flex justify-between items-start mb-4">
       <div>
        <p className="text-sm text-muted-foreground">{stat.title}</p>
        <h3 className="text-2xl font-bold">{stat.value}</h3>
       </div>
       {stat.icon && (
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
         {stat.icon}
        </div>
       )}
      </div>
      {stat.change && (
       <div className="flex items-center gap-2 text-sm">
        <span
         className={cn(
          "inline-flex items-center",
          stat.change.isPositive ? "text-green-500" : "text-red-500"
         )}
        >
         <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={cn(
           "mr-1",
           stat.change.isPositive ? "rotate-0" : "rotate-180"
          )}
         >
          <path
           d="M12 4L12 20M12 4L18 10M12 4L6 10"
           stroke="currentColor"
           strokeWidth="2"
           strokeLinecap="round"
           strokeLinejoin="round"
          />
         </svg>
         {stat.change.value}
        </span>
        {stat.change.label && (
         <span className="text-muted-foreground">{stat.change.label}</span>
        )}
       </div>
      )}
     </CardContent>
    </Card>
   ))}
  </div>
 );
});

DashboardStats.displayName = "DashboardStats";
