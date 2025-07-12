import { useState, useEffect, useMemo } from "react";
import { useAuth } from "@/app/providers/AuthProvider";
import { getJobsData } from "@/shared/services/jobs.service";
import type { JobsData } from "@/shared/models/dashboard";

export interface MyJobsHookResult {
 allJobs: JobsData["allJobs"];
 activeJobs: JobsData["activeJobs"];
 completedJobs: JobsData["completedJobs"];
 isLoading: boolean;
 error: string | null;
}

export const useMyJobs = (): MyJobsHookResult => {
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
    const jobs = await getJobsData(userType);
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
