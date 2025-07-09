import { useState, useEffect } from "react";
import { useAuth } from "@/app/providers/AuthProvider";
import { getDashboardStats } from "@/features/dashboard/api/dashboardService";
import type { DashboardStats } from "@/shared/types/dashboard";

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
    const data = await getDashboardStats(userType);
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
