import { LucideIcon } from "lucide-react";
import { ActionButton } from "@/components/atoms";

export interface ActionItem {
 label: string;
 onClick: () => void;
 variant?:
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost"
  | "link";
 icon?: LucideIcon;
 disabled?: boolean;
}

export interface ActionButtonGroupProps {
 actions: ActionItem[];
 size?: "default" | "sm" | "lg";
 orientation?: "horizontal" | "vertical";
 className?: string;
}

export const ActionButtonGroup = ({
 actions,
 size = "sm",
 orientation = "horizontal",
 className = "",
}: ActionButtonGroupProps) => {
 const containerClass =
  orientation === "horizontal" ? "flex gap-2" : "flex flex-col gap-2";

 return (
  <div className={`${containerClass} ${className}`}>
   {actions.map((action, index) => (
    <ActionButton
     key={index}
     onClick={action.onClick}
     variant={action.variant || "outline"}
     size={size}
     icon={action.icon}
     disabled={action.disabled}
    >
     {action.label}
    </ActionButton>
   ))}
  </div>
 );
};
