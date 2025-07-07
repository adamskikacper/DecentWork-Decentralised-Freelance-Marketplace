import type {
 DashboardHomeData,
 FreelancerSummary,
 JobOpportunity,
 DashboardStats,
 JobSummary,
} from "@/types/dashboard";
import * as externalDashboardService from "../external/dashboardService.service";

export const getDashboardStatsInternal = async (
 userType: "client" | "freelancer"
): Promise<DashboardStats[]> => {
 return await externalDashboardService.getDashboardStatsExternal(userType);
};

export const getActiveJobsInternal = async (
 userType: "client" | "freelancer"
): Promise<JobSummary[]> => {
 return await externalDashboardService.getActiveJobsExternal(userType);
};

export const getTopFreelancersInternal = async (): Promise<
 FreelancerSummary[]
> => {
 return await externalDashboardService.getTopFreelancersExternal();
};

export const getJobOpportunitiesInternal = async (): Promise<
 JobOpportunity[]
> => {
 return await externalDashboardService.getJobOpportunitiesExternal();
};

export const getDashboardDataInternal = async (
 userType: "client" | "freelancer"
): Promise<DashboardHomeData> => {
 return await externalDashboardService.getDashboardDataExternal(userType);
};

export const getAllFreelancersInternal = async (): Promise<
 FreelancerSummary[]
> => {
 return await externalDashboardService.getAllFreelancersExternal();
};

export const getAllJobOpportunitiesInternal = async (): Promise<
 JobOpportunity[]
> => {
 return await externalDashboardService.getAllJobOpportunitiesExternal();
};
