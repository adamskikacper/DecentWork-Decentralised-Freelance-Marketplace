import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "@/app/providers/AuthProvider";
import { useMobile } from "@/shared/hooks";
import { ActionButton } from "@/components/atoms";
import { UserCard } from "@/components/molecules";
import { DASHBOARD_LINKS } from "@/shared/constants";
import {
 User,
 PlusCircle,
 Briefcase,
 Search,
 MessageCircle,
 Home as HomeIcon,
 ChevronLeft,
 ChevronRight,
 FileText,
 X,
} from "lucide-react";

export interface NavigationItem {
 to: string;
 icon: React.ComponentType<{ className?: string }>;
 label: string;
}

export interface NavigationSidebarProps {
 className?: string;
 variant?: "desktop" | "mobile";
 isOpen?: boolean;
 onToggle?: () => void;
}

export const NavigationSidebar: React.FC<NavigationSidebarProps> = ({
 className = "",
 variant = "desktop",
 isOpen = true,
 onToggle,
}) => {
 const { user, userType } = useAuth();
 const location = useLocation();
 const isMobile = useMobile();

 const [isCollapsed, setIsCollapsed] = useState(isMobile);

 useEffect(() => {
  if (variant === "desktop") {
   setIsCollapsed(isMobile);
  }
 }, [isMobile, variant]);

 const getNavigationItems = (): NavigationItem[] => {
  const baseItems: NavigationItem[] = [
   {
    to: "/dashboard/home",
    icon: HomeIcon,
    label: "Dashboard",
   },
  ];

  const userSpecificItems: NavigationItem[] =
   userType === "client"
    ? [
       {
        to: "/dashboard/freelancers",
        icon: User,
        label: "Freelancers",
       },
       {
        to: "/dashboard/post-job",
        icon: PlusCircle,
        label: "Post a Job",
       },
       {
        to: "/dashboard/jobs",
        icon: Briefcase,
        label: "Jobs",
       },
      ]
    : [
       {
        to: DASHBOARD_LINKS.FIND_JOBS,
        icon: Search,
        label: "Find Jobs",
       },
       {
        to: "/dashboard/my-jobs",
        icon: FileText,
        label: "My Jobs",
       },
      ];

  const commonItems: NavigationItem[] = [
   {
    to: "/dashboard/messages",
    icon: MessageCircle,
    label: "Messages",
   },
   {
    to: "/dashboard/profile",
    icon: User,
    label: "Profile",
   },
  ];

  return [...baseItems, ...userSpecificItems, ...commonItems];
 };

 const isLinkActive = (linkPath: string): boolean => {
  return (
   location.pathname === linkPath ||
   location.pathname.startsWith(linkPath + "/")
  );
 };

 const navigationItems = getNavigationItems();

 if (variant === "mobile") {
  return (
   <MobileSidebar
    items={navigationItems}
    user={user}
    isOpen={isOpen}
    onToggle={onToggle}
    isLinkActive={isLinkActive}
    className={className}
   />
  );
 }

 return (
  <DesktopSidebar
   items={navigationItems}
   user={user}
   isCollapsed={isCollapsed}
   onToggle={() => setIsCollapsed(!isCollapsed)}
   isLinkActive={isLinkActive}
   className={className}
  />
 );
};

interface DesktopSidebarProps {
 items: NavigationItem[];
 user: any;
 isCollapsed: boolean;
 onToggle: () => void;
 isLinkActive: (path: string) => boolean;
 className: string;
}

const DesktopSidebar: React.FC<DesktopSidebarProps> = ({
 items,
 user,
 isCollapsed,
 onToggle,
 isLinkActive,
 className,
}) => {
 return (
  <div
   className={`
        fixed left-0 top-0 h-full bg-white border-r border-gray-200 
        transition-all duration-300 z-40
        ${isCollapsed ? "w-16" : "w-64"}
        ${className}
      `}
  >
   {/* Header */}
   <div className="p-4 border-b border-gray-200">
    <div className="flex items-center justify-between">
     {!isCollapsed && (
      <h2 className="text-lg font-semibold text-gray-900">DecentWork</h2>
     )}
     <ActionButton
      onClick={onToggle}
      variant="ghost"
      size="sm"
      icon={isCollapsed ? ChevronRight : ChevronLeft}
     >
      {isCollapsed ? "" : ""}
     </ActionButton>
    </div>
   </div>

   {/* User Profile */}
   {!isCollapsed && (
    <div className="p-4 border-b border-gray-200">
     <UserCard
      name={user?.name || "User"}
      title={user?.title || "Member"}
      variant="compact"
     />
    </div>
   )}

   {/* Navigation */}
   <nav className="flex-1 p-4">
    <ul className="space-y-2">
     {items.map((item) => {
      const Icon = item.icon;
      const active = isLinkActive(item.to);

      return (
       <li key={item.to}>
        <Link
         to={item.to}
         className={`
                    flex items-center gap-3 px-3 py-2 rounded-lg transition-colors
                    ${
                     active
                      ? "bg-primary text-primary-foreground"
                      : "text-gray-700 hover:bg-gray-100"
                    }
                    ${isCollapsed ? "justify-center" : ""}
                  `}
         title={isCollapsed ? item.label : undefined}
        >
         <Icon className="w-5 h-5 flex-shrink-0" />
         {!isCollapsed && <span className="font-medium">{item.label}</span>}
        </Link>
       </li>
      );
     })}
    </ul>
   </nav>
  </div>
 );
};

interface MobileSidebarProps {
 items: NavigationItem[];
 user: any;
 isOpen: boolean;
 onToggle?: () => void;
 isLinkActive: (path: string) => boolean;
 className: string;
}

const MobileSidebar: React.FC<MobileSidebarProps> = ({
 items,
 user,
 isOpen,
 onToggle,
 isLinkActive,
 className,
}) => {
 return (
  <>
   {/* Overlay */}
   {isOpen && (
    <div
     className="fixed inset-0 bg-black bg-opacity-50 z-40"
     onClick={onToggle}
    />
   )}

   {/* Sidebar */}
   <div
    className={`
          fixed left-0 top-0 h-full bg-white w-64 transform transition-transform z-50
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          ${className}
        `}
   >
    {/* Header */}
    <div className="p-4 border-b border-gray-200">
     <div className="flex items-center justify-between">
      <h2 className="text-lg font-semibold text-gray-900">DecentWork</h2>
      <ActionButton onClick={onToggle} variant="ghost" size="sm" icon={X}>
       {isCollapsed ? "Close" : "Open"}
      </ActionButton>
     </div>
    </div>

    {/* User Profile */}
    <div className="p-4 border-b border-gray-200">
     <UserCard
      name={user?.name || "User"}
      title={user?.title || "Member"}
      variant="detailed"
     />
    </div>

    {/* Navigation */}
    <nav className="flex-1 p-4">
     <ul className="space-y-2">
      {items.map((item) => {
       const Icon = item.icon;
       const active = isLinkActive(item.to);

       return (
        <li key={item.to}>
         <Link
          to={item.to}
          onClick={onToggle}
          className={`
                      flex items-center gap-3 px-3 py-2 rounded-lg transition-colors
                      ${
                       active
                        ? "bg-primary text-primary-foreground"
                        : "text-gray-700 hover:bg-gray-100"
                      }
                    `}
         >
          <Icon className="w-5 h-5 flex-shrink-0" />
          <span className="font-medium">{item.label}</span>
         </Link>
        </li>
       );
      })}
     </ul>
    </nav>
   </div>
  </>
 );
};
