import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { cn } from "@/lib/utils";
import {
 User,
 Briefcase,
 PlusCircle,
 Search,
 MessageCircle,
 Home as HomeIcon,
} from "lucide-react";

export interface DashboardSidebarProps
 extends React.HTMLAttributes<HTMLDivElement> {
 /**
  * Custom user email to display
  */
 userEmail?: string;
 /**
  * Custom user type to display
  */
 userType?: "client" | "freelancer";
 /**
  * Active section to highlight in the sidebar
  */
 activeSection?: string;
 /**
  * Callback when a section is clicked
  */
 onSectionChange?: (section: string) => void;
}

/**
 * DashboardSidebar - Sidebar component for the dashboard
 * Shows different navigation options based on user type
 */
const DashboardSidebar = ({
 userEmail,
 userType: propUserType,
 activeSection: propActiveSection,
 onSectionChange: propOnSectionChange,
 className,
 ...props
}: DashboardSidebarProps) => {
 // Use props or get from auth context
 const { user, userType: contextUserType } = useAuth();
 const location = useLocation();

 // Derive active section from current path if not provided
 const path = location.pathname.split("/").filter(Boolean);
 const currentSection = path.length > 1 ? path[1] : "dashboard";

 // Use props or derived values
 const userType = propUserType || contextUserType;
 const activeSection = propActiveSection || currentSection;
 const email = userEmail || user?.email;

 // Default no-op function if not provided
 const onSectionChange = propOnSectionChange || (() => {});

 const isClient = userType === "client";

 // Helper function to determine if a link is active
 const isActive = (section: string) => activeSection === section;

 // Helper function to generate link class
 const getLinkClass = (section: string) => {
  return cn(
   "w-full flex items-center gap-3 text-sm font-medium rounded-lg p-3 transition-colors",
   isActive(section)
    ? "bg-primary/10 text-primary"
    : "text-foreground hover:bg-secondary"
  );
 };

 return (
  <div className={cn("w-full lg:w-64 shrink-0", className)} {...props}>
   <div className="sticky top-24 glass-card rounded-xl p-6 fade-in">
    <div className="flex flex-col items-center mb-6">
     <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-3">
      <User className="h-6 w-6" />
     </div>
     <h3 className="text-lg font-semibold">
      {isClient ? "Client Dashboard" : "Freelancer Dashboard"}
     </h3>
     {email && <p className="text-sm text-muted-foreground">{email}</p>}
    </div>

    <div className="space-y-1 mb-6">
     {/* Dashboard - Both user types */}
     <Link
      to="/dashboard"
      onClick={() => onSectionChange("dashboard")}
      className={getLinkClass("dashboard")}
     >
      <HomeIcon className="h-4 w-4" />
      <span>Dashboard</span>
     </Link>

     {/* Client-specific menu items */}
     {isClient && (
      <>
       <Link
        to="/dashboard/freelancers"
        onClick={() => onSectionChange("freelancers")}
        className={getLinkClass("freelancers")}
       >
        <User className="h-4 w-4" />
        <span>Freelancers</span>
       </Link>

       <Link
        to="/dashboard/post-job"
        onClick={() => onSectionChange("post-job")}
        className={getLinkClass("post-job")}
       >
        <PlusCircle className="h-4 w-4" />
        <span>Post a Job</span>
       </Link>
      </>
     )}

     {/* Freelancer-specific menu items */}
     {!isClient && (
      <Link
       to="/dashboard/freelancer/find-jobs"
       onClick={() => onSectionChange("find-jobs")}
       className={getLinkClass("find-jobs")}
      >
       <Search className="h-4 w-4" />
       <span>Find Jobs</span>
      </Link>
     )}

     {/* Jobs - Both user types */}
     <Link
      to={isClient ? "/dashboard/jobs" : "/dashboard/freelancer/jobs"}
      onClick={() => onSectionChange("jobs")}
      className={getLinkClass("jobs")}
     >
      <Briefcase className="h-4 w-4" />
      <span>Jobs</span>
     </Link>

     {/* Messages - Both user types */}
     <Link
      to="/dashboard/messages"
      onClick={() => onSectionChange("messages")}
      className={getLinkClass("messages")}
     >
      <MessageCircle className="h-4 w-4" />
      <span>Messages</span>
     </Link>

     {/* Profile - Both user types */}
     <Link
      to="/dashboard/profile"
      onClick={() => onSectionChange("profile")}
      className={getLinkClass("profile")}
     >
      <User className="h-4 w-4" />
      <span>Profile</span>
     </Link>
    </div>
   </div>
  </div>
 );
};

export default DashboardSidebar;
