import React from "react";
import { STATUS_BADGE_VARIANTS, STATUS_BADGE_COLORS } from "@/shared/constants";

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
 const getColorClasses = () => {
  switch (variant) {
   case STATUS_BADGE_VARIANTS.SUCCESS:
    return STATUS_BADGE_COLORS.SUCCESS;
   case STATUS_BADGE_VARIANTS.WARNING:
    return STATUS_BADGE_COLORS.WARNING;
   case STATUS_BADGE_VARIANTS.DANGER:
    return STATUS_BADGE_COLORS.DANGER;
   case STATUS_BADGE_VARIANTS.INFO:
    return STATUS_BADGE_COLORS.INFO;
   case STATUS_BADGE_VARIANTS.PENDING:
    return STATUS_BADGE_COLORS.PENDING;
   default:
    return STATUS_BADGE_COLORS.DEFAULT;
  }
 };

 return (
  <span
   className={`px-2 py-1 text-xs rounded-full flex items-center gap-1 w-fit ${getColorClasses()} ${className}`}
  >
   {icon && icon}
   <span className="capitalize">{status.replace("_", " ")}</span>
  </span>
 );
};
