import { useState, useEffect } from "react";
import { useAuth } from "@/app/providers/AuthProvider";
import { getAllJobOpportunities } from "@/shared/services/job.service";
import type { JobOpportunity } from "@/shared/models/dashboard";

export const useFetchJobOpportunities = () => {
 const { userType } = useAuth();
 const [opportunities, setOpportunities] = useState<JobOpportunity[]>([]);
 const [isLoading, setIsLoading] = useState(true);
 const [error, setError] = useState<string | null>(null);

 useEffect(() => {
  const fetchOpportunities = async () => {
   if (userType !== "freelancer") {
    setIsLoading(false);
    return;
   }

   try {
    setIsLoading(true);
    setError(null);
    const data = await getAllJobOpportunities();
    setOpportunities(data);
   } catch (err) {
    setError(
     err instanceof Error ? err.message : "Failed to fetch job opportunities"
    );
   } finally {
    setIsLoading(false);
   }
  };

  fetchOpportunities();
 }, [userType]);

 return {
  jobOpportunities: opportunities,
  isLoading,
  error,
 };
};
