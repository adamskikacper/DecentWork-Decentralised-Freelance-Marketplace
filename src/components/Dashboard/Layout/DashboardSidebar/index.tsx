import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/useAuth";
import { useIsMobile } from "@/hooks/useMobile";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
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
 X,
} from "lucide-react";
import { Button } from "@/components/UI/Button";

export interface DashboardSidebarProps {
 className?: string;
}

export const DashboardSidebar = ({ className }: DashboardSidebarProps) => {
 const { user, userType } = useAuth();
 const location = useLocation();
 const isMobile = useIsMobile();

 // Only allow collapsing on mobile
 const [isCollapsed, setIsCollapsed] = useState(isMobile); // Only collapsed on mobile
 const [hasInitialized, setHasInitialized] = useState(false); // Track if initial setup is complete

 // Auto-collapse on mobile, always expanded on desktop
 useEffect(() => {
  if (isMobile) {
   setIsCollapsed(true); // Start collapsed on mobile
  } else {
   setIsCollapsed(false); // Always expanded on desktop - never collapsed
  }

  // Mark as initialized after a brief delay to prevent flicker
  const timer = setTimeout(() => {
   setHasInitialized(true);
  }, 50);

  return () => clearTimeout(timer);
 }, [isMobile]);

 const isClient = userType === "client";

 const navigationItems = [
  {
   to: isClient ? "/dashboard/home" : "/dashboard/freelancer",
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
     ]
   : [
      {
       to: "/dashboard/freelancer/find-jobs",
       icon: Search,
       label: "Find Jobs",
      },
     ]),
  {
   to: isClient ? "/dashboard/jobs" : "/dashboard/freelancer/jobs",
   icon: Briefcase,
   label: "Jobs",
  },
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
  // Only allow toggle on mobile
  if (isMobile) {
   setIsCollapsed(!isCollapsed);

   // Dispatch custom event to notify layout of sidebar state change
   const newCollapsedState = !isCollapsed;
   window.dispatchEvent(
    new CustomEvent("sidebar-toggle", {
     detail: { isCollapsed: newCollapsedState },
    })
   );
  }
 };

 const handleLinkClick = () => {
  // Auto-close on mobile after navigation
  if (isMobile) {
   setIsCollapsed(true);
  }
 };

 // Animation variants
 const sidebarVariants = {
  expanded: {
   width: isMobile ? 80 : 280, // Small sidebar on mobile, full on desktop
   x: 0,
   transition: hasInitialized
    ? { type: "spring", stiffness: 300, damping: 30 }
    : { duration: 0 }, // No animation on initial load
  },
  collapsed: {
   width: isMobile ? 80 : 280, // Keep same width but translate off-screen
   x: "-100%", // Move sidebar completely off-screen
   transition: hasInitialized
    ? { type: "spring", stiffness: 300, damping: 30 }
    : { duration: 0 }, // No animation on initial load
  },
 };

 const contentVariants = {
  visible: {
   opacity: 1,
   transition: { delay: 0.1, duration: 0.2 },
  },
  hidden: {
   opacity: 0,
   transition: { duration: 0.1 },
  },
 };

 // Show labels only on desktop or when mobile is expanded (small sidebar)
 const showLabels = !isMobile;

 return (
  <>
   {/* Sidebar */}
   {isMobile ? (
    // Mobile Sidebar
    <motion.aside
     variants={sidebarVariants}
     animate={isCollapsed ? "collapsed" : "expanded"}
     initial="collapsed"
     className={cn(
      "fixed top-24 left-0 h-[calc(100vh-6rem)] bg-background border-r z-40",
      className
     )}
    >
     {/* Toggle Button */}
     <Button
      variant="ghost"
      size="sm"
      onClick={handleToggle}
      className="absolute -right-6 top-4 z-50 bg-background border shadow-md"
     >
      {isCollapsed ? (
       <ChevronRight className="h-4 w-4" />
      ) : (
       <ChevronLeft className="h-4 w-4" />
      )}
     </Button>

     <div className="h-full flex flex-col p-4 overflow-y-auto">
      {/* User Profile Section */}
      <div className={cn("flex mb-6 flex-col items-center")}>
       <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
        <User className="h-6 w-6 text-primary" />
       </div>

       <AnimatePresence mode="wait">
        {showLabels && (
         <motion.div
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="text-center"
         >
          <h3 className="font-medium capitalize text-sm">{userType}</h3>
          {user?.email && (
           <p className="text-xs text-muted-foreground truncate max-w-48">
            {user.email}
           </p>
          )}
         </motion.div>
        )}
       </AnimatePresence>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1">
       <ul className="space-y-1">
        {navigationItems.map((item, index) => {
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
             "justify-center" // Mobile: center icons
            )}
           >
            <div className="flex items-center justify-center shrink-0 w-full">
             <IconComponent className="h-4 w-4" />
            </div>

            {/* Tooltip */}
            {!isCollapsed && (
             <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 px-3 py-2 bg-popover text-popover-foreground text-sm rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50 border">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 w-2 h-2 bg-popover border-l border-t rotate-45"></div>
              {item.label}
             </div>
            )}
           </Link>
          </li>
         );
        })}
       </ul>
      </nav>
     </div>
    </motion.aside>
   ) : (
    // Desktop Sidebar
    <aside
     className={cn(
      "fixed top-24 left-0 w-[280px] h-[calc(100vh-6rem)] bg-background border-r z-40",
      className
     )}
    >
     <div className="h-full flex flex-col p-4 overflow-y-auto">
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
