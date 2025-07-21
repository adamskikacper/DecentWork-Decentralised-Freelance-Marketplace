import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/shared/lib/utils";
import { NavItem } from "../SidebarNav";
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

     focusStyles,
     isActive
      ? "bg-accent text-accent-foreground border-accent/20 shadow-sm"
      : "text-foreground hover:bg-gray-200 dark:hover:bg-gray-800 hover:border-accent/20 hover:shadow-sm border-transparent"
    )}
    aria-label={item.ariaLabel}
    aria-current={isActive ? "page" : undefined}
   >
    <div
     className={cn(
      "flex items-center justify-center shrink-0 transition-colors duration-200",
      isActive ? "text-accent-foreground" : "text-muted-foreground "
     )}
    >
     <IconComponent className="h-4 w-4" aria-hidden="true" />
    </div>
    <span className="truncate">{item.label}</span>
    {isActive && (
     <>
      <div className="w-1 h-1 rounded-full bg-accent-foreground ml-auto" />
      <span className="sr-only">(current page)</span>
     </>
    )}
   </Link>
  </li>
 );
};
