import React from "react";

export interface ProgressBarProps {
 value: number;
 max?: number;
 label?: string;
 showPercentage?: boolean;
 size?: "sm" | "md" | "lg";
 variant?: "default" | "success" | "warning" | "danger";
 className?: string;
}

const sizeClasses = {
 sm: "h-1",
 md: "h-2",
 lg: "h-3",
};

const variantClasses = {
 default: "bg-primary",
 success: "bg-green-500",
 warning: "bg-yellow-500",
 danger: "bg-red-500",
};

export const ProgressBar = ({
 value,
 max = 100,
 label,
 showPercentage = false,
 size = "md",
 variant = "default",
 className = "",
}: ProgressBarProps) => {
 const percentage = Math.min((value / max) * 100, 100);

 return (
  <div className={`w-full ${className}`}>
   {(label || showPercentage) && (
    <div className="flex justify-between items-center mb-1">
     {label && (
      <span className="text-sm font-medium text-foreground">{label}</span>
     )}
     {showPercentage && (
      <span className="text-sm text-muted-foreground">
       {percentage.toFixed(0)}%
      </span>
     )}
    </div>
   )}
   <div className={`w-full bg-secondary rounded-full ${sizeClasses[size]}`}>
    <div
     className={`${sizeClasses[size]} ${variantClasses[variant]} rounded-full transition-all duration-300`}
     style={{ width: `${percentage}%` }}
    />
   </div>
  </div>
 );
};
