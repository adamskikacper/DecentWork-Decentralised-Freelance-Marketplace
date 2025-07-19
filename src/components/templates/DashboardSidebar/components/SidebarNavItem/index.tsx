import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/shared/lib/utils";
import { NavItem } from "./SidebarNav";
import {
 Home,
 Briefcase,
 MessageSquare,
 User,
 Settings,
 Search,
 FileText,
 PlusCircle,
} from "lucide-react";

type IconMapType = {
 Home: typeof Home;
 Briefcase: typeof Briefcase;
 MessageSquare: typeof MessageSquare;
 User: typeof User;
 Settings: typeof Settings;
 Search: typeof Search;
 FileText: typeof FileText;
 PlusCircle: typeof PlusCircle;
};

interface SidebarNavItemProps {
 item: NavItem;
 iconMap: IconMapType;
 isActive: boolean;
 isKeyboardNavigating: boolean;
}

export const SidebarNavItem = ({
 item,
 iconMap,
 isActive,
 isKeyboardNavigating,
}: SidebarNavItemProps) => {
 const IconComponent = iconMap[item.icon as keyof IconMapType];

 const focusStyles = isKeyboardNavigating
  ? "focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:outline-none"
  : "focus:outline-none";

 return (
  <li>
   <Link
    to={item.to}
    className={cn(
     "w-full flex items-center text-sm font-medium rounded-lg p-3 gap-3",
     "relative group transition-colors duration-200",
     focusStyles,
     isActive
      ? "bg-primary/20 dark:bg-primary/25 text-primary border border-primary/30"
      : "text-foreground hover:bg-black/5 dark:hover:bg-white/5 hover:text-primary border border-transparent"
    )}
    aria-label={item.ariaLabel}
    aria-current={isActive ? "page" : undefined}
   >
    <div className="flex items-center justify-center shrink-0">
     <IconComponent className="h-4 w-4" aria-hidden="true" />
    </div>
    <span className="truncate">{item.label}</span>
    {isActive && <span className="sr-only">(current page)</span>}
   </Link>
  </li>
 );
};
