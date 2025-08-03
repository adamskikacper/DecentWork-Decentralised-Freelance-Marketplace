import { useState, useEffect } from "react";
import { getAvailableJobs } from "@/shared/services/jobs.service";
import type { JobOpportunity } from "@/shared/models/dashboard";

export const useJobListings = () => {
 const [jobListings, setJobListings] = useState<JobOpportunity[]>([]);
 const [isLoading, setIsLoading] = useState(true);
 const [error, setError] = useState<string | null>(null);

 useEffect(() => {
  const fetchData = async () => {
   try {
    setIsLoading(true);
    setError(null);
    const jobsData = await getAvailableJobs();
    setJobListings(jobsData);
   } catch (err) {
    setError(
     err instanceof Error ? err.message : "Failed to load job listings"
    );
   } finally {
    setIsLoading(false);
   }
  };

  fetchData();
 }, []);

 return {
  jobListings,
  isLoading,
  error,
 };
};
