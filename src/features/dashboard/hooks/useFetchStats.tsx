import { useState, useEffect, useMemo } from "react";
import { useAuth } from "@/hooks/useAuth";
import {
 FileText,
 User,
 DollarSign,
 Briefcase,
 Star,
 Clock,
} from "lucide-react";
import { dashboardService } from "@/services";
import type { DashboardStats } from "@/types/dashboard";

export const useFetchStats = () => {
 const { userType } = useAuth();
 const [stats, setStats] = useState<DashboardStats[]>([]);
 const [isLoading, setIsLoading] = useState(true);
 const [error, setError] = useState<string | null>(null);

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

 const statsWithIcons = useMemo(() => {
  return stats.map((stat) => ({
   ...stat,
   icon: getIconForStat(stat.title),
  }));
 }, [stats]);

 return {
  stats: statsWithIcons,
  isLoading,
  error,
 };
};
