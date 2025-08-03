import { useState, useEffect } from "react";
import { useAuth } from "@/app/providers/AuthProvider";
import { getActiveJobs } from "@/shared/services/jobs.service";
import type { JobSummary } from "@/shared/models/dashboard";

export const useActiveJobs = () => {
 const { user, userType } = useAuth();
 const [jobs, setJobs] = useState<JobSummary[]>([]);
 const [isLoading, setIsLoading] = useState(true);
 const [error, setError] = useState<string | null>(null);

 useEffect(() => {
  const fetchJobs = async () => {
   if (!user || !userType) return;

   try {
    setIsLoading(true);
    setError(null);
    const data = await getActiveJobs(user.id, userType);
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
 }, [user, userType]);

 return {
  jobs,
  isLoading,
  error,
 };
};
