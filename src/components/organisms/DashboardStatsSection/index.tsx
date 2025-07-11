import React from "react";
import { useDashboardStats } from "@/shared/hooks/data/useDashboardStats";
import { MetricCard } from "../../molecules/MetricCard";
import { ErrorState } from "../../molecules/ErrorState";
import { LoadingState } from "../../molecules/LoadingState";
import {
 Briefcase,
 CheckCircle,
 Clock,
 DollarSign,
 Users,
 FileText,
} from "lucide-react";

export interface DashboardStatsSectionProps {
 userType: "client" | "freelancer";
 variant?: "default" | "compact";
 className?: string;
}

export const DashboardStatsSection = ({
 userType,
 variant = "default",
 className = "",
}: DashboardStatsSectionProps) => {
 const { stats, isLoading, error, refetch } = useDashboardStats(userType);

 if (isLoading) {
  return (
   <div className={className}>
    <LoadingState message="Loading dashboard statistics..." />
   </div>
  );
 }

 if (error || !stats) {
  return (
   <div className={className}>
    <ErrorState
     message={error || "Failed to load dashboard statistics"}
     onRetry={refetch}
    />
   </div>
  );
 }

 const getStatsConfig = () => {
  if (userType === "client") {
   return [
    {
     title: "Total Jobs Posted",
     value: stats.totalJobs.toString(),
     icon: <Briefcase className="w-5 h-5 text-blue-600" />,
    },
    {
     title: "Active Jobs",
     value: stats.activeJobs.toString(),
     icon: <Clock className="w-5 h-5 text-orange-600" />,
    },
    {
     title: "Completed Jobs",
     value: stats.completedJobs.toString(),
     icon: <CheckCircle className="w-5 h-5 text-green-600" />,
    },
    {
     title: "Total Spent",
     value: `$${stats.totalEarnings.toLocaleString()}`,
     icon: <DollarSign className="w-5 h-5 text-purple-600" />,
    },
    ...(stats.totalFreelancers !== undefined
     ? [
        {
         title: "Freelancers Hired",
         value: stats.totalFreelancers.toString(),
         icon: <Users className="w-5 h-5 text-indigo-600" />,
        },
       ]
     : []),
    ...(stats.pendingProposals !== undefined
     ? [
        {
         title: "Pending Proposals",
         value: stats.pendingProposals.toString(),
         icon: <FileText className="w-5 h-5 text-yellow-600" />,
        },
       ]
     : []),
   ];
  } else {
   return [
    {
     title: "Total Projects",
     value: stats.totalJobs.toString(),
     icon: <Briefcase className="w-5 h-5 text-blue-600" />,
    },
    {
     title: "Active Projects",
     value: stats.activeJobs.toString(),
     icon: <Clock className="w-5 h-5 text-orange-600" />,
    },
    {
     title: "Completed Projects",
     value: stats.completedJobs.toString(),
     icon: <CheckCircle className="w-5 h-5 text-green-600" />,
    },
    {
     title: "Total Earnings",
     value: `$${stats.totalEarnings.toLocaleString()}`,
     icon: <DollarSign className="w-5 h-5 text-purple-600" />,
    },
    ...(stats.pendingProposals !== undefined
     ? [
        {
         title: "Pending Applications",
         value: stats.pendingProposals.toString(),
         icon: <FileText className="w-5 h-5 text-yellow-600" />,
        },
       ]
     : []),
   ];
  }
 };

 const statsConfig = getStatsConfig();
 const gridCols =
  variant === "compact"
   ? "grid-cols-2 lg:grid-cols-4"
   : "grid-cols-1 md:grid-cols-2 lg:grid-cols-4";

 return (
  <div className={className}>
   <div className={`grid ${gridCols} gap-4`}>
    {statsConfig.map((stat, index) => (
     <MetricCard
      key={index}
      title={stat.title}
      value={stat.value}
      icon={stat.icon}
      variant={variant}
     />
    ))}
   </div>
  </div>
 );
};
