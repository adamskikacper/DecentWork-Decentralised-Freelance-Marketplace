import { useState, useEffect, useMemo } from "react";
import { useAuth } from "@/hooks/useAuth";
import { jobsService } from "@/services";
import type { JobsData, MyJobs } from "@/types/dashboard";

export const useFetchMyJobs = (): MyJobs => {
 const { userType } = useAuth();
 const [jobsData, setJobsData] = useState<JobsData | null>(null);
 const [pageConfig, setPageConfig] = useState(
  jobsService.getJobsPageConfig("client")
 );
 const [isLoading, setIsLoading] = useState(true);
 const [error, setError] = useState<string | null>(null);

 useEffect(() => {
  const fetchData = async () => {
   if (!userType) return;

   try {
    setIsLoading(true);
    setError(null);
    const [jobs, config] = await Promise.all([
     jobsService.getJobsData(userType),
     Promise.resolve(jobsService.getJobsPageConfig(userType)),
    ]);
    setJobsData(jobs);
    setPageConfig(config);
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
   ...pageConfig,
   allJobs: jobsData?.allJobs || [],
   activeJobs: jobsData?.activeJobs || [],
   completedJobs: jobsData?.completedJobs || [],
   isLoading,
   error,
  };
 }, [pageConfig, jobsData, isLoading, error]);

 return result;
};
