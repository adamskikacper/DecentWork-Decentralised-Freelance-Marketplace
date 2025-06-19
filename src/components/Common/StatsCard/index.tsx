import React from "react";

export interface StatsCardProps {
 title: string;
 value: string | number;
 icon?: React.ReactNode;
 change?: {
  value: number;
  isPositive: boolean;
 };
 subtext?: string;
 className?: string;
 style?: React.CSSProperties;
}

export const StatsCard: React.FC<StatsCardProps> = ({
 title,
 value,
 icon,
 change,
 subtext,
 className = "",
 style,
}) => {
 return (
  <div className={`glass-card rounded-xl p-6 ${className}`} style={style}>
   <div className="flex justify-between items-start mb-4">
    <div>
     <p className="text-sm text-muted-foreground">{title}</p>
     <h3 className="text-2xl font-bold">{value}</h3>
    </div>
    {icon && (
     <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
      {icon}
     </div>
    )}
   </div>

   {(change || subtext) && (
    <div className="flex items-center gap-2 text-sm">
     {change && (
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
       <span>{Math.abs(change.value)}</span>
      </span>
     )}
     {subtext && <span className="text-muted-foreground">{subtext}</span>}
    </div>
   )}
  </div>
 );
};
