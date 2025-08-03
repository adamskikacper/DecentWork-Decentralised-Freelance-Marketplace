import React from "react";
import { cn } from "@/shared/lib/utils";

export interface LoaderProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const Loader = ({ className, size = "md" }: LoaderProps) => {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-8 w-8",
    lg: "h-12 w-12",
  };

  return (
    <div
      className={cn(
        "animate-spin rounded-full border-2 border-primary border-t-transparent",
        sizeClasses[size],
        className
      )}
    />
  );
};