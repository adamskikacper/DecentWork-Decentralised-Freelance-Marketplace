import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/useAuth";
import { useIsMobile } from "@/hooks/useMobile";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
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
} from "lucide-react";
import { Button } from "@/components/UI/Button";

export interface DashboardSidebarProps {
 className?: string;
 insideContainer?: boolean;
}

export const DashboardSidebar = ({
 className,
 insideContainer = false,
}: DashboardSidebarProps) => {
 const { user, userType } = useAuth();
 const location = useLocation();
 const isMobile = useIsMobile();

 const [isCollapsed, setIsCollapsed] = useState(isMobile);
 const [, setHasInitialized] = useState(false);

 useEffect(() => {
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

 const isClient = userType === "client";

 const navigationItems = [
  {
   to: "/dashboard/home",
   icon: HomeIcon,
   label: "Dashboard",
  },
  ...(isClient
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
       to: "/dashboard/find-jobs",
       icon: Search,
       label: "Find Jobs",
      },
      {
       to: "/dashboard/my-jobs",
       icon: FileText,
       label: "My Jobs",
      },
     ]),
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

 const isLinkActive = (linkPath: string) => {
  const cleanPath = linkPath.startsWith("/") ? linkPath.substring(1) : linkPath;
  return location.pathname.includes(cleanPath);
 };

 const handleToggle = () => {
  if (isMobile) {
   setIsCollapsed(!isCollapsed);

   const newCollapsedState = !isCollapsed;
   window.dispatchEvent(
    new CustomEvent("sidebar-toggle", {
     detail: { isCollapsed: newCollapsedState },
    })
   );
  }
 };

 const handleLinkClick = () => {};

 return (
  <>
   {/* Sidebar */}
   {isMobile ? (
    <aside
     className={cn(
      "fixed top-0 left-0 mt-16 h-[calc(100vh-4rem)] glass-card rounded-b-xl z-40 w-[280px] transition-transform duration-300 ease-in-out",
      isCollapsed ? "-translate-x-full" : "translate-x-0",
      className
     )}
    >
     {/* Toggle Button */}
     <Button
      variant="default"
      size="sm"
      onClick={handleToggle}
      className="absolute -right-[40px] top-[50px] z-50 rounded-r-full w-10 h-10 flex items-center justify-center pr-4 pl-2 bg-primary !bg-opacity-100"
     >
      {isCollapsed ? (
       <ChevronRight className="w-12 h-12" />
      ) : (
       <ChevronLeft className="w-12 h-12" />
      )}
     </Button>

     <div className="h-full flex flex-col p-6 overflow-y-auto">
      {/* User Profile Section */}
      <div className={cn("flex mb-6 flex-col items-center")}>
       <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
        <User className="h-6 w-6 text-primary" />
       </div>

       <div className="text-center">
        <h3 className="font-medium capitalize text-sm">{userType}</h3>
        {user?.email && (
         <p className="text-xs text-muted-foreground truncate max-w-48">
          {user.email}
         </p>
        )}
       </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1">
       <ul className="space-y-1">
        {navigationItems.map((item) => {
         const IconComponent = item.icon;
         const isActive = isLinkActive(item.to);

         return (
          <li key={item.to}>
           <Link
            to={item.to}
            onClick={handleLinkClick}
            className={cn(
             "w-full flex items-center text-sm font-medium rounded-lg p-3 transition-colors relative group",
             isActive
              ? "bg-primary/10 text-primary"
              : "text-foreground hover:bg-secondary",
             "gap-3"
            )}
           >
            <div className="flex items-center justify-center shrink-0">
             <IconComponent className="h-4 w-4" />
            </div>
            <span className="truncate">{item.label}</span>
           </Link>
          </li>
         );
        })}
       </ul>
      </nav>
     </div>
    </aside>
   ) : (
    <aside
     className={cn(
      "w-[280px] glass-card rounded-xl z-40 flex-shrink-0 h-fit",
      insideContainer ? "sticky top-28" : "fixed top-24 left-0",
      className
     )}
    >
     <div className="flex flex-col p-6">
      {/* User Profile Section */}
      <div className="flex mb-6 flex-col items-center">
       <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
        <User className="h-6 w-6 text-primary" />
       </div>

       <div className="text-center">
        <h3 className="font-medium capitalize text-sm">{userType}</h3>
        {user?.email && (
         <p className="text-xs text-muted-foreground truncate max-w-48">
          {user.email}
         </p>
        )}
       </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1">
       <ul className="space-y-1">
        {navigationItems.map((item) => {
         const IconComponent = item.icon;
         const isActive = isLinkActive(item.to);

         return (
          <li key={item.to}>
           <Link
            to={item.to}
            className={cn(
             "w-full flex items-center text-sm font-medium rounded-lg p-3 transition-colors gap-3",
             isActive
              ? "bg-primary/10 text-primary"
              : "text-foreground hover:bg-secondary"
            )}
           >
            <div className="flex items-center justify-center shrink-0">
             <IconComponent className="h-4 w-4" />
            </div>
            <span className="truncate">{item.label}</span>
           </Link>
          </li>
         );
        })}
       </ul>
      </nav>
     </div>
    </aside>
   )}
  </>
 );
};
