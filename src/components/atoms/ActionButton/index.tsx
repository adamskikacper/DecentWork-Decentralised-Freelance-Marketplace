import React from "react";
import { Button } from "@/shared/ui";
import { LucideIcon } from "lucide-react";

export interface ActionButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  disabled?: boolean;
  loading?: boolean;
  className?: string;
}

export const ActionButton: React.FC<ActionButtonProps> = ({
  children,
  onClick,
  variant = "default",
  size = "sm",
  icon: Icon,
  iconPosition = "left",
  disabled = false,
  loading = false,
  className = "",
  ...props
}) => {
  return (
    <Button
      variant={variant}
      size={size}
      onClick={onClick}
      disabled={disabled || loading}
      className={className}
      {...props}
    >
      {Icon && iconPosition === "left" && (
        <Icon className="w-4 h-4 mr-2" />
      )}
      {children}
      {Icon && iconPosition === "right" && (
        <Icon className="w-4 h-4 ml-2" />
      )}
    </Button>
  );
};