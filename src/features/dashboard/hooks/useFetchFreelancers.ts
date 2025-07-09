import { useState, useEffect } from "react";
import { getAllFreelancers } from "@/features/dashboard/api/freelancersService";
import type { FreelancerSummary, Freelancers } from "@/shared/types/dashboard";

export const useFetchFreelancers = (): Freelancers => {
 const [freelancers, setFreelancers] = useState<FreelancerSummary[]>([]);
 const [isLoading, setIsLoading] = useState(true);
 const [error, setError] = useState<string | null>(null);

 const fetchFreelancers = async () => {
  try {
   setIsLoading(true);
   setError(null);
   const result = await getAllFreelancers();
   setFreelancers(result);
  } catch (err) {
   setError(err instanceof Error ? err.message : "Failed to fetch freelancers");
  } finally {
   setIsLoading(false);
  }
 };

 useEffect(() => {
  fetchFreelancers();
 }, []);

 return {
  freelancers,
  isLoading,
  error,
  refetch: fetchFreelancers,
 };
};
