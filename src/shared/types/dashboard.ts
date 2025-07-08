import { ReactNode } from "react";

export interface DashboardStats {
 title: string;
 value: string;
 icon: ReactNode;
 change: {
  value: string;
  isPositive: boolean;
  label: string;
 };
}

export interface JobSummary {
 id: string;
 title: string;
 freelancer: {
  id: string;
  name: string;
 };
 dueDate: string;
 status: string;
 cost: string;
 progress: number;
}

export interface FreelancerSummary {
 id: string;
 name: string;
 title: string;
 specialty: string;
 jobsCount: string;
 status: string;
 rating: number;
 reviewCount: number;
 hourlyRate: string;
 skills: string[];
 avatar: string;
}

export interface JobOpportunity {
 id: string;
 title: string;
 description: string;
 budget: string;
 postedDate: string;
 proposals: number;
 tags: string[];
}

export interface JobOpportunityWithCategory extends JobOpportunity {
 category: string;
}

export interface DashboardHomeData {
 dashboardStats: DashboardStats[];
 activeJobs: JobSummary[];
 topFreelancers?: FreelancerSummary[];
 jobOpportunities?: JobOpportunity[];
}

export interface Job {
 id: string;
 title: string;
 freelancer: {
  id: string;
  name: string;
 };
 dueDate: string;
 status: string;
 cost: string;
 progress: number;
}

export interface JobsData {
 allJobs: Job[];
 activeJobs: Job[];
 completedJobs: Job[];
}

export interface Freelancers {
 freelancers: FreelancerSummary[];
 isLoading: boolean;
 error: string | null;
 refetch: () => void;
}

export interface JobOpportunities {
 jobOpportunities: JobOpportunity[];
 isLoading: boolean;
 error: string | null;
 refetch: () => void;
}
