import { useState, useEffect } from "react";
import { getJobDetails } from "@/shared/services/job.service";
import type { JobDetails } from "@/shared/models/job/model";

export const useJobDetails = (jobId?: string) => {
 const [job, setJob] = useState<JobDetails | null>(null);
 const [isLoading, setIsLoading] = useState(true);
 const [error, setError] = useState<string | null>(null);

 useEffect(() => {
  const fetchJobDetails = async () => {
   if (!jobId) {
    setError("No job ID provided");
    setIsLoading(false);
    return;
   }

   try {
    setIsLoading(true);
    setError(null);
    const jobData = await getJobDetails(jobId);
    if (jobData) {
     setJob(jobData);
    } else {
     setError("Job not found");
    }
   } catch (err) {
    setError("Failed to fetch job details");
    console.error("Error fetching job details:", err);
   } finally {
    setIsLoading(false);
   }
  };

  fetchJobDetails();
 }, [jobId]);

 return {
  job,
  isLoading,
  error,
 };
};
