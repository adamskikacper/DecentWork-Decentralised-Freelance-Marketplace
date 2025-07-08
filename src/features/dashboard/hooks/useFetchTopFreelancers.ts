import { useState, useEffect } from "react";
import { useAuth } from "@/app/providers/AuthProvider";
import { getTopFreelancers } from "@/shared/api/dashboardService.service";
import type { FreelancerSummary } from "@/shared/types/dashboard";

export const useFetchTopFreelancers = () => {
 const { userType } = useAuth();
 const [freelancers, setFreelancers] = useState<FreelancerSummary[]>([]);
 const [isLoading, setIsLoading] = useState(true);
 const [error, setError] = useState<string | null>(null);

 useEffect(() => {
  const fetchFreelancers = async () => {
   if (userType !== "client") {
    setIsLoading(false);
    return;
   }

   try {
    setIsLoading(true);
    setError(null);
    const data = await getTopFreelancers();
    setFreelancers(data);
   } catch (err) {
    setError(
     err instanceof Error ? err.message : "Failed to fetch top freelancers"
    );
   } finally {
    setIsLoading(false);
   }
  };

  fetchFreelancers();
 }, [userType]);

 return {
  freelancers,
  isLoading,
  error,
 };
};
