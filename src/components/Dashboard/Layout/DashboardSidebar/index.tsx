import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/useAuth";
import { Link, useLocation } from "react-router-dom";
import {
 User,
 PlusCircle,
 Briefcase,
 Search,
 MessageCircle,
 Home as HomeIcon,
} from "lucide-react";

export interface DashboardSidebarProps
 extends React.HTMLAttributes<HTMLDivElement> {
 userEmail?: string;
 userType?: "client" | "freelancer";
}

const DashboardSidebar = ({
 userEmail,
 userType: propUserType,
 className,
 ...props
}: DashboardSidebarProps) => {
 const { user, userType: contextUserType } = useAuth();
 const location = useLocation();
 const userType = propUserType || contextUserType;
 const email = userEmail || user?.email;
 const isClient = userType === "client";

 const isLinkActive = (linkPath: string) => {
  if (linkPath.startsWith("/")) {
   linkPath = linkPath.substring(1);
  }

  const currentPath = location.pathname;
  return currentPath.includes(linkPath);
 };

 const getLinkClass = (linkPath: string) => {
  return cn(
   "w-full flex items-center gap-3 text-sm font-medium rounded-lg p-3 transition-colors",
   isLinkActive(linkPath)
    ? "bg-primary/10 text-primary"
    : "text-foreground hover:bg-secondary"
  );
 };

 return (
  <div className={cn("w-full lg:w-64 shrink-0", className)} {...props}>
   <div className="sticky top-24 glass-card rounded-xl p-6 fade-in">
    <div className="flex flex-col items-center mb-6">
     <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-2">
      <User className="h-8 w-8 text-primary" />
     </div>
     <h3 className="font-medium">{userType}</h3>
     {email && <p className="text-sm text-muted-foreground">{email}</p>}
    </div>
    <div className="space-y-1 mb-6">
     <Link
      to={isClient ? "/dashboard/home" : "/dashboard/freelancer"}
      className={getLinkClass(
       isClient ? "/dashboard/home" : "/dashboard/freelancer"
      )}
     >
      <HomeIcon className="h-4 w-4" />
      <span>Dashboard</span>
     </Link>

     {isClient && (
      <>
       <Link
        to="/dashboard/freelancers"
        className={getLinkClass("/dashboard/freelancers")}
       >
        <User className="h-4 w-4" />
        <span>Freelancers</span>
       </Link>

       <Link
        to="/dashboard/post-job"
        className={getLinkClass("/dashboard/post-job")}
       >
        <PlusCircle className="h-4 w-4" />
        <span>Post a Job</span>
       </Link>
      </>
     )}

     {!isClient && (
      <Link
       to="/dashboard/freelancer/find-jobs"
       className={getLinkClass("/dashboard/freelancer/find-jobs")}
      >
       <Search className="h-4 w-4" />
       <span>Find Jobs</span>
      </Link>
     )}

     <Link
      to={isClient ? "/dashboard/jobs" : "/dashboard/freelancer/jobs"}
      className={getLinkClass(
       isClient ? "/dashboard/jobs" : "/dashboard/freelancer/jobs"
      )}
     >
      <Briefcase className="h-4 w-4" />
      <span>Jobs</span>
     </Link>

     <Link
      to="/dashboard/messages"
      className={getLinkClass("/dashboard/messages")}
     >
      <MessageCircle className="h-4 w-4" />
      <span>Messages</span>
     </Link>

     <Link
      to="/dashboard/profile"
      className={getLinkClass("/dashboard/profile")}
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
