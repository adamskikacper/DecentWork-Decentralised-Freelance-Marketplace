import { useState, useEffect } from "react";
import { FreelancerSummary } from "@/shared/models";
import { getAllFreelancers } from "@/shared/services";

export interface UseFreelancersOptions {
 searchQuery?: string;
 skills?: string[];
 status?: string;
 experienceLevel?: string;
}

export interface UseFreelancersReturn {
 freelancers: FreelancerSummary[];
 filteredFreelancers: FreelancerSummary[];
 isLoading: boolean;
 error: string | null;
 refetch: () => void;
}

export const useFreelancers = (
 options: UseFreelancersOptions = {}
): UseFreelancersReturn => {
 const [freelancers, setFreelancers] = useState<FreelancerSummary[]>([]);
 const [isLoading, setIsLoading] = useState(true);
 const [error, setError] = useState<string | null>(null);

 const fetchFreelancers = async () => {
  try {
   setIsLoading(true);
   setError(null);
   const data = await getAllFreelancers();
   setFreelancers(data);
  } catch (err) {
   setError(err instanceof Error ? err.message : "Failed to fetch freelancers");
  } finally {
   setIsLoading(false);
  }
 };

 useEffect(() => {
  fetchFreelancers();
 }, []);

 const filteredFreelancers = freelancers.filter((freelancer) => {
  if (options.searchQuery) {
   const query = options.searchQuery.toLowerCase();
   const matchesSearch =
    freelancer.name.toLowerCase().includes(query) ||
    freelancer.title.toLowerCase().includes(query) ||
    freelancer.specialty.toLowerCase().includes(query);

   if (!matchesSearch) return false;
  }

  if (options.status && freelancer.status !== options.status) {
   return false;
  }

  if (options.skills && options.skills.length > 0) {
   const freelancerSkills = freelancer.skills || [];
   const hasMatchingSkill = options.skills.some((skill) =>
    freelancerSkills.some((fSkill) =>
     fSkill.toLowerCase().includes(skill.toLowerCase())
    )
   );
   if (!hasMatchingSkill) return false;
  }

  if (
   options.experienceLevel &&
   freelancer.experienceLevel !== options.experienceLevel
  ) {
   return false;
  }

  return true;
 });

 return {
  freelancers,
  filteredFreelancers,
  isLoading,
  error,
  refetch: fetchFreelancers,
 };
};
