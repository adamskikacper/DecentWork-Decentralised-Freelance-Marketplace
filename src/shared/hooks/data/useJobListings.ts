import { useState, useEffect } from "react";
import { getJobListings } from "@/shared/services/job.service";
import type { JobOpportunityWithCategory } from "@/shared/models/dashboard";

export const useJobListings = () => {
 const [jobListings, setJobListings] = useState<JobOpportunityWithCategory[]>(
  []
 );
 const [isLoading, setIsLoading] = useState(true);
 const [error, setError] = useState<string | null>(null);

 useEffect(() => {
  const fetchData = async () => {
   try {
    setIsLoading(true);
    setError(null);
    const jobsData = await getJobListings();
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
