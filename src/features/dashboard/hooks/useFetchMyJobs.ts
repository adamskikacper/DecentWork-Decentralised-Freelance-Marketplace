import { useState, useEffect, useMemo } from "react";
import { useAuth } from "@/hooks/useAuth";
import { jobsService } from "@/services";
import type { JobsData } from "@/types/dashboard";

export interface MyJobsHookResult {
 allJobs: JobsData["allJobs"];
 activeJobs: JobsData["activeJobs"];
 completedJobs: JobsData["completedJobs"];
 isLoading: boolean;
 error: string | null;
}

export const useFetchMyJobs = (): MyJobsHookResult => {
 const { userType } = useAuth();
 const [jobsData, setJobsData] = useState<JobsData | null>(null);
 const [isLoading, setIsLoading] = useState(true);
 const [error, setError] = useState<string | null>(null);

 useEffect(() => {
  const fetchData = async () => {
   if (!userType) return;

   try {
    setIsLoading(true);
    setError(null);
    const jobs = await jobsService.getJobsData(userType);
    setJobsData(jobs);
   } catch (err) {
    setError(err instanceof Error ? err.message : "Failed to fetch jobs data");
   } finally {
    setIsLoading(false);
   }
  };

  fetchData();
 }, [userType]);

 const result = useMemo(() => {
  return {
   allJobs: jobsData?.allJobs || [],
   activeJobs: jobsData?.activeJobs || [],
   completedJobs: jobsData?.completedJobs || [],
   isLoading,
   error,
  };
 }, [jobsData, isLoading, error]);

 return result;
};
