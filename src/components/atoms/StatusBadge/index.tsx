import React from "react";
import { Badge } from "@/shared/ui";
import { STATUS_BADGE_VARIANTS } from "@/shared/constants";
import { cn } from "@/shared/lib/utils";

type StatusVariant =
 (typeof STATUS_BADGE_VARIANTS)[keyof typeof STATUS_BADGE_VARIANTS];

export interface StatusBadgeProps {
 status: string;
 variant?: StatusVariant;
 icon?: React.ReactNode;
 className?: string;
}

export const StatusBadge = ({
 status,
 variant = STATUS_BADGE_VARIANTS.DEFAULT,
 icon,
 className = "",
}: StatusBadgeProps) => {
 const getVariantClasses = () => {
  switch (variant) {
   case STATUS_BADGE_VARIANTS.SUCCESS:
    return "bg-green-100 text-green-800 border-green-200 hover:bg-green-200";
   case STATUS_BADGE_VARIANTS.WARNING:
    return "bg-amber-100 text-amber-800 border-amber-200 hover:bg-amber-200";
   case STATUS_BADGE_VARIANTS.DANGER:
    return "bg-red-100 text-red-800 border-red-200 hover:bg-red-200";
   case STATUS_BADGE_VARIANTS.INFO:
    return "bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-200";
   case STATUS_BADGE_VARIANTS.PENDING:
    return "bg-purple-100 text-purple-800 border-purple-200 hover:bg-purple-200";
   default:
    return "";
  }
 };

 return (
  <Badge 
   variant={variant === STATUS_BADGE_VARIANTS.DEFAULT ? "secondary" : "outline"}
   className={cn(
    "flex items-center gap-1 w-fit",
    getVariantClasses(),
    className
   )}
  >
   {icon && icon}
   <span className="capitalize">{status.replace("_", " ")}</span>
  </Badge>
 );
};
