import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/shared/lib/utils";
import { useAuth } from "@/app/providers/AuthProvider";
import { useMobile } from "@/shared/hooks/ui/useMobile";
import { Button } from "@/shared/ui";
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
 Menu,
 X,
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
 const location = useLocation();
 const isMobile = useMobile();
 const sidebarRef = useRef<HTMLElement>(null);
 const skipLinkRef = useRef<HTMLAnchorElement>(null);

 const [isCollapsed, setIsCollapsed] = useState(isMobile);
 const [hasInitialized, setHasInitialized] = useState(false);
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
   setHasInitialized(true);
   return;
  }

  if (isMobile) {
   setIsCollapsed(true);
  } else {
   setIsCollapsed(false);
  }

  const timer = setTimeout(() => {
   setHasInitialized(true);
  }, 50);

  return () => clearTimeout(timer);
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

 const isLinkActive = useCallback(
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

 const handleSkipToContent = useCallback(() => {
  const mainContent =
   document.querySelector("main") || document.querySelector('[role="main"]');
  if (mainContent) {
   (mainContent as HTMLElement).focus();
  }
 }, []);

 const glassStyles = cn(
  "bg-white/90 dark:bg-gray-900/85",
  DASHBOARD_SIDEBAR.BLUR_INTENSITY,
  "border border-white/20 dark:border-gray-700/30",
  "shadow-xl shadow-black/5 dark:shadow-black/20",
  !reducedMotion && "transition-all duration-300 ease-in-out"
 );

 const focusStyles = isKeyboardNavigating
  ? "focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:outline-none"
  : "focus:outline-none";

 if (isMobile) {
  return (
   <>
    <a
     ref={skipLinkRef}
     href="#main-content"
     onClick={handleSkipToContent}
     className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-primary text-primary-foreground px-4 py-2 rounded-md"
    >
     Skip to main content
    </a>

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
     role="navigation"
     aria-label="Dashboard navigation"
     onKeyDown={handleKeyDown}
    >
     <Button
      variant="default"
      size="sm"
      onClick={handleToggle}
      className={cn(
       "absolute -right-[40px] top-[50px] z-50 rounded-r-full w-10 h-10 flex items-center justify-center pr-4 pl-2",
       "bg-primary text-primary-foreground shadow-lg",
       focusStyles
      )}
      aria-label={isCollapsed ? "Open sidebar menu" : "Close sidebar menu"}
      aria-expanded={!isCollapsed}
      aria-controls="sidebar-content"
     >
      {isCollapsed ? (
       <Menu className="w-5 h-5" aria-hidden="true" />
      ) : (
       <X className="w-5 h-5" aria-hidden="true" />
      )}
     </Button>

     <div
      id="sidebar-content"
      className="h-full flex flex-col p-6 overflow-y-auto"
     >
      <div className="flex mb-6 flex-col items-center">
       <div className="w-12 h-12 rounded-full bg-primary/20 dark:bg-primary/30 flex items-center justify-center mb-2 border border-primary/30">
        <User className="h-6 w-6 text-primary" aria-hidden="true" />
       </div>

       <div className="text-center">
        <h2 className="font-medium capitalize text-sm text-foreground">
         {userType}
        </h2>
        {user?.email && (
         <p className="text-xs text-muted-foreground truncate max-w-48">
          {user.email}
         </p>
        )}
       </div>
      </div>

      <nav className="flex-1" role="navigation" aria-label="Main navigation">
       <ul className="space-y-1">
        {navigationItems.map((item) => {
         const IconComponent = iconMap[item.icon];
         const isActive = isLinkActive(item.to);

         return (
          <li key={item.id}>
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
        })}
       </ul>
      </nav>
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
   role="navigation"
   aria-label="Dashboard navigation"
  >
   <div className="flex flex-col p-6">
    <div className="flex mb-6 flex-col items-center">
     <div className="w-12 h-12 rounded-full bg-primary/20 dark:bg-primary/30 flex items-center justify-center mb-2 border border-primary/30">
      <User className="h-6 w-6 text-primary" aria-hidden="true" />
     </div>

     <div className="text-center">
      <h2 className="font-medium capitalize text-sm text-foreground">
       {userType}
      </h2>
      {user?.email && (
       <p className="text-xs text-muted-foreground truncate max-w-48">
        {user.email}
       </p>
      )}
     </div>
    </div>

    <nav className="flex-1" role="navigation" aria-label="Main navigation">
     <ul className="space-y-1">
      {navigationItems.map((item) => {
       const IconComponent = iconMap[item.icon];
       const isActive = isLinkActive(item.to);

       return (
        <li key={item.id}>
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
      })}
     </ul>
    </nav>
   </div>
  </aside>
 );
};

export default DashboardSidebar;
