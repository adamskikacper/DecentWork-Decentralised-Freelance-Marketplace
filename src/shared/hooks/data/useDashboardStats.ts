import { useState, useEffect } from "react";
import { getDashboardData } from "@/shared/services";

export interface DashboardStats {
 totalJobs: number;
 activeJobs: number;
 completedJobs: number;
 totalEarnings: number;
 totalFreelancers?: number;
 pendingProposals?: number;
}

export interface UseDashboardStatsReturn {
 stats: DashboardStats | null;
 isLoading: boolean;
 error: string | null;
 refetch: () => void;
}

export const useDashboardStats = (
 userType: "client" | "freelancer"
): UseDashboardStatsReturn => {
 const [stats, setStats] = useState<DashboardStats | null>(null);
 const [isLoading, setIsLoading] = useState(true);
 const [error, setError] = useState<string | null>(null);

 const fetchStats = async () => {
  try {
   setIsLoading(true);
   setError(null);

   const dashboardData = await getDashboardData(userType);

   const jobs = dashboardData.activeJobs || [];

   const extractedStats: DashboardStats = {
    totalJobs: jobs.length,
    activeJobs: jobs.filter(
     (job) => job.status === "In Progress" || job.status === "Just Started"
    ).length,
    completedJobs: jobs.filter((job) => job.status === "Completed").length,
    totalEarnings: jobs
     .filter((job) => job.status === "Completed")
     .reduce((sum, job) => {
      const cost = parseFloat(job.cost?.replace(/[^\d.]/g, "") || "0");
      return sum + cost;
     }, 0),
   };

   if (userType === "client") {
    extractedStats.totalFreelancers = dashboardData.topFreelancers?.length || 0;
    extractedStats.pendingProposals = 0;
   } else {
    extractedStats.pendingProposals =
     dashboardData.jobOpportunities?.length || 0;
   }

   setStats(extractedStats);
  } catch (err) {
   setError(
    err instanceof Error ? err.message : "Failed to fetch dashboard stats"
   );
  } finally {
   setIsLoading(false);
  }
 };

 useEffect(() => {
  fetchStats();
 }, [userType]);

 return {
  stats,
  isLoading,
  error,
  refetch: fetchStats,
 };
};
