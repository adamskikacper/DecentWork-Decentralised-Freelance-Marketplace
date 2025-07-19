import React, { useState, useEffect, useRef, useCallback } from "react";
import { cn } from "@/shared/lib/utils";
import { useAuth } from "@/app/providers/AuthProvider";
import { useMobile } from "@/shared/hooks/ui/useMobile";
import {
 DASHBOARD_LINKS,
 DASHBOARD_SIDEBAR,
 USER_TYPES,
} from "@/shared/constants/index";
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
import {
 SidebarNav,
 SidebarUserPanel,
 SidebarToggleButton,
} from "./components";

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

const iconMap: IconMapType = {
 Home,
 Briefcase,
 MessageSquare,
 User,
 Settings,
 Search,
 FileText,
 PlusCircle,
};

export interface DashboardSidebarProps {
 className?: string;
 insideContainer?: boolean;
 reducedMotion?: boolean;
}

export const DashboardSidebar = ({
 className,
 insideContainer = false,
 reducedMotion = false,
}: DashboardSidebarProps) => {
 const { user, userType } = useAuth();
 const isMobile = useMobile();
 const sidebarRef = useRef<HTMLElement>(null);
 const [isCollapsed, setIsCollapsed] = useState(isMobile);
 const [isKeyboardNavigating, setIsKeyboardNavigating] = useState(false);
 const isClient = userType === USER_TYPES.CLIENT;

 useEffect(() => {
  const handleKeyDown = (event: KeyboardEvent) => {
   if (event.key === "Tab") {
    setIsKeyboardNavigating(true);
   }
  };

  const handleMouseDown = () => {
   setIsKeyboardNavigating(false);
  };

  document.addEventListener("keydown", handleKeyDown);
  document.addEventListener("mousedown", handleMouseDown);

  return () => {
   document.removeEventListener("keydown", handleKeyDown);
   document.removeEventListener("mousedown", handleMouseDown);
  };
 }, []);

 useEffect(() => {
  const preferReducedMotion = window.matchMedia(
   "(prefers-reduced-motion: reduce)"
  ).matches;
  if (preferReducedMotion) {
   return;
  }

  if (isMobile) {
   setIsCollapsed(true);
  } else {
   setIsCollapsed(false);
  }
 }, [isMobile]);

 const navigationItems = [
  {
   id: "dashboard",
   to: DASHBOARD_LINKS.HOME,
   icon: "Home",
   label: "Dashboard",
   ariaLabel: "Go to dashboard overview",
  },
  ...(isClient
   ? [
      {
       id: "freelancers",
       to: DASHBOARD_LINKS.FREELANCERS,
       icon: "User",
       label: "Freelancers",
       ariaLabel: "Browse available freelancers",
      },
      {
       id: "post-job",
       to: DASHBOARD_LINKS.POST_JOB,
       icon: "PlusCircle",
       label: "Post a Job",
       ariaLabel: "Create a new job posting",
      },
      {
       id: "jobs",
       to: DASHBOARD_LINKS.JOBS,
       icon: "Briefcase",
       label: "My Jobs",
       ariaLabel: "View your posted jobs",
      },
     ]
   : [
      {
       id: "find-jobs",
       to: DASHBOARD_LINKS.FIND_JOBS,
       icon: "Search",
       label: "Find Jobs",
       ariaLabel: "Search for available jobs",
      },
      {
       id: "my-jobs",
       to: DASHBOARD_LINKS.MY_JOBS,
       icon: "FileText",
       label: "My Jobs",
       ariaLabel: "View your current jobs",
      },
     ]),
  {
   id: "messages",
   to: DASHBOARD_LINKS.MESSAGES,
   icon: "MessageSquare",
   label: "Messages",
   ariaLabel: "View your messages and conversations",
  },
  {
   id: "profile",
   to: DASHBOARD_LINKS.PROFILE,
   icon: "User",
   label: "Profile",
   ariaLabel: "Manage your profile settings",
  },
 ];

 const handleToggle = useCallback(() => {
  if (isMobile) {
   setIsCollapsed(!isCollapsed);

   const newCollapsedState = !isCollapsed;
   window.dispatchEvent(
    new CustomEvent("sidebar-toggle", {
     detail: { isCollapsed: newCollapsedState },
    })
   );

   if (!newCollapsedState && sidebarRef.current) {
    const firstFocusableElement = sidebarRef.current.querySelector(
     "a[href], button:not([disabled])"
    ) as HTMLElement;
    firstFocusableElement?.focus();
   }
  }
 }, [isMobile, isCollapsed]);

 const handleKeyDown = useCallback(
  (event: React.KeyboardEvent) => {
   if (event.key === "Escape" && isMobile && !isCollapsed) {
    setIsCollapsed(true);
   }
  },
  [isMobile, isCollapsed]
 );

 const glassStyles = cn(
  "bg-white/90 dark:bg-black/85",
  DASHBOARD_SIDEBAR.BLUR_INTENSITY,
  "border border-white/20 dark:border-gray-700/30",
  "shadow-xl shadow-black/5 dark:shadow-black/20",
  !reducedMotion && "transition-all duration-300 ease-in-out"
 );

 if (isMobile) {
  return (
   <>
    {!isCollapsed && (
     <div
      className="fixed inset-0 bg-black/50 z-40"
      onClick={handleToggle}
      aria-hidden="true"
     />
    )}

    <aside
     ref={sidebarRef}
     className={cn(
      "fixed top-0 left-0 mt-16 h-[calc(100vh-4rem)] z-50 w-[280px]",
      glassStyles,
      "rounded-r-xl",
      !reducedMotion && "transition-transform duration-300 ease-in-out",
      isCollapsed ? "-translate-x-full" : "translate-x-0",
      className
     )}
     aria-label="Dashboard navigation"
     onKeyDown={handleKeyDown}
    >
     <SidebarToggleButton
      isCollapsed={isCollapsed}
      handleToggle={handleToggle}
      isKeyboardNavigating={isKeyboardNavigating}
     />

     <div
      id="sidebar-content"
      className="h-full flex flex-col p-6 overflow-y-auto"
     >
      <SidebarUserPanel userType={userType} userEmail={user?.email} />
      <SidebarNav
       navigationItems={navigationItems}
       iconMap={iconMap}
       isKeyboardNavigating={isKeyboardNavigating}
      />
     </div>
    </aside>
   </>
  );
 }

 return (
  <aside
   ref={sidebarRef}
   className={cn(
    "w-[280px] z-40 flex-shrink-0 h-fit",
    glassStyles,
    "rounded-xl",
    insideContainer ? "sticky top-28" : "fixed top-24 left-0",
    className
   )}
   aria-label="Dashboard navigation"
  >
   <div className="flex flex-col p-6">
    <SidebarUserPanel userType={userType} userEmail={user?.email} />
    <SidebarNav
     navigationItems={navigationItems}
     iconMap={iconMap}
     isKeyboardNavigating={isKeyboardNavigating}
    />
   </div>
  </aside>
 );
};
