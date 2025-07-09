import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/shared/ui";
import {
 DashboardSection,
 DashboardStats,
 JobsList,
} from "@/features/dashboard";
import { FreelancerTable } from "@/features/dashboard/ui/client/components";
import { AvailableJobsList } from "@/features/jobs";
import { Breadcrumbs } from "@/shared/ui";
import { LoadingScreen } from "@/shared/ui";
import { useAuth } from "@/app/providers/AuthProvider";
import {
 FileText,
 User,
 DollarSign,
 Briefcase,
 Star,
 Clock,
} from "lucide-react";
import {
 useFetchStats,
 useFetchActiveJobs,
 useFetchTopFreelancers,
 useFetchJobOpportunities,
} from "@/features/dashboard/hooks";

export interface HomeProps {
 user?: {
  name?: string;
  email?: string;
 };
 isLoading?: boolean;
 onMessage?: (userId: string) => void;
 onJobDetails?: (jobId: string) => void;
 onFreelancerDetails?: (freelancerId: string) => void;
 onClientDetails?: (clientId: string) => void;
}

export const Home: React.FC<HomeProps> = ({
 user,
 isLoading = false,
 onMessage,
 onJobDetails,
 onFreelancerDetails,
}) => {
 const { userType } = useAuth();
 const isClient = userType === "client";

 const { stats, isLoading: statsLoading, error: statsError } = useFetchStats();

 const getIconForStat = (title: string): React.ReactNode => {
  switch (title) {
   case "Active Jobs":
    return <FileText className="w-5 h-5" />;
   case "Hired Freelancers":
    return <User className="w-5 h-5" />;
   case "Total Spent":
    return <DollarSign className="w-5 h-5" />;
   case "Completed Jobs":
    return <Briefcase className="w-5 h-5" />;
   case "Current Balance":
    return <DollarSign className="w-5 h-5" />;
   case "Average Rating":
    return <Star className="w-5 h-5" />;
   default:
    return <Clock className="w-5 h-5" />;
  }
 };

 const statsWithIcons = useMemo(() => {
  return stats.map((stat) => ({
   ...stat,
   icon: getIconForStat(stat.title),
  }));
 }, [stats]);
 const {
  jobs: activeJobs,
  isLoading: jobsLoading,
  error: jobsError,
 } = useFetchActiveJobs();
 const {
  freelancers: topFreelancers,
  isLoading: freelancersLoading,
  error: freelancersError,
 } = useFetchTopFreelancers();
 const {
  jobOpportunities,
  isLoading: opportunitiesLoading,
  error: opportunitiesError,
 } = useFetchJobOpportunities();

 const handleHireFreelancer = (freelancerId: string) => {
  console.log(`Hiring freelancer: ${freelancerId}`);
 };

 const hasAnyError =
  statsError || jobsError || freelancersError || opportunitiesError;
 const isAnyLoading =
  statsLoading || jobsLoading || freelancersLoading || opportunitiesLoading;

 if (isAnyLoading) {
  return <LoadingScreen />;
 }

 if (hasAnyError) {
  return (
   <div className="space-y-8">
    <Breadcrumbs
     items={[{ label: "Dashboard", path: "/dashboard" }, { label: "Home" }]}
    />
    <div className="flex items-center justify-center min-h-[400px]">
     <div className="text-center">
      <h2 className="text-xl font-semibold text-destructive mb-2">
       Error Loading Dashboard
      </h2>
      <p className="text-muted-foreground">
       {statsError || jobsError || freelancersError || opportunitiesError}
      </p>
     </div>
    </div>
   </div>
  );
 }

 return (
  <div className="space-y-8">
   <Breadcrumbs
    items={[{ label: "Dashboard", path: "/dashboard" }, { label: "Home" }]}
   />

   <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
    <div>
     <h1 className="text-2xl font-bold tracking-tight">
      {isClient
       ? "Statistics"
       : `Welcome back, ${user?.name || "Freelancer"} 👋`}
     </h1>
     <p className="text-muted-foreground mt-1">
      {isClient
       ? "Information about your activity"
       : "Here's an overview of your freelance activity."}
     </p>
    </div>
    <Button asChild>
     <Link to={isClient ? "/dashboard/post-job" : "/dashboard/find-jobs"}>
      {isClient ? "Post a Job" : "Find Jobs"}
     </Link>
    </Button>
   </div>

   <DashboardStats stats={statsWithIcons} isLoading={isLoading} />

   <DashboardSection
    title="Active Jobs"
    description="Your current and recently completed jobs"
    action={
     <Button variant="outline" size="sm" asChild>
      <Link to={isClient ? "/dashboard/jobs" : "/dashboard/my-jobs"}>
       View All
      </Link>
     </Button>
    }
    isLoading={isLoading}
   >
    <JobsList
     jobs={activeJobs}
     onMessage={onMessage}
     onDetails={onJobDetails}
    />
   </DashboardSection>

   {isClient && topFreelancers && topFreelancers.length > 0 ? (
    <DashboardSection
     title="Top Rated Freelancers"
     description="Discover top talent for your projects"
     action={
      <Button variant="outline" size="sm" asChild>
       <Link to="/dashboard/freelancers">View All</Link>
      </Button>
     }
     isLoading={isLoading}
    >
     <FreelancerTable
      freelancers={topFreelancers}
      onHire={handleHireFreelancer}
      onMessage={onMessage}
      onView={onFreelancerDetails}
     />
    </DashboardSection>
   ) : null}

   {!isClient && jobOpportunities && jobOpportunities.length > 0 ? (
    <DashboardSection
     title="Job Opportunities"
     description="Recommended jobs based on your skills and experience"
     action={
      <Button variant="outline" size="sm" asChild>
       <Link to="/dashboard/find-jobs">View All</Link>
      </Button>
     }
     isLoading={isLoading}
    >
     <AvailableJobsList jobs={jobOpportunities} onDetails={onJobDetails} />
    </DashboardSection>
   ) : null}
  </div>
 );
};
