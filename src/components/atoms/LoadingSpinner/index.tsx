import React from "react";
import { Loader2 } from "lucide-react";

export interface LoadingSpinnerProps {
 size?: "sm" | "md" | "lg";
 className?: string;
}

const sizeClasses = {
 sm: "w-4 h-4",
 md: "w-6 h-6",
 lg: "w-8 h-8",
};

export const LoadingSpinner = ({
 size = "md",
 className = "",
}: LoadingSpinnerProps) => {
 return (
  <Loader2
   className={`${sizeClasses[size]} animate-spin text-primary ${className}`}
  />
 );
};
