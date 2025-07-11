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

export const useDashboardStats = (userType: "client" | "freelancer"): UseDashboardStatsReturn => {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchStats = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      const dashboardData = await getDashboardData(userType);
      
      // Extract stats from dashboard data
      const extractedStats: DashboardStats = {
        totalJobs: dashboardData.jobs.length,
        activeJobs: dashboardData.jobs.filter(job => job.status === "Active").length,
        completedJobs: dashboardData.jobs.filter(job => job.status === "Completed").length,
        totalEarnings: dashboardData.jobs
          .filter(job => job.status === "Completed")
          .reduce((sum, job) => sum + (job.budget || 0), 0),
      };

      // Add user-type specific stats
      if (userType === "client") {
        extractedStats.totalFreelancers = dashboardData.freelancers?.length || 0;
        extractedStats.pendingProposals = dashboardData.jobs
          .reduce((sum, job) => sum + (job.proposalCount || 0), 0);
      } else {
        extractedStats.pendingProposals = dashboardData.applications?.length || 0;
      }

      setStats(extractedStats);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch dashboard stats");
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