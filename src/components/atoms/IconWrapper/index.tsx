import React from "react";
import { LucideIcon } from "lucide-react";

export interface IconWrapperProps {
  icon: LucideIcon;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "default" | "muted" | "primary" | "success" | "warning" | "danger";
  className?: string;
}

const sizeClasses = {
  sm: "w-4 h-4",
  md: "w-5 h-5",
  lg: "w-6 h-6", 
  xl: "w-8 h-8",
};

const variantClasses = {
  default: "text-gray-600",
  muted: "text-gray-400",
  primary: "text-primary",
  success: "text-green-600",
  warning: "text-yellow-600",
  danger: "text-red-600",
};

export const IconWrapper: React.FC<IconWrapperProps> = ({
  icon: Icon,
  size = "md",
  variant = "default",
  className = "",
}) => {
  return (
    <Icon 
      className={`${sizeClasses[size]} ${variantClasses[variant]} shrink-0 ${className}`}
    />
  );
};