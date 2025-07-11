import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/shared/ui";
import {
 DashboardSection,
 DashboardStats,
 JobsList,
 FreelancerTable,
 AvailableJobsList,
} from "@/components";
import { PageLayout } from "@/components/templates";
import { useAuth } from "@/app/providers/AuthProvider";
import { DASHBOARD_LINKS } from "@/shared/constants";
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
} from "@/shared/hooks";

export interface DashboardHomePageProps {
 user?: {
  name?: string;
  email?: string;
 };
 onMessage?: (userId: string) => void;
 onJobDetails?: (jobId: string) => void;
 onFreelancerDetails?: (freelancerId: string) => void;
 onClientDetails?: (clientId: string) => void;
}

export const DashboardHomePage = ({
 user,
 onMessage,
 onJobDetails,
 onFreelancerDetails,
}: DashboardHomePageProps) => {
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

 const isAnyLoading =
  statsLoading || jobsLoading || freelancersLoading || opportunitiesLoading;
 const anyError =
  statsError || jobsError || freelancersError || opportunitiesError;

 return (
  <PageLayout
   title={
    isClient
     ? "Dashboard Overview"
     : `Welcome back, ${user?.name || "Freelancer"} 👋`
   }
   description={
    isClient
     ? "Manage your projects and view statistics"
     : "Here's an overview of your freelance activity."
   }
   breadcrumbs={[{ label: "Dashboard" }]}
   actions={
    <Button asChild>
     <Link to={isClient ? DASHBOARD_LINKS.POST_JOB : DASHBOARD_LINKS.FIND_JOBS}>
      {isClient ? "Post a Job" : "Find Jobs"}
     </Link>
    </Button>
   }
   isLoading={isAnyLoading}
   error={anyError}
  >
   <div className="space-y-8">
    <DashboardStats stats={statsWithIcons} isLoading={isAnyLoading} />

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
     isLoading={isAnyLoading}
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
      isLoading={isAnyLoading}
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
        <Link to={DASHBOARD_LINKS.FIND_JOBS}>View All</Link>
       </Button>
      }
      isLoading={isAnyLoading}
     >
      <AvailableJobsList jobs={jobOpportunities} onDetails={onJobDetails} />
     </DashboardSection>
    ) : null}
   </div>
  </PageLayout>
 );
};
