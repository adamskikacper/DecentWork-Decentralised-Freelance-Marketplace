import { useState, useEffect } from "react";
import { useAuth } from "@/app/providers/AuthProvider";
import { getActiveJobs } from "@/shared/api/dashboardService.service";
import type { JobSummary } from "@/shared/types/dashboard";

export const useFetchActiveJobs = () => {
 const { userType } = useAuth();
 const [jobs, setJobs] = useState<JobSummary[]>([]);
 const [isLoading, setIsLoading] = useState(true);
 const [error, setError] = useState<string | null>(null);

 useEffect(() => {
  const fetchJobs = async () => {
   if (!userType) return;

   try {
    setIsLoading(true);
    setError(null);
    const data = await getActiveJobs(userType);
    setJobs(data);
   } catch (err) {
    setError(
     err instanceof Error ? err.message : "Failed to fetch active jobs"
    );
   } finally {
    setIsLoading(false);
   }
  };

  fetchJobs();
 }, [userType]);

 return {
  jobs,
  isLoading,
  error,
 };
};
