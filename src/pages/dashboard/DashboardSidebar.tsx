import {
 User,
 Briefcase,
 PlusCircle,
 Search,
 MessageCircle,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface DashboardSidebarProps {
 activeSection: string;
 onSectionChange: (section: string) => void;
 userEmail: string;
 userType: "client" | "freelancer";
}

const DashboardSidebar = ({
 activeSection,
 onSectionChange,
 userEmail,
 userType,
}: DashboardSidebarProps) => {
 const isClient = userType === "client";

 return (
  <div className="w-full lg:w-64 shrink-0">
   <div className="sticky top-24 glass-card rounded-xl p-6 fade-in">
    <div className="flex flex-col items-center mb-6">
     <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-3">
      <User className="h-6 w-6" />
     </div>
     <h3 className="text-lg font-semibold">
      {isClient ? "Client Dashboard" : "Freelancer Dashboard"}
     </h3>
     <p className="text-sm text-muted-foreground">{userEmail}</p>
    </div>

    <div className="space-y-1 mb-6">
     {/* Dashboard - Both user types */}
     <Link
      to="/dashboard"
      onClick={() => onSectionChange("dashboard")}
      className={`w-full flex items-center gap-3 text-sm font-medium rounded-lg p-3 transition-colors ${
       activeSection === "dashboard"
        ? "bg-primary/10 text-primary"
        : "text-foreground hover:bg-secondary"
      }`}
     >
      <svg
       width="16"
       height="16"
       viewBox="0 0 24 24"
       fill="none"
       xmlns="http://www.w3.org/2000/svg"
      >
       <path
        d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
       />
       <path
        d="M9 22V12H15V22"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
       />
      </svg>
      <span>Dashboard</span>
     </Link>

     {/* Client-specific menu items */}
     {isClient && (
      <>
       <Link
        to="/dashboard/freelancers"
        onClick={() => onSectionChange("freelancers")}
        className={`w-full flex items-center gap-3 text-sm font-medium rounded-lg p-3 transition-colors ${
         activeSection === "freelancers"
          ? "bg-primary/10 text-primary"
          : "text-foreground hover:bg-secondary"
        }`}
       >
        <User className="h-4 w-4" />
        <span>Freelancers</span>
       </Link>

       <Link
        to="/dashboard/post-job"
        onClick={() => onSectionChange("post-job")}
        className={`w-full flex items-center gap-3 text-sm font-medium rounded-lg p-3 transition-colors ${
         activeSection === "post-job"
          ? "bg-primary/10 text-primary"
          : "text-foreground hover:bg-secondary"
        }`}
       >
        <PlusCircle className="h-4 w-4" />
        <span>Post a Job</span>
       </Link>
      </>
     )}

     {/* Freelancer-specific menu items */}
     {!isClient && (
      <Link
       to="/dashboard/find-jobs"
       onClick={() => onSectionChange("findJobs")}
       className={`w-full flex items-center gap-3 text-sm font-medium rounded-lg p-3 transition-colors ${
        activeSection === "findJobs"
         ? "bg-primary/10 text-primary"
         : "text-foreground hover:bg-secondary"
       }`}
      >
       <Search className="h-4 w-4" />
       <span>Find Jobs</span>
      </Link>
     )}

     {/* Projects/Contracts - Both user types (with different label) */}
     <Link
      to="/dashboard/projects"
      onClick={() => onSectionChange("projects")}
      className={`w-full flex items-center gap-3 text-sm font-medium rounded-lg p-3 transition-colors ${
       activeSection === "projects"
        ? "bg-primary/10 text-primary"
        : "text-foreground hover:bg-secondary"
      }`}
     >
      <Briefcase className="h-4 w-4" />
      <span>Projects</span>
     </Link>

     {/* Messages - Both user types */}
     <Link
      to="/dashboard/messages"
      onClick={() => onSectionChange("messages")}
      className={`w-full flex items-center gap-3 text-sm font-medium rounded-lg p-3 transition-colors ${
       activeSection === "messages"
        ? "bg-primary/10 text-primary"
        : "text-foreground hover:bg-secondary"
      }`}
     >
      <MessageCircle className="h-4 w-4" />
      <span>Messages</span>
     </Link>

     {/* Profile - Both user types */}
     <Link
      to="/dashboard/profile"
      onClick={() => onSectionChange("profile")}
      className={`w-full flex items-center gap-3 text-sm font-medium rounded-lg p-3 transition-colors ${
       activeSection === "profile"
        ? "bg-primary/10 text-primary"
        : "text-foreground hover:bg-secondary"
      }`}
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
