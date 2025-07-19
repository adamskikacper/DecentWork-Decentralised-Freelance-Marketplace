import React from "react";
import { SidebarNavItem } from "../SidebarNavItem";
import { useLocation } from "react-router-dom";
import { DASHBOARD_LINKS } from "@/shared/constants";

export interface NavItem {
 id: string;
 to: string;
 icon: string;
 label: string;
 ariaLabel: string;
}

interface SidebarNavProps {
 navigationItems: NavItem[];
 iconMap: any;
 isKeyboardNavigating: boolean;
}

export const SidebarNav = ({
 navigationItems,
 iconMap,
 isKeyboardNavigating,
}: SidebarNavProps) => {
 const location = useLocation();

 const isLinkActive = React.useCallback(
  (linkPath: string) => {
   if (linkPath === DASHBOARD_LINKS.HOME) {
    return (
     location.pathname === DASHBOARD_LINKS.HOME ||
     location.pathname === DASHBOARD_LINKS.HOME + "/"
    );
   }
   return (
    location.pathname === linkPath || location.pathname === linkPath + "/"
   );
  },
  [location.pathname]
 );

 return (
  <nav className="flex-1" aria-label="Main navigation">
   <ul className="space-y-1">
    {navigationItems.map((item) => (
     <SidebarNavItem
      key={item.id}
      item={item}
      iconMap={iconMap}
      isActive={isLinkActive(item.to)}
      isKeyboardNavigating={isKeyboardNavigating}
     />
    ))}
   </ul>
  </nav>
 );
};
