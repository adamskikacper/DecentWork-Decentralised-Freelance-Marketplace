import React from "react";

export interface CategoryTagProps {
 category: string;
 isSelected?: boolean;
 onClick?: () => void;
 variant?: "default" | "filter" | "display";
 className?: string;
}

export const CategoryTag = ({
 category,
 isSelected = false,
 onClick,
 variant = "default",
 className = "",
}: CategoryTagProps) => {
 const getVariantClasses = () => {
  if (variant === "display") {
   return "bg-gray-100 text-gray-700 cursor-default";
  }

  if (variant === "filter") {
   return isSelected
    ? "bg-primary text-white"
    : "bg-gray-100 text-gray-700 hover:bg-gray-200";
  }

  return isSelected
   ? "bg-primary text-primary-foreground"
   : "bg-secondary/50 text-foreground hover:bg-secondary";
 };

 const Component = onClick ? "button" : "span";

 return (
  <Component
   onClick={onClick}
   className={`px-3 py-1 text-sm rounded-full transition-colors ${getVariantClasses()} ${className}`}
  >
   {category}
  </Component>
 );
};
