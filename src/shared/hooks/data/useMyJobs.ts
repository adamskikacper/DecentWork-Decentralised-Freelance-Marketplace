import { useState, useEffect } from "react";
import {
 getFreelancerJobs,
 getClientJobs,
} from "@/shared/services/jobs.service";
import { useAuth } from "@/app/providers/AuthProvider";
import type { JobOpportunityWithCategory } from "@/shared/models/dashboard";

export const useMyJobs = () => {
 const { user, userType } = useAuth();
 const [myJobs, setMyJobs] = useState<JobOpportunityWithCategory[]>([]);
 const [isLoading, setIsLoading] = useState(true);
 const [error, setError] = useState<string | null>(null);

 useEffect(() => {
  const fetchData = async () => {
   if (!user || !userType) return;

   try {
    setIsLoading(true);
    setError(null);

    const data =
     userType === "freelancer"
      ? await getFreelancerJobs(user.id)
      : await getClientJobs(user.id);

    setMyJobs(data);
   } catch (err) {
    setError(err instanceof Error ? err.message : "Failed to load my jobs");
   } finally {
    setIsLoading(false);
   }
  };

  fetchData();
 }, [user, userType]);

 return {
  myJobs,
  isLoading,
  error,
 };
};
