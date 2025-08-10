import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/shared/ui";
import {
 DashboardSection,
 DashboardStats,
 FreelancerTable,
 BentoGrid,
 ProjectStatusChart,
 EarningsAreaChart,
 WeeklyActivityChart,
 EthPriceAreaChart,
} from "@/components";
import { PageLayout } from "@/components/templates";
import { useAuth } from "@/app/providers/AuthProvider";
import { DASHBOARD_LINKS } from "@/shared/constants";
import { FileText, User, DollarSign, Briefcase } from "lucide-react";
import {
 useDashboardStats,
 useTopFreelancers,
 useNavigation,
 useEarningsData,
 useWeeklyActivityData,
 useProjectStatusDataAnalytics,
 useEthPriceData,
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
  freelancers: topFreelancers,
  isLoading: freelancersLoading,
  error: freelancersError,
 } = useTopFreelancers();

 const earningsData = useEarningsData(userType as "client" | "freelancer");
 const weeklyActivityData = useWeeklyActivityData(
  userType as "client" | "freelancer"
 );
 const projectStatusData = useProjectStatusDataAnalytics(
  userType as "client" | "freelancer"
 );
 const ethPriceData = useEthPriceData();

 const handleHireFreelancer = (freelancerId: string) => {
  console.log(`Hiring freelancer: ${freelancerId}`);
 };

 const isAnyLoading = statsLoading || freelancersLoading;
 const anyError = statsError || freelancersError;

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
    <DashboardSection
     title="Your Statistics"
     description="Overview of your key performance metrics"
     isLoading={isAnyLoading}
    >
     <DashboardStats stats={statsWithIcons} isLoading={isAnyLoading} />
    </DashboardSection>

    <DashboardSection
     title="Analytics Dashboard"
     description="Visual insights into your data"
    >
     <BentoGrid>
      <EarningsAreaChart
       className="col-span-full md:col-span-2 lg:col-span-4"
       title={earningsData.title}
       description={earningsData.description}
       trendText={earningsData.trendText}
       data={earningsData.data}
       isLoading={earningsData.isLoading}
       error={earningsData.error}
      />
      <ProjectStatusChart
       className="col-span-full md:col-span-2 lg:col-span-2"
       title={projectStatusData.title}
       description={projectStatusData.description}
       data={projectStatusData.data}
       isLoading={projectStatusData.isLoading}
       error={projectStatusData.error}
      />
      <WeeklyActivityChart
       className="col-span-full md:col-span-1 lg:col-span-3"
       title={weeklyActivityData.title}
       description={weeklyActivityData.description}
       data={weeklyActivityData.data}
       peakDay={weeklyActivityData.peakDay}
       totalActivity={weeklyActivityData.totalActivity}
       isLoading={weeklyActivityData.isLoading}
       error={weeklyActivityData.error}
      />
      <EthPriceAreaChart className="col-span-full md:col-span-1 lg:col-span-3" />
     </BentoGrid>
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
