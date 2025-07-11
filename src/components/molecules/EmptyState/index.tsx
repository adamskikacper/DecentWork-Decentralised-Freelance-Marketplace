import React from "react";
import { LucideIcon } from "lucide-react";
import { ActionButton } from "../../atoms/ActionButton";

export interface EmptyStateProps {
 icon?: LucideIcon;
 title: string;
 description?: string;
 action?: {
  label: string;
  onClick: () => void;
 };
 className?: string;
}

export const EmptyState = ({
 icon: Icon,
 title,
 description,
 action,
 className = "",
}: EmptyStateProps) => {
 return (
  <div className={`text-center py-12 ${className}`}>
   {Icon && <Icon className="w-12 h-12 mx-auto text-gray-400 mb-4" />}

   <h3 className="text-lg font-medium text-gray-900 mb-2">{title}</h3>

   {description && (
    <p className="text-gray-600 mb-6 max-w-md mx-auto">{description}</p>
   )}

   {action && (
    <ActionButton onClick={action.onClick}>{action.label}</ActionButton>
   )}
  </div>
 );
};
