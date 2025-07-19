import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/shared/ui";
import {
 DashboardSection,
 DashboardStats,
 JobsList,
 FreelancerTable,
} from "@/components";
import { PageLayout } from "@/components/templates";
import { useAuth } from "@/app/providers/AuthProvider";
import { DASHBOARD_LINKS } from "@/shared/constants";
import { FileText, User, DollarSign, Briefcase } from "lucide-react";
import {
 useDashboardStats,
 useActiveJobs,
 useTopFreelancers,
 useNavigation,
} from "@/shared/hooks";
import { StatItem } from "@/components/organisms/DashboardStats";

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
 const { goToFreelancers } = useNavigation();
 const isClient = userType === "client";

 const {
  stats,
  isLoading: statsLoading,
  error: statsError,
 } = useDashboardStats(userType as "client" | "freelancer");

 const statsWithIcons: StatItem[] = useMemo(() => {
  if (!stats) return [];

  const allStats: StatItem[] = [
   {
    title: "Active Jobs",
    value: stats.activeJobs,
    icon: <FileText className="w-5 h-5" />,
   },
   {
    title: "Completed Jobs",
    value: stats.completedJobs,
    icon: <Briefcase className="w-5 h-5" />,
   },
   {
    title: isClient ? "Hired Freelancers" : "Pending Proposals",
    value: isClient ? stats.totalFreelancers ?? 0 : stats.pendingProposals ?? 0,
    icon: <User className="w-5 h-5" />,
   },
   {
    title: isClient ? "Total Spent" : "Total Earnings",
    value: `$${stats.totalEarnings.toLocaleString()}`,
    icon: <DollarSign className="w-5 h-5" />,
   },
  ];

  return allStats;
 }, [stats, isClient]);

 const {
  jobs: activeJobs,
  isLoading: jobsLoading,
  error: jobsError,
 } = useActiveJobs();

 const {
  freelancers: topFreelancers,
  isLoading: freelancersLoading,
  error: freelancersError,
 } = useTopFreelancers();

 const handleHireFreelancer = (freelancerId: string) => {
  console.log(`Hiring freelancer: ${freelancerId}`);
 };

 const isAnyLoading = statsLoading || jobsLoading || freelancersLoading;
 const anyError = statsError || jobsError || freelancersError;

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
       <Link to={isClient ? DASHBOARD_LINKS.JOBS : DASHBOARD_LINKS.MY_JOBS}>
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
       <Button variant="outline" size="sm" onClick={goToFreelancers}>
        View All
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
   </div>
  </PageLayout>
 );
};
