import React, { ReactNode } from "react";

interface StatCardProps {
 title: string;
 value: string | number;
 icon: ReactNode;
 change?: {
  value: string | number;
  isPositive: boolean;
  label: string;
 };
 delay?: string;
}

const StatCard = ({
 title,
 value,
 icon,
 change,
 delay = "0s",
}: StatCardProps) => {
 return (
  <div
   className="glass-card rounded-xl p-6 slide-up"
   style={{ animationDelay: delay }}
  >
   <div className="flex justify-between items-start mb-4">
    <div>
     <p className="text-sm text-muted-foreground">{title}</p>
     <h3 className="text-2xl font-bold">{value}</h3>
    </div>
    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
     {icon}
    </div>
   </div>
   {change && (
    <div className="flex items-center gap-2 text-sm">
     <span
      className={`inline-flex items-center ${
       change.isPositive ? "text-green-500" : "text-red-500"
      }`}
     >
      <svg
       width="16"
       height="16"
       viewBox="0 0 24 24"
       fill="none"
       xmlns="http://www.w3.org/2000/svg"
      >
       <path
        d={change.isPositive ? "M18 15L12 9L6 15" : "M6 9L12 15L18 9"}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
       />
      </svg>
      <span>{change.value}</span>
     </span>
     <span className="text-muted-foreground">{change.label}</span>
    </div>
   )}
  </div>
 );
};

export default StatCard;
