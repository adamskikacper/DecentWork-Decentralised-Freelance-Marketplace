import { useState, useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import { dashboardService } from "@/services";
import type { DashboardStats } from "@/types/dashboard";

export const useFetchStats = () => {
 const { userType } = useAuth();
 const [stats, setStats] = useState<DashboardStats[]>([]);
 const [isLoading, setIsLoading] = useState(true);
 const [error, setError] = useState<string | null>(null);

 useEffect(() => {
  const fetchStats = async () => {
   if (!userType) return;

   try {
    setIsLoading(true);
    setError(null);
    const data = await dashboardService.getDashboardStats(userType);
    setStats(data);
   } catch (err) {
    setError(
     err instanceof Error ? err.message : "Failed to fetch dashboard stats"
    );
   } finally {
    setIsLoading(false);
   }
  };

  fetchStats();
 }, [userType]);

 return {
  stats,
  isLoading,
  error,
 };
};
