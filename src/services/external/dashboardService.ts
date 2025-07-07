import type {
 DashboardHomeData,
 FreelancerSummary,
 JobOpportunity,
 DashboardStats,
 JobSummary,
} from "@/types/dashboard";

export const getDashboardStatsExternal = async (
 userType: "client" | "freelancer"
): Promise<DashboardStats[]> => {
 return [] as DashboardStats[];
};

export const getActiveJobsExternal = async (
 userType: "client" | "freelancer"
): Promise<JobSummary[]> => {
 return [] as JobSummary[];
};

export const getTopFreelancersExternal = async (): Promise<
 FreelancerSummary[]
> => {
 return [] as FreelancerSummary[];
};

export const getJobOpportunitiesExternal = async (): Promise<
 JobOpportunity[]
> => {
 return [] as JobOpportunity[];
};

export const getDashboardDataExternal = async (
 userType: "client" | "freelancer"
): Promise<DashboardHomeData> => {
 return {} as DashboardHomeData;
};

export const getAllFreelancersExternal = async (): Promise<
 FreelancerSummary[]
> => {
 return [] as FreelancerSummary[];
};

export const getAllJobOpportunitiesExternal = async (): Promise<
 JobOpportunity[]
> => {
 return [] as JobOpportunity[];
};
