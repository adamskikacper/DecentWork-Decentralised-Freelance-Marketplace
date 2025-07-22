import { useState, useEffect } from "react";
import { getMyJobs } from "@/shared/services/job.service";
import type { JobOpportunityWithCategory } from "@/shared/models/dashboard";

export const useMyJobs = () => {
 const [myJobs, setMyJobs] = useState<JobOpportunityWithCategory[]>([]);
 const [isLoading, setIsLoading] = useState(true);
 const [error, setError] = useState<string | null>(null);

 useEffect(() => {
  const fetchData = async () => {
   try {
    setIsLoading(true);
    setError(null);
    const jobsData = await getMyJobs("current-user-id");
    setMyJobs(jobsData);
   } catch (err) {
    setError(err instanceof Error ? err.message : "Failed to load my jobs");
   } finally {
    setIsLoading(false);
   }
  };

  fetchData();
 }, []);

 return {
  myJobs,
  isLoading,
  error,
 };
};
